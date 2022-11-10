const sqlite3 = require('sqlite3');
const sqlVerbose = sqlite3.verbose();
const path = require('path');
// const databaseName = path.join(__dirname,"..","..","source","db","libreria.db");
function db(src, callback)
{
    const databaseName = path.join(__dirname, src);

const db = new sqlVerbose.Database(databaseName,(err)=>{
    if(err)console.log(err)
    else console.log('Exito conectando a la db')
});

function getAll(dbName, Columns, where=null, task)
{
    const condition = where != '' ? `WHERE = ${where}` : '' 
    db.all(`SELECT ${Columns} FROM ${dbName} ${condition}`,{
            },(err,row)=>{
                if(err) task(err);
                else task(row);
                console.log('---------------Se ha obtenido el usuario Correctamente-------');
            });
}

callback(getAll);
}
// async function obtenerUser(email, username,Columns, task){
//     db.all(`SELECT ${Columns} FROM USERS WHERE USERNAME=$username OR EMAIL=$email`,{
//         $username:username,
//         $email:email
//     },(err,row)=>{
//         if(err) task(err);
//         else task(row);
//         console.log('---------------Se ha obtenido el usuario Correctamente-------');
//     });
// }
// async function registrarAlUser(userData) {
//     db.run(`INSERT INTO USERS(USERNAME, EMAIL, CLAVE, CELULAR) VALUES($username, $email, $clave, $celular)`,{
//         $username:userData.username,
//         $email:userData.email,
//         $clave:userData.password,
//         $celular:userData.numero
//     },()=>{
//         console.log('--------------Listo!-----------')
//     })
// }

// async function iniciarSession(dataSession, callback) {
//     console.log(dataSession);
//     db.all(`SELECT * FROM USERS WHERE username = $username AND PASSWORD=$password`,{
//         $username:dataSession.username,
//         $password:dataSession.password
//     }, (err,row)=>{
//         console.log(row);
//         if(err) callback(null, false)
//         else{
//             if(row.length != 0) callback(row,true);
//             else callback(null ,false);
//         }
//     })
// }

// //change password
// async function chagePassword(dataUser, callback) {
//     db.run(`UPDATE USERS SET PASSWORD = $password WHERE USERNAME=$username;`,
//     {
//         $username: dataUser.username,
//         $password: dataUser.newPassword
//     },()=>callback(true));
// }


// async function registrarPrestamo(dataPPrestamo, callback) {
//     console.log(dataPPrestamo);
//     db.run(`INSERT INTO L_PRESTADOS(NOMBRE_ETS, NOMBRE_LIBRO, CURSO, FECHA_PRESTADO, FECHA_ENTREGA) VALUES($nombre_ets, $nombreLibro,  $curso,  $diaActual,  $diaEntregar)`,
//     {
//         $nombre_ets: dataPPrestamo.nombre_ets,
//         $curso:dataPPrestamo.curso,
//         $fecha: dataPPrestamo.diaActual
//     },()=>callback(true));
// }



// // // API-----------------------------------
// async function obtenerPrestados(callback) {
//     db.all(`SELECT *,strftime("%j", FECHA_ENTREGA) - strftime("%j", DATE('now'))  AS DIAS_FALTANTES, date('now') FROM L_PRESTADOS WHERE DARKLIST = 0 ORDER BY FECHA_ENTREGA`,(err,row)=>{
//         if(err) callback(null, false)
//         else{
//             console.log(row);
//             if(row.length != 0) callback(row,true);
//             else callback(null ,false);
//         }
//     })
// }

// async function obtenerPrestadosDark(callback) {
//     db.all(`SELECT *,strftime("%j", FECHA_ENTREGA) - strftime("%j", DATE('now'))  AS DIAS_FALTANTES, date('now') FROM L_PRESTADOS WHERE DARKLIST = 1 ORDER BY FECHA_ENTREGA`,(err,row)=>{
//         if(err) callback(null, false)
//         else{
//             console.log(row);
//             if(row.length != 0) callback(row,true);
//             else callback(null ,false);
//         }
//     })
// }


// async function deletePrestadosById(id) {
//     console.log(id);
//     db.run(`DELETE FROM L_PRESTADOS WHERE ID = ${id}`, ()=>{
//         console.log('Eliminado exitosamente')
//     });
// }

// async function updateDate(dataUser, callback) {
//     console.log(dataUser);
//     db.run(`UPDATE L_PRESTADOS SET FECHA_ENTREGA = $date WHERE ID = $id;`,
//     {
//         $id: dataUser.id,
//         $date: dataUser.dateUpdated
//     },()=>callback(true));
// }

// async function addOrRemoveBlackList(dataUser, callback) {
//     console.log(dataUser);
//     db.run(`UPDATE L_PRESTADOS SET DARKLIST = $dark WHERE ID = $id;`,
//     {
//         $id: dataUser.id,
//         $dark: dataUser.setDark
//     },()=>callback(true));
// }


// exports.updateDate = updateDate;
// exports.chagePassword = chagePassword;
// exports.iniciarSession = iniciarSession;
// exports.registrarPrestamo = registrarPrestamo;
// exports.obtenerPrestados = obtenerPrestados;
// exports.obtenerPrestadosDark = obtenerPrestadosDark;
// exports.deletePrestadosById = deletePrestadosById;
// exports.addOrRemoveBlackList = addOrRemoveBlackList;

exports.db = db;