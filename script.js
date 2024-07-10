const month = document.querySelector("#month");
const annual = document.querySelector("#annual");
const msection = document.querySelector(".monthly");
const asection = document.querySelector(".annually");

month.addEventListener("click", ()=>{
    msection.style.display = "flex";
    asection.style.display = "none";
})

annual.addEventListener("click", ()=>{
    asection.style.display = "flex";
    msection.style.display = "none";
})