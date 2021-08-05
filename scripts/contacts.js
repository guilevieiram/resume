// let counter = 1;
function writeMessage(nameTag, text){
    document.getElementById(nameTag).innerHTML = text;
    console.log(text);
};

function increaseCounter(id){
    document.getElementById(id).value = parseInt(document.getElementById(id).value) + 1;
};