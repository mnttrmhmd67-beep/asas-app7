function sendOrder(){

const name = document.getElementById("name").value
const phone = document.getElementById("phone").value
const city = document.getElementById("city").value
const product = document.getElementById("product").value
const qty = document.getElementById("qty").value

let orders = JSON.parse(localStorage.getItem("orders") || "[]")

orders.push({
clientName:name,
phone:phone,
city:city,
product:product,
qty:qty,
total: qty * 800000,
status:"جديد"
})

localStorage.setItem("orders",JSON.stringify(orders))

alert("تم إرسال الطلب")

}

function loadAdmin(){

const div = document.getElementById("orders")

if(!div) return

const orders = JSON.parse(localStorage.getItem("orders") || "[]")

div.innerHTML=""

orders.forEach((o,i)=>{

div.innerHTML += `
<div class="card">

<h3>${o.product}</h3>

<p>${o.clientName}</p>

<p>${o.phone}</p>

<p>${o.qty} طن</p>

<p>${o.status}</p>

<button onclick="approve(${i})">موافقة</button>

<button onclick="reject(${i})">رفض</button>

</div>
`

})

}

function approve(i){

let orders = JSON.parse(localStorage.getItem("orders"))

orders[i].status="مقبول"

localStorage.setItem("orders",JSON.stringify(orders))

loadAdmin()

}

function reject(i){

let orders = JSON.parse(localStorage.getItem("orders"))

orders[i].status="مرفوض"

localStorage.setItem("orders",JSON.stringify(orders))

loadAdmin()

}

function loadSupplier(){

const div = document.getElementById("orders")

if(!div) return

const orders = JSON.parse(localStorage.getItem("orders") || "[]")

div.innerHTML=""

orders.filter(o=>o.status==="مقبول").forEach((o)=>{

div.innerHTML += `
<div class="card">

<h3>${o.product}</h3>

<p>${o.clientName}</p>

<p>${o.phone}</p>

<p>${o.qty} طن</p>

</div>
`

})

}

loadAdmin()
loadSupplier()
