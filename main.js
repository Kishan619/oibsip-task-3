let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');

addToDoButton.addEventListener('click', function(){
    var paragraph = document.createElement('p');//For creating the new new paragraph of todocontainer in with classs paragaraph styling
    paragraph.classList.add('paragraph-styling');//used only for the cursor pointer....
    paragraph.innerHTML = inputField.value;
    toDoContainer.appendChild(paragraph);
    // console.log(paragraph);
    inputField.value = "";
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = "line-through";
    })
    paragraph.addEventListener('dblclick', function(){
        toDoContainer.removeChild(paragraph);
    })
})
