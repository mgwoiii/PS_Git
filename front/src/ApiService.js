import axios from 'axios';

const USER_API_BASE_URL = "http://localhost:8080/pnn/";

class ApiService {
    
    fetchUsers() {
        return axios.get(USER_API_BASE_URL)
    
    }

    fetchUserByID(userID){
        
        return axios.get(USER_API_BASE_URL + 'select/' + userID);
    }

    deleteUser(userID){
        return axios.delete(USER_API_BASE_URL + 'delete/'+ userID);
    }

    addUser(user){
        return axios.post(USER_API_BASE_URL +'/insert', user);
    }

    editUser(user){
        return axios.put(USER_API_BASE_URL + 'update/' + user.id, user);
    }

    loginUser(user){
        return axios.post(USER_API_BASE_URL +'/login', user);
    }

}


export default new ApiService();