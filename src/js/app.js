let orders = JSON.parse(localStorage.getItem("orders")) || [];

function order(size,price){

let name = prompt("اسمك");
let qty = prompt("الكمية بالطن");

let newOrder = {
name:name,
size:size,
qty:qty,
price:price,
status:"pending"
};

orders.push(newOrder);

localStorage.setItem("orders",JSON.stringify(orders));

alert("تم إرسال الطلب");

}
