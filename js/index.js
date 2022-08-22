const headerSpans = document.querySelectorAll("header span");
const main = document.querySelectorAll("main>div");

headerSpans[0].onclick = function(){
    window.scrollTo({top:main[1].offsetTop,behavior:"smooth"});
}

headerSpans[1].onclick = function(){
    window.scrollTo({top:main[2].offsetTop,behavior:"smooth"})
}

headerSpans[2].onclick = function(){
    window.scrollTo({top:main[3].offsetTop,behavior:"smooth"})
}

headerSpans[3].onclick = function(){
    window.scrollTo({top:main[4].offsetTop,behavior:"smooth"})
}

headerSpans[4].onclick = function(){
    window.scrollTo({top:main[5].offsetTop,behavior:"smooth"})
}

const backToTop = document.querySelector("#topBtn");
const header = document.querySelector("header");

backToTop.onclick = function(){
    window.scrollTo({top:header.offsetTop,behavior:"smooth"})
}

