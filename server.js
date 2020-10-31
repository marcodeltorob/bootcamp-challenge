const app = require('./src/app');
const CONFIG = require('@config/config');
const chalk = require('chalk');

// Start the app
app.listen(CONFIG.port, async () => {
    console.log(
       '%s App is running at http://localhost:%d in %s mode',
       chalk.green('✓'),
       process.env.PORT,
       process.env.CURRENT_ENV
    );

    console.log('  Press CTRL-C to stop\n');
 })