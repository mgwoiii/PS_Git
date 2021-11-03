import axios from 'axios';

const USER_API_BASE_URL = "http://localhost:8080/pnn/";

class ApiService {
  
  expenMonthAndDaySumRead(Monthdate){
    return axios.get(USER_API_BASE_URL +'expenMonthAndDaySumRead/'+ Monthdate);
  }

  expenDateSearch(dateSearch){
    return axios.get(USER_API_BASE_URL +'expenDateSearch/'+ dateSearch);
  }

  expenDayDelete(id){
    return axios.get(USER_API_BASE_URL +'expenDayDelete/'+ id);

  }

 expenRegister(expen){
  return axios.post(USER_API_BASE_URL +'expenRegister', expen);

 }
  
 expenMonthRead(expenDateStart, expenDateEnd){
    return axios.get(USER_API_BASE_URL +'expenMonthRead/expenDateStart/'+ expenDateStart+'/expenDateEnd/'+expenDateEnd);
}


  // incomeDayRead(IncomeDate){
  //   return axios.get(USER_API_BASE_URL +'incomeDayRead/IncomeDate/'+ IncomeDate);
  // }

  // incomeRegister(income){
  //   return axios.post(USER_API_BASE_URL +'incomeRegister', income);
  // }

  // incomeDayUpdate(income){
  //   return axios.post(USER_API_BASE_URL +'incomeDayUpdate', income);
  // }

  // incomeDayDelete(income){
  //   return axios.post(USER_API_BASE_URL +'incomeDayDelete', income);
  // }

  // incomeMonthRead(incomeDateStart,incomeDateEnd){
  //   return axios.get(USER_API_BASE_URL + 'incomeMonthRead/incomeDateStart/'+ incomeDateStart+'/incomeDateEnd/'+incomeDateEnd)
  // }

  // incomeMonthAndDaySumRead(MonthDate){
  //   return axios.get(USER_API_BASE_URL + 'incomeMonthAndDaySumRead/'+ MonthDate)

  // }

}


export default new ApiService();