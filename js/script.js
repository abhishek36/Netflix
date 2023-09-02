let que = document.querySelectorAll(".faq-q");
que.forEach((v, index) => {
  v.addEventListener("click", () => {
    v.nextElementSibling.classList.toggle("h-[auto]");
    v.nextElementSibling.classList.toggle("scale-y-100");
    v.nextElementSibling.classList.toggle("p-[24px]");
    v.children[1].classList.toggle("rotate-45");

    que.forEach((el,i)=>{
        if(i!=index){
            el.nextElementSibling.classList.remove("h-[auto]", "scale-y-100", "p-[24px]")
        }
    })

  });
});