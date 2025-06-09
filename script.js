function togglePricing() {
  const table = document.getElementById("priceTable");
  table.classList.toggle("hidden");
}
const shops = {
  "new york": ["TimeFix NYC", "Manhattan Watch Co"],
  "london": ["Big Ben Repairs", "The Watch Hub"],
  "delhi": ["TimeZone India", "Clock & Co"],
  "tokyo": ["Precision Watchworks", "Tokyo ChronoFix"]
};
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const cityInput = document.getElementById("city").value.trim().toLowerCase();
  const result = shops[cityInput] || [];
  const shopList = document.getElementById("shopList");
  shopList.innerHTML = "";
  if (result.length === 0) {
    shopList.innerHTML = `<li>No shops found for "${cityInput}"</li>`;
  } else {
    result.map(shop => {
      const li = document.createElement("li");
      li.textContent = shop;
      shopList.appendChild(li);
    });
  }
});
