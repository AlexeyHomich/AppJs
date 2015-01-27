var drop;
function initiate(){
  drop = document.getElementById('dropbox');
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

//function dragged(e){
//  elem = e.target;
//  e.dataTransfer.setData('Text', elem.getAttribute('id'));
//  e.dataTransfer.setDragImage(elem, 0, 0);
//}

function dropped(e){
  e.preventDefault();
  var files = e.dataTransfer.files;
  var list = '';
  for(var f = 0; f < files.length; f++){
    list += 'File: ' + files[f].name + ' ' + files[f].size + '<br>';
  }
  drop.innerHTML = list;
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