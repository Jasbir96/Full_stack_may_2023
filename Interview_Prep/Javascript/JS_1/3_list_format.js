// ## Asked in : DropBox
// 
// ## Problem statement
//  Given a list of strings, implement a function listFormat that returns the items concatenated into a single string. A common use case would be in summarizing the reactions for social media posts.

// ## Features 
// The function should support a few options as the second parameter:

// * sorted: Sorts the items by alphabetical order.
// * length: Show only the first length items, using "and X other(s)" for the remaining. Ignore invalid values (negative, 0, etc).
// * unique: Remove duplicate items.

// Examples
// listFormat(); // ''
// listFormat([]); // ''


// listFormat(['Bob']); // 'Bob'
// listFormat(['Bob', 'Alice']); // 'Bob and Alice'

// listFormat(['Bob', 'Ben', 'Tim', 'Jane', 'John']);
// // 'Bob, Ben, Tim, Jane and John'

// listFormat(['Bob', 'Ben', 'Tim', 'Jane', 'John'], {
//   length: 3,
// }); // 'Bob, Ben, Tim and 2 others'

// listFormat(['Bob', 'Ben', 'Tim', 'Jane', 'John'], {
//   length: 4,
// }); // 'Bob, Ben, Tim, Jane and 1 other'

// listFormat(['Bob', 'Ben', 'Tim', 'Jane', 'John'], {
//   length: 3,
//   sorted: true,
// }); // 'Ben, Bob, Jane and 2 others'

// listFormat(['Bob', 'Ben', 'Tim', 'Jane', 'John', 'Bob'], {
//   length: 3,
//   unique: true,
// }); // 'Bob, Ben, Tim and 2 others'

// listFormat(['Bob', 'Ben', 'Tim', 'Jane', 'John'], {
//   length: 3,
//   unique: true,
// }); // 'Bob, Ben, Tim and 2 others'

// listFormat(['Bob', 'Ben', '', '', 'John']); // 'Bob, Ben and John'


function listFormat(list, optionsObj) {
    // either no input | empty 
    if (list == undefined || list.length == 0) {
        return '';
    }
    // if length is 1
    if (list.length == 1) {
        return list[0];
    }

    // removing falsy values 
    list = list.filter((entry => entry != ''));
    // if uniquness
    if (optionsObj && optionsObj.unique) {
        list = Array.from(new Set(list));
    }

    // if sorting
    if (optionsObj && optionsObj.sort) {
        list = list.sort();
    }

    // with a valid length -> argument 
    if (optionsObj && optionsObj.length > 0 && optionsObj.length < list.length) {
        const firstPart = list.slice(0, optionsObj.length).join(", ");
        const count = list.length - optionsObj.length;
        const secondPart =`${count} other${count>1?'s':''} `
        return firstPart + " and " + secondPart;
    }

    // without length
    const firstPart = list.slice(0, list.length - 1).join(", ");
    const secondPart = list[list.length - 1];
    return firstPart + " and " + secondPart;
}


let res = listFormat(['Bob', 'Ben', '', '', 'John']);
console.log("res: ", res)

// res = listFormat();
// console.log("res: ", res)
// res = listFormat([]);
// console.log("res: ", res)
// res = listFormat(['Bob']);
// console.log("res: ", res)
// res = listFormat(['Bob', 'Alice']);
// console.log("res: ", res)
res = listFormat(['Bob', 'Ben', 'Jane', 'John','Tim' ], {
    length: 3,
    sorted: true,
}); // 'Ben, Bob, Jane and 2 others'
console.log("res: ", res)

res=listFormat(['Bob', 'Ben', 'Tim', 'Jane', 'John', 'Bob'], {
    length: 3,
    unique: true,
}); // 'Bob, Ben, Tim and 2 others'
console.log("res: ", res)

res=listFormat(['Bob', 'Ben', 'Tim', 'Jane', 'John'], {
    length: 3,
    unique: true,
});
console.log("res: ", res)