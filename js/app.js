let sideBarLinks = document.querySelectorAll(".side-bar .bottom a")
let mainHero = document.querySelectorAll("main .hero")
sideBarLinks.forEach(ele=>ele.onclick =_=>mainHero.forEach(e=>ele.parentElement.classList.contains(e.dataset.clases)?e.classList.add("active"):e.classList.remove("active")));
let card = document.querySelectorAll("main .card")
let backBtn = document.querySelector(".cotroller .fa-angle-left")
let nextBtn = document.querySelector(".cotroller .fa-angle-right")
let currentSlide = 1
nextBtn.onclick=_=>{
    currentSlide==card.length?currentSlide=0:currentSlide
    card.forEach(element => {element.classList.contains("active")?currentSlide++:currentSlide});
    card.forEach(e=>e.dataset.slider==currentSlide?e.classList.add("active"):e.classList.remove("active"))
}
backBtn.onclick=_=>{
    currentSlide==1?currentSlide=card.length+1:currentSlide
    card.forEach(element => {element.classList.contains("active")?currentSlide--:currentSlide});
    card.forEach(e=>e.dataset.slider==currentSlide?e.classList.add("active"):e.classList.remove("active"))
}
let time = document.querySelector(".time span")
let day = document.querySelector(".day span")
let hours = new Date().getHours(); 
let min = new Date().getMinutes(); 
let second = new Date().getSeconds();
let days = new Date().getDay();
switch (days) {
    case 0:
        days = "Sunday"
        break;
    case 1:
        days = "Monday"
        break;
    case 2:
        days = "Therdsday"
        break;
    case 3:
        days = "Thuesday"
        break;
    case 4:
        days = "Wednsday"
        break;
    case 5:
        days = "Friday"
        break;
    case 6:
        days = "Suterday"
        break;
}
time.innerHTML = `${hours < 10 ? `0${hours}` : hours} : ${min < 10 ? `0${min}` : min} : ${second < 10 ? `0${second}` : second}`
day.innerHTML = `${days}`
let chechBox = document.querySelector("#checkbox")
let main = document.querySelector("main")
let line = document.querySelectorAll(".card-she .line")
let button = document.querySelectorAll(".colors button")
let selectColor = document.querySelector(".select-color")
let color = document.querySelector(".colors")
let spans = document.querySelectorAll(".card-she span")
let gear = document.querySelector(".fa-gear")
let h3 = document.querySelectorAll(" h3")
let p = document.querySelectorAll(" p")
let tt = document.querySelectorAll(".tt")
let i = document.querySelectorAll("i")
let arrs = [spans,h3,p,tt,i,line]
chechBox.addEventListener("change" , () =>{
    main.classList.toggle("dark")
    selectColor.classList.toggle("dark")
    line.forEach(line => {
        line.classList.toggle("dark")
    });
})
button.forEach(element => {
    element.onclick= _=>{
        console.log(element.dataset.color);
        arrs.forEach(ars => {
            ars.forEach(el => {
                el.style.color = `${element.dataset.color}`
                el.style.transition = ".5s ease-in-out"
            });
        });
    }
});
gear.onclick=_=>{
    color.classList.toggle("active")
}



let sent = " I Love Foood Code Too Playing Much"
let smallWords = sent.split(" ").filter( ele =>{
    return ele.length <=4;
}).join(" ")
console.log(smallWords);


let ignNun = "zxSHO00123Xxz"
let iNum = ignNun.split("").filter(ele => !isNaN(parseInt(ele))).map(ele => ele*ele)
    .join("")

console.log(iNum);









