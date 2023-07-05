const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
function addTask(){
    if(inputBox.value === ''){
        alert("You must write something");
    }
    else{
        // it is creating an html element with tag name li and it is storing the element in the li variable
        let li = document.createElement("li");
        // in this li we need to add text ,we will add the text that we have put in the input field whatever text we will add in input field will be added to li
        li.innerHTML = inputBox.value;
        // li is displayed inseide the list container
        listContainer.appendChild(li);
        // cross element
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value="";
}
// 20mins