// Menu
const houseRoll = 15.95; // Regular
const houseRollSmall = 8.95; // Small
const sashimi = 17.55; // 9 pcs.
const sashimiSmall = 10.50; // 5 pcs.

var bal = 0;
var res = document.getElementById("result");

// Vars
var sashimiSelector = document.getElementById("sashimi");
var houseRollSelector = document.getElementById("houseRoll");
var taxCheckbox = document.getElementById("chkbox");

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

function balAdder(option, maxVal){
    bal += maxVal * calculate(option);
    console.log(maxVal + " " + calculate(option));
}

function toCalculate(){
    bal = 0;
    balAdder(2, document.getElementById("sashimi").value);
    balAdder(0, document.getElementById("houseRoll").value);
    if (taxCheckbox.checked)
        withTax();
    roundDecimalPlaces();
    if (bal == 0){
        res.innerHTML = "<i>Please set an amount before calculating!</i>";
        return;
    }
    res.innerHTML = "<b>Your total is: $" + bal + "</b>";
}

function config1(){
    res.innerHTML = "";
    sashimiSelector.value = 3;
    houseRollSelector.value = 2;
    taxCheckbox.checked = true;
}

function config2(){
    res.innerHTML = "";
    // let countSashimi = ;
    // let countHouseRoll = ;
    // let sashimiSelector = document.getElementById("sashimi");
    // let houseRollSelector = document.getElementById("houseRoll");
    // sashimiSelector.value = countSashimi;
    // houseRollSelector.value = countHouseRoll;
    sashimiSelector.value = 4;
    houseRollSelector.value = 3;
    taxCheckbox.checked = true;

    // Not yet implemented
    // res.innerHTML = "<i>Not Available!</i>";
}

function config3(){
    res.innerHTML = "";
    // let countSashimi = ;
    // let countHouseRoll = ;
    // let sashimiSelector = document.getElementById("sashimi");
    // let houseRollSelector = document.getElementById("houseRoll");
    // sashimiSelector.value = countSashimi;
    // houseRollSelector.value = countHouseRoll;
    sashimiSelector.value = 4;
    houseRollSelector.value = 2.5;
    taxCheckbox.checked = true;

    // Not yet implemented
    // res.innerHTML = "<i>Not Available!</i>";
}

function clearStuff(){
    let sashimiSelector = document.getElementById("sashimi");
    let houseRollSelector = document.getElementById("houseRoll");
    sashimiSelector.value = null;
    houseRollSelector.value = null;
    res.innerHTML = "";
}

function tester(){
    looper(0, 2);
    looper(2, 3);
    withTax();
    roundDecimalPlaces();
}

// tester();
