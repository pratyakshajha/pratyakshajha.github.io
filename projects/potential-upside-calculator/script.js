function calculate() {

    let currentPrice = document.getElementById('current-price').value;
    let forecastedPrice = document.getElementById('forecasted-price').value;
    let investmentAmount = document.getElementById('investment-amount').value;
  
    console.log(currentPrice);
    console.log(forecastedPrice);
    console.log(investmentAmount);
  
    let difference = forecastedPrice - currentPrice;
    let quantity = investmentAmount / currentPrice;
    let profit = quantity * (forecastedPrice - currentPrice);
  
    console.log(difference);
    console.log(quantity);
    console.log(profit);
  
    document.getElementById('difference').textContent = difference;
    document.getElementById('quantity').textContent = quantity;
    document.getElementById('profit').textContent = profit;
  
  }