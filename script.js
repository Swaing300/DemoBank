function toggleDropdown() {
    var dropdownContent = document.getElementById("dropdownContent");
    if (dropdownContent.style.display === "none") {
        dropdownContent.style.display = "block";
    } else {
        dropdownContent.style.display = "none";
    }
}
function section() {
    var dropdownContent = document.getElementById("dropdownContent");
    if (dropdownContent.style.display != "none"){
        dropdownContent.style.display = "none";
    }
}
