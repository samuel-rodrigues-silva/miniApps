
let btnConvert = document.getElementById('btnConvert');
let inputBin = document.getElementById('inputBin');

    inputBin.addEventListener('keydown', e=>{
        inputBin.value.substring(0,8)
        console.log(e.keyCode)
        if((e.keyCode >= 32 && e.keyCode <= 47) ||
          (e.keyCode >=50 && e.keyCode <= 95) || 
          (e.keyCode >=98 && e.keyCode <= 127)){
            e.preventDefault()
        }
    })

    btnConvert.addEventListener('click', () =>{

        let val = document.getElementById('inputBin').value;
        let length = val.length
        let decimal = 0;
        Array.from(val).forEach(element => {
            console.log(length, decimal)
            decimal += (parseInt(element) * Math.pow(2,length-1));
            length--
        });
        document.getElementById('decimal').innerHTML ="Decimal: "
        document.getElementById('decimal').innerHTML += decimal
    })