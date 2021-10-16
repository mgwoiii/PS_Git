package com.pmg.pnn;

import static org.junit.Assert.assertEquals;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.List;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.pmg.domain.IncomeVO;
import com.pmg.service.IncomeService;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration("file:src/main/webapp/WEB-INF/spring/root-context.xml")
public class IncomeMapperTest {
	
	@Autowired
	private IncomeService service;
	
	IncomeVO income = new IncomeVO();

	// 수입일지 등록 (insert)
	
	@Test
	public void incomeRegister() throws Exception{

		
		income.setClassName_id(1);
		income.setReserveType_id(1);
		income.setRoomPrice(1);
		income.setRoomType_id(1);
		income.setBbqPrice(1);
		income.setBbqType_id(1);
		income.setExtraPeoplePrice(1);
		income.setExtraPeopleType_id(1);
		income.setTotalPrice(1);
		income.setNote(null);
		income.setGuestName(null);
		income.setIncomeDate(null);
		

		
		service.incomeRegister(income);
		
	}
	
	// 수입일지 일별 조회
	@Test
	public void incomeDayRead() throws Exception{

		
//		for(int i=1;i<=10;i++) {
//			income.setClassName_id(i);
			income.setIncomeDate("2021-10-18");
			
			
			for(IncomeVO a : service.incomeDayRead(income)) {
				System.out.println(
						"날짜 : " + a.getClassName_id()+
						" 예약종류 : " + a.getReserveType_id()+
						
						" 방가격 : " + a.getRoomPrice()+
						" 종류 : " + a.getRoomType_id()+
						
						" 바베큐 : " + a.getBbqPrice()+
						" 종류 : " + a.getBbqType_id()+
						
						" 인원추기 : " + a.getExtraPeoplePrice()+
						" 종류 : " + a.getExtraPeopleType_id()+
						
						" 총계 : " + a.getTotalPrice()+
						" 비고 : " + a.getNote()+
						" 예약자명 : " + a.getGuestName()+
						" 날짜 : " + a.getIncomeDate()
						
						);

			}
//		}
	}
	
	// 수입일지 일별 수정
	@Test
	public void incomeDayUpdate() throws Exception{

		
		income.setId(2203);

		income.setReserveType_id(6);
		income.setRoomPrice(2050);
		income.setRoomType_id(3);
		income.setBbqPrice(2000);
		income.setBbqType_id(3);
		income.setExtraPeoplePrice(2050);
		income.setExtraPeopleType_id(3);
		income.setTotalPrice(6100);
		income.setNote("-");
		income.setGuestName("박이이");
		
		service.incomeDayUpdate(income);
			
	}
	
	// 수입일지 일별 삭제
	
		@Test
		public void incomeDayDelete() throws Exception{
			
			int id = 2202;
			service.incomeDayDelete(id);
		
		}
		
	// 수입일지 기간별 조회(1~12월 (월)단위)

		@Test
		public void incomeMonthRead() throws Exception{
			
			income.setIncomeDateStart("2021-01-01");
			income.setIncomeDateEnd("2021-12-31");
			
			System.out.println(service.incomeMonthRead(income));
		
			for(IncomeVO bb : service.incomeMonthRead(income)) {
				System.out.println(bb.getMonthDate()+ "이랑"+ bb.getMonthSum() );

			}
		}
		
	// 수입일지 기간별 조회(1~31일 (일)단위)

		
	/*
	 
			SELECT MONTH(IncomeDate) AS date,
			       sum(totalPrice)
			  FROM IncomeTable
			WHERE DATE(IncomeDate) BETWEEN '2020-01-01' AND '2020-12-31'
			 GROUP BY date;
	 * */
	// 1년치 데이터 추가.
	@Test
	public void aa() throws Exception{
		
		SimpleDateFormat dateFormat;
        //dateFormat = new SimpleDateFormat("yyyyMM"); //년월 표시
        dateFormat = new SimpleDateFormat("yyyy-MM-dd"); //년월일 표시
        
        Calendar cal = Calendar.getInstance();
        
        
        cal.set ( 2023, 1-1, 1 ); //종료 날짜 셋팅
        String endDate = dateFormat.format(cal.getTime());
        
        cal.set ( 2020, 1-1, 1 ); //시작 날짜 셋팅
        String startDate = dateFormat.format(cal.getTime());    
        
        int i = 0;
        while(!startDate.equals(endDate)){ //다르다면 실행, 동일 하다면 빠져나감
            
            if(i==0) { //최초 실행 출력
                System.out.println(dateFormat.format(cal.getTime()));
            }
            
            //cal.add(Calendar.MONTH, 1); //1달 더해줌
            cal.add(Calendar.DATE, 1); //1일 더해줌
            startDate = dateFormat.format(cal.getTime()); //비교를 위한 값 셋팅
            

            if((i % 9) == 1) {
	            //+1달 출력
	            System.out.println(dateFormat.format(cal.getTime()));  
	            
	        	IncomeVO income = new IncomeVO();

	    		
	    		for( int j =1  ; j <=10;j++) {
	    			int ran = (int) (Math.random() * 10 + 1);
	    			

	    			if(ran != j) {
		    			int random, random2 ;
		    			
		    			random = (int) (Math.random() * 5 + 1);
		    			random2 = (int) (Math.random() * 3 + 1);
	

		    			income.setClassName_id(j);
		    			income.setReserveType_id(random);
		    			income.setRoomPrice(1000);
		    			income.setRoomType_id(random2);
		    			income.setBbqPrice(1000);
		    			income.setBbqType_id(random2);
		    			income.setExtraPeoplePrice(1000);
		    			income.setExtraPeopleType_id(random2);
		    			income.setTotalPrice(3000);
		    			income.setNote("-");
		    			income.setGuestName(i+"이랑"+j);
		    			income.setIncomeDate(dateFormat.format(cal.getTime()));
		    			service.incomeRegister(income);

	    			}

	    			
	    		}
            }
            i++;
        }
	}
}
