const dotenv = require('dotenv');
dotenv.config({ path: './config.env'});
const app = require('./app');

console.log('server.js executed');

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`App has started listening on port ${port}`)
})