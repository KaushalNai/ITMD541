const conversionRates = {
    USD: { symbol: "$", rate: 1 },
    EUR: { symbol: "€", rate: 0.95 },
    INR: { symbol: "₹", rate: 85 }
  };
  
  const billTotalInput = document.getElementById("billTotal");
  const errorMessage = document.getElementById("errorMessage");
  const totalWithTaxInput = document.getElementById("totalWithTax");
  const tipPercentageSlider = document.getElementById("tipPercentage");
  const tipValueDisplay = document.getElementById("tipValue");
  const tipAmountInput = document.getElementById("tipAmount");
  const totalWithTipInput = document.getElementById("totalWithTip");
  const currencySelect = document.getElementById("currency");
  const convertedTipAmountInput = document.getElementById("convertedTipAmount");
  const convertedTotalWithTipAndTaxInput = document.getElementById("convertedTotalWithTipAndTax");

  billTotalInput.addEventListener("input", validateBillTotal);
  document.getElementById("tipForm").addEventListener("input", updateValues);
  
  function validateBillTotal() {
    const value = billTotalInput.value;
  
    if (isNaN(value) || value <= 0 || /[^0-9.]/.test(value)) {
        errorMessage.style.display = "inline";
        resetFields();
    } else {
        errorMessage.style.display = "none";
    }
  }
  
  function updateValues() {
    const billTotal = parseFloat(billTotalInput.value) || -1;
  
    if (billTotal <= 0) return; 
  
    const tipPercentage = parseFloat(tipPercentageSlider.value);
    const taxRate = 0.11;

    tipValueDisplay.textContent = `${tipPercentage}%`;
  

    const taxAmount = billTotal * taxRate;
    const totalWithTax = billTotal + taxAmount;
  
    const tipAmount = (billTotal * tipPercentage) / 100;
    const totalWithTip = billTotal + tipAmount;
  

    totalWithTaxInput.value = totalWithTax.toFixed(2);
    tipAmountInput.value = tipAmount.toFixed(2);
    totalWithTipInput.value = totalWithTip.toFixed(2);
  

    const selectedCurrency = currencySelect.value;
    const conversionRate = conversionRates[selectedCurrency].rate;
  
    convertedTipAmountInput.value =
        (tipAmount * conversionRate).toFixed(2) + " " + conversionRates[selectedCurrency].symbol;
  
    convertedTotalWithTipAndTaxInput.value =
        ((totalWithTax + tipAmount) * conversionRate).toFixed(2) + " " + conversionRates[selectedCurrency].symbol;
  }
  

  function resetFields() {
    totalWithTaxInput.value = "";
    tipAmountInput.value = "";
    totalWithTipInput.value = "";
    convertedTipAmountInput.value = "";
    convertedTotalWithTipAndTaxInput.value = "";
  }