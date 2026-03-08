const whatsappNumber = "07732670436";

document.querySelectorAll(".product-card").forEach(card => {
  const input = card.querySelector("input[type='number']");
  const btn = card.querySelector(".btn-whatsapp");
  const name = card.dataset.name;
  const price = card.dataset.price;

  function updateLink() {
    const qty = input.value || 1;
    const total = qty * price;
    const message = `أريد طلب ${qty} طن من ${name} - المجموع: ${total.toLocaleString()} دينار`;
    btn.href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  }

  input.addEventListener("input", updateLink);
  updateLink();
});
