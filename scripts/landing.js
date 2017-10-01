//  alert("Leaving here for testing purposes");

var pointsArray = document.getElementsByClassName('point');

var animatePoints = function(points) {

  [].forEach.call(points, function(el) {
    el.style.opacity = 1;
    el.transform = "scaleX(1) translateY(0)";
    el.msTransform = "scaleX(1) translateY(0)";
    el.WebkitTransform = "scaleX(1) translateY(0)";
  });

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
