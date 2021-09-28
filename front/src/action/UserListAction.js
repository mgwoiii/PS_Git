export const LIST_USER = 'user/LIST_USER'


export const listUser = (users) => {
    //    const data = ApiService.loginUser(user)
    
        return {
            type : LIST_USER,
            payload : users,
        }
    }
