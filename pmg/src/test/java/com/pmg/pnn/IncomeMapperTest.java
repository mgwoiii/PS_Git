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
			income.setIncomeDate("2021-10-21");
			
			
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
	
//		@Test
//		public void incomeDayDelete() throws Exception{
//			
//			int id = 2202;
//			service.incomeDayDelete(id);
//		
//		}
		
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
		@Test
		public void incomeMonthAndDayRead() throws Exception{
			 
			income.setIncomeDateStart("2021-10-05");
			
			System.out.println(service.incomeMonthAndDayRead(income));
		
 			for(IncomeVO bb : service.incomeMonthAndDayRead(income)) {
				System.out.println("날짜 : "+bb.getIncomeDate()+
				"입실 호수 :"+  bb.getClassName_id() + "객실 타입"+  bb.getReserveType_id()
				+"방 가격 : "+  bb.getRoomPrice() +"방 타입 : "+  bb.getRoomType_id()
				+"bbq : " + bb.getBbqPrice() + "bbq type : "+ bb.getBbqType_id()
						
						);

			}
		}
		
		
	// 수입일지 기간별 조회(1~31일 (일)단위)
		@Test
		public void incomeMonthAndDaySumRead() throws Exception{
			 
			income.setIncomeDateStart("2021-10-05");
			
			System.out.println(service.incomeMonthAndDaySumRead(income));
		
 			for(IncomeVO bb : service.incomeMonthAndDaySumRead(income)) {
				System.out.println("날짜 : "+bb.getDayDate()+
				" 계 :"+  bb.getDaySum());

			}
		}
		

		
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
            
            System.out.println(i);  

            if((i % 4) == 1) {
	            //+1달 출력
	            System.out.println("--------------");  

	            System.out.println(dateFormat.format(cal.getTime()));  
	            
	        	IncomeVO income = new IncomeVO();

	        	int notclass1 = (int) (Math.random() * 9 + 1);
    			
				int notclass2 = (int) (Math.random() * 9 + 1);
	
				int notclass3 = (int) (Math.random() * 9 + 1);
				
	    		for( int j =1  ; j <=10;j++) {
	    			

	    			if(notclass1 == j) {
	    	    		System.out.println("통과");

	    			}else if(notclass2 == j) {
	    				System.out.println("통과");
	    				
	    			}else if(notclass3 == j) {
	    				System.out.println("통과");
	    				
	    			}else {
	    				int ReserveType_id, RoomType_id, BbqType_id, ExtraPeopleType_id
	    				,money1, money2, money3;
		    			
	    				ReserveType_id = (int) (Math.random() * 5 + 1);
	    				RoomType_id = (int) (Math.random() * 3 + 1);
	    				BbqType_id = (int) (Math.random() * 3 + 1);
	    				ExtraPeopleType_id = (int) (Math.random() * 3 + 1);

	    				money1 = (int) (Math.random() * 300000 + 1);
	    				money2 = (int) (Math.random() * 30000 + 1);
	    				money3 = (int) (Math.random() * 3000000 + 1);

	    				
		    			income.setClassName_id(j);
		    			income.setReserveType_id(ReserveType_id);
		    			income.setRoomPrice(money1);
		    			income.setRoomType_id(RoomType_id);
		    			income.setBbqPrice(money2);
		    			income.setBbqType_id(BbqType_id);
		    			income.setExtraPeoplePrice(money3);
		    			income.setExtraPeopleType_id(ExtraPeopleType_id);
		    			income.setTotalPrice(money1 + money2 + money3);
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

