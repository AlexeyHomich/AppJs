var drop, canvas;
function initiate(){
  var images = document.querySelectorAll('#picturebox > img');
  for(var i = 0; i < images.length; i++){
    images[i].addEventListener('dragstart', dragged);
    images[i].addEventListener('dragend', ending);
  }
  drop = document.getElementById('canvas');
  canvas = drop.getContext('2d');
  
  
  drop.addEventListener('dragenter', function(e){e.preventDefault();});
  drop.addEventListener('dragover', function(e){e.preventDefault();});
  drop.addEventListener('drop', dropped);
//  source1 = document.getElementById('image');
//  source1.addEventListener('dragstart', dragged);
//  source1.addEventListener('ending', ending);
//  
//  drop = document.getElementById('dropbox');
//  drop.addEventListener('dragenter', entering);
//  drop.addEventListener('dragleave', leaving);
//  drop.addEventListener('drop', dropped);
}

function dragged(e){
  elem = e.target;
  e.dataTransfer.setData('Text', elem.getAttribute('id'));
  e.dataTransfer.setDragImage(elem, 0, 0);
}

function dropped(e){
  e.preventDefault();
  var id = e.dataTransfer.getData('Text');
  var elem = document.getElementById(id);
  var posx = e.pageX - drop.offsetLeft;
  var posy = e.pageY - drop.offsetTop;
  canvas.drawImage(elem, posx, posy);
}
//function entering(e){
//  e.preventDefault();
//  drop.style.background = ' rgba(0, 150, 0, .2)';
//}

//function leaving(e){
//  e.preventDefault();
//  drop.style.background = '#FFFFFF';
//}

function ending(e){
  elem = e.target;
  elem.style.visibility = 'hidden';
}


addEventListener('load', initiate);