//  alert("Why hello there! I'm a wee bit of JavaScript.");

var pointsArray = document.getElementsByClassName('point');

var animatePoints = function(points) {

  //alert(points);

//  var revealPoint = function(point) {
//    //alert("Why hello there! I'm a wee bit of JavaScript.");
//    point.style.opacity = 1;
//    point.style.transform = "scaleX(1) translateY(0)";
//    point.style.msTransform = "scaleX(1) translateY(0)";
//    point.style.WebkitTransform = "scaleX(1) translateY(0)";
  //  points[index].style.WebkitTransform = "scaleX(1) translateY(0)";
//  }

//Array.prototype.slice.Call(points.forEach(function(element) {
  [].forEach.Call(points, function(el) {
     alert("Why hello there! I'm a wee bit of JavaScript.");
     el.style.opacity = 1;
     el.style.transform = "scaleX(1) translateY(0)";
     el.style.msTransform = "scaleX(1) translateY(0)";
     el.style.WebkitTransform = "scaleX(1) translateY(0)";
    });

  //for (index = 0; index < 3; index++) {
  //  revealPoint(index);
  //}

};

window.onload = function() {
  if (window.innerHeight > 950) {
  animatePoints(pointsArray);
  }
  var sellingPoints = document.getElementsByClassName('selling-points')[0];
  var scrollDistance = sellingPoints.getBoundingClientRect().top - window.innerHeight + 200;
  window.addEventListener('scroll', function(event) {
    if (document.documentElement.scrollTop || document.body.scrollTop >= scrollDistance) {
        animatePoints(pointsArray);
    }
});

}
