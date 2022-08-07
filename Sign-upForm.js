let id = 0;

document.getElementById('submit').addEventListener('click', () => {
    let table = document.getElementById('list');
    let row = table.insertRow(1);
    row.setAttribute('id', `item-${id}`);
    row.insertCell(0).innerHTML = document.getElementById('firstName').value;
    row.insertCell(1).innerHTML = document.getElementById('lastName').value;
    row.insertCell(2).innerHTML = document.getElementById('email').value;
    row.insertCell(3).innerHTML = document.querySelector('input[name="gridRadios"]:checked').id;
    row.insertCell(4).innerHTML = document.getElementById('interests').value;
    let actions = row.insertCell(5);
    actions.appendChild(createChangeMyInfoButton(id++));
    document.getElementById('firstName').value = '';
    document.getElementById('lastName').value = '';
    document.getElementById('email').value = '';
    document.querySelector('input[name="gridRadios"]:checked').checked = false;
    document.getElementById('interests').value = '';
});

function createChangeMyInfoButton(id) {
    let btn = document.createElement('button');
    btn.className = 'btn btn-primary';
    btn.id = id;
    btn.innerHTML = 'Change my info';
    btn.onclick = () => {
        console.log(`Deleting row with id: item-${id}`);
        let elementToDelete = document.getElementById(`item-${id}`);
        elementToDelete.parentNode.removeChild(elementToDelete);
    };
    return btn;
}