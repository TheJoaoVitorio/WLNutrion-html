const nextButton = document.querySelector('.btn-proximo');
const prevButton = document.querySelector('.btn-voltar');
const steps      = document.querySelectorAll('.step');
const formSteps  = document.querySelectorAll('.form-step');

let active = 1;

nextButton.addEventListener('click', ()=>{
    active++;
    if (active > steps.length){
        active = steps.length;
    }
    updateProgress();
})

prevButton.addEventListener('click', ()=>{
    active--;
    if (active < 1){
        active = 1;
    }
    updateProgress();
})

const updateProgress = ()=>{
    console.log('steps.length =>' + steps.length);
    console.log('active =>'+ active);

    steps.forEach((step,i) => {
        if (i == (active-1)){
            step.classList.add('iconStepActive');
            formSteps[i].classList.add('iconStepActive');
            console.log('i => '+i);
        }else{
            step.classList.remove('iconStepActive');
            formSteps[i].classList.remove('iconStepActive');
        }
    });

    if (active === 1){
        prevButton.disabled = true;
    }else if (active === steps.length){
        nextButton.disabled = true;
    }else{
        prevButton.disabled = false;
        nextButton.disabled = false;
    }
}