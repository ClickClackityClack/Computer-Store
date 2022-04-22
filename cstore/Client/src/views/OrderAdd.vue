<script setup>import { onMounted, ref } from 'vue';

function addO(e) {
    console.log("jsdklg")
    let order = Object.fromEntries(new FormData(e.target))
    fetch("http://localhost:4000/orders", {
        method: "POST",
        body: JSON.stringify(order),
        headers: {
            "content-type": "application/json"
        }
    })
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
            class="border border-2 rounded mt-4"
            style="border-color: #4D4D4D !important; box-shadow: -7px 5px 19px #686767;"
        >
            <form
                class="m-4 text-light d-flex flex-column"
                style="width:474px;"
                @submit="addO"
            >
                <label style="text-shadow: 1px 1px 3px white;">Date</label>
                <input
                    type="date"
                    placeholder="Ex.5"
                    name="date"
                    class="form-control mb-2"
                    required
                />
                <label style="text-shadow: 1px 1px 3px white;">Shipper</label>
                <select name="shipper_id" class="form-select mb-2">
                    <option :value="shipper.name" v-for="shipper in shippers">{{ shipper.name }}</option>
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
                    <option :value="product.name" v-for="product in products">{{ product.name }}</option>
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
</template>