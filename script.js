// BanZai Menu
const houseRoll = 15.95; // Regular
const houseRollSmall = 8.95; // Small
const sashimi = 17.55; // 9 pcs.
const sashimiSmall = 10.50; // 5 pcs.

var bal = 0;

function roundDecimalPlaces(){
    bal = Math.round((bal + Number.EPSILON) * 100) / 100;
}

function withTax(){
    bal *= 1.12;
}

function calculate(val){
    switch(val){
        case 0:
            return houseRoll;
        case 1:
            return houseRollSmall;
        case 2:
            return sashimi;
        case 3:
            return sashimiSmall;
    }
}

function looper(option, maxVal){
    for (let i = 0; i < maxVal; i++){
        bal += calculate(option);
    }
}

function toCalculate(){
    bal = 0;
    let countSashimi = parseInt(document.getElementById("sashimi").value);
    console.log(countSashimi);
    let countHouseRoll = parseInt(document.getElementById("houseRoll").value);
    looper(2, countSashimi);
    console.log(bal);
    looper(0, countHouseRoll);
    withTax();
    roundDecimalPlaces();
    let res = document.getElementById("result");
    res.innerHTML = "<b>Your total is: $" + bal + "</b>";
}

function tester(){
    looper(0, 2);
    looper(2, 3);
    withTax();
    roundDecimalPlaces();
}

// tester();
console.log(bal);
