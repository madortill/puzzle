// code to open the mission
const code = "0000";

window.addEventListener('load', () => {
    document.querySelector(".loader").classList.add("fade");
    document.querySelector('input').addEventListener('input', checkCode);
    document.querySelector(".odot-logo").addEventListener("click", odot);
});

// check if the user can start the mission
checkCode = () => {
    let input = document.querySelector('input');
    
    // if the code is correct
    if (input.value === code) {
        document.querySelector('input').removeEventListener('input', checkCode);
        // style
        addAnimation(document.querySelector('#opening'), "fade-out", 1500, 500, function() {
            // move to the mission
            loadMission();
        });
        input.style.borderColor = "rgb(32, 219, 159)";
    }
}

let currLock;
loadMission = () => {
    document.querySelector('#opening').style.display = "none";
    document.querySelector('#mission').style.display = "block";
    // allow drag and drop
    setDrag();
    setDrop();

    let lock;
    let ArrLocks = [];
    for (let i = 1; i <= 9; i++) {
        // drag
        lock = El("div", {classes: [`drag`, `background`], attributes: {"data-num": i, "draggable" : "false"}}, 
        El("div", {classes: [`background`, `lock`], listeners: {click : question}}));
        ArrLocks.push(lock); 
        lock.style.backgroundImage = `url(assets/media/puzzle_${i}.svg)`;
        // drop
        drop = El("div", {classes: [`drop`, `flex`], attributes: {"data-num": i}});
        document.querySelector(`#puzzle`).append(drop);
    }
    let random;
    for (let i = 1; i <= 9; i++) {
        random = Math.floor(Math.random() * ArrLocks.length);
        document.querySelector(`#pieces`).append(ArrLocks[random]);
        ArrLocks.splice(random, 1);
    }
    // document.querySelectorAll('.lock').forEach((lock) => {
    //     lock.addEventListener('click', question);
        
    // });
}

// popping question
question = (event) => {
    //event.target.style.display = "none";
    // event.target.parentElement.setAttribute("draggable", "true");
    // document.querySelector('.completeSentenceContainer').style.display = "block";
    // addAnimation(document.querySelector('.completeSentenceContainer'), "fade-in", 1500, 500);
    // addAnimation(document.querySelector('.completeSentenceContainer'), "fade-in", 1500, 200);
    // if (document.querySelector('.completeSentenceContainer').classList.contains("fade-out")) {
    //     document.querySelector('.completeSentenceContainer').classList.remove("fade-out")
    // };
    document.querySelector('.completeSentenceContainer').style.animation = "fadeIn 1s ease forwards";
    addContentToSentence();
    currLock = event.target;
}

const questionsEnd = () => {
    console.log("סיימתי");
    // if (document.querySelector('.completeSentenceContainer').classList.contains("fade-in")) {
    //     document.querySelector('.completeSentenceContainer').classList.remove("fade-in")
    // };
    // addAnimation(document.querySelector('.completeSentenceContainer'), "fade-out", 1500, 200);
    // display lock
    currLock.style.display = "none";
    currLock.parentElement.setAttribute("draggable", "true");
}

closeWindow = (event) => {
    // document.querySelector('.completeSentenceContainer').classList.remove("fade-in");
    document.querySelector('.completeSentenceContainer').style.animation = "fadeOut 1s ease forwards";
//     document.querySelector('.completeSentenceContainer').classList.add("fade-out");
//    addAnimation(document.querySelector('.completeSentenceContainer'), "fade-out", 1500, 200, function() {
//         // document.querySelector('.completeSentenceContainer').classList.remove("fade-in");
//    });
}

// after an item has been dropped correctly
onDrop = (drag, drop) => {
    drag.setAttribute("draggable", "false");
}







