length = document.querySelectorAll(".btns").length;
var tip=0;
var bill=0;
for (var i = 0; i < length; i++) {

    document.querySelectorAll(".btns")[i].addEventListener("click", function play() {
        var clicked = Number(this.id);
        console.log(clicked)
        window.tip=document.querySelector("#custom1").value = clicked;

    });

}


// var people=0;



// 
// var tip = document.getElementById("custom1").value;
// var people = document.getElementById("people").value;

document.getElementById("first_input").addEventListener("input", function bills() {
    window.bill = Number(document.getElementById("first_input").value);
    



});

document.getElementById("custom1").addEventListener("input", function tips() {
    window.tip = Number(document.getElementById("custom1").value);

    
});

document.getElementById("input1").addEventListener("input", function peoples() {
        people = Number(document.getElementById("input1").value);
        var per_person = ((window.tip/100)*window.bill)/people;
        var total = (per_person+window.bill) / people;
        per_person = per_person.toFixed(2);
        total = total.toFixed(2);


        document.getElementById("person").innerHTML = per_person;
        document.getElementById("total").innerHTML = total;

   

});

document.getElementById("reset").addEventListener("click", function reset() {
    document.getElementById("person").innerHTML = "$0. 00";
    document.getElementById("total").innerHTML = "$0. 00";
    document.querySelector(".custom").value = null;
    document.getElementById("first_input").value = null;
    document.getElementById("input1").value=null;



});