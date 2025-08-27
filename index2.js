


// Global copy counter
let copyCount = 0;

// DOM Elements
const copyCounter = document.querySelector("nav button span"); // The counter inside nav Copy button
const callHistoryContainer = document.querySelector(".History .p-5.space-y-5");

// Copy button functionality
const copyButtons = document.getElementsByClassName("copy-button");
for (let i = 0; i < copyButtons.length; i++) {
  copyButtons[i].addEventListener("click", function () {
    const card = this.closest(".w-[400px]"); // get the card element
    const number = card.querySelector("h1 + p, h1 + h1, h1 + p + h1").innerText || card.querySelector("h1 + h1").innerText;

    // Copy to clipboard
    navigator.clipboard.writeText(number)
      .then(() => {
        alert("Hotline number copied!");
        copyCount++;
        copyCounter.innerText = copyCount;
      })
      .catch(err => console.error("Failed to copy:", err));
  });
}

// Call button functionality
const callButtons = document.getElementsByClassName("call-button");
for (let i = 0; i < callButtons.length; i++) {
  callButtons[i].addEventListener("click", function () {
    const card = this.closest(".w-[400px]");
    const name = card.querySelector("h1").innerText;
    const number = card.querySelector("h1 + p, h1 + h1, h1 + p + h1").innerText || card.querySelector("h1 + h1").innerText;

    // Get current time
    const time = new Date().toLocaleTimeString();

    // Create call history item
    const historyItem = document.createElement("div");
    historyItem.className = "flex justify-between p-5 bg-[#fafafa] shadow rounded-[8px]";
    historyItem.innerHTML = `
      <div>
        <h1 class="text-2xl font-semibold">${name}</h1>
        <p class="text-[#5C5C5C]">${number}</p>
      </div>
      <div>
        <h2>${time}</h2>
      </div>
    `;

    callHistoryContainer.prepend(historyItem);
  });
}

// Optional: Clear History button
const clearBtn = document.querySelector(".History button");
clearBtn.addEventListener("click", () => {
  callHistoryContainer.innerHTML = "";
});
