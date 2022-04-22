<script setup>
import { ref, onMounted } from 'vue';
let employees = ref([])
let selectedEmployee = ref(null)

onMounted(async () => {
    let res = await fetch("http://localhost:4000/employees")
    employees.value = await res.json()

})

function del(id) {

    fetch(`http://localhost:4000/employees/${id}`, {
        method: "DELETE",

    })
    window.location.reload()
}

function upd(id, form) {
    let data = JSON.stringify(Object.fromEntries(new FormData(form)))
    fetch(`http://localhost:4000/employees/${id}`, {
        method: "PUT",
        body: data,
        headers: {
            "content-type": "application/json"
        }

    })
    window.location.reload()
}
</script>

<template>
    <div class="d-flex flex-column align-items-center mt-5">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="5rem"
            fill="white"
            class="bi bi-person-badge"
            viewBox="0 0 16 16"
        >
            <path d="M6.5 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3zM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
            <path
                d="M4.5 0A2.5 2.5 0 0 0 2 2.5V14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2.5A2.5 2.5 0 0 0 11.5 0h-7zM3 2.5A1.5 1.5 0 0 1 4.5 1h7A1.5 1.5 0 0 1 13 2.5v10.795a4.2 4.2 0 0 0-.776-.492C11.392 12.387 10.063 12 8 12s-3.392.387-4.224.803a4.2 4.2 0 0 0-.776.492V2.5z"
            />
        </svg>
        <div
            class="d-flex border rounded-2 mx-auto p-2 mt-5"
            style="min-width: 800px; max-width: 1200px;border-color: #4D4D4D !important; box-shadow: -2px 1px 25px #686767;"
            v-if="employees.length"
        >
            <table class="table table-dark table-hover" style>
                <thead>
                    <tr>
                        <td>First Name</td>
                        <td>Last Name</td>
                        <td>Birthday</td>
                        <td>Email</td>
                        <td>Actions</td>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(employee, i ) in employees">
                        <td>{{ employee.first_name }}</td>
                        <td>{{ employee.last_name }}</td>
                        <td>{{ employee.birthdate }}</td>
                        <td>{{ employee.email }}</td>
                        <td>
                            <button
                                class="btn btn-light"
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModal"
                                @click="selectedEmployee = employee"
                            >Update</button> /
                            <button
                                class="btn btn-warning"
                                @click="del(employee.employee_id)"
                            >Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div
            v-else
            class="text-center border rounded-2 p-2 mt-5"
            style="min-width: 800px; max-width: 1200px;border-color: #4D4D4D !important; box-shadow: -2px 1px 25px #686767; color: white;"
        >
            <h1 class="flex justify-content-center">No employees to display. &#9785;</h1>
        </div>
    </div>

    <div class="modal fade" tabindex="-1" id="exampleModal">
        <div class="modal-dialog">
            <div
                class="modal-content"
                style="background-color: #212529 !important; color: white !important;"
            >
                <div class="modal-header">
                    <h5 class="modal-title">Update Employee</h5>
                    <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                    ></button>
                </div>
                <div class="modal-body">
                    <form @submit="upd(selectedEmployee?.employee_id, $event.target)">
                        <label style="text-shadow: 1px 1px 3px white;">First Name</label>
                        <input
                            type="text"
                            placeholder="Ex.John"
                            class="form-control mb-2"
                            :value="selectedEmployee?.first_name"
                            name="first_name"
                            required
                        />
                        <label style="text-shadow: 1px 1px 3px white;">Last Name</label>
                        <input
                            type="text"
                            placeholder="Ex.Smith"
                            name="last_name"
                            :value="selectedEmployee?.last_name"
                            class="form-control mb-2"
                            required
                        />
                        <label style="text-shadow: 1px 1px 3px white;">Birth Date</label>
                        <input
                            type="date"
                            class="form-control mb-2"
                            :value="selectedEmployee?.birthdate"
                            required
                            name="birthdate"
                        />
                        <label style="text-shadow: 1px 1px 3px white;">Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="john@domain.com"
                            :value="selectedEmployee?.email"
                            class="form-control mb-4"
                            required
                        />
                        <button type="submit" class="btn btn-primary w-75 align-self-center">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>