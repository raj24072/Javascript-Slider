const nextEl = document.querySelector(".next")

const prevEle = document.querySelector(".prev")

const imgsEle = document.querySelectorAll("img")

const imgContainerEle = document.querySelector(".image-container")

let currentImg = 1;
let timeout;

nextEl.addEventListener("click", () => {
    currentImg++;
    clearTimeout(timeout)
    updateImg()
})

prevEle.addEventListener("click", () => {
    currentImg--;
    clearTimeout(timeout)
    updateImg()
})

updateImg()

function updateImg(){
    if(currentImg > imgsEle.length){
        currentImg=1
    }else if(currentImg < 1){
        currentImg = imgsEle.length
    }
    imgContainerEle.style.transform = `translateX(-${(currentImg - 1) * 500}px)`
    timeout = setTimeout(() => {
        currentImg++;
        updateImg()

    },3000)
}
console.log(imgContainerEle);
console.log("The currentImg "+currentImg);
console.log(imgsEle.length);