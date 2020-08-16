
let i1 = document.getElementById("b_1")
let i2 = document.getElementById("b_2")
let i3 = document.getElementById("b_3")
let i4 = document.getElementById("b_4")
let list = [i1,i2,i3,i4];
let result = document.getElementById("result")

    list.forEach(l=>{
        l.addEventListener('change', e =>{
            changeBorder(e.target.id, e.srcElement.value)
        })
    })


function changeBorder(id, value){

    let box = document.getElementById("box");

    if(id == 'b_1'){
        box.style.borderTopLeftRadius = value + 'px';
    }else if(id == 'b_2'){
        box.style.borderTopRightRadius = value + 'px';
    }else if(id == 'b_3'){
        box.style.borderBottomRightRadius = value + 'px';
    }else if(id == 'b_4'){
        box.style.borderBottomLeftRadius = value + 'px';
    }

    

    result.innerHTML = `
    border-top-left-radius: ${ box.style.borderTopLeftRadius} ;</br>
    border-top-right-radius: ${ box.style.borderTopRightRadius} ;</br>
    border-bottom-left-radius: ${ box.style.borderBottomRightRadius} ;</br>
    border-bottom-right-radius: ${ box.style.borderBottomLeftRadius} ; 
    `
    result.appendChild(document.createElement('p')).innerHTML =`
        border: ${ box.style.borderTopLeftRadius} , ${ box.style.borderTopRightRadius} , ${ box.style.borderBottomRightRadius}, ${ box.style.borderBottomLeftRadius}
    `

}
