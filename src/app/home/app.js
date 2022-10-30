function calculate() {

    var principal = document.loandata.principal.value;

    var interest = document.loandata.interest.value / 100 / 12;
    var payments = document.loandata.years.value;

    var x = Math.pow(1 + interest, payments);
    var monthly = (principal * x * interest) / (x - 1);

    if (!isNaN(monthly) &&
        (monthly != Number.POSITIVE_INFINITY) &&
        (monthly != Number.NEGATIVE_INFINITY)) {

        document.loandata.payment.value = round(monthly);
        document.loandata.total.value = round(monthly * payments);
        document.loandata.totalinterest.value =
            round((monthly * payments) - principal);

    } else {
        if (principal == "" || principal == null) {
            alert("Please fill the value correctly");
        }
    }
}

function round(x) {
    return Math.round(x * 100) / 100;
}