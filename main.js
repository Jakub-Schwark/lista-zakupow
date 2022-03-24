const myBtn = document.getElementById('add');
const list = document.getElementById('list');

const addToList = () => {
    let txtField = document.getElementById('text-field-input').value;
    console.log(txtField);
    let entryDiv = document.createElement('div');
    let entryP = document.createElement('p');
    entryP.appendChild(document.createTextNode(txtField));
    entryDiv.appendChild(entryP);
    let entryButton = document.createElement('i')
    $(entryButton).addClass('fa-solid fa-x');
    entryDiv.appendChild(entryButton);
    list.appendChild(entryDiv);
    document.getElementById('text-field-input').value = ''
    entryButton.addEventListener('click', function() {entryDiv.remove()})
}

myBtn.addEventListener('click', addToList);