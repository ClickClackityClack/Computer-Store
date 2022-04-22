<script setup>
function addC(e) {
    console.log("jsdklg")
    let customer = Object.fromEntries(new FormData(e.target))
    fetch("http://localhost:4000/customers", {
        method: "POST",
        body: JSON.stringify(customer),
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
            class="bi bi-person-check-fill"
            viewBox="0 0 16 16"
        >
            <path
                fill-rule="evenodd"
                d="M15.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L12.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z"
            />
            <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
        </svg>

        <div
            class="border border-2 rounded mt-2"
            style="border-color: #4D4D4D !important; box-shadow: -7px 5px 19px #686767;"
        >
            <form
                class="m-4 text-light d-flex flex-column"
                style="width:474px;"
                @submit="addC"
            >
                <label style="text-shadow: 1px 1px 3px white;">First Name</label>
                <input
                    type="text"
                    placeholder="Ex.John"
                    class="form-control mb-2"
                    name="first_name"
                    required
                />
                <label style="text-shadow: 1px 1px 3px white;">Last Name</label>
                <input
                    type="text"
                    placeholder="Ex.Smith"
                    name="last_name"
                    class="form-control mb-2"
                    required
                />
                <label style="text-shadow: 1px 1px 3px white;">Address</label>
                <input
                    type="text"
                    placeholder="Ex.5555 CatBird Ln"
                    class="form-control mb-2"
                    required
                    name="address"
                />
                <label style="text-shadow: 1px 1px 3px white;">City</label>
                <input
                    type="text"
                    placeholder="Ex.Chicago"
                    name="city"
                    class="form-control mb-2"
                    required
                />
                <label style="text-shadow: 1px 1px 3px white;">Zip Code</label>
                <input
                    type="text"
                    placeholder="Ex.34586"
                    name="zip"
                    class="form-control mb-2"
                    required
                />
                <label style="text-shadow: 1px 1px 3px white;">Country</label>
                <input
                    type="text"
                    placeholder="Ex.United States"
                    class="form-control mb-2"
                    required
                    name="country"
                />
                <label style="text-shadow: 1px 1px 3px white;">Phone</label>
                <input
                    type="text"
                    name="phone"
                    placeholder="Ex.222-555-9999"
                    class="form-control mb-4"
                    required
                />
                <button type="submit" class="btn btn-success w-75 align-self-center">Submit</button>
            </form>
        </div>
    </div>
</template>