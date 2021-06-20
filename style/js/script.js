/* به نام خداوند جان و خرد. کز این اندیشه برتر نگذرد */

let ghostCard = document.querySelector('.card-ghost');
let realCard = document.querySelector('.card-real');

let realCardLeftEdge = realCard.offsetLeft;
let realCardTopEdge = realCard.getBoundingClientRect().top;
let realCardRightEdge = realCardLeftEdge + realCard.offsetWidth;
let realCardBottomEdge = realCardTopEdge + realCard.offsetHeight;
let realCardCenterX = realCardLeftEdge + realCard.offsetWidth/2;
let realCardCenterY = realCardTopEdge + realCard.offsetHeight/2;

const ghostCardTopEdge = ghostCard.offsetTop;
const ghostCardLeftEdge = ghostCard.offsetLeft;

function setGhostCardHeight(){
    let realCardHeight = realCard.offsetHeight;
    ghostCard.style.height = realCardHeight + 'px';
}


function moveGhostCardBy(x, y){
    ghostCard.style.left = x + 'px';
    ghostCard.style.top = y + 'px';
}

function setCardToInitialPosition(){
    moveGhostCardBy(ghostCardLeftEdge, ghostCardTopEdge);
}


/* Program operation -- */
setGhostCardHeight();
setCardToInitialPosition()

window.addEventListener('mousemove', (event) => {
    let mouseXPosition = event.clientX;
    let mouseYPosition = event.clientY;

    let cursorIsInRealCardArea = mouseXPosition >= realCardLeftEdge && mouseXPosition <= realCardRightEdge && mouseYPosition >= realCardTopEdge && mouseYPosition <= realCardBottomEdge;

    if(cursorIsInRealCardArea){
        let cursorXDistanceFromCenter = mouseXPosition - realCardCenterX;
        let xMovement = ghostCardLeftEdge - cursorXDistanceFromCenter*0.05;
        let cursorYDistanceFromCenter = mouseYPosition - realCardCenterY;
        let yMovement = ghostCardTopEdge - cursorYDistanceFromCenter*0.05;
        moveGhostCardBy(xMovement, yMovement);

    }else{
        setCardToInitialPosition();
    }

})

