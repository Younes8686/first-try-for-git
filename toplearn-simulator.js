function secondmenuFunction(){
    document.getElementById("secondListBoxId").classList.toggle("show");
}
window.onclick=function(event){
    if(!event.target.matches('.secondListLiButton')){
       let secondDropdownItem=document.getElementsByClassName("secondListBox");
       let i;
       for(let i=0;i<secondDropdownItem.length;i++){
        let secondOpenDropdown=secondDropdownItem[i];
        if(secondOpenDropdown.classList.contains('show')){
            secondOpenDropdown.classList.remove('show');
        }
       }
    }
}

let slides=document.querySelectorAll(".slide");
let index=0;
function showSlide(){
    slides.forEach(s=>s.classList.remove("active"));
    slides[index].classList.add("active");
    index=(index+1)%slides.length;
}
showSlide();
setInterval(showSlide,3000);