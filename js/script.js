const likeBtn = document.querySelector(".like_btn");

let likeicon = document.querySelector("#icon")
let count = document.querySelector("#count")


let clicked = false;

likeBtn.addEventListener("click",() =>{
    if(!clicked){
        clicked = true;
        likeicon.innerHTML = '<i class="fas fa fa-thumbs-up"></i>'
        count.textContent++;
    }else{
        clicked = false
        likeicon.innerHTML = '<i class="far fa fa-thumbs-up"></i>'
        count.textContent--;
    }
})