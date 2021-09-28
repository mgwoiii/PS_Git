
export const LOGIN_USER = "login/LOGIN_USER";
export const LOGOUT_USER = "login/LOGOUT_USER";


export const loginUser = (user) => {
    console.log(user + "이기");
//    const data = ApiService.loginUser(user)
    return {
        type : LOGIN_USER,
        payload : user
    }
}

export const logoutUser = () => {
    return {
        type : LOGOUT_USER,
    }
}