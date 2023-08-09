const generatorTab = document.querySelector(".nav-gen");
const scannerTab = document.querySelector(".nav-scan");

generatorTab.addEventListener("click",()=>{
    generatorTab.classList.add("active");
    scannerTab.classList.remove("active");

    document.querySelector(".scanner").style.display="none";
    document.querySelector(".generator").style.display="block";
});

scannerTab.addEventListener("click",()=>{
    generatorTab.classList.remove("active");
    scannerTab.classList.add("active");

    document.querySelector(".scanner").style.display="block";
    document.querySelector(".generator").style.display="none";
});