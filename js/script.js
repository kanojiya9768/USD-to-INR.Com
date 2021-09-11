function calculate(){
    var usdcount = document.getElementById('usd').value;
    var inr = 73.53;

    document.getElementById('result').innerHTML= `${usdcount} USD = ${usdcount * inr} Rupay.`;

}