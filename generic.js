const DATA = { 
    // multiple and binary questions
    // "questions": [
    //     {
    //         type: `multiple`,
    //         question: ``,
    //         ans1: ``,
    //         ans2: ``,
    //         ans3: ``,
    //         ans4: ``,
    //         correctAns: `ans1`
    //     },
    //     {
    //         type: `binary`,
    //         question: ``,
    //         correctAns: true
    //     },
    // ],
    // complete the sentence
    "completeSentence": [
        {
            sentence: [`חלק ראשון של המשפט`, `חלק שני של המשפט`], // put each part of the sentence as an string in the array
            dropDownAns: [
                `אופציה 1`,
                `אופציה 2`,
                `אופציה 3`,
                `אופציה 4`,
            ], // all the options that will apear in the dropDown.
            correctAns: "ans0" // location of answer in array
        },    
        {
            sentence: [`חלק אחד של המשפט`, `חלק שני של המשפט`], // put each part of the sentence as an string in the array
            dropDownAns: [
                `אופציה 1`,
                `אופציה 2`,
                `אופציה 3`,
                `אופציה 4`,
            ], // all the options that will apear in the dropDown.
            correctAns: "ans0" // location of answer in array
        }, 
        {
            sentence: [`חלק ראשון של המשפט`, `חלק שני של המשפט`], // put each part of the sentence as an string in the array
            dropDownAns: [
                `אופציה 1`,
                `אופציה 2`,
                `אופציה 3`,
                `אופציה 4`,
            ], // all the options that will apear in the dropDown.
            correctAns: "ans0" // location of answer in array
        },    
        {
            sentence: [`חלק אחד של המשפט`, `חלק שני של המשפט`], // put each part of the sentence as an string in the array
            dropDownAns: [
                `אופציה 1`,
                `אופציה 2`,
                `אופציה 3`,
                `אופציה 4`,
            ], // all the options that will apear in the dropDown.
            correctAns: "ans0" // location of answer in array
        }, 
        {
            sentence: [`חלק ראשון של המשפט`, `חלק שני של המשפט`], // put each part of the sentence as an string in the array
            dropDownAns: [
                `אופציה 1`,
                `אופציה 2`,
                `אופציה 3`,
                `אופציה 4`,
            ], // all the options that will apear in the dropDown.
            correctAns: "ans0" // location of answer in array
        },    
        {
            sentence: [`חלק אחד של המשפט`, `חלק שני של המשפט`], // put each part of the sentence as an string in the array
            dropDownAns: [
                `אופציה 1`,
                `אופציה 2`,
                `אופציה 3`,
                `אופציה 4`,
            ], // all the options that will apear in the dropDown.
            correctAns: "ans0" // location of answer in array
        },
        {
            sentence: [`חלק ראשון של המשפט`, `חלק שני של המשפט`], // put each part of the sentence as an string in the array
            dropDownAns: [
                `אופציה 1`,
                `אופציה 2`,
                `אופציה 3`,
                `אופציה 4`,
            ], // all the options that will apear in the dropDown.
            correctAns: "ans0" // location of answer in array
        },    
        {
            sentence: [`חלק אחד של המשפט`, `חלק שני של המשפט`], // put each part of the sentence as an string in the array
            dropDownAns: [
                `אופציה 1`,
                `אופציה 2`,
                `אופציה 3`,
                `אופציה 4`,
            ], // all the options that will apear in the dropDown.
            correctAns: "ans0" // location of answer in array
        }, 
        {
            sentence: [`חלק אחד של המשפט`, `חלק שני של המשפט`], // put each part of the sentence as an string in the array
            dropDownAns: [
                `אופציה 1`,
                `אופציה 2`,
                `אופציה 3`,
                `אופציה 4`,
            ], // all the options that will apear in the dropDown.
            correctAns: "ans0" // location of answer in array
        },    
    ],
    // sort to groups
    // "sortToGroups": [
    //     {
    //         drag: "קבוצה 1",
    //         group: 1
    //     },
    //     {
    //         drag: "קבוצה 2",
    //         group: 2
    //     },
    //     {
    //         drag: "קבוצה 3",
    //         group: 3
    //     },
    // ]
};

/* loading function
--------------------------------------------------------------
Description: */
//window.addEventListener("load", () => { 
    /* for multiple and binary questions--------------------------*/
    // arrMultipleQuestions = shuffle(DATA.questions);
    // addContentToQuestion();
    /* for complete the sentence----------------------------------*/
    // addContentToSentence();
    /* for sort to groups-----------------------------------------*/
    // setDrag();
    // setDrop();
    // createItems();
    // shuffle(DATA.sortToGroups);
//});

/* questionsEnd
--------------------------------------------------------------
Description: for multiple and binary questions or for complete the sentence */
//const questionsEnd = () => {
//     console.log("סיימתי");
//}

// for all of the options - dont delete
/*
shuffle
------------------------------------------------
Description: take orgnaiz array and shffel it
Parameters: array.
------------------------------------------------
Programer: Gal
------------------------------------------------
*/
function shuffle(arr) {
    let tmp = arr.slice();
    for (let i = 0; i < arr.length; i++) {
        let index = Math.floor(Math.random() * tmp.length);
        arr[i] = tmp[index];
        tmp = tmp.slice(0, index).concat(tmp.slice(index + 1));
    }
    return arr;
}

/* El
--------------------------------------------------------------
Description: for all of the options - dont delete */
function El(tagName, options = {}, ...children) {
    let el = Object.assign(document.createElement(tagName), options.fields || {});
    if (options.classes && options.classes.length) el.classList.add(...options.classes);
    else if (options.cls) el.classList.add(options.cls);
    if (options.id) el.id = options.id;
    el.append(...children.filter(el => el));
    for (let listenerName of Object.keys(options.listeners || {}))
        if (options.listeners[listenerName]) el.addEventListener(listenerName, options.listeners[listenerName], false);
    for (let attributeName of Object.keys(options.attributes || {})) {
        if (options.attributes[attributeName] !== undefined) el.setAttribute(attributeName, options.attributes[attributeName]);
    }
    return el;
}

addAnimation = (element, animation, time, delay, callback) => {
    element.classList.add(animation);
    element.style.cssText = `animation-duration: ${time}ms; animation-delay: ${delay}ms;`;
    setTimeout(callback, time + delay - 100);
}

let strLocation = "front-div";

// פונקציה האחראית על פתיחת האודות
let odot = () => {
    document.querySelector(`.${strLocation}`).style.display = "none";
    document.querySelector(`.div-odot`).style.display = "block";  
    // document.querySelector(`.div-body`).style.overflow = "hidden";
    document.querySelector(`.odot-logo`).style.display = "none";  
    // document.querySelector(`.title`).innerHTML = "אודות";
    document.querySelector(`#back-button-odot`).addEventListener("click", () => {
        document.querySelector(`.${strLocation}`).style.display = "block";
        document.querySelector(`.div-odot`).style.display = "none";  
        document.querySelector(`.odot-logo`).style.display = "block";  
        // document.querySelector(`.div-body`).style.overflow = "scroll";
        // document.querySelector(`.title`).innerHTML = "כותרת";
    })
}
