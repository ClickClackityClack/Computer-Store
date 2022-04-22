<script setup>
import { ref, onMounted } from 'vue';
let shippers = ref([])
let selectedShipper = ref(null)

onMounted(async () => {
    let res = await fetch("http://localhost:4000/shippers")
    shippers.value = await res.json()

})

function del(id) {

    fetch(`http://localhost:4000/shippers/${id}`, {
        method: "DELETE",

    })
    window.location.reload()
}

function upd(id, form) {
    let data = JSON.stringify(Object.fromEntries(new FormData(form)))
    fetch(`http://localhost:4000/shippers/${id}`, {
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
            class="bi bi-truck-flatbed"
            viewBox="0 0 16 16"
        >
            <path
                d="M11.5 4a.5.5 0 0 1 .5.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-4 0 1 1 0 0 1-1-1v-1h11V4.5a.5.5 0 0 1 .5-.5zM3 11a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm1.732 0h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4a2 2 0 0 1 1.732 1z"
            />
        </svg>
        <div
            class="d-flex border rounded-2 mx-auto p-2 mt-5"
            style="min-width: 800px; max-width: 1200px;border-color: #4D4D4D !important; box-shadow: -2px 1px 25px #686767;"
            v-if="shippers.length"
        >
            <table class="table table-dark table-hover" style>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Phone</td>
                        <td>Actions</td>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(shipper, i ) in shippers">
                        <td>{{ shipper.name }}</td>
                        <td>{{ shipper.phone }}</td>
                        <td>
                            <button
                                class="btn btn-light"
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModal"
                                @click="selectedShipper = shipper"
                            >Update</button> /
                            <button
                                class="btn btn-warning"
                                @click="del(shipper.shipper_id)"
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
            <h1 class="flex justify-content-center">No shippers to display. &#9785;</h1>
        </div>
    </div>

    <div class="modal fade" tabindex="-1" id="exampleModal">
        <div class="modal-dialog">
            <div
                class="modal-content"
                style="background-color: #212529 !important; color: white !important;"
            >
                <div class="modal-header">
                    <h5 class="modal-title">Update Shipper</h5>
                    <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                    ></button>
                </div>
                <div class="modal-body">
                    <form @submit.prevent="upd(selectedShipper?.shipper_id, $event.target)">
                        <label style="text-shadow: 1px 1px 3px white;">Name</label>
                        <input
                            type="text"
                            placeholder="Ex.FedEx"
                            class="form-control mb-2"
                            :value="selectedShipper?.name"
                            name="name"
                            required
                        />
                        <label style="text-shadow: 1px 1px 3px white;">Phone</label>
                        <input
                            type="text"
                            placeholder="Ex.777-999-6666"
                            name="phone"
                            :value="selectedShipper?.phone"
                            class="form-control mb-3"
                            required
                        />
                        <button type="submit" class="btn btn-success w-75 align-self-center">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>