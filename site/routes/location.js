
exports.index = function(req, res){
  config = require('../config');
 
 
  scripts = config.get('scripts');
  scripts.push('https://maps.googleapis.com/maps/api/js?v=3.exp');
  scripts.push('javascripts/location.js');
  
  styles = config.get('styles');
  styles.push('stylesheets/location.css');
  
  res.render('location', {
    styles : styles,
    scripts : scripts
    }
  );
};
