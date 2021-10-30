import axios from 'axios';

const USER_API_BASE_URL = "http://localhost:8080/pnn/";

class ApiService {

      WeekList(chkinsert){
        let chkDateStart = chkinsert.chkDateStart
        let chkDateEnd = chkinsert.chkDateEnd
        return axios.get(USER_API_BASE_URL +'WeekList/chkDateStart/'+ chkDateStart+'/chkDateEnd/'+chkDateEnd);
       }

       chkinDateOverlap(ChkDate, btnId){
        return axios.get(USER_API_BASE_URL +'chkinDateOverlap/ChkDate/'+ChkDate+'/btnId/'+btnId);
       }

       chkinDateOverlap_Day(ChkDate){
        return axios.get(USER_API_BASE_URL +'chkinDateOverlap_Day/ChkDate/'+ ChkDate);
       }

       
       chkinDateRegister(ChkDate, className_id, ){
        return axios.get(USER_API_BASE_URL +'chkinDateRegister/ChkDate/'+ChkDate+'/className_id/'+ className_id);
       }

       chkinDateDelete(ChkDate, className_id, ){
        return axios.get(USER_API_BASE_URL +'chkinDateDelete/ChkDate/'+ChkDate+'/className_id/'+ className_id);
       }

    // USER_API_BASE_URL +'WeekList', chkDateStart , chkDateEnd
      // loginUser(user){
      //   return axios.post(USER_API_BASE_URL +'/login', user);
      // }

      // loginChk(user){
      //   return axios.post(USER_API_BASE_URL +'loginChk', user);
      // }

      
      // userRegister(user){
      //   return axios.post(USER_API_BASE_URL +'userRegister', user);
      // }

      // userIdFind(user){
      //   return axios.post(USER_API_BASE_URL +'userIdFind', user);
      // }

      // userFindpw(user){
      //   return axios.post(USER_API_BASE_URL +'userFindpw', user);
      // }
      
      // userPwUpdate(user){
      //   return axios.post(USER_API_BASE_URL +'userPwUpdate', user);
      // }
      
      // userInfoRead(user){
      //   return axios.post(USER_API_BASE_URL +'userInfoRead', user);
      // }
      
      // userInfoUpdate(user){
      //   return axios.post(USER_API_BASE_URL +'userInfoUpdate', user);
      // }


      // userPwSearch(user){
      //   return axios.post(USER_API_BASE_URL +'userPwSearch', user);
      // }

      // userGradeInsert(user){
      //   return axios.post(USER_API_BASE_URL +'userGradeInsert', user);
      // }


    // fetchUsers() {
    //     return axios.get(USER_API_BASE_URL)
    
    // }

    // fetchUserByID(userID){
        
    //     return axios.get(USER_API_BASE_URL + 'select/' + userID);
    // }

    // deleteUser(userID){
    //     return axios.delete(USER_API_BASE_URL + 'delete/'+ userID);
    // }

    // addUser(user){
    //     return axios.post(USER_API_BASE_URL +'/insert', user);
    // }

    // editUser(user){
    //     return axios.put(USER_API_BASE_URL + 'update/' + user.id, user);
    // }

    // loginUser(user){
    //     return axios.post(USER_API_BASE_URL +'/login', user);
    // }

}


export default new ApiService();