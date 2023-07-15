/**You are owner of a mystery e - commerce website.The special thing about this e - commerce store is the user can only buy a single item once! and all users have unique names.

You are given a users database in the form of an objects' Array.
Complete the function definition of 'updateUsers' function to perform the following tasks:

1 - Create user if does not exist, add orders if any and return users
2 - Create and Initialize order's array if it does not exist and add first order and return users
3 - Add order to existing order's array and return users;
4 - If the item is already ordered return { msg: "Already ordered!" }**/



let users = [
    {
        name: "Rajneesh",
        age: 34,
        address: {
            local: "22 Alaknanda",
            city: "Dehradun",
            state: "UK",
        },
        orders: [{ id: 1, name: "GOT Book Series" }],
    },
    {
        name: "Bhavesh",
        age: 37,
        address: {
            local: "48 DT Row",
            city: "Hyderabad",
            state: "AP",
        },
    },
    {
        name: "Jasbir",
        age: 38,
        address: {
            local: "196 Lama Bhavan",
            city: "Gangtok",
            state: "Sikkim",
        },
        orders: [
            { id: 1, name: "Chair" },
            { id: 2, name: "PS5" },
        ],
    },
];


function updateUsers(userObject, item) {
    //write your code here
    for (let i = 0; i < users.length; i++) {
        let cUser = users[i];
        let flag = false;
        for (let key in cUser) {
            if (cUser[key] != userObject[key] && key != "orders") {
                flag = true;
            }
        }

        if (flag == false) {
            // i have found the user
            // if cuser -> oder that order -> retrun  order is present 

            if (cUser.orders == undefined) {
                cUser.orders = [{ id: 1, name: items }];

            } else {
                // add a property
                cUser.orders.push({ id: orders.lenght + 1, "name": items })
            }
            return users;

        }
    }


    //  user does not exist 

    userObject.orders = [{ id: 1, name: item }];
    users.push(userObject);
    return users;


}

updateUsers(
    {
        name: "Rajneesh",
        age: 34,
        address: {
            local: "22 Alaknanda",
            city: "Dehradun",
            state: "UK",
        },
    },
    "GOT Book Series"
)


updateUsers({
    name: "Ravi",
    age: 24,
    address: {
        local: "25 Iroda",
        city: "Dehradun",
        state: "UK",
    },
})

updateUsers(
    {
        name: "Ravi",
        age: 24,
        address: {
            local: "25 Iroda",
            city: "Dehradun",
            state: "UK",
        },
    },
    "Chair"
)