<script setup>
import { ref, onMounted } from 'vue';
let categories = ref([])
let selectedCategory = ref(null)

onMounted(async () => {
    let res = await fetch("http://localhost:4000/categories")
    categories.value = await res.json()

})

function del(id) {

    fetch(`http://localhost:4000/categories/${id}`, {
        method: "DELETE",

    })
    window.location.reload()
}

function upd(id, form) {
    let data = JSON.stringify(Object.fromEntries(new FormData(form)))
    fetch(`http://localhost:4000/categories/${id}`, {
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
            class="bi bi-clipboard-check-fill"
            viewBox="0 0 16 16"
        >
            <path
                d="M6.5 0A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3Zm3 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3Z"
            />
            <path
                d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1A2.5 2.5 0 0 1 9.5 5h-3A2.5 2.5 0 0 1 4 2.5v-1Zm6.854 7.354-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708.708Z"
            />
        </svg>
        <div
            class="d-flex border rounded-2 mx-auto p-2 mt-5"
            style="min-width: 800px; max-width: 1200px;border-color: #4D4D4D !important; box-shadow: -2px 1px 25px #686767;"
            v-if="categories.length"
        >
            <table class="table table-dark table-hover" style>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Description</td>
                        <td>Actions</td>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(category, i ) in categories">
                        <td>{{ category.name }}</td>
                        <td>{{ category.description }}</td>
                        <td>
                            <button
                                class="btn btn-light"
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModal"
                                @click="selectedCategory = category"
                            >Update</button> /
                            <button
                                class="btn btn-warning"
                                @click="del(category.category_id)"
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
            <h1 class="flex justify-content-center">No categories to display. &#9785;</h1>
        </div>
    </div>

    <div class="modal fade" tabindex="-1" id="exampleModal">
        <div class="modal-dialog">
            <div
                class="modal-content"
                style="background-color: #212529 !important; color: white !important;"
            >
                <div class="modal-header">
                    <h5 class="modal-title">Update Category</h5>
                    <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                    ></button>
                </div>
                <div class="modal-body">
                    <form @submit.prevent="upd(selectedCategory?.category_id, $event.target)">
                        <label style="text-shadow: 1px 1px 3px white;">Name</label>
                        <input
                            type="text"
                            placeholder="Ex.Home"
                            class="form-control mb-2"
                            :value="selectedCategory?.name"
                            name="name"
                            required
                        />
                        <label style="text-shadow: 1px 1px 3px white;">Description</label>
                        <input
                            type="text"
                            placeholder="Ex.A bright lamp"
                            :value="selectedCategory?.description"
                            name="description"
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