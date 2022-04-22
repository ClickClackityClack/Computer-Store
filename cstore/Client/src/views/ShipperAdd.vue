<script setup>
function addS(e) {
    console.log("jsdklg")
    let shipper = Object.fromEntries(new FormData(e.target))
    fetch("http://localhost:4000/shippers", {
        method: "POST",
        body: JSON.stringify(shipper),
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
            class="bi bi-truck-flatbed"
            viewBox="0 0 16 16"
        >
            <path
                d="M11.5 4a.5.5 0 0 1 .5.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-4 0 1 1 0 0 1-1-1v-1h11V4.5a.5.5 0 0 1 .5-.5zM3 11a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm1.732 0h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4a2 2 0 0 1 1.732 1z"
            />
        </svg>

        <div
            class="border border-2 rounded mt-4"
            style="border-color: #4D4D4D !important; box-shadow: -7px 5px 19px #686767;"
        >
            <form class="m-4 text-light d-flex flex-column" style="width:474px;" @submit="addS">
                <label style="text-shadow: 1px 1px 3px white;">Name</label>
                <input
                    type="text"
                    placeholder="Ex.FedEx"
                    class="form-control mb-2"
                    name="name"
                    required
                />
                <label style="text-shadow: 1px 1px 3px white;">Phone</label>
                <input
                    type="text"
                    placeholder="Ex.777-999-6666"
                    name="phone"
                    class="form-control mb-3"
                    required
                />
                <button type="submit" class="btn btn-success w-75 align-self-center">Submit</button>
            </form>
        </div>
    </div>
</template>