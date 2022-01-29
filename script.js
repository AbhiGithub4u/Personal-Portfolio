let ham = document.querySelector(".ham");
let mobile = document.querySelector(".mobile");
let icon = document.querySelector(".dark");

ham.addEventListener('click',function(){
    mobile.classList.toggle("active")
});
window.onscroll=()=>{
    mobile.classList.remove("active")


};


icon.onclick = function(){
    newFunction();
    function newFunction() {
        document.body.classList.toggle("dark-theme");
    };
};
