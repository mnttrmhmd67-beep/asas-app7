function sendOrder(){

let diameter = document.getElementById("diameter").value
let qty = document.getElementById("qty").value
let location = document.getElementById("location").value

let order = {
diameter: diameter,
qty: qty,
location: location,
status: "pending",
prices: []
}

let orders = JSON.parse(localStorage.getItem("orders")) || []

orders.push(order)

localStorage.setItem("orders", JSON.stringify(orders))

alert("تم إرسال الطلب")

}
