<script setup>
import { ref, onMounted } from 'vue';
let customers = ref([])
let selectedCustomer = ref(null)

onMounted(async () => {
    let res = await fetch("http://localhost:4000/customers")
    customers.value = await res.json()

})

function del(id) {

    fetch(`http://localhost:4000/customers/${id}`, {
        method: "DELETE",

    })
    window.location.reload()
}

function upd(id, form) {
    let data = JSON.stringify(Object.fromEntries(new FormData(form)))
    fetch(`http://localhost:4000/customers/${id}`, {
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
            class="bi bi-person-check-fill"
            viewBox="0 0 16 16"
        >
            <path
                fill-rule="evenodd"
                d="M15.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L12.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z"
            />
            <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
        </svg>
        <div
            class="d-flex border rounded-2 mx-auto p-2 mt-5"
            style="min-width: 800px; max-width: 1200px;border-color: #4D4D4D !important; box-shadow: -2px 1px 25px #686767;"
            v-if="customers.length"
        >
            <table class="table table-dark table-hover" style>
                <thead>
                    <tr>
                        <td>First Name</td>
                        <td>Last Name</td>
                        <td>Address</td>
                        <td>City</td>
                        <td>Zip</td>
                        <td>Country</td>
                        <td>Phone</td>
                        <td>Actions</td>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(customer, i ) in customers">
                        <td>{{ customer.first_name }}</td>
                        <td>{{ customer.last_name }}</td>
                        <td>{{ customer.address }}</td>
                        <td>{{ customer.city }}</td>
                        <td>{{ customer.zip }}</td>
                        <td>{{ customer.country }}</td>
                        <td>{{ customer.phone }}</td>
                        <td>
                            <button
                                class="btn btn-light"
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModal"
                                @click="selectedCustomer = customer"
                            >Update</button> /
                            <button
                                class="btn btn-warning"
                                @click="del(customer.customer_id)"
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
            <h1 class="flex justify-content-center">No customers to display. &#9785;</h1>
        </div>
    </div>

    <div class="modal fade" tabindex="-1" id="exampleModal">
        <div class="modal-dialog">
            <div
                class="modal-content"
                style="background-color: #212529 !important; color: white !important;"
            >
                <div class="modal-header">
                    <h5 class="modal-title">Update Customer</h5>
                    <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                    ></button>
                </div>
                <div class="modal-body">
                    <form @submit="upd(selectedCustomer?.customer_id, $event.target)">
                        <label style="text-shadow: 1px 1px 3px white;">First Name</label>
                        <input
                            type="text"
                            placeholder="Ex.John"
                            class="form-control mb-2"
                            name="first_name"
                            :value="selectedCustomer?.first_name"
                            required
                        />
                        <label style="text-shadow: 1px 1px 3px white;">Last Name</label>
                        <input
                            type="text"
                            placeholder="Ex.Smith"
                            name="last_name"
                            class="form-control mb-2"
                            :value="selectedCustomer?.last_name"
                            required
                        />
                        <label style="text-shadow: 1px 1px 3px white;">Address</label>
                        <input
                            type="text"
                            placeholder="Ex.5555 CatBird Ln"
                            class="form-control mb-2"
                            :value="selectedCustomer?.address"
                            required
                            name="address"
                        />
                        <label style="text-shadow: 1px 1px 3px white;">City</label>
                        <input
                            type="text"
                            placeholder="Ex.Chicago"
                            name="city"
                            :value="selectedCustomer?.city"
                            class="form-control mb-2"
                            required
                        />
                        <label style="text-shadow: 1px 1px 3px white;">Zip Code</label>
                        <input
                            type="text"
                            placeholder="Ex.34586"
                            name="zip"
                            class="form-control mb-2"
                            :value="selectedCustomer?.zip"
                            required
                        />
                        <label style="text-shadow: 1px 1px 3px white;">Country</label>
                        <input
                            type="text"
                            placeholder="Ex.United States"
                            class="form-control mb-2"
                            required
                            :value="selectedCustomer?.country"
                            name="country"
                        />
                        <label style="text-shadow: 1px 1px 3px white;">Phone</label>
                        <input
                            type="text"
                            name="phone"
                            placeholder="Ex.222-555-9999"
                            class="form-control mb-4"
                            :value="selectedCustomer?.phone"
                            required
                        />
                        <button type="submit" class="btn btn-primary w-75 align-self-center">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>