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
      let secondLineText = card.querySelector(".Text2ndline").textContent;
      let thirdLineText = card.querySelector(".Text3rdline").textContent;

      // let secondThirdText = `${secondLineText} ${thirdLineText}`;
      alert(`📞Calling${secondLineText}${thirdLineText}`);
    } else {
      alert("❌আপনার পর্যাপ্ত কয়েন নেই কল করতে কমপক্ষে ২০ কয়েন লাগবে।");
    }
  });
}
