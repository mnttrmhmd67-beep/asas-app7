// إرسال الطلب من صفحة العميل
function sendOrder() {
  const name = document.getElementById("name").value.trim()
  const phone = document.getElementById("phone").value.trim()
  const city = document.getElementById("city").value.trim()
  const product = document.getElementById("product").value.trim()
  const qty = parseInt(document.getElementById("qty").value)

  if (!name || !phone || !city || !product || !qty) {
    alert("الرجاء ملء جميع الحقول")
    return
  }

  let orders = JSON.parse(localStorage.getItem("orders") || "[]")

  orders.push({
    clientName: name,
    phone: phone,
    city: city,
    product: product,
    qty: qty,
    total: qty * 800000,
    status: "جديد"
  })

  localStorage.setItem("orders", JSON.stringify(orders))
  alert("تم إرسال الطلب")
  loadAdmin() // لتحديث لوحة المسؤول إذا كانت مفتوحة
}

// تحميل الطلبات في لوحة المسؤول
function loadAdmin() {
  const div = document.getElementById("orders")
  if (!div) return

  const orders = JSON.parse(localStorage.getItem("orders") || "[]")
  div.innerHTML = ""

  if (orders.length === 0) {
    div.innerHTML = "<p>لا توجد طلبات</p>"
    return
  }

  orders.forEach((o, i) => {
    const card = document.createElement("div")
    card.className = "card"
    card.innerHTML = `
      <h3>${o.product}</h3>
      <p>العميل: ${o.clientName}</p>
      <p>الهاتف: ${o.phone}</p>
      <p>المدينة: ${o.city}</p>
      <p>الكمية: ${o.qty}</p>
      <p>الحالة: ${o.status}</p>
      <button onclick="approve(${i})">موافقة</button>
      <button onclick="reject(${i})">رفض</button>
    `
    div.appendChild(card)
  })
}

// تحميل الطلبات في صفحة المورد
function loadSupplier() {
  const div = document.getElementById("orders")
  if (!div) return

  const orders = JSON.parse(localStorage.getItem("orders") || "[]")
  div.innerHTML = ""

  orders.filter(o => o.status === "مقبول").forEach(o => {
    const card = document.createElement("div")
    card.className = "card"
    card.innerHTML = `
      <h3>${o.product}</h3>
      <p>العميل: ${o.clientName}</p>
      <p>الهاتف: ${o.phone}</p>
      <p>المدينة: ${o.city}</p>
      <p>الكمية: ${o.qty}</p>
    `
    div.appendChild(card)
  })
}

// الموافقة على الطلب
function approve(i) {
  let orders = JSON.parse(localStorage.getItem("orders") || "[]")
  orders[i].status = "مقبول"
  localStorage.setItem("orders", JSON.stringify(orders))
  loadAdmin()
}

// رفض الطلب
function reject(i) {
  let orders = JSON.parse(localStorage.getItem("orders") || "[]")
  orders[i].status = "مرفوض"
  localStorage.setItem("orders", JSON.stringify(orders))
  loadAdmin()
}

// تحميل الطلبات عند فتح الصفحة
document.addEventListener("DOMContentLoaded", () => {
  loadAdmin()
  loadSupplier()
})
