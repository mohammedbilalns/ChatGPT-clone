

function toggleDropdown(){
    const dropdownMenu = document.getElementById("dropdown-menu");
    if(dropdownMenu.style.display === "none"){
        dropdownMenu.style.display = "flex";
    }else{
        dropdownMenu.style.display = "none";
    }
}