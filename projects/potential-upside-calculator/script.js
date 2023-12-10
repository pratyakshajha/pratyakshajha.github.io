window.onload = function () {
  document.getElementById("current-price").value = "";
  document.getElementById("forecasted-price").value = "";
  document.getElementById("investment-amount").value = "";
};

function calculate() {
  nf = new Intl.NumberFormat("en-IN");

  let currentPrice = document.getElementById("current-price").value;
  let forecastedPrice = document.getElementById("forecasted-price").value;
  let investmentAmount = document.getElementById("investment-amount").value;

  let difference = forecastedPrice - currentPrice;
  let quantity = investmentAmount / currentPrice;
  let quantityApprox = Math.floor(quantity);
  let profit = quantity * (forecastedPrice - currentPrice);
  let profitApprox = quantityApprox * (forecastedPrice - currentPrice);

  let differenceString = nf.format(difference.toFixed(2));
  let quantityString = nf.format(quantity.toFixed(2));
  let quantityApproxString = "( ~ " + nf.format(quantityApprox) + " )";
  let profitString = "\u20B9 " + nf.format(profit.toFixed(2));
  let profitApproxString =
    "( ~ \u20B9 " + nf.format(profitApprox.toFixed(2)) + " )";

  document.getElementById("difference").textContent = differenceString;
  document.getElementById("quantity").textContent = quantityString;
  document.getElementById("quantity-approx").textContent = quantityApproxString;
  document.getElementById("profit").textContent = profitString;
  document.getElementById("profit-approx").textContent = profitApproxString;
}
