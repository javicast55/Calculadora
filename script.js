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
    let previous = document.fo.values.value;
    document.getElementById('value').value = previous + num;
}

function Del(num){
    let prev = document.fo.values.value;
    let newChar = prev.substring(0,prev.length-1);
    document.getElementById('value').value = newChar;
}