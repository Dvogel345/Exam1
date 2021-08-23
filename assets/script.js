// First, tell us your name
let yourName = "Derek Vogel" // HINT: Replace this with your own name!

// Code to update name display 
document.getElementById('credit').textContent = `Created by ${yourName}`

let incrementBtnOne = document.getElementById('add-gb');
let decrementBtnOne = document.getElementById('minus-gb');
let gbCount = document.getElementById('qty-gb');
let gbCountTotals = document.getElementById('qty-total');

let incrementBtnTwo = document.getElementById('add-cc');
let decrementBtnTwo = document.getElementById('minus-cc');
let ccCount = document.getElementById('qty-cc');
let ccCountTotals = document.getElementById('qty-total');

let incrementBtnThree = document.getElementById('add-sugar');
let decrementBtnThree = document.getElementById('minus-suagr');
let sugarCount = document.getElementById('qty-sugar');
let sugarCountTotals = document.getElementById('qty-total');

let totalCookiesValue = 0;


increment(incrementBtnOne, gbCount, gbCountTotals);
decrement(decrementBtnOne, gbCount, gbCountTotals);

increment(incrementBtnTwo, ccCount, ccCountTotals);
decrement(decrementBtnTwo, ccCount, ccCountTotals);

increment(incrementBtnThree, sugarCount, sugarCountTotals);
decrement(decrementBtnThree, sugarCount, sugarCountTotals);

function increment(button, input, total) {   
  button.addEventListener("click", function(event) {
    num = parseInt(input.innerHTML);
    // console.log("input.innerHTML " + input.innerHTML);
    input.innerHTML = num + 1;
    total.innerHTML = input.innerHTML;
    getTotal();
  });
};

function decrement(button, input, total) {   
  button.addEventListener("click", function(event) {
    num = parseInt(input.innerHTML);
    // console.log("input.innerHTML " + input.innerHTML);
    if (num == 0) {
      return;
    }
    input.innerHTML = num - 1;
    total.innerHTML = input.innerHTML;
    getTotal();
  });  
};

function getTotal() {
  let inputFiled = document.querySelectorAll(".input-filed");
  let totalCookies = document.getElementById("qty-total");
  let totalCookiesValue = 0;
  
  for (let i = 0; i < inputFiled.length; i++) {
    totalCookiesValue += parseInt(inputFiled[i].innerHTML);
    // console.log("totalCookies?: " + totalCookies.innerHTML); 
  }
  totalCookies.innerHTML = totalCookiesValue;
}
