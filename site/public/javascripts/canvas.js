function initiate(){
  var elem = document.getElementById('canvas');
  var canvas = elem.getContext('2d');

 // canvas.strokeRect(100, 100, 120, 120);
 // canvas.fillRect(110, 110, 100, 100);
 // canvas.clearRect(120, 120, 80, 80);
  canvas.beginPath();
  canvas.arc(180,100,100,0,2*Math.PI);
  canvas.fillStyle = 'Yellow';
  canvas.fill();
  canvas.stroke();

  canvas.beginPath();
  canvas.arc(140,70,20,0 , (Math.PI/180)* 360);
  canvas.fillStyle = 'Black';
  canvas.fill();
  canvas.stroke();
			
  canvas.beginPath();
  canvas.arc(210,70,20,0 , (Math.PI/180)* 360);
  canvas.fill();
  canvas.stroke();

  canvas.beginPath();
  canvas.moveTo(110, 135);
  canvas.bezierCurveTo(175, 200, 175, 140, 250, 135);
  canvas.moveTo(110, 135);
  canvas.quadraticCurveTo(100, 120, 250, 135);
  canvas.fill();	
  canvas.stroke();
}

addEventListener("load", initiate);