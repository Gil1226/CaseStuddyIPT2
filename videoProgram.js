function stopVideos() {
    const iframes = document.querySelectorAll('iframe');
    iframes.forEach(iframe => {
        const src = iframe.src;
        iframe.src = '';
        iframe.src = src;
    });
}

let chest = document.querySelector('.chest');
let back = document.querySelector('.back');
let bicep = document.querySelector('.bicep');
let cardio = document.querySelector('.cardio');
let core = document.querySelector('.core');
let legs = document.querySelector('.leg');
let shoulder = document.querySelector('.shoulder');
let tricep = document.querySelector('.tricep');
let nameVid = document.querySelector('.nameVid')

let workout = [chest, back, bicep, cardio, core, legs, shoulder, tricep,]
workout.forEach(show);
function showVids(show){
        if(workout !== chest){
            chest.style.display = 'none'
        }
        if(workout !== back){
            back.style.display = 'none'
        }
        if(workout !== bicep){
            bicep.style.display = 'none'
        }
        if(workout !== cardio){
            cardio.style.display = 'none'
        }
        if(workout !== core){
            core.style.display = 'none'
        }
        if(workout !== legs){
            legs.style.display = 'none'
        }
        if(workout !== shoulder){
            shoulder.style.display = 'none'
        }
        if(workout !== tricep){
            tricep.style.display = 'none'
        }

        show.style.display = 'block'
}

let chestChoice = document.querySelector('.chestChoice');
let backChoice = document.querySelector('.backChoice');
let bicepChoice = document.querySelector('.bicepChoice');
let cardioChoice = document.querySelector('.cardioChoice');
let coreChoice = document.querySelector('.coreChoice');
let legsChoice = document.querySelector('.legChoice');
let shoulderChoice = document.querySelector('.shoulderChoice');
let tricepChoice = document.querySelector('.tricepChoice');
let nameVidChoice = document.querySelector('.nameVidChoice')

let workoutChoices = [chestChoice, backChoice, bicepChoice, cardioChoice, coreChoice, legsChoice, shoulderChoice, tricepChoice]
workoutChoices.forEach(removeChoice)
function removeChoice(remove){
    if(workoutChoices !== chestChoice){
        chestChoice.style.display = 'block'
    }
    if(workoutChoices !== backChoice){
        backChoice.style.display = 'block'
    }
    if(workoutChoices !== bicepChoice){
        bicepChoice.style.display = 'block'
    }
    if(workoutChoices !== cardioChoice){
        cardioChoice.style.display = 'block'
    }
    if(workoutChoices !== coreChoice){
        coreChoice.style.display = 'block'
    }
    if(workoutChoices !== legsChoice){
        legsChoice.style.display = 'block'
    }
    if(workoutChoices !== shoulderChoice){
        shoulderChoice.style.display = 'block'
    }
    if(workoutChoices !== tricepChoice){
        tricepChoice.style.display = 'block'
    }
    remove.style.display = 'none'
}

let commentChest = document.querySelector('.commentChest');
let commentBack = document.querySelector('.commentBack');
let commentBicep =  document.querySelector('.commentBicep');
let commentCardio = document.querySelector('.commentCardio');
let commentCore = document.querySelector('.commentCore');
let commentLegs = document.querySelector('.commentLegs');
let commentShoulder = document.querySelector('.commentShoulder');
let commentTricep = document.querySelector('.commentTricep');

let comments = [commentChest, commentBack, commentBicep, commentCardio, commentCore, commentLegs, commentShoulder, commentTricep]
comments.forEach(showComment)
function showComment(show){
    if(comments !== commentChest){
        commentChest.style.display = 'none';
    }
    if(comments !== commentBack){
        commentBack.style.display = 'none';
    }
    if(comments !== commentBicep){
        commentBicep.style.display = 'none';
    }
    if(comments !== commentCardio){
        commentCardio.style.display = 'none';
    }
    if(comments !== commentCore){
        commentCore.style.display = 'none';
    }
    if(comments !== commentLegs){
        commentLegs.style.display = 'none';
    }
    if(comments !== commentShoulder){
        commentShoulder.style.display = 'none';
    }
    if(comments !== commentTricep){
        commentTricep.style.display = 'none';
    }

    show.style.display = 'block';

}
let commentButton1 = document.querySelector('.commentButton1')
let commentButton2 = document.querySelector('.commentButton2')
let commentButton3 = document.querySelector('.commentButton3')
let commentButton4 = document.querySelector('.commentButton4')
let commentButton5 = document.querySelector('.commentButton5')
let commentButton6 = document.querySelector('.commentButton6')
let commentButton7 = document.querySelector('.commentButton7')
let commentButton8 = document.querySelector('.commentButton8')

let commentBtn = [commentButton1,commentButton2,commentButton3,commentButton4,commentButton5,commentButton6,commentButton7,commentButton8]
commentBtn.forEach(showBtn);
function showBtn(btn){
    if (commentBtn !== commentButton1){
        commentButton1.style.display = 'none';
    }
    if (commentBtn !== commentButton2){
        commentButton2.style.display = 'none';
    }
    if (commentBtn !== commentButton3){
        commentButton3.style.display = 'none';
    }
    if (commentBtn !== commentButton4){
        commentButton4.style.display = 'none';
    }
    if (commentBtn !== commentButton5){
        commentButton5.style.display = 'none';
    }
    if (commentBtn !== commentButton6){
        commentButton6.style.display = 'none';
    }
    if (commentBtn !== commentButton7){
        commentButton7.style.display = 'none';
    }
    if (commentBtn !== commentButton8){
        commentButton8.style.display = 'none';
    }
    btn.style.display = 'block';
}

function chestt(){
    stopVideos();
    showVids(chest);
    nameVid.innerHTML = 'Chest Tutorial';
    removeChoice(chestChoice);
    showComment(commentChest);
    showBtn(commentButton1);
}
function backk(){
    stopVideos();
    showVids(back);
    nameVid.innerHTML = 'Back Tutorial';
    removeChoice(backChoice);
    showComment(commentBack);
    showBtn(commentButton2);
}
function bicepp(){
    stopVideos();
    showVids(bicep);
    nameVid.innerHTML = 'Bicep Tutorial';
    removeChoice(bicepChoice);
    showComment(commentBicep);
    showBtn(commentButton3);
}
function cardioo(){
    stopVideos();
    showVids(cardio);
    nameVid.innerHTML = 'Cardio Tutorial';
    removeChoice(cardioChoice);
    showComment(commentCardio);
    showBtn(commentButton4);
}
function coree(){
    stopVideos();
    showVids(core);
    nameVid.innerHTML = 'Core Tutorial';
    removeChoice(coreChoice);
    showComment(commentCore);
    showBtn(commentButton5);
}
function legss(){
    stopVideos();
    showVids(legs);
    nameVid.innerHTML = 'Legs Tutorial';
    removeChoice(legsChoice);
    showComment(commentLegs);
    showBtn(commentButton6);
}
function shoulderr(){
    stopVideos();
    showVids(shoulder);
    nameVid.innerHTML = 'Shoulder Tutorial'
    removeChoice(shoulderChoice);
    showComment(commentShoulder);
    showBtn(commentButton7);
}
function tricepp(){
    stopVideos();
    showVids(tricep);
    nameVid.innerHTML = 'Tricep Tutorial';
    removeChoice(tricepChoice);
    showComment(commentTricep);
    showBtn(commentButton8);
}

function send(event){
    let commentContainer = event.target.closest('div');
    let input = commentContainer.querySelector('.input');
    let commentList = commentContainer.querySelector('#comment');
    let inputTrim = input.value.trim();
    let li = document.createElement('li');
    let p = document.createElement('p');

    let user = document.createTextNode('Anonymous: ');
    let text = document.createTextNode(input.value);

    if(inputTrim === ""){
        alert("Please put a message");
        return
    }
    p.appendChild(text);
    li.appendChild(user);
    li.appendChild(p);
    commentList.appendChild(li);
    input.value = ""
}

let hide = true;
function comment1(){
    if (hide === true){
        commentChest.style.zIndex = 1;
        hide = false;
    }else{
        commentChest.style.zIndex = -1;
        hide = true;
    }
}
function comment2(){
    if (hide === true){
        commentBack.style.zIndex = 1;
        hide = false;
    }else{
        commentBack.style.zIndex = -1;
        hide = true;
    }
}
function comment3(){
    if (hide === true){
        commentBicep.style.zIndex = 1;
        hide = false;
    }else{
        commentBicep.style.zIndex = -1;
        hide = true;
    }
}
function comment4(){
    if (hide === true){
        commentCardio.style.zIndex = 1;
        hide = false;
    }else{
        commentCardio.style.zIndex = -1;
        hide = true;
    }
}
function comment5(){
    if (hide === true){
        commentCore.style.zIndex = 1;
        hide = false;
    }else{
        commentCore.style.zIndex = -1;
        hide = true;
    }
}
function comment6(){
    if (hide === true){
        commentLegs.style.zIndex = 1;
        hide = false;
    }else{
        commentLegs.style.zIndex = -1;
        hide = true;
    }
}
function comment7(){
    if (hide === true){
        commentShoulder.style.zIndex = 1;
        hide = false;
    }else{
        commentShoulder.style.zIndex = -1;
        hide = true;
    }
}
function comment8(){
    if (hide === true){
        commentTricep.style.zIndex = 1;
        hide = false;
    }else{
        commentTricep.style.zIndex = -1;
        hide = true;
    }
}

