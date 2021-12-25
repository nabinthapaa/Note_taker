// console.log("Integration sucessful");
showNotes(); 
btn = document.getElementById('btn'); //Take note button
//added eventlistener to the take notes button
btn.addEventListener("click", function (e) {
    let addText = document.getElementById('notes'); //Textarea
    if (addText.value == "") {
        document.getElementById('error').innerHTML = "Please Enter a note to add";
    } else {
        let notes = localStorage.getItem('note');
        if (notes == null) {
            notesObj = [];

        }
        else {
            notesObj = JSON.parse(notes);
        }
        notesObj.push(addText.value);
        localStorage.setItem('note', JSON.stringify(notesObj));
        addText.value = '';
        // console.log(notesObj);
        showNotes();
    }
})

//Function to show notes from local storage
function showNotes() {
    let notes = localStorage.getItem('note');
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function (element, index) {
        html += `
        <div class="noteContaineer">
        <div class="notesText">
            <h4>Note ${index + 1}</h4>
            <span class="test" id="note">${element}</span>
        </div>
        <div class="viewButton">
            <!--<button class="view" id= ${index} onclick ="viewNote(this.id)">view note</button>-->
            <button id=${index} onclick = "delNote(this.id)" class="view" id="delbtn">Delete</button>
        </div>
    </div>`;
    });
    let noteselm = document.getElementById('notesscontaineer');
    if (notesObj.length != 0) {
        noteselm.innerHTML = html;
    }
    else{
        noteselm.innerHTML = `Nothing to show. Type your Note above`;
    }
}

//Function to delete a note
function delNote(index){
    let notes = localStorage.getItem('note');
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index, 1);
    localStorage.setItem('note', JSON.stringify(notesObj));
    showNotes();
}
