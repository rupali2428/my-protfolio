function toggleDark() {
    document.body.classList.toggle("dark");
}

// animation on scroll
const faders = document.querySelectorAll(".fade");

window.addEventListener("scroll", () => {
    faders.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < window.innerHeight - 50) {
            el.classList.add("show");
        }
    });
});
function sendMsg(e) {
    e.preventDefault();
    document.getElementById("msg").innerText = "Message sent successfully ✅";
}