

function toggleDropdown(){
    const dropdownMenu = document.getElementById("dropdown-menu");

    console.log(dropdownMenu.style.display)
    dropdownMenu.style.display = (dropdownMenu.style.display == "none" || dropdownMenu.style.display =="") ? "flex" : "none"
}


function toggleSidebar(){
    const sidebar = document.querySelector(".sidebar");
    const topButtonsContainer = document.querySelector(".top-buttons-container");
    const topButtonsLeftSection = document.querySelector(".top-buttons-left-section");
    
    // console.log(sidebar.style.display)
    if(sidebar.style.display === "flex" || sidebar.style.display== "" ){
        sidebar.style.display = "none";
        topButtonsContainer.style.backgroundColor = "white";
        topButtonsContainer.style.width = "80px";
        topButtonsLeftSection.style.marginLeft = "80px";
    }else{
        sidebar.style.display = "flex";
        topButtonsContainer.style.backgroundColor = "#F9F9F9";
        topButtonsContainer.style.width = "240px";
        topButtonsLeftSection.style.marginLeft = "0px";
    }
}
