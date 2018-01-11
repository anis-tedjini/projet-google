let firstbutton = document.querySelector('button');
let Mytitle = document.querySelector('h1');
function déflinirNomUtilisateur(){
    let monNom = prompt ('veuillez saisir votre nom');
    localstorage.setItem('nom',monNOM);
    montitre textcontent ='mozilla est cool,'+ monmon;
}
if(!localstorage.getItem('nom')){
    définirNomUtilisateur();
}
else{
    lest nomEnregisté = localStorage.getItem('nom');
    montitre.textContent ='Mozilla est cool',+nomEnregitre
}
monBouton onclick = function()
{
    déflinirNomUtilisateur();
}