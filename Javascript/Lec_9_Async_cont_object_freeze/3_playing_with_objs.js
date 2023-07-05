// let config = {
//     appName: "scaler.com",
//     database: {
//         host: "127.0.0.1",
//         name: "mainDb",
//         user: "root",
//         pwd: "admin"
//     }
// }

/**
 * mutation/changes we can do on object ->
 * 1. reassign -> const,
 * 2. create a prop -> object.preventExtension
 * 4. remove and create -> Object.seal
 * 3. prevent create , update , delete -> Object.freeze
 * **/
// config=10;
// console.log(config);


// config.tempServer = "127.0.0.18";
// delete config.database.pwd;
// config.appName = "interviewbit.com";
// console.log(config);


/*************Reassignment -> const variable****/
/***const -> only the address of object is freezed but not it's properties**/
// const config = {
//     appName: "scaler.com",
//     database: {
//         host: "127.0.0.1",
//         name: "mainDb",
//         user: "root",
//         pwd: "admin"
//     }
// }

// config = 10;
// console.log(config);

// config.tempServer = "127.0.0.18";
// delete config.database.pwd;
// config.appName = "interviewbit.com";
// console.log(config);


/***************************
 * new property should not  be added on the first level -> update and delete

 * **************************/
// const config = {
//     appName: "scaler.com",
//     database: {
//         host: "127.0.0.1",
//         name: "mainDb",
//         user: "root",
//         pwd: "admin"
//     },
//     extra: 10
// }
// let notExtendableObj = Object.preventExtensions(config);
// notExtendableObj.database = Object.preventExtensions(notExtendableObj.database);
// notExtendableObj.tempServer = "127.0.0.18";
// notExtendableObj.database.newpwd = "fake";
// // notExtendableObj.appName = "interviewbit.com";
// // delete notExtendableObj.extra;
// // console.log(config);
// console.log(notExtendableObj);




/*******
 * Object.seal -> update but not delete / add 
 * 
 * **/
// const config = {
//     appName: "scaler.com",
//     database: {
//         host: "127.0.0.1",
//         name: "mainDb",
//         user: "root",
//         pwd: "admin"
//     },
//     extra: 10
// }
// let notExtendableObj = Object.seal(config);
// notExtendableObj.database = Object.seal(notExtendableObj.database);
// notExtendableObj.tempServer = "127.0.0.18";
// notExtendableObj.database.newpwd = "fake";
// delete notExtendableObj.extra;
// notExtendableObj.appName = "interviewbit.com";
// // // console.log(config);
// console.log(notExtendableObj);


/*******
 * Object.freeze -> you cannot update/ delete / add 
 * 
 * **/



const config = {
    appName: "scaler.com",
    database: {
        host: "127.0.0.1",
        name: "mainDb",
        user: "root",
        pwd: "admin"
    },
    extra: 10
}
let notExtendableObj = Object.freeze(config);
notExtendableObj.database = Object.freeze(notExtendableObj.database);
notExtendableObj.tempServer = "127.0.0.18";
notExtendableObj.database.newpwd = "fake";
delete notExtendableObj.extra;
notExtendableObj.appName = "interviewbit.com";
// // console.log(config);
console.log(notExtendableObj);


// HW : n-level : freeze, seal and preventExtension
// st1
// st2
