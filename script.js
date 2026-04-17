const form = document.querySelector("form");
const status = document.getElementById("status");

form.addEventListener("submit", function() {
    status.innerText = "Procressing request..."
})