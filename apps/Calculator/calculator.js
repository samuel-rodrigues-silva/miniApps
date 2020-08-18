let screen = document.getElementById('screen')
screen.value = '0';
let string = '0';
let lastIndex = [];
function getElements(){

    let btnList = document.getElementsByTagName("button");
   
    Array.from(btnList).forEach(btn => {
            
            btn.addEventListener('click', e=>{
                stringCheck(btn.innerHTML) 
            })
    });

}

function stringCheck(char){
    if(char === 'CA'){
            string = '';
            screen.value = '0';
            lastIndex = []
    }else if(char === 'C'){
            screen.value = string.replace(lastIndex[lastIndex.length-1], '');
            string = screen.value;
            lastIndex.pop();
            if(!lastIndex[0]){
                screen.value = '0';
            }
            
    }
    
    if(string.length <= 7){
        switch(char){
            case '=':
                if(string.trim() != '')
                this.equation();
                break;
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
            case '0':
                this.action(char)
                break;
            case '+':
            case '-':
            case '*':
            case '/':
                if(string.indexOf('+') == -1 &&
                   string.indexOf('*') == -1 &&
                   string.indexOf('-') == -1 &&
                   string.indexOf('/') == -1 && 
                   string.length != 7 && string.length != 0 ){
                    this.action(char)
                }
                break;
        }
        
    }
        
}

function action(char){
                if(screen.value == '0'){
                    string = char;
                }else{
                    string += char;
                }
                screen.value = string;
                    lastIndex.push(char);
                    
}

function equation(){
    let split;
    let result;

    if(string.indexOf("+") != -1){
        split = string.split("+")
       result = parseInt(split[0]) + parseInt(split[1]);
    }else if(string.indexOf("*") != -1){
        split = string.split("*")
       result = split[0] * split[1];
    }else if(string.indexOf("-") != -1){
        split = string.split("-")
       result =  split[0] - split[1];
    }else if(string.indexOf("/") != -1){
        split = string.split("/")
       result = split[0] / split[1];
    }else{
        return ;
    }

    screen.value = result
    string = screen.value;
    lastIndex = []
}


getElements();