let container=document.getElementById("star-container");
let stars=document.querySelectorAll(".star")
let count=document.getElementById("count");
let currentRating=0;

stars.forEach(star=>{
    star.addEventListener('click',()=>{
        let index=star.getAttribute("data-value");
        if(index===currentRating){
            currentRating=0
        }
        else{
            currentRating=index
        }
    
        setRating()

    })
})

function setRating(){
    stars.forEach((star,index)=>{
        if(index<currentRating){
            star.style.color="yellow"
        }
        else{
            star.style.color="grey"

        }
        count.textContent=`Rating Count : ${currentRating}`


    })
}