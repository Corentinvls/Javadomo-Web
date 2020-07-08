var atelierIndex = 1;
var insideIndex = 1;
var slideIndex = 1;

showDivs(slideIndex);
showAteliers(atelierIndex);
showInside(insideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}
function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex-1].style.display = "flex";
}

function plusAteliers(n) {
    showAteliers(atelierIndex += n);
    console.log("Changement d'atelier :" + insideIndex);

    if( atelierIndex == 1){
        insideIndex = 1;
    }
    else
        insideIndex = (atelierIndex*3) - 2;

    showInside(insideIndex);
}

function plusInside(n) {
    switch (atelierIndex) {
        case 1 :
            if(n===-1 && insideIndex === 1 ){
                insideIndex = 3;
            }
            else if (n===1 && insideIndex === 3){
                insideIndex =1;
            }else{
                insideIndex += n;
            }
            showInside(insideIndex);
            console.log("Changement de Inside :" + insideIndex);
            break;
        case 2 :
            if(n===-1 && insideIndex === 4 ){
                insideIndex = 6;
            }
            else if (n===1 && insideIndex === 6){
                insideIndex =4;
            }else{
                insideIndex += n;
            }
            showInside(insideIndex);
            console.log("Changement de Inside :" + insideIndex);
            break;
        case 3 :
            if(n===-1 && insideIndex === 7 ){
                insideIndex = 9;
            }
            else if (n===1 && insideIndex === 9){
                insideIndex =7;
            }else{
                insideIndex += n;
            }
            showInside(insideIndex);
            console.log("Changement de Inside :" + insideIndex);
            break;
        case 4 :
            if(n===-1 && insideIndex === 10 ){
                insideIndex = 12;
            }
            else if (n===1 && insideIndex === 12){
                insideIndex =10;
            }else{
                insideIndex += n;
            }
            showInside(insideIndex);
            console.log("Changement de Inside :" + insideIndex);
            break;
        case 5 :
            if(n===-1 && insideIndex === 13 ){
                insideIndex = 15;
            }
            else if (n===1 && insideIndex === 15){
                insideIndex =13;
            }else{
                insideIndex += n;
            }
            showInside(insideIndex);
            console.log("Changement de Inside :" + insideIndex);
            break;
    }
}

function showAteliers(n) {
    var i;
    var x = document.getElementsByClassName("atelierN");
    if (n > x.length) {atelierIndex = 1}
    if (n < 1) {atelierIndex = x.length}
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[atelierIndex-1].style.display = "flex";
}

function showInside(n) {
    var i;
    var x = document.getElementsByClassName("insideAtelierN");
    if (n > x.length) {insideIndex = 1}
    if (n < 1) {insideIndex = x.length}
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[insideIndex-1].style.display = "flex";
}

function linkAtelier(index) {
    atelierIndex = index;
    showAteliers(atelierIndex);
    insideIndex = (atelierIndex*3) - 2;
    showInside(insideIndex);
}


document.getElementById('contactLink').style.height=document.getElementById('formContact').clientHeight+"px";





