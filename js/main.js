


let english = document.querySelectorAll(".englishbox");
let kiswahili = document.querySelectorAll(".kiswahilibox");
let kikuyu = document.querySelectorAll(".kikuyubox");
let abstracts = document.querySelectorAll(".ABSTRACTS")

function defaultDisplay(){
    english.style.disply ="block"
    kiswahili.style.display="none"
    kikuyu.style.display="none"
}

function englishOnly(){
    kiswahili.style.display = "none";
    kikuyu.style.display = "none";
    english.style.display = "block"
}
function kiswahiliOnly(){
    english.style.display = "none";
    kikuyu.style.display = "none";
    kiswahili.display = "block"
}
function kikuyuOnly(){
    kiswahili.style.display = "none";
    english.style.display = "none";
    kikuyu.style.display= "block"
}
