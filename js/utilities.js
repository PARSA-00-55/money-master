//get the input field value
function getInputValueById(inputId){
    const getInputValue = document.getElementById(inputId);
    const inputValueString = getInputValue.value;
    const inputValue = parseInt(inputValueString);
    return inputValue;
}
// get the elements innertext value
function getElementValueById(elementId){
    const getElementById = document.getElementById(elementId);
    const elementValueString =getElementById.innerText;
    const elementValue = parseInt(elementValueString);
    return elementValue;
}
//set the elements inner text
function setElementValue(elementId, value){
    const getElementById = document.getElementById(elementId);
    getElementById.innerText = value;
}
