function calculateChange() {
    var amountDue = document.getElementById('amount-due').value;
    var amountReceived =  document.getElementById('amount-received').value;

    //dealing with dollars below
    var changeDue = (amountReceived - amountDue).toFixed(2);
    var dollars = Math.trunc(changeDue);
    
    //dealing with cents below
    var centsConverted = Math.round(changeDue * 100);
    var cents = Number((centsConverted.toString().slice(-2)));

    var calcQuarter = Math.floor(cents/25);

    var calcDime = Math.floor((cents%25)/10);

    var calcNickel = Math.floor(((cents%25)%10)/5);
        
    var calcPenny = Math.floor((cents%25)%10)%5;    
    
    //dollar output to HTML below
    document.getElementById('dollars-output').innerHTML = dollars;
    //coin output to HTML below
    document.getElementById('quarters-output').innerHTML = calcQuarter;
    document.getElementById('dimes-output').innerHTML = calcDime;
    document.getElementById('nickels-output').innerHTML = calcNickel;
    document.getElementById('pennies-output').innerHTML = calcPenny;
    //total change output to HTML below
    document.getElementById('total-change').innerHTML = changeDue;
}

document.getElementById('calculate-change').addEventListener('click', function(){calculateChange()});
