
var chk = true;

function createLight(color,size,intensity,amount,rows){

    let lightContent = document.getElementById("light-content")

    for(let x = 0; x < rows ;x ++){
        var row = document.createElement("div")
        row.className = 'col d-flex justify-content-around p-4'
        for(let i = 0 ; i < amount ; i++){
            
            var div = document.createElement('div');
                div.style.width = size;
                div.style.height = size;
                div.className = 'border rounded-circle tinkle';
                div.style.backgroundColor = color;
                row.appendChild(div);
                lightContent.appendChild(row)
        }
    } 
}
 
function clearContent(){

    var lightContent = document.getElementById("light-content")
    
    let count ;
    for(count = lightContent.childElementCount; count > 0 ; count--){
        lightContent.childNodes[count].remove()
    }
}

function tinkle(int='', action){

    var glower = $('.tinkle');

    var id = window.setInterval(function() {  
    glower.toggleClass(action);

}, int);


    let btnToggle = document.getElementById("switch");

    btnToggle.addEventListener('click', (e) => {
            
        if(chk){
            chk = false;
            clearInterval(id)
        }else{
            tinkle(intensity.value, 'active');
            chk = true;
        }
    
    })
}

let btn = document.getElementById("btn-toggle");

btn.addEventListener('click', (e) => {

    let color = document.getElementById("color");
    let size = document.getElementById("size");
    let intensity = document.getElementById("intensity");
    let amount = document.getElementById("amount");
    let rows = document.getElementById("rows");


    clearContent()
    createLight(color.value,size.value,intensity.value,parseInt(amount.value), parseInt(rows.value))
    tinkle(intensity.value, 'active');
})
