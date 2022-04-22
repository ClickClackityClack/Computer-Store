<script setup>
import { ref, onMounted } from 'vue';
let products = ref([])
let selectedProduct = ref(null)

onMounted(async () => {
    let res = await fetch("http://localhost:4000/products")
    products.value = await res.json()

})

function del(id) {

    fetch(`http://localhost:4000/products/${id}`, {
        method: "DELETE",

    })
    window.location.reload()
}

let categories = ref([])
function getInfo() {
    fetch("http://localhost:4000/categories").then((res) => res.json()).then((data) => {
        categories.value = data
    })
}
let suppliers = ref([])
function getData() {
    fetch("http://localhost:4000/suppliers").then((res) => res.json()).then((data) => {
        suppliers.value = data
    })
}

onMounted(() => {
    getInfo()
    getData()
})

function upd(id, form) {
    let data = JSON.stringify(Object.fromEntries(new FormData(form)))
    fetch(`http://localhost:4000/products/${id}`, {
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
            class="bi bi-bag"
            viewBox="0 0 16 16"
        >
            <path
                d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"
            />
        </svg>
        <div
            class="d-flex border rounded-2 mx-auto p-2 mt-5"
            style="min-width: 800px; max-width: 1200px;border-color: #4D4D4D !important; box-shadow: -2px 1px 25px #686767;"
            v-if="products.length"
        >
            <table class="table table-dark table-hover" style>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Unit</td>
                        <td>Price</td>
                        <td>Category</td>
                        <td>Supplier</td>
                        <td>Actions</td>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(product, i ) in products">
                        <td>{{ product.name }}</td>
                        <td>{{ product.unit }}</td>
                        <td>{{ product.price }}</td>
                        <td>{{ product.category_id }}</td>
                        <td>{{ product.suplier_id }}</td>
                        <td>
                            <button
                                class="btn btn-light"
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModal"
                                @click="selectedProduct = product"
                            >Update</button> /
                            <button
                                class="btn btn-warning"
                                @click="del(product.product_id)"
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
            <h1 class="flex justify-content-center">No products to display. &#9785;</h1>
        </div>
    </div>

    <div class="modal fade" tabindex="-1" id="exampleModal">
        <div class="modal-dialog">
            <div
                class="modal-content"
                style="background-color: #212529 !important; color: white !important;"
            >
                <div class="modal-header">
                    <h5 class="modal-title">Update Product</h5>
                    <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                    ></button>
                </div>
                <div class="modal-body">
                    <form @submit="upd(selectedProduct?.product_id, $event.target)">
                        <label style="text-shadow: 1px 1px 3px white;">Name</label>
                        <input
                            type="text"
                            placeholder="Ex.Watch"
                            class="form-control mb-2"
                            :value="selectedProduct?.name"
                            required
                        />
                        <label style="text-shadow: 1px 1px 3px white;">Unit</label>
                        <input
                            type="text"
                            placeholder="Ex.5"
                            name="unit"
                            :value="selectedProduct?.unit"
                            class="form-control mb-2"
                            required
                        />
                        <label style="text-shadow: 1px 1px 3px white;">Price</label>
                        <input
                            type="text"
                            placeholder="Ex.55.66$"
                            class="form-control mb-2"
                            :value="selectedProduct?.price"
                            required
                            name="price"
                        />
                        <label style="text-shadow: 1px 1px 3px white;">Category</label>
                        <select name="category_id" class="form-select mb-2">
                            <option
                                :value="category.name"
                                v-for="category in categories"
                            >{{ category.name }}</option>
                        </select>
                        <label style="text-shadow: 1px 1px 3px white;">Supplier</label>
                        <select name="suplier_id" class="form-select mb-2">
                            <option
                                :value="supplier.name"
                                v-for="supplier in suppliers"
                            >{{ supplier.name }}</option>
                        </select>
                        <button type="submit" class="btn btn-success w-75 align-self-center">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>