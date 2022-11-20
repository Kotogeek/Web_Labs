let isTable = false;

function createTable(){
    if(!isTable){
    const table = document.createElement("table");
    table.setAttribute("id", "mytable");

    document.getElementById('container').appendChild(table);
    isTable = true;

    document.getElementById('add').disabled = false;
    document.getElementById('delete').disabled = false;
    document.getElementById('rowNumber').disabled = false;
    }
    else{
        alert("Таблица уже создана")
    }
}

function addRowcount() {
    const rowCountInput = document.getElementById('rowCount');
    const newRowCount = parseInt(rowCountInput.value) + 1;
    rowCountInput.value = newRowCount;
    return rowCountInput.value;
}

function addRow(){
    const table = document.getElementById('mytable');
    const rowNum = addRowcount();
    const row = table.insertRow()

    row.setAttribute('id', 'num-' + rowNum);

    const tdNum =row.insertCell();
    tdNum.textContent = rowNum;
    tdNum.setAttribute("class", "numberCell");

    const tdValue = row.insertCell();
    tdValue.textContent = 'value' + ' ' + Math.floor(Math.random()*50);
}

function autoRepeat(){
    const cells = document.querySelectorAll('.numberCell');
    let i = 1;
    cells.forEach(item=>{
        item.textContent = i;
        i++;
    })
}

function removeRow(){
    const input = document.getElementById('rowNumber').value;
    let hiddenInput = document.getElementById('rowCount');
    const table = document.getElementById('mytable');

    if(parseInt(input) <= parseInt(hiddenInput.value)){
        table.deleteRow(input - 1);
        hiddenInput.value -= 1;
        autoRepeat();
    }
    else{
        alert('Такой строки нет')
    }

}