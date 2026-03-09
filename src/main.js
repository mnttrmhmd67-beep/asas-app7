const products = [
  { diameter: 12, price: 110000 }, 
  { diameter: 14, price: 130000 },
  { diameter: 16, price: 160000 },
  { diameter: 18, price: 180000 },
  { diameter: 20, price: 200000 },
  { diameter: 22, price: 220000 },
  { diameter: 25, price: 250000 },
  { diameter: 28, price: 280000 },
  { diameter: 32, price: 320000 }
];

const productBody = document.getElementById('productBody');

products.forEach(p => {
  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${p.diameter}</td>
    <td>${p.price.toLocaleString('ar-IQ')}</td>
    <td><input type="number" min="1" value="1" class="qty"></td>
    <td class="total">${p.price.toLocaleString('ar-IQ')}</td>
    <td><button class="order">طلب</button></td>
  `;
  productBody.appendChild(row);

  const qtyInput = row.querySelector('.qty');
  const totalCell = row.querySelector('.total');
  const orderBtn = row.querySelector('.order');

  qtyInput.addEventListener('input', () => {
    const total = qtyInput.value * p.price;
    totalCell.textContent = total.toLocaleString('ar-IQ');
  });

  orderBtn.addEventListener('click', () => {
    const qty = qtyInput.value;
    const total = qty * p.price;
    const message = `طلب حديد قطر ${p.diameter} مم - الكمية: ${qty} طن - الإجمالي: ${total.toLocaleString('ar-IQ')} عراقي`;
    const phone = "07732670436"; // رقم المورد
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
  });
});
