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
    saveData();
}
// whenever we will click on the container where we have stored all the task first it will check where we have clicked if we have clicked LI it will add the checked classlist if it is already there it will remove it and if clicked on span it will delete the parent element
listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

// function to store the data even after page is refreshed in local storage
// we need to call this function everytime we add any changes
function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}
// we also need to show the data even when the browser is reopened
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();