function order(size){

let name = prompt("ادخل اسمك");
let qty = prompt("ادخل الكمية بالطن");

let message =
"طلب حديد من منصة أساس" +
"%0Aالاسم: " + name +
"%0Aالقطر: " + size +
"%0Aالكمية: " + qty + " طن";

window.open(
"https://wa.me/9647732670436?text="+message
);

}
