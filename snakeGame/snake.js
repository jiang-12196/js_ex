/**
 * Created by jiang on 17-6-24.
 */
var map = document.getElementById('map');
var rowNum = 25;
var colNum = 25;
var mapWidth = colNum*20+'px';
var mapHeight = rowNum*20+'px';
map.style.width = mapWidth;
map.style.height = mapHeight;

var arr = [];
for(var i=0; i<rowNum; i++){
    var rowDiv = document.createElement('div');
    rowDiv.className = 'row';
    map.appendChild(rowDiv);
    var rowArray = [];
    for (var j=0; i<colNum; j++) {
        var colDiv = document.createElement('div');
        colDiv.className = 'col';
        rowDiv.appendChild(colDiv);
        rowArray.push(colDiv);
    }
    arr.push(rowArray);
}
