let fname = document.querySelector("#first-name");
let lname = document.querySelector("#last-name");
let visitingDate = document.querySelector("#visiting-date");
let visitingTime = document.querySelector("#visiting-time");
let tableType = document.querySelector("#table-type");
let telNum = document.querySelector("#telephone-number");
let email = document.querySelector("#email-adress");
let note = document.querySelector("#note");
let clearBookingButton = document.querySelector("#clear-button");
let submitBookingButton = document.querySelector("#submit-button");
let customerBookingList = document.querySelector("booking-list")

submitBookingButton.onclick = function(evt){
    evt.preventDefault();

    let customer = new Customer(fname.value, lname.value, visitingDate.value, visitingTime.value, tableType.value, telNum.value, email.value, note.value)

    customerBookingList.innerHTML += customer;

    fname.value = "";
    lname.value = "";
    visitingDate.value = ""; 
    visitingTime.value = "";
    tableType.value = "";
    telNum.value = "";
    email.value = ""; 
    note.value = "";
}

clearBookingButton.onclick = function(evt){
    evt.preventDefault();

    fname.value = "";
    lname.value = "";
    visitingDate.value = ""; 
    visitingTime.value = "";
    tableType.value = "";
    telNum.value = "";
    email.value = ""; 
    note.value = "";
}

customerBookingList.onclick = function(evt){
    evt.preventDefault();
    evt.target.remove();
}








