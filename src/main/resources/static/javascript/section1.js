const salaryRate = document.getElementById('salary-rate-id');
const hoursWorked = document.getElementById('hours-worked-id');
const payType = document.getElementById('salary-pay-type-id');
const payFrequency = document.getElementById('salary-pay-freq-id');

// User output values
const totalSalaryOutput = document.getElementById('salaryTotal');
const fedIncomeTaxOutput = document.getElementById('fedIncomeTax');
const stateIncomeTaxOutput = document.getElementById('stateIncomeTax');
const totalTaxOutput = document.getElementById('totalTax');
const netPayOutput = document.getElementById('netPay');
const totalTaxRateOutput = document.getElementById('totalTaxRate');


function calculateResult() {
    const salaryRateValue = parseFloat(salaryRate.value);
    const hoursWorkedValue = parseFloat(hoursWorked.value);
    const payTypeValue = payType.value;
    const payFrequencyValue = payFrequency.value;

    let yearlySalaryValue = 0;
    let payFrequencyDivisor = 0;

    if (payTypeValue === 'Hourly') {
        hoursWorked.removeAttribute('disabled');
        yearlySalaryValue = (salaryRateValue * hoursWorkedValue) * 52;
    }else if (payTypeValue === 'Monthly') {
        hoursWorked.setAttribute('disabled', true);
        yearlySalaryValue = salaryRateValue * 12;
    }

    // Calculating Federal Tax
    let federalTaxValue = 0;
    let tempYearlyValue = yearlySalaryValue
    while (tempYearlyValue<0) {

    }
    if (yearlySalaryValue > 0 && yearlySalaryValue < 13850) {
        federalTaxValue = 0;
    }else {
        federalTaxValue = (yearlySalaryValue - 13850) * 0.1;
    }

    // Calculating State Tax
    let stateTaxValue = 0;
    if (yearlySalaryValue > 0 && yearlySalaryValue < 2625) {
        stateTaxValue = 0;
    }else {
        stateTaxValue = (yearlySalaryValue - 2625) * 0.0495;
    }
    

    // Calculate values for Bi-Monthly or Monthly from yearly
    let totalSalaryValue = 0;
    if (payFrequencyValue === 'Bi-Monthly') {
        totalSalaryValue = yearlySalaryValue / 24
        federalTaxValue = federalTaxValue / 24
        stateTaxValue = stateTaxValue / 24
    }else {
        totalSalaryValue = yearlySalaryValue /12
        federalTaxValue = federalTaxValue / 12
        stateTaxValue = stateTaxValue / 12
    }

    // Calculating Total Tax
    let totalTaxValue;
    totalTaxValue = federalTaxValue + stateTaxValue;
    
    // Calculating NetPay
    let netPayValue;
    netPayValue = totalSalaryValue - totalTaxValue;
    
    // Calculating Average Tax Rate
    let totalTaxRateValue;
    totalTaxRateValue = (totalTaxValue/totalSalaryValue)*100;

    totalSalaryOutput.innerHTML = "$"+totalSalaryValue.toFixed(2);
    fedIncomeTaxOutput.innerHTML = "$"+federalTaxValue.toFixed(2);
    stateIncomeTaxOutput.innerHTML = "$"+stateTaxValue.toFixed(2);
    totalTaxOutput.innerHTML = "$"+totalTaxValue.toFixed(2);
    netPayOutput.innerHTML = "$"+netPayValue.toFixed(2);
    totalTaxRateOutput.innerHTML = totalTaxRateValue.toFixed(2)+"%";
}

salaryRate.addEventListener('input', calculateResult);
hoursWorked.addEventListener('input', calculateResult);
payType.addEventListener('change', calculateResult);
payFrequency.addEventListener('change', calculateResult);