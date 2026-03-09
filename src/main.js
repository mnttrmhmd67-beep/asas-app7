function sendOrder(){

let diameter = document.getElementById("diameter").value
let qty = document.getElementById("qty").value
let location = document.getElementById("location").value

let message =
"طلب جديد من منصة أساس" +
"%0Aقطر الحديد: " + diameter +
"%0Aالكمية: " + qty + " طن" +
"%0Aالموقع: " + location

let phone = "9647732670436"

window.open("https://wa.me/" + phone + "?text=" + message)

}
