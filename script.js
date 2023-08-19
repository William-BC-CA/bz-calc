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
var twelveTax = document.getElementById("twelveTax");
var fiveTax = document.getElementById("fiveTax");
var noneTax = document.getElementById("noTax");
const radioButtons = document.getElementsByName('taxRadio');
const radioButtons2 = document.getElementsByName('discounts');
var tenOff = document.getElementById("tenpercentoff");
var twoOff = document.getElementById("twopercentoff");
var noneOff = document.getElementById("noDiscounts");

function roundDecimalPlaces(){
    bal = Math.round((bal + Number.EPSILON) * 100) / 100;
}

function withTax(){
    if (twelveTax.checked){
        bal *= 1.12;
    }
    else if (fiveTax.checked){
        let tmp = bal * 0.05;
        bal += tmp;
    }
}

function addDiscounts(){
    if (tenOff.checked){
        let tmp = bal * 0.1;
        bal -= tmp;
    }
    else if (twoOff.checked){
        let tmp = bal * 0.02;
        bal -= tmp;
    }
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
}

// From ChatGPT
function validateForm() {
    let isValid = false;
    let isValid2 = false;

    for (let i = 0; i < radioButtons.length; i++) {
        if (radioButtons[i].checked) {
            isValid = true;
            break;
        }
    }

    for (let i = 0; i < radioButtons2.length; i++) {
        if (radioButtons2[i].checked) {
            isValid2 = true;
            break;
        }
    }

    if (isValid && isValid2) {
        // Form is valid, proceed with further actions
        withTax();
        addDiscounts();
        roundDecimalPlaces();
        res.innerHTML = "<b>Your total is: $" + bal + "</b>";
        // Add your code for form submission or further processing here
    }
    else if (isValid && !isValid2){
        // Form is not valid, display an error message
        res.innerHTML = "<i>Please select a discount option!</i>";
    }
    else {
        // Form is not valid, display an error message
        res.innerHTML = "<i>Please select a tax option!</i>";
    }
}

function toCalculate(){
    bal = 0;
    balAdder(2, document.getElementById("sashimi").value);
    balAdder(0, document.getElementById("houseRoll").value);
    validateForm();
    if (bal == 0){
        res.innerHTML = "<i>Please set an amount before calculating!</i>";
        return;
    }
}

function config1(){
    res.innerHTML = "";
    sashimiSelector.value = 3;
    houseRollSelector.value = 2;
    twelveTax.checked = true;

    twoOff.checked = true;
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
    twelveTax.checked = true;

    twoOff.checked = true;

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
    twelveTax.checked = true;

    twoOff.checked = true;

    // Not yet implemented
    // res.innerHTML = "<i>Not Available!</i>";
}

function clearStuff(){
    let sashimiSelector = document.getElementById("sashimi");
    let houseRollSelector = document.getElementById("houseRoll");
    sashimiSelector.value = null;
    houseRollSelector.value = null;
    twelveTax.checked = false;
    fiveTax.checked = false;
    noneTax.checked = false;
    res.innerHTML = "";

    tenOff.checked = false;
    twoOff.checked = false;
    noneOff.checked = false;
}

function tester(){
    looper(0, 2);
    looper(2, 3);
    withTax();
    roundDecimalPlaces();
}

// tester();
