// This object  -> copy of it 
let person = {
    firstName: 'John',
    lastName: 'Doe',
    address: {
        street: 'North 1st street',
        city: 'San Jose',
        state: 'CA',
        country: 'USA'
    },
    friends: ["Steve", "Nikola", "Ray", { name: "Jai", lastName: "Roy" }]
};

function superClone(obj) {
    //    create new object
    let newobj = {};
    // copy all the keys and values
    for (let key in obj) {
        let isKeyObj = typeof obj[key];

        if (isKeyObj == "object") {
            let newSmallCopiedObj = superClone(obj[key]);
            newobj[key] = newSmallCopiedObj
        } else {
            newobj[key] = obj[key];
        }
    }
    //   retrun the obj
    return newobj;
}

let deeplyClonedObj = superClone(person);
deeplyClonedObj.lastName = "Odinson";
deeplyClonedObj.address.street = "south 1st street";
console.log("person", person);
console.log("copiedObject", deeplyClonedObj);



// let person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     address: {
//         street: 'North 1st street',
//         city: 'San Jose',
//         state: 'CA',
//         country: 'USA'
//     },
// };





