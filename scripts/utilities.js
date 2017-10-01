//alert("Leaving here for testing purposes");

var pointsArray = document.getElementsByClassName('point');

var numOfNodes = pointsArray.length;

var forEach = function(numOfNodes, callback) {

  for (index = 0; index < numOfNodes; index++) {
    callback(index);
  }

}

<<<<<<< HEAD
=======
//Call back funtion
>>>>>>> checkpoint-9-events
function alertAll(point) {
  alert("Selling point #" + point + " is a great selling point!");
}

forEach(numOfNodes, alertAll);
