let numberClick = 0;

let celTable = document.querySelectorAll("td")
clickTable();

function clickTable() {
    celTable.forEach(element => {
        element.addEventListener("click", function() {
            let randomNumber = parseInt(1+ Math.random()*9);
        
            element.innerHTML= randomNumber
            // `<td>${randomNumber}</td>`;
            numberClick++
            testTable()
        })
    })
}

function testTable() {
    let total = 0
    for (let somaCel of celTable) {
        total += parseInt(somaCel.innerHTML)
    }

    if (total >= 35) {
        document.getElementById('table1').style.backgroundColor = "cyan";
        document.getElementById('modalContent').innerHTML = `Congratz! You got 35 Points in ${numberClick} clicks!`
        $("#myModal").modal('show')
    }
}

function restartGame() {

    const table = document.querySelector('table')
    table.innerHTML = `
    <table id = "table1" class = "table table-bordered center">
        <tr class = "data" >
            <td>0</td>
            <td>0</td>
            <td>0</td>
        </tr>
        <tr class = "data">
            <td>0</td>
            <td>0</td>
            <td>0</td>
        </tr>
        <tr class = "data">
            <td>0</td>
            <td>0</td>
            <td>0</td>
        </tr>
    </table>`;
}

document.getElementById("btnInicio").addEventListener('click', function() {
    restartGame();
    numberClick = 0
    document.getElementById('table1').style.backgroundColor = "white";
    celTable = document.querySelectorAll("td")
    clickTable();
})