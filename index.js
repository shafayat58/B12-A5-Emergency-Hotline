

  document.addEventListener('DOMContentLoaded', function () {
  
  var callHistory = []; 

  
  var coinCounter   = document.getElementById('coinCount');
  var heartCounter  = document.getElementById('heartCount');
  var clearBtn      = document.getElementById('clearHistory');
  var historyList   = document.getElementById('callHistory');

  
  var coins  = parseInt(coinCounter ? coinCounter.innerText : '0', 10) || 0;
  var hearts = parseInt(heartCounter ? heartCounter.innerText : '0', 10) || 0;

 
  var heartIcons = document.getElementsByClassName('card-heart');
  for (var i = 0; i < heartIcons.length; i++) {
    heartIcons[i].onclick = function () {
      hearts = hearts + 1;
      if (heartCounter) {
        heartCounter.innerText = hearts;
      }
    };
  }

  
  var copyButtons = document.getElementsByClassName('copy-btn');
  for (var j = 0; j < copyButtons.length; j++) {
    copyButtons[j].onclick = function () {
      var number = this.getAttribute('data-number') || '';
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(number).then(function () {
          alert('Copied: ' + number);
        }, function () {
          alert('Number: ' + number);
        });
      } else {
        alert('Number: ' + number);
      }
    };
  }

  
  var callButtons = document.getElementsByClassName('call-btn');
  for (var k = 0; k < callButtons.length; k++) {
    callButtons[k].onclick = function () {
      var name = this.getAttribute('data-label') || 'Unknown Service';
      var number = this.getAttribute('data-number') || 'N/A';

      
      if (coins < 20) {
        alert('Not enough coins to make a call. You need 20 coins.');
        return;
      }

     
      coins = coins - 20;
      if (coinCounter) {
        coinCounter.innerText = coins;
      }

      
      alert('Calling ' + name + ' at ' + number);

      
      addToHistory(name, number);
    };
  }

  
  function addToHistory(name, number) {
    var item = {
    name: name,
  number: number,
  when: new Date().toLocaleTimeString()
    };
  callHistory.push(item);
  renderHistory();
  }

  
  function renderHistory() {
    if (!historyList) return;

  
  historyList.innerHTML = '';

  
  for (var i = 0; i < callHistory.length; i++) {
      var data = callHistory[i];

  var row = document.createElement('div');
    row.className = 'flex justify-between items-start p-3  bg-[#fafafa] p-3 rounded-[20px] shadow';

  var left = document.createElement('div');

  var nameDiv = document.createElement('div');
  nameDiv.className = 'font-semibold';
  nameDiv.innerText =  data.name;

  var numberDiv = document.createElement('div');
  numberDiv.className = 'text-[#5C5C5C]';
  numberDiv.innerText =  data.number;

  left.appendChild(nameDiv);
  left.appendChild(numberDiv);

  var right = document.createElement('div');
  right.className = 'text-xs opacity-75';
  right.innerText = data.when;

  row.appendChild(left);
  row.appendChild(right);

  historyList.appendChild(row);
    }
  }


  if (clearBtn) {
    clearBtn.onclick = function () {
      callHistory.length = 0; 
      renderHistory();        
    };
  }

  
  renderHistory();
});

