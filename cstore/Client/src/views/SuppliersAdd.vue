<script setup>
function addS(e) {
    console.log("jsdklg")
    let supplier = Object.fromEntries(new FormData(e.target))
    fetch("http://localhost:4000/suppliers", {
        method: "POST",
        body: JSON.stringify(supplier),
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
            class="bi bi-chat-right-text-fill"
            viewBox="0 0 16 16"
        >
            <path
                d="M16 2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h9.586a1 1 0 0 1 .707.293l2.853 2.853a.5.5 0 0 0 .854-.353V2zM3.5 3h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1 0-1zm0 2.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1 0-1zm0 2.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1z"
            />
        </svg>

        <div
            class="border border-2 rounded mt-3"
            style="border-color: #4D4D4D !important; box-shadow: -7px 5px 19px #686767;"
        >
            <form class="m-4 text-light d-flex flex-column" style="width:474px;" @submit.prevent="addS">
                <label style="text-shadow: 1px 1px 3px white;">Supplier Name</label>
                <input
                    type="text"
                    placeholder="Ex.Amazon"
                    class="form-control mb-2"
                    name="name"
                    required
                />
                <label style="text-shadow: 1px 1px 3px white;">Address</label>
                <input
                    type="text"
                    placeholder="Ex.9645 HatBird Rd"
                    name="address"
                    class="form-control mb-2"
                    required
                />
                <label style="text-shadow: 1px 1px 3px white;">City</label>
                <input
                    type="text"
                    placeholder="Montreal"
                    class="form-control mb-2"
                    required
                    name="city"
                />
                <label style="text-shadow: 1px 1px 3px white;">Zip</label>
                <input
                    type="text"
                    placeholder="Ex.85551"
                    name="zip"
                    class="form-control mb-2"
                    required
                />
                <label style="text-shadow: 1px 1px 3px white;">Country</label>
                <input
                    type="text"
                    placeholder="Ex.Canada"
                    name="country"
                    class="form-control mb-2"
                    required
                />
                <label style="text-shadow: 1px 1px 3px white;">Phone</label>
                <input
                    type="text"
                    placeholder="Ex.999-666-7777"
                    class="form-control mb-3"
                    required
                    name="phone"
                />
                <button type="submit" class="btn btn-success w-75 align-self-center">Submit</button>
            </form>
        </div>
    </div>
</template>