//converts elements into variable.
var canvas = document.getElementById("blankCanvas");
var color = document.getElementById("pickColor");
var sizePicker = document.getElementById("pickerSize");
var height = document.getElementById("gridHeight");
var width = document.getElementById("gridWidth");
var toggle = document.getElementById("gridToggle");


//Creates grid on site
function makeGrid(height, width) {
    for (let y = 0; y < height; y++) {
        let row = canvas.insertRow(y);
        for (let x = 0; x < width; x++) {
            let cell = row.insertCell(x);
            cell.addEventListener("mousedown", function(evt) {
                cell.style.backgroundColor = color.value;
            cell.addEventListener("contextmenu", function(evt) {
                evt.preventDefault();
                cell.style.backgroundColor = "white";
            } )
            } )
        }
    }
}

//Displays grid to page. 
toggle.addEventListener("click", function() {
    
    var elementsTd = document.getElementsByTagName("td");
    var elementsTr = document.getElementsByTagName("tr");
    for (var a=0; i<elementsTd.length; ++a) {
        elementsTd[a].classList.toggle("off");
    }
    for (var b=0; j<elementsTr.length; ++b) {
        elementsTr[b].classList.toggle("off");
    }
});

//function created grid based on user selction and clears grid as well.
sizePicker.addEventListener("submit", function(evt) {
    evt.preventDefault();
    while (canvas.hasChildNodes()) {
        canvas.removeChild(canvas.lastChild);
    }
    makeGrid(height.value, width.value);
});


