function ikuti() {
    const tombol = document.querySelector("button");

    if (tombol.innerText === "Follow") {
        tombol.innerText = "Following ✓";
        tombol.style.background = "#28a745";
    } else {
        tombol.innerText = "Follow";
        tombol.style.background = "";
    }
}