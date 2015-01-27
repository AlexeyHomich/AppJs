
exports.index = function(req, res){
  config = require('../config');
 
 
  scripts = config.get('scripts');
  scripts.push('javascripts/scr_drag_drop_files.js');
  
  styles = config.get('styles');
  styles.push('stylesheets/drag_drop_files.css');
  
  res.render('drag_drop_files', {
    styles : styles,
    scripts : scripts
    }
  );
};
