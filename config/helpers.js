const MySqli = require('mysqli');

let conn = new MySqli({
    host: 'localhost',
    port: 3306,
    user: 'mega boss',
    passwd: 'bhushan77',
    db: 'eccommerce_shop'
});

let db = conn.emit( false, '');

module.exports = {
    database: db
};