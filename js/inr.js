function calculate(){
    var rupeecount = document.getElementById('rupee').value;
    var usd = 73.53;

    document.getElementById('result').innerHTML= `${rupeecount} RUPAY = ${rupeecount / usd } USD.`;

}