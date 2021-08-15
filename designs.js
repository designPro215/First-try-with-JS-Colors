var colorPicker = document.getElementById('colorPicker');
var inputHeight = document.getElementById('inputHeight');
var inputWidth = document.getElementById('inputWidth');
var submitButt = document.querySelector('#submit');
var pixelCanvas = document.getElementById('pixelCanvas');
submitButt.addEventListener('click',makeGrid);
function makeGrid(e) {
    e.preventDefault();
    pixelCanvas.innerHTML = "";
    for (let hx = 1; hx <= inputHeight.value; hx++)
    {
        let nTR = document.createElement('tr');
        for (var wx = 1; wx <= inputWidth.value; wx++) 
        {
            let nTD = document.createElement('td');
            nTD.addEventListener('click', function toGetColor () {
                nTD.style.backgroundColor = colorPicker.value;
            });
            nTR.appendChild(nTD);
        }
        pixelCanvas.appendChild(nTR);
    }
}