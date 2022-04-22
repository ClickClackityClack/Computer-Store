<script setup>import { onMounted, ref } from 'vue';

function addP(e) {
    console.log("jsdklg")
    let product = Object.fromEntries(new FormData(e.target))
    fetch("http://localhost:4000/products", {
        method: "POST",
        body: JSON.stringify(product),
        headers: {
            "content-type": "application/json"
        }
    })
}
let categories = ref([])
function getInfo(){
    fetch("http://localhost:4000/categories").then( (res) => res.json()).then( (data) => {
        categories.value = data
    })
}
let suppliers = ref([])
function getData(){
    fetch("http://localhost:4000/suppliers").then( (res) => res.json()).then( (data) => {
        suppliers.value = data
    })
}
onMounted(() => {
    getInfo()
    getData()
})
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
            class="border border-2 rounded mt-4"
            style="border-color: #4D4D4D !important; box-shadow: -7px 5px 19px #686767;"
        >
            <form
                class="m-4 text-light d-flex flex-column"
                style="width:474px;"
                @submit="addP"
            >
                <label style="text-shadow: 1px 1px 3px white;">Name</label>
                <input
                    type="text"
                    placeholder="Ex.Watch"
                    class="form-control mb-2"
                    name="name"
                    required
                />
                <label style="text-shadow: 1px 1px 3px white;">Unit</label>
                <input
                    type="text"
                    placeholder="Ex.5"
                    name="unit"
                    class="form-control mb-2"
                    required
                />
                <label style="text-shadow: 1px 1px 3px white;">Price</label>
                <input
                    type="text"
                    placeholder="Ex.55.66$"
                    class="form-control mb-2"
                    required
                    name="price"
                />
                <label style="text-shadow: 1px 1px 3px white;">Category</label>
                <select name="category_id" class="form-select mb-2">
                    <option :value="category.name" v-for="category in categories">{{category.name}}</option>
                </select>
                <label style="text-shadow: 1px 1px 3px white;">Supplier</label>
                <select name="suplier_id" class="form-select mb-2">
                    <option :value="supplier.name" v-for="supplier in suppliers">{{supplier.name}}</option>
                </select>
                <button type="submit" class="btn btn-success w-75 align-self-center">Submit</button>
            </form>
        </div>
    </div>
</template>