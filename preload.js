const { contextBridge } = require('electron')
const {db} = require('./sqlLiteManager');
contextBridge.exposeInMainWorld('sqlite3', {
  db :  db
})