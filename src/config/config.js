require('dotenv').config();

let CONFIG = {};

// Current ENV
CONFIG.current_env = process.env.CURRENT_ENV || 'production';

// Port
CONFIG.port = process.env.PORT || '3002';


module.exports = CONFIG;
