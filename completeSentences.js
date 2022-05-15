//completeSentence
let nSentenceCurrentQuestion = 0;
let strSentenceCurrentAns = 0;
// const
const DELAY_AFTER_SENTENCE = 3000;

/* addContentToSentence
--------------------------------------------------------------
Description: */
const addContentToSentence = () => {
    document.querySelector(`.completeSentenceContainer`).innerHTML = "";
    let x = El("img", {attributes: {src: `assets/media/white_small_x.svg`, id: `x`}, listeners: {click : closeWindow}});
    let instructions = El("div", {classes: [`instructions`, `bold`] }, "השלימו את המשפט");
    // create sentence
    let sentence = El("div", {cls: `sentenceContainer`},
        El("span", {cls: `sentence`}, DATA.completeSentence[nSentenceCurrentQuestion].sentence[0]),
        El("span", {cls: `dropDown`},
            El("div", {classes: [`background`, `dropDownTitle`], listeners: {click : controlDropDown}}, "בחר/י..."),
            El("div", {cls: `containerDropDown`})),
        El("span", {cls: `sentence`}, DATA.completeSentence[nSentenceCurrentQuestion].sentence[1]),
    );
    document.querySelector(`.completeSentenceContainer`).append(x);
    document.querySelector(`.completeSentenceContainer`).append(instructions);
    document.querySelector(`.completeSentenceContainer`).append(sentence);
    //create check button (without listener)
    let check =  El("div", {classes: [`checkButtonSentence`, `horizon-center`]}, "בדיקה");
    document.querySelector(`.completeSentenceContainer`).append(check);
}

/* controlDropDown
--------------------------------------------------------------
Description: */
const controlDropDown = () => {
    // remove listener and add drop down
    document.querySelector(`.dropDownTitle`).removeEventListener("click" , controlDropDown);
    for(let i = 0; i < DATA.completeSentence[nSentenceCurrentQuestion].dropDownAns.length; i++){
        let dropDownItem = El("div", {classes: [`dropDownItem`, `ans${i}`, i], listeners: {click : selectAnswer}},DATA.completeSentence[nSentenceCurrentQuestion].dropDownAns[i]);
        document.querySelector(`.containerDropDown`).append(dropDownItem);
    }
    document.querySelector(`.dropDownTitle`).style.backgroundImage = "url(assets/media/generic_button.svg)";
}

/* selectAnswer
--------------------------------------------------------------
Description: */
const selectAnswer = (event) => {
    let currAns = event.currentTarget.classList[2];
    strSentenceCurrentAns = event.currentTarget.classList[1];
    document.querySelector(`.dropDownTitle`).innerHTML = DATA.completeSentence[nSentenceCurrentQuestion].dropDownAns[currAns];
    document.querySelector(`.containerDropDown`).innerHTML = ``;
    document.querySelector(`.dropDownTitle`).addEventListener("click", controlDropDown);
    document.querySelector(`.checkButtonSentence`).addEventListener("click", checkAnswer);
}

/* checkAnswer
--------------------------------------------------------------
Description: */
const checkAnswer = () => {
    if (strSentenceCurrentAns ===  DATA.completeSentence[nSentenceCurrentQuestion].correctAns){
        document.querySelector(`.checkButtonSentence`).removeEventListener("click", checkAnswer);
        console.log("תשובה נכונה");   
        nSentenceCurrentQuestion++;
        document.querySelector(`.dropDownTitle`).removeEventListener("click" , controlDropDown);
        document.querySelector(`.dropDownTitle`).style.backgroundImage = "url(assets/media/right_button.svg)";
        questionsEnd();
    } else {
        console.log("תשובה לא נכונה"); 
        document.querySelector(`.dropDownTitle`).style.backgroundImage = "url(assets/media/wrong_button.svg)";
    }
}