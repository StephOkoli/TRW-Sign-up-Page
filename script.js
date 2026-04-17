const form = document.querySelector("form");
const status = document.getElementById("status");

form.addEventListener("submit", async function (e) {
    e.preventDefault();

    status.innerText = "Transmitting...";

    setTimeout(() => {
        status.innerText = "Verifying...";
    }, 1000);

    const data = new FormData(form);

    const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: { Accept: "application/json" }
    });

    if (response.ok) {
        setTimeout(() => {
            status.innerText = "Access Granted";
        }, 2000);

    form.reset();
    } else {
        status.innerText = "Transmission Failed"
    }
})
