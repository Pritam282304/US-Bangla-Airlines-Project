const toast = document.getElementById("toast");

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(window.toastTimer);
  window.toastTimer = setTimeout(() => toast.classList.remove("show"), 2200);
}

// Booking tabs
document.querySelectorAll(".tab").forEach(tab => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
    tab.classList.add("active");

    const messages = {
      book: "Booking form selected.",
      manage: "Manage Booking selected.",
      checkin: "Check-in selected.",
      travel: "Travel Requirements selected."
    };

    showToast(messages[tab.dataset.tab]);
  });
});

// Search
document.getElementById("searchBtn").addEventListener("click", () => {
  showToast("Please select a destination first.");
});

// Promo code
document.getElementById("promoBtn").addEventListener("click", () => {
  const code = prompt("Enter your promo code:");
  if (code && code.trim()) {
    showToast("Promo code added: " + code.trim());
  }
});

// Loyalty
document.getElementById("joinBtn").addEventListener("click", () => {
  showToast("Welcome to Sky Star!");
});

// Destination swap
document.getElementById("swapBtn").addEventListener("click", () => {
  const destination = document.getElementById("destinationBox");

  if (destination.dataset.swapped === "yes") {
    destination.innerHTML = "<span>Destination</span>";
    destination.dataset.swapped = "no";
  } else {
    destination.innerHTML =
      "<strong>Dhaka (DAC)</strong><small>Hazrat Shahjalal International Airport</small>";
    destination.dataset.swapped = "yes";
  }
});
