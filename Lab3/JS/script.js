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

function removeRow()
{
    const input = document.getElementById('rowNumber').value
    if (document.getElementById('num-' + input) != null)
    {
        document.getElementById('num-' + input).remove();
    } 
    else
    {
        alert('Такой строки не существует')
    }
}