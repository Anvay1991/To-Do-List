//Each item should look like this
//<li><input type="checkbox" id="checkbox" /><span>New tutorial</span></li>

function updateItemStatus() {
    var cbId = this.id.replace("cb_","");
    var text = document.getElementById("item_" + cbId);
    
    if(this.checked){
        text.className = "checked";
    }else{
        text.className = "";
    }
    
}

function renameItem() {
    //this == span
    var newText = prompt("Rename");
    
    if(!newText || newText == "" || newText == " "){
            return false;
        };
    
    this.innerText = newText;
}

function removeItem() {
    //this == span
   this.style.display = "none";
}

function addNewItem(list, itemText) {
    //Each item should look like this
    //<li>
        //<input type="checkbox" id="checkbox" />
        //<span>New tutorial</span>
    //</li>
    
    var date = new Date();
    var id = "" + date.getHours() + date.getMinutes() + date.getSeconds() +                 date.getMilliseconds();
    
    var listItem = document.createElement("li");
    listItem.id ="li_"+ id;
    listItem.ondblclick = removeItem;
    
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = "cb_" + id;
    checkbox.onclick = updateItemStatus;
    
    var span = document.createElement("span")
    span.id = "item_"+ id;
    span.innerText = itemText;
    span.onclick = renameItem;
    
    listItem.appendChild(checkbox);
    listItem.appendChild(span);
    
    list.appendChild(listItem);
    
    /**
    * Avoid global variables
    * Strive to make functions resuable
    *This is one way of adding items, but not a good practice.
    * var list = document.getElementById("todo");
    * list.appendChild(listItem);
    * }
    * var btn = document.getElementById("btn");
    * btn.onclick = addNewItem;
    */
}

var inItemText = document.getElementById("inItemText");
inItemText.focus();

inItemText.onkeyup = function (event) {
    
        /** For finding the key value
        * var itemText = event.which;
        * Event.which (13) -> ENTER
        * Only proceed if key pressed is enter
        */
        if(event.which == 13)
        /**
        * Not a good practice
        * var itemText = prompt("What do you want to type?");
        */
       {
        var itemText = inItemText.value;
        if(!itemText || itemText == "" || itemText == " "){
            return false;
        };
    
        addNewItem(document.getElementById("todo"), itemText);
           
        inItemText.focus();
        inItemText.select();
       }
    };