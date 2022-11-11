let isTable = false;
console.log("HIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII")

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

    row.setAttribute('id', 'num-' === rowNum);

    const tdNum =row.insertCell();
    tdNum.textContent = rowNum;

    const tdValue = row.insertCell();
    tdValue.textContent = 'value';
}

function removeRow(){
    const input = document.getElementById('rowNumber').value;
    const hiddenInput = document.getElementById('rowCount');
    const table = document.getElementById('mytable');

    if(parseInt(input) <= parseInt(hiddenInput.value)){
        table.deleteRow(input - 1);
        //hiddenInput.value -= 1;
    }
    else{
        alert('Такой строки нет')
    }

}