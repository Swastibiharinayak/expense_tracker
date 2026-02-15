const UserVal = "users"
const UserToken = "currentUser"

export const userRegister = ({name, email, password}) => {
    let users = localStorage.getItem(UserVal) || "[]"
    let isExist = false
    users = JSON.parse(users);
    isExist = users.find(item => item.email == email) ? true : false

    if (isExist) {
        return false
    }

    users.push({name, email, password})
    localStorage.setItem(UserVal, JSON.stringify(users))
    return true;
}


export const userLogin = ({email,password}) => {
    let users = localStorage.getItem(UserVal) 

    if (!users) {
        return {
            success: false,
            message: "No users found."
        }
    }

    users = JSON.parse(users)
    const currentUser = users.find(item => item.email === email)

    // Email not found
    if (!currentUser) {
        return {
            success: false,
            message: "User not registered. Please sign up."
        }
    }

    // Wrong password
    if (currentUser.password !== password) {
        return {
            success: false,
            message: "Incorrect password."
        }
    }

    // Success
    // console.log(currentUser)
    localStorage.setItem(UserToken, currentUser)
    return {
        success: true,
        user: currentUser
    }
}

export const checkLogin = () => {
    return localStorage.getItem(UserToken)
}

export const userLogout = () => {
    return localStorage.removeItem(UserToken)
}

// export const addExpense = ({email}) => {
//     let users = localStorage.getItem(UserVal) || "[]"
//     let isExist = false
//     users = JSON.parse(users);
//     isExist = users.find(item => item.email == email) ? true : false

//     if (isExist) {
//         return console.log("Add expense")
//     }
// }
// this is a fake api which will get the users data from the localstorage. Then verifies using isExist if the email is there in the local storage it will return false or else it will return true