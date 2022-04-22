<script setup>
import { ref, onMounted } from 'vue';
let orders = ref([])
let selectedOrder = ref(null)

onMounted(async () => {
    let res = await fetch("http://localhost:4000/orders")
    orders.value = await res.json()

})

function del(id) {

    fetch(`http://localhost:4000/orders/${id}`, {
        method: "DELETE",

    })
    window.location.reload()
}

let shippers = ref([])
function getShippers() {
    fetch("http://localhost:4000/shippers").then((res) => res.json()).then((data) => {
        shippers.value = data
    })
}
let customers = ref([])
function getCustomers() {
    fetch("http://localhost:4000/customers").then((res) => res.json()).then((data) => {
        customers.value = data
    })
}
let products = ref([])
function getProducts() {
    fetch("http://localhost:4000/products").then((res) => res.json()).then((data) => {
        products.value = data
    })
}
let employees = ref([])
function getEmployees() {
    fetch("http://localhost:4000/employees").then((res) => res.json()).then((data) => {
        employees.value = data
    })
}
onMounted(() => {
    getShippers()
    getProducts()
    getCustomers()
    getEmployees()
})

function upd(id, form) {
    let data = JSON.stringify(Object.fromEntries(new FormData(form)))
    fetch(`http://localhost:4000/orders/${id}`, {
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
            class="bi bi-receipt-cutoff"
            viewBox="0 0 16 16"
        >
            <path
                d="M3 4.5a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zM11.5 4a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1zm0 2a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1zm0 2a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1zm0 2a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1zm0 2a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1z"
            />
            <path
                d="M2.354.646a.5.5 0 0 0-.801.13l-.5 1A.5.5 0 0 0 1 2v13H.5a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1H15V2a.5.5 0 0 0-.053-.224l-.5-1a.5.5 0 0 0-.8-.13L13 1.293l-.646-.647a.5.5 0 0 0-.708 0L11 1.293l-.646-.647a.5.5 0 0 0-.708 0L9 1.293 8.354.646a.5.5 0 0 0-.708 0L7 1.293 6.354.646a.5.5 0 0 0-.708 0L5 1.293 4.354.646a.5.5 0 0 0-.708 0L3 1.293 2.354.646zm-.217 1.198.51.51a.5.5 0 0 0 .707 0L4 1.707l.646.647a.5.5 0 0 0 .708 0L6 1.707l.646.647a.5.5 0 0 0 .708 0L8 1.707l.646.647a.5.5 0 0 0 .708 0L10 1.707l.646.647a.5.5 0 0 0 .708 0L12 1.707l.646.647a.5.5 0 0 0 .708 0l.509-.51.137.274V15H2V2.118l.137-.274z"
            />
        </svg>
        <div
            class="d-flex border rounded-2 mx-auto p-2 mt-5"
            style="min-width: 800px; max-width: 1200px;border-color: #4D4D4D !important; box-shadow: -2px 1px 25px #686767;"
            v-if="orders.length"
        >
            <table class="table table-dark table-hover" style>
                <thead>
                    <tr>
                        <td>Date</td>
                        <td>Shipper</td>
                        <td>Customer</td>
                        <td>Product</td>
                        <td>Employee</td>
                        <td>Actions</td>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(order, i ) in orders">
                        <td>{{ order.date }}</td>
                        <td>{{ order.shipper_id }}</td>
                        <td>{{ order.customer_id }}</td>
                        <td>{{ order.product_id }}</td>
                        <td>{{ order.employee_id }}</td>
                        <td>
                            <button
                                class="btn btn-light"
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModal"
                                @click="selectedOrder = order"
                            >Update</button> /
                            <button class="btn btn-warning" @click="del(order.order_id)">Delete</button>
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
            <h1 class="flex justify-content-center">No orders to display. &#9785;</h1>
        </div>
    </div>

    <div class="modal fade" tabindex="-1" id="exampleModal">
        <div class="modal-dialog">
            <div
                class="modal-content"
                style="background-color: #212529 !important; color: white !important;"
            >
                <div class="modal-header">
                    <h5 class="modal-title">Update Order</h5>
                    <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                    ></button>
                </div>
                <div class="modal-body">
                    <form @submit="upd(selectedOrder?.order_id, $event.target)">
                        <label style="text-shadow: 1px 1px 3px white;">Date</label>
                        <input
                            type="date"
                            placeholder="Ex.5"
                            name="date"
                            :value = "selectedOrder?.date"
                            class="form-control mb-2"
                            required
                        />
                        <label style="text-shadow: 1px 1px 3px white;">Shipper</label>
                        <select name="shipper_id" class="form-select mb-2">
                            <option
                                :value="shipper.name"
                                v-for="shipper in shippers"
                            >{{ shipper.name }}</option>
                        </select>
                        <label style="text-shadow: 1px 1px 3px white;">Customer</label>
                        <select name="customer_id" class="form-select mb-2">
                            <option
                                :value="customer.name"
                                v-for="customer in customers"
                            >{{ customer.first_name }} , {{ customer.last_name }}</option>
                        </select>
                        <label style="text-shadow: 1px 1px 3px white;">Product</label>
                        <select name="product_id" class="form-select mb-2">
                            <option
                                :value="product.name"
                                v-for="product in products"
                            >{{ product.name }}</option>
                        </select>
                        <label style="text-shadow: 1px 1px 3px white;">Employee</label>
                        <select name="employee_id" class="form-select mb-2">
                            <option
                                :value="employee.first_name"
                                v-for="employee in employees"
                            >{{ employee.first_name }}</option>
                        </select>
                        <button type="submit" class="btn btn-success w-75 align-self-center">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>