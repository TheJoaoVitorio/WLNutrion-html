$('#valEnergetico').mask("#.##0,00", {reverse: true});
$('#carboidratos').mask("#.##0,00", {reverse: true});
$('#acucarTotal').mask("#.##0,00", {reverse: true});
$('#acucarAdicionado').mask("#.##0,00", {reverse: true});
$('#proteinas').mask("#.##0,00", {reverse: true});
$('#gordTotais').mask("#.##0,00", {reverse: true});
$('#gordSaturadas').mask("#.##0,00", {reverse: true});
$('#gordTrans').mask("#.##0,00", {reverse: true});
$('#fibraAlimentar').mask("#.##0,00", {reverse: true});
$('#sodio').mask("#.##0,00", {reverse: true});

$('#qtdIngredienteReceita').mask("#.##0,00", {reverse: true});
console.log('ola mundo')


let popup = document.getElementById("popup");
    function openPopup(){
        popup.classList.add("open-popup");
        console.log('Passei por aqui')
    }
    function closePopup(){
        popup.classList.remove("open-popup");
    }