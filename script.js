const addBtn = document.querySelector('#add');
const userInput = document.querySelector('#entry');
const itemContainer = document.querySelector('.box2');

class ToDoItem {
    constructor(itemName) {
        this.buttonStatus = 'edit'; // Initial button status is 'edit'
        this.createDiv(itemName);
    }

    createDiv(itemName) {
        let itemBox = document.createElement('div');
        itemBox.classList.add('element');

        let inputItem = document.createElement('input');
        inputItem.value = itemName;
        inputItem.disabled = true;

        let editBtn = document.createElement('button');
        editBtn.innerHTML = `<img src="edit.svg" alt="Edit">`; 
        editBtn.classList.add('edit');
        editBtn.addEventListener('click', () => this.toggleButtonStatus(editBtn, inputItem));

        let deleteBtn = document.createElement('button');
        deleteBtn.innerHTML = `<img src="delete.svg" alt="Delete">`; 
        deleteBtn.classList.add('delete');
        deleteBtn.addEventListener('click', () => this.remove(itemBox));

        itemContainer.appendChild(itemBox);

        itemBox.appendChild(inputItem);
        itemBox.appendChild(editBtn);
        itemBox.appendChild(deleteBtn);
    }

    toggleButtonStatus(editBtn, inputItem) {
        this.buttonStatus = this.buttonStatus === 'edit' ? 'save' : 'edit'; // Toggle status
        editBtn.innerHTML = `<img src="${this.buttonStatus}.svg" alt="${this.buttonStatus.charAt(0).toUpperCase() + this.buttonStatus.slice(1)}">`; // Updating button with appropriate SVG image

        if (this.buttonStatus === 'edit') {
            inputItem.disabled = true; 
        } else {
            inputItem.disabled = false; 
        }
    }

    remove(item) {
        itemContainer.removeChild(item);
    }
}

function checktheBox() {                      
    if (userInput.value !== "") {
        new ToDoItem(userInput.value);
        userInput.value = "";
    }
}

addBtn.addEventListener('click', checktheBox);
window.addEventListener('keydown', (a) => {
    if (a.which === 13) {
        checktheBox();
    }
});
