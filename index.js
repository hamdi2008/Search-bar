let serachInput = document.getElementById("searchInput")
const nameCollection = document.getElementsByClassName("name")

serachInput.addEventListener("keyup", function(event) {
    searchInput = event.target.value.toLowerCase()
    for (let i = 0; i < nameCollection.length; i++) {
        const currentName = nameCollection[i].textContent.toLowerCase()
        if (currentName.includes(searchInput)) {
            nameCollection[i].style.display = "block"
        }else {
            nameCollection[i].style.display = "none"
        }
    }
})
