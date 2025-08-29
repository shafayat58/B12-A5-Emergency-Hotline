// Heart function
let heartCont = 0;

function heart(id) {
  heartCont++;
  document.getElementById(id).innerText = heartCont;
}

// Heart buttons loop
for (let i = 1; i <= 9; i++) {
  let heartBtn = document.getElementById("card-heart" + i);
  if (heartBtn) {
    heartBtn.addEventListener("click", function (event) {
      event.preventDefault();
      heart("heart-Count");
    });
  }
}



// call function

let coinCount = 100;

function handleCall(serviceId) {
  const serviceName = document.getElementById("service-name" + serviceId).innerText;
  const serviceNumber = document.getElementById("service-number" + serviceId).innerText;

  if (coinCount < 20) {
    alert("Not enough coins to make a call!");
    return;
  }

  coinCount -= 20;
  document.getElementById("coin-Count").innerText = coinCount;

  alert(serviceName + " " + serviceNumber);
  console.log(coinCount);

  // Update call history

  historyUpdate(serviceName, serviceNumber);
}

// Call buttons loop

for (let i = 1; i <= 9; i++) {
  let callBtn = document.getElementById("call-btn" + i);
  if (callBtn) {
    callBtn.addEventListener("click", function () {
      handleCall(i);
    });
  }
}


function historyUpdate(callDestination, callNumber) {
  const historyParentDiv = document.createElement("div");
  historyParentDiv.classList.add("historyParent");

  const div1 = document.createElement("div");
  div1.classList.add("history-content");

  const paragraph1 = document.createElement("p");
  paragraph1.innerText = callDestination;
  div1.appendChild(paragraph1);

  const paragraph2 = document.createElement("p");
  paragraph2.innerText = callNumber;
  div1.appendChild(paragraph2);

  historyParentDiv.appendChild(div1);

  const newDate = new Date().toLocaleDateString("en-us", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
  });
  const newTime = new Date().toLocaleTimeString("en-us");

  const div2 = document.createElement("div");
  div2.classList.add("datetime");

  const time1 = document.createElement("p");
  time1.innerText = newTime;
  div2.appendChild(time1);



  historyParentDiv.appendChild(div2);

  document.getElementById("history-content").appendChild(historyParentDiv);
}


document.getElementById("clear-history").addEventListener("click", function () {
  document.getElementById("history-content").innerHTML = "";
});





    // copy handaller
    document.addEventListener('DOMContentLoaded', () => {
      // Optional copy counter
      const copyCountEl = document.getElementById('copyCount');
  let copyCount = parseInt(copyCountEl?.textContent || '0', 10) || 0;

  
  function copyText(text) {
        if (navigator.clipboard && window.isSecureContext) {
          return navigator.clipboard.writeText(text);
        }
  
  const ta = document.createElement('textarea');
  ta.value = text;
  ta.style.position = 'fixed';
  ta.style.left = '-9999px';
  document.body.appendChild(ta);
  ta.select();
  try {document.execCommand('copy'); } finally {document.body.removeChild(ta); }
  return Promise.resolve();
      }

     
      document.addEventListener('click', async (e) => {
        const btn = e.target.closest('.copy-btn');
  if (!btn) return;

  
  let textToCopy = btn.dataset.number;

  
  if (!textToCopy) {
          const card = btn.closest('[data-card]');
  textToCopy = card?.querySelector('[data-copy-text]')?.textContent?.trim();
        }

  if (!textToCopy) {
    alert('Nothing to copy for this card.');
  return;
        }

  try {
    await copyText(textToCopy);

 
  if (copyCountEl) {
    copyCount += 1;
  copyCountEl.textContent = String(copyCount);
          }

  
  alert('Copied: ' + textToCopy);
        } catch (err) {
    console.error('Copy failed:', err);
  alert('Copy failed. Please copy manually.');
        }
      });
    });

