
    let btnLeft = document.getElementById('btn-left')
    let btnRight = document.getElementById("btn-right");

    let flipBox = document.getElementById('flip-box')

    var rotateValue = 0;

    btnRight.addEventListener('click', () => {
        rotateValue += 90;
        flipBox.style.transform = `rotate(${rotateValue}deg)`
        
    })

    btnLeft.addEventListener('click', () => {
        if(rotateValue == 0 ) rotateValue = 360
        rotateValue -= 90
        flipBox.style.transform = `rotate(${rotateValue}deg)`
        

    })  