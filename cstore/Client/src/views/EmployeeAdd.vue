<script setup>
function addE(e) {
    console.log("jsdklg")
    let employee = Object.fromEntries(new FormData(e.target))
    fetch("http://localhost:4000/employees", {
        method: "POST",
        body: JSON.stringify(employee),
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
            class="bi bi-person-badge"
            viewBox="0 0 16 16"
        >
            <path d="M6.5 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3zM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
            <path
                d="M4.5 0A2.5 2.5 0 0 0 2 2.5V14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2.5A2.5 2.5 0 0 0 11.5 0h-7zM3 2.5A1.5 1.5 0 0 1 4.5 1h7A1.5 1.5 0 0 1 13 2.5v10.795a4.2 4.2 0 0 0-.776-.492C11.392 12.387 10.063 12 8 12s-3.392.387-4.224.803a4.2 4.2 0 0 0-.776.492V2.5z"
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
                <label style="text-shadow: 1px 1px 3px white;">Birth Date</label>
                <input
                    type="date"
                    class="form-control mb-2"
                    required
                    name="birthdate"
                />
                <label style="text-shadow: 1px 1px 3px white;">Email</label>
                <input
                    type="email"
                    name="email"
                    placeholder="john@domain.com"
                    class="form-control mb-4"
                    required
                />
                <button type="submit" class="btn btn-success w-75 align-self-center">Submit</button>
            </form>
        </div>
    </div>
</template>