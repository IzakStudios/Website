window.addEventListener("load", () => {
   document.getElementById("close-sidebar").addEventListener("click", () => {
    Array.from(document.getElementsByClassName("sidebar")).forEach((element) => {
        let isHidden = element.classList.contains("hidden");
        if (isHidden) return element.classList.remove("hidden");

        element.classList.add("hidden");
    })
   })
})