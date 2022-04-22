<script setup>
function addE(e) {
    console.log("jsdklg")
    let category = Object.fromEntries(new FormData(e.target))
    fetch("http://localhost:4000/categories", {
        method: "POST",
        body: JSON.stringify(category),
        headers: {
            "content-type": "application/json"
        }
    })
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
            class="border border-2 rounded mt-4"
            style="border-color: #4D4D4D !important; box-shadow: -7px 5px 19px #686767;"
        >
            <form
                class="m-4 text-light d-flex flex-column"
                style="width:474px;"
                @submit="addE"
            >
                <label style="text-shadow: 1px 1px 3px white;">Name</label>
                <input
                    type="text"
                    placeholder="Ex.Home"
                    class="form-control mb-2"
                    name="name"
                    required
                />
                <label style="text-shadow: 1px 1px 3px white;">Description</label>
                <input
                    type="text"
                    placeholder="Ex.A bright lamp"
                    name="description"
                    class="form-control mb-3"
                    required
                />
                <button type="submit" class="btn btn-success w-75 align-self-center">Submit</button>
            </form>
        </div>
    </div>
</template>