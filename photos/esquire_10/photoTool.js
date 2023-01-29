const fs = require('fs')

function renderPhoto() {
    
    console.log("function is active")
    var table = document.getElementById("photos")
    var row
    for(var i =1; i<=6; i++){
        var img = document.createElement('img')
        img.src = String(i) + ".jpg"
        if(i % 3 == 0){
            row = table.insertRow(0)
        }
        cell = row.insertCell(i%3)
        cell.appendChild(img)
        
    }
    
}
renderPhoto()

