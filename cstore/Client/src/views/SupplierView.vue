<script setup>
import { ref, onMounted } from 'vue';
let suppliers = ref([])
let selectedSupplier = ref(null)

onMounted(async () => {
    let res = await fetch("http://localhost:4000/suppliers")
    suppliers.value = await res.json()

})

function del(id) {

    fetch(`http://localhost:4000/suppliers/${id}`, {
        method: "DELETE",

    })
    window.location.reload()
}

function upd(id, form) {
    let data = JSON.stringify(Object.fromEntries(new FormData(form)))
    fetch(`http://localhost:4000/suppliers/${id}`, {
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
            class="bi bi-chat-right-text-fill"
            viewBox="0 0 16 16"
        >
            <path
                d="M16 2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h9.586a1 1 0 0 1 .707.293l2.853 2.853a.5.5 0 0 0 .854-.353V2zM3.5 3h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1 0-1zm0 2.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1 0-1zm0 2.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1z"
            />
        </svg>
        <div
            class="d-flex border rounded-2 mx-auto p-2 mt-5"
            style="min-width: 800px; max-width: 1200px;border-color: #4D4D4D !important; box-shadow: -2px 1px 25px #686767;"
            v-if="suppliers.length"
        >
            <table class="table table-dark table-hover" style>
                <thead>
                    <tr>
                        <td>Supplier Name</td>
                        <td>Address</td>
                        <td>City</td>
                        <td>Zip</td>
                        <td>Country</td>
                        <td>Phone</td>
                        <td>Actions</td>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(supplier, i ) in suppliers">
                        <td>{{ supplier.name }}</td>
                        <td>{{ supplier.address }}</td>
                        <td>{{ supplier.city }}</td>
                        <td>{{ supplier.zip }}</td>
                        <td>{{ supplier.country }}</td>
                        <td>{{ supplier.phone }}</td>
                        <td>
                            <button
                                class="btn btn-light"
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModal"
                                @click="selectedSupplier = supplier"
                            >Update</button> /
                            <button
                                class="btn btn-warning"
                                @click="del(supplier.supplier_id)"
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
            <h1 class="flex justify-content-center">No suppliers to display. &#9785;</h1>
        </div>
    </div>

    <div class="modal fade" tabindex="-1" id="exampleModal">
        <div class="modal-dialog">
            <div
                class="modal-content"
                style="background-color: #212529 !important; color: white !important;"
            >
                <div class="modal-header">
                    <h5 class="modal-title">Update Supplier</h5>
                    <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                    ></button>
                </div>
                <div class="modal-body">
                    <form @submit="upd(selectedSupplier?.supplier_id, $event.target)">
                        <label style="text-shadow: 1px 1px 3px white;">Supplier Name</label>
                        <input
                            type="text"
                            placeholder="Ex.Amazon"
                            class="form-control mb-2"
                            :value="selectedSupplier?.name"
                            name="name"
                            required
                        />
                        <label style="text-shadow: 1px 1px 3px white;">Address</label>
                        <input
                            type="text"
                            placeholder="Ex.9645 HatBird Rd"
                            name="address"
                            :value="selectedSupplier?.address"
                            class="form-control mb-2"
                            required
                        />
                        <label style="text-shadow: 1px 1px 3px white;">City</label>
                        <input
                            type="text"
                            placeholder="Montreal"
                            class="form-control mb-2"
                            :value="selectedSupplier?.city"
                            required
                            name="city"
                        />
                        <label style="text-shadow: 1px 1px 3px white;">Zip</label>
                        <input
                            type="text"
                            placeholder="Ex.85551"
                            name="zip"
                            :value="selectedSupplier?.zip"
                            class="form-control mb-2"
                            required
                        />
                        <label style="text-shadow: 1px 1px 3px white;">Country</label>
                        <input
                            type="text"
                            placeholder="Ex.Canada"
                            name="country"
                            :value="selectedSupplier?.country"
                            class="form-control mb-2"
                            required
                        />
                        <label style="text-shadow: 1px 1px 3px white;">Phone</label>
                        <input
                            type="text"
                            placeholder="Ex.999-666-7777"
                            class="form-control mb-3"
                            :value="selectedSupplier?.phone"
                            required
                            name="phone"
                        />
                        <button type="submit" class="btn btn-success w-75 align-self-center">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>