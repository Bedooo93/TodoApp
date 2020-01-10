const items              = document.getElementById("items");
const addButton          = document.getElementById("addButton");
const userInput          = document.getElementById("userInput");

// Execution 


addButton.addEventListener('click', addItem);
userInput.addEventListener('keypress', addItemUsingEnter);

// Events 

items.addEventListener('click', function(e){
    if(e.target.tagName == 'LI'){
        // To make the item DONE!
        const li = e.target;
        li.setAttribute("style", "text-decoration: line-through;");

        li.addEventListener('click', function(e){
            li.setAttribute("style", "text-decoration: none;");
        })
    }
})

items.addEventListener('click', function(e){
    if(e.target.className == 'remove'){
        //To remove the item
        const li = e.target.parentElement;
        items.removeChild(li);
    }
})

items.addEventListener('click', function(e){
    if(e.target.className == 'edit'){
        // To hide Edit Button
        const edit = e.target;
        edit.setAttribute("style", "display: none;");
        // To hide the item
        const li = e.target.parentElement;
        li.firstChild.setAttribute("style", "display: none;")
        // To Edit and maintain old input
        const oldValue = li.firstChild;
        const input = document.createElement("input");
        input.setAttribute("type", "text");
        input.value = oldValue.textContent;
        li.appendChild(input);
        // To submit editing
        input.addEventListener('keypress', function(e){
            if(e.keyCode === 13){//to use the keyboard's enter
            // To show Edit Button and submit the new edition
               edit.setAttribute("style", "display: ;")
               li.removeChild(li.lastChild);
               li.firstChild.textContent = input.value;
               li.firstChild.setAttribute("style", "display: ;")
            }
        })
    }
})

// Functionns

function addItem() {
    if(userInput.value.length > 0){
        const inputText = document.createTextNode(userInput.value);
        const span      = document.createElement("span");
        const li        = document.createElement("li");
        span.appendChild(inputText);
        li.appendChild(span);
        createButton(li, 'remove', 'X');
        createButton(li, 'edit', 'Edit');
        userInput.value = "";
        return items.appendChild(li);
    }
    else{
        alert("Please Write Something to do!");
    }
}

function createButton(li, buttonClass, buttonName){
    const createButtonElement      = document.createElement("button");
    createButtonElement.setAttribute("class", buttonClass);
  
    const createButtonElementValue  = document.createTextNode(buttonName);
    
    createButtonElement.appendChild(createButtonElementValue);
  
    return li.appendChild(createButtonElement);
  }


  function addItemUsingEnter(event){
    if(event.keyCode === 13){
        addItem();
    }
}
