function Onlynumbers(e) {
    let key = e.keyCode || e.which; // Variable en minúscula
    let keyboard = String.fromCharCode(key); // Corrige el nombre
    let numb = "0123456789";
    let specials = [8, 37, 39, 46]; // Cambia a un arreglo
    let special_key = false;

    for (let i in specials) {
        if (key == specials[i]) { // Compara con cada elemento del arreglo
            special_key = true; // Usa un solo "=" para asignar
        }
    }
    if (numb.indexOf(keyboard) == -1 && !special_key) {
        return false; // Bloquea cualquier otra tecla
    }
}

function Ret(num){
    let prevRet = document.fo.values.value;
    document.getElementById('value').value = prevRet + num;
}

function Del(num){
    let prevDel = document.fo.values.value;
    let newChar = prevDel.substring(0,prevDel.length-1);
    document.getElementById('value').value = newChar;
}

function Delall(){
    document.getElementById('value').value = "";
}

function Check(num){
    let prevCheck = document.fo.values.value;
    if (prevCheck == ""){
        document.fo.values.value="";
    }
    else{
        prevCheck = document.fo.values.value;
        document.getElementById('value').value = prevCheck + num;
        let done = document.fo.values.value;

        let record = 0;
        let equal = 1;
        let letterRecord;
        let b=0;
        let letter = "";

        for (a = 1; a < done.length; a++){
            if (done.charAt(a) == "+" || done.charAt(a) == "-" || done.charAt(a) == "*" || done.charAt(a) == "/" || done.charAt(a) == "."){
                equal = equal + 1;
                letter = done.charAt(a);
            }
            else{
                if (equal > record){
                    record = equal;
                    letterRecord = letter;
                }
                equal = 1;
            }
            b = a;
        }

        if (equal > record){
            record = equal;
            letterRecord = letter;
        }

        if (record > 2){
            let prev = done;
            let newValue = prev.substring(0, prev.length-1);
            document.getElementById('value').value = newValue;
            record = 0;
            b = 0;
            equal = 1;
            letter = "";
            letterRecord = "";
        }
    }
}

function Calculate(){
    let result = eval(document.fo.values.value);
    document.fo.values.value = result;
}