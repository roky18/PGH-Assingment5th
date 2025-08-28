////Heart Click Counter///
let totalClicks = 0;

let tochHeartBtns = document.querySelectorAll(".heart-btn");

for (let tochHeartBtn of tochHeartBtns) {
  tochHeartBtn.addEventListener("click", function () {
    totalClicks++;

    document.getElementById("click-counter").textContent = totalClicks;
  });
}

// calling section ///
let totalCoin = 100;
let totalCoins = document.getElementById("coin-store");
totalCoins.textContent = totalCoin;
let callBtns = document.querySelectorAll(".call-btn");

for (let callBtn of callBtns) {
  callBtn.addEventListener("click", function () {
    if (totalCoin >= 20) {
      totalCoin -= 20;
      totalCoins.textContent = totalCoin;

      let card = callBtn.closest(".cards-all");
      let secondLineText = card
        .querySelector(".Text2ndline")
        .textContent.trim();
      let thirdLineText = card.querySelector(".Text3rdline").textContent.trim();

      alert("📞Calling" + " " + secondLineText + " " + thirdLineText + "...");
    } else {
      alert("❌আপনার পর্যাপ্ত কয়েন নেই কল করতে কমপক্ষে ২০ কয়েন লাগবে।");
    }
  });
}

//cart section///
function getEleID(id) {
  let element = document.getElementById(id);
  return element;
}

let cardCallBtns = document.querySelectorAll(".call-btn");
for (let cardCallBtn of cardCallBtns) {
  cardCallBtn.addEventListener("click", function () {
    let helpName =
      cardCallBtn.parentNode.parentNode.parentNode.children[1].children[0]
        .innerText;
    let helpNum =
      cardCallBtn.parentNode.parentNode.parentNode.children[1].children[2]
        .innerText;
    let cardContainer = getEleID("cart-container");
    let time = new Date().toLocaleTimeString();
    let newCart = document.createElement("div");
    newCart.innerHTML = `
<div class="bg-[#f2f2f2] rounded-xl p-4 flex justify-between items-center">
              <div>
              <h1 class="font-bold">${helpName}</h1>
              <h1 class="font-bold text-[#707070]">${helpNum}</h1>
              </div>
              <div>
              <h1>${time}</h1>
              </div>

            </div>
`;
    cardContainer.append(newCart);
  });
}

getEleID("clear-btn").addEventListener("click", function () {
  let cardContainer = getEleID("cart-container");
  cardContainer.innerHTML = "";
});

// copy section///
let totalCopy = 2;

let copyBtns = document.querySelectorAll(".copy-btn");

for (let copyBtn of copyBtns) {
  copyBtn.addEventListener("click", function () {
    totalCopy++;

    document.getElementById("Copy-count").textContent = totalCopy;

    let copyTargetText =
      copyBtn.parentNode.parentNode.parentNode.children[1].children[2]
        .innerText;
    navigator.clipboard.writeText(copyTargetText).then(function () {
      alert("নম্বর কপি হয়েছেঃ " + copyTargetText);
    });
  });
}
