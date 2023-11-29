window.addEventListener("load", () => {
   document.getElementById("test").addEventListener("click", () => {
    Array.from(document.getElementsByClassName("sidebar")).forEach((element) => {
        element.classList.add("hidden")
    })
   })
})