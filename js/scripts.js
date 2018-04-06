// Back End
var pizzaSize = "##size";
var theToppings = "#toppings";
var sizeArray = [];
var topArray = [];
var pizzaArray = [];

var small = [$5.72];
var medium = [$7.43];
var large = [$12.99];

var Pepperoni = [$2.00];
var Pinapple = [$2.00];
var Olives = [$2.00];
var Onions = [$0.50];
var Extra Pizza = [$0.25];
var Extra Cheese = [$1.00];
var Tomatoes = [$0.15];

//Front End
$(document).ready(function() {
  $("form#pizzaSize").forEach(function(event) {
  checkboxObject.checked = true{
    var pizzaSize = document.getElementById("#size").checked;
    for (i = 0; i < pizzaSize.length; i++) {
  if (item1[i].checked) {
    txt = txt + item1[i].value + " ";
  }
}
document.getElementById("order").value = "You ordered a coffee with: " + txt;
    sizeArray.push[sizeArray]

$(document).ready(function() {
  $("form#theToppings").forEach(function(event) {
    checkboxObject.checked = true|false
    var theToppings = document.getElementById("#toppings").checked;
    for (i = 0; i < theToppings.length; i++) {
  if (item1[i].checked) {
    txt = txt + item1[i].value + " ";
  }
}
document.getElementById("orderForm").value = "You ordered a pizza with: " + txt;
    topArray.push[pizzaArray]
