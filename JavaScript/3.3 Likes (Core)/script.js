var count1 = 9
var count1element = document.querySelector(".likes-amount1");

function add1(cl) {
    console.log(cl);
    var element = document.querySelector(".likes-amount1");
    var count = parseInt(element.innerHTML); // console.log(typeof(...))
    count++;
    count1element.innerText = count + " like(s)"
}

var count2 = 12
var count2element = document.querySelector(".likes-amount2");

function add2() {
    count2++;
    count2element.innerText = count2 + " like(s)"
}

var count3 = 9
var count3element = document.querySelector(".likes-amount3");

function add3() {
    count3++;
    count3element.innerText = count3 + " like(s)"
}