// Put your database code here
const database = require('better-sqlite3')
const fs = require('fs')
const datadirectory = './data/';

if(!fs.existsSync(datadirectory)){
    fs.mkdirSync(datadirectory);
}

const logdb = new database(datadirectory + 'log.db')
const statement = logdb.prepare(`SELECT name FROM sqlite_master WHERE type='table' and name='accesslog';`)
let row = stmt.get();
if (row === undefined) {
    console.log('Creating database')
    const sqlInit = `
    CREATE TABLE accesslog ( 
        id INTEGER PRIMARY KEY, 
        remoteaddr TEXT,
        remoteuser TEXT,
        time TEXT,
        method TEXT,
        url TEXT,
        protocol TEXT,
        httpversion TEXT,
        status TEXT, 
        referrer TEXT,
        useragent TEXT
    );
`

logdb.exec(sqlInit)
    }
    else{
        console.log('Log database created')
    }
    module.exports = logdb