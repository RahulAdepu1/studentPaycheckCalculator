const yearlyInput = document.getElementById('yearly');
const monthlyInput = document.getElementById('monthly');
const biweeklyInput = document.getElementById('biweekly');
const weeklyInput = document.getElementById('weekly');
const dailyInput = document.getElementById('daily');
const hourlyInput = document.getElementById('hourly');
const hourWorkedInput = document.getElementById('hourWorked');

function changeYearlyValue() {
    const yearlyValue = parseFloat(yearlyInput.value);
    const hoursWorked = parseFloat(hourWorkedInput.value) * 52;

    if (!isNaN(yearlyValue)) {
        monthlyInput.value = (yearlyValue / 12).toFixed(2);
        biweeklyInput.value = (yearlyValue / 26).toFixed(2);
        weeklyInput.value = (yearlyValue / 52).toFixed(2);
        dailyInput.value = (yearlyValue / 260).toFixed(2);
        hourlyInput.value = (yearlyValue / hoursWorked).toFixed(2);
    }
}

function changeMonthlyValue() {
    const monthlyValue = parseFloat(monthlyInput.value) * 12;
    const hoursWorked = parseFloat(hourWorkedInput.value) * 52;

    if (!isNaN(monthlyValue)) {
        yearlyInput.value = (monthlyValue).toFixed(2);
        biweeklyInput.value = (monthlyValue / 26).toFixed(2);
        weeklyInput.value = (monthlyValue / 52).toFixed(2);
        dailyInput.value = (monthlyValue / 260).toFixed(2);
        hourlyInput.value = (monthlyValue / hoursWorked).toFixed(2);
    }
}

function changeBiweeklyValue() {
    const biweeklyValue = parseFloat(biweeklyInput.value) * 26;
    const hoursWorked = parseFloat(hourWorkedInput.value) * 52;

    if (!isNaN(biweeklyValue)) {
        yearlyInput.value = (biweeklyValue).toFixed(2);
        monthlyInput.value = (biweeklyValue / 12).toFixed(2);
        weeklyInput.value = (biweeklyValue / 52).toFixed(2);
        dailyInput.value = (biweeklyValue / 260).toFixed(2);
        hourlyInput.value = (biweeklyValue / hoursWorked).toFixed(2);
    }
}

function changeWeeklyValue() {
    const weeklyValue = parseFloat(weeklyInput.value) * 52;
    const hoursWorked = parseFloat(hourWorkedInput.value) * 52;

    if (!isNaN(weeklyValue)) {
        yearlyInput.value = (weeklyValue).toFixed(2);
        monthlyInput.value = (weeklyValue / 12).toFixed(2);
        biweeklyInput.value = (weeklyValue / 26).toFixed(2);
        dailyInput.value = (weeklyValue / 260).toFixed(2);
        hourlyInput.value = (weeklyValue / hoursWorked).toFixed(2);
    }
}

function changeDailyValue() {
    const dailyValue = parseFloat(dailyInput.value) * 260;
    const hoursWorked = parseFloat(hourWorkedInput.value) * 52;

    if (!isNaN(dailyValue)) {
        yearlyInput.value = (dailyValue).toFixed(2);
        monthlyInput.value = (dailyValue / 12).toFixed(2);
        biweeklyInput.value = (dailyValue / 26).toFixed(2);
        weeklyInput.value = (dailyValue / 52).toFixed(2);
        hourlyInput.value = (dailyValue / hoursWorked).toFixed(2);
    }
}

function changeHourlyValue() {
    const hoursWorked = parseFloat(hourWorkedInput.value) * 52;
    const hourlyValue = parseFloat(hourlyInput.value) * hoursWorked;

    if (!isNaN(hourlyValue)) {
        yearlyInput.value = (hourlyValue).toFixed(2);
        monthlyInput.value = (hourlyValue / 12).toFixed(2);
        biweeklyInput.value = (hourlyValue / 26).toFixed(2);
        weeklyInput.value = (hourlyValue / 52).toFixed(2);
        dailyInput.value = (hourlyValue / 260).toFixed(2);
    }
}

function changeHourValue() {
    const hoursWorked = parseFloat(hourWorkedInput.value) * 52;
    const hourlyValue = parseFloat(hourlyInput.value);
    const yearlyValue = hourlyValue * hoursWorked

    if (!isNaN(hourlyValue)) {
        yearlyInput.value = (yearlyValue).toFixed(2);
        monthlyInput.value = (yearlyValue / 12).toFixed(2);
        biweeklyInput.value = (yearlyValue / 26).toFixed(2);
        weeklyInput.value = (yearlyValue / 52).toFixed(2);
        dailyInput.value = (yearlyValue / 260).toFixed(2);
    }
}

yearlyInput.addEventListener('input', changeYearlyValue);
monthlyInput.addEventListener('input', changeMonthlyValue);
biweeklyInput.addEventListener('input', changeBiweeklyValue);
weeklyInput.addEventListener('input', changeWeeklyValue);
dailyInput.addEventListener('input', changeDailyValue);
hourlyInput.addEventListener('input', changeHourlyValue);
hourWorkedInput.addEventListener('input', changeHourValue);