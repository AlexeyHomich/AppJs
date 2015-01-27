
exports.index = function(req, res){
  config = require('../config');
 
 
  scripts = config.get('scripts');
  scripts.push('javascripts/scr_drag_drop.js');
  
  styles = config.get('styles');
  styles.push('stylesheets/drag_drop.css');
  
  res.render('drag_drop', {
    styles : styles,
    scripts : scripts
    }
  );
};
