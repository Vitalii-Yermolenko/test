const img = document.querySelectorAll('.image-to-show');
const stopBtn = document.querySelector('.stop-show');
const startBtn = document.querySelector('.start-show');
let index = 0;
let time;
function swowImg() {
    return  time = setInterval(() => {
        if (index === img.length-1){
            index=0;
        } else{
        index++;}
        for (const elem of img) {
            elem.classList.remove('active');
        }
        img[index].classList.add('active');
    }, 3000);    

}

swowImg();

stopBtn.addEventListener('click', () => {
    clearInterval(time);
})

startBtn.addEventListener('click', () => {
    swowImg();
});
