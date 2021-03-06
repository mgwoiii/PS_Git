import axios from 'axios';

const USER_API_BASE_URL = "http://localhost:8080/pnn/";

class ApiService {

  incomeDayRead(IncomeDate){
    return axios.get(USER_API_BASE_URL +'incomeDayRead/IncomeDate/'+ IncomeDate);
  }

  incomeRegister(income){
    return axios.post(USER_API_BASE_URL +'incomeRegister', income);
  }

  incomeDayUpdate(income){
    return axios.post(USER_API_BASE_URL +'incomeDayUpdate', income);
  }

  incomeDayDelete(income){
    return axios.post(USER_API_BASE_URL +'incomeDayDelete', income);
  }

  incomeMonthRead(incomeDateStart,incomeDateEnd){
    return axios.get(USER_API_BASE_URL + 'incomeMonthRead/incomeDateStart/'+ incomeDateStart+'/incomeDateEnd/'+incomeDateEnd)
  }

  incomeMonthAndDaySumRead(MonthDate){
    return axios.get(USER_API_BASE_URL + 'incomeMonthAndDaySumRead/'+ MonthDate)

  }

  // WeekList(chkinsert){
  //       let chkDateStart = chkinsert.chkDateStart
  //       let chkDateEnd = chkinsert.chkDateEnd
  //       return axios.get(USER_API_BASE_URL +'WeekList/chkDateStart/'+ chkDateStart+'/chkDateEnd/'+chkDateEnd);
  //      }

  //      chkinDateOverlap(ChkDate, btnId){
  //       return axios.get(USER_API_BASE_URL +'chkinDateOverlap/ChkDate/'+ChkDate+'/btnId/'+btnId);
  //      }

  //      chkinDateOverlap_Day(ChkDate){
  //       return axios.get(USER_API_BASE_URL +'chkinDateOverlap_Day/ChkDate/'+ ChkDate);
  //      }

       
  //      chkinDateRegister(ChkDate, className_id, ){
  //       return axios.get(USER_API_BASE_URL +'chkinDateRegister/ChkDate/'+ChkDate+'/className_id/'+ className_id);
  //      }

  //      chkinDateDelete(ChkDate, className_id, ){
  //       return axios.get(USER_API_BASE_URL +'chkinDateDelete/ChkDate/'+ChkDate+'/className_id/'+ className_id);
  //      }


}


export default new ApiService();