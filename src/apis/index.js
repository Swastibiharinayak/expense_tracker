export const userRegister = ({name, email, password}) => {
    let users = localStorage.getItem("users") || "[]"
    let isExist = false
    users = JSON.parse(users);
    isExist = users.find(item => item.email == email) ? true : false

    if (isExist) {
        return false
    }

    users.push({name, email, password})
    localStorage.setItem("users", JSON.stringify(users))
    return true;
}

// this is a fake api which will get the users data from the localstorage. Then verifies using isExist if the email is there in the local storage it will return false or else it will return true