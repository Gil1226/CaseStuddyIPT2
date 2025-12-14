let option = document.querySelector('.optionChoices');
let display = true
function show(){
    if (display){
        option.style.display = 'block';
        display = false
    }else{
        option.style.display = 'none'
        display = true
    }
}
