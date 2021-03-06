package com.pmg.pnn;

import static org.junit.Assert.assertEquals;

import java.text.SimpleDateFormat;
import java.util.Calendar;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.pmg.domain.ExpenVO;
import com.pmg.service.ExpenService;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration("file:src/main/webapp/WEB-INF/spring/root-context.xml")
public class ExpenMapperTest {
	
	@Autowired
	private ExpenService service;
	
	ExpenVO expen = new ExpenVO();
	
	// 지출일지 등록
	@Test
	public void expenRegister() throws Exception{

		expen.setExpenNote("노트 6개");
		expen.setExpenPrice(2000);
		expen.setExpenDate("2021-10-17");
		
		service.expenRegister(expen);
		
	}
	// 지출일지 일별 조회
	
	@Test
	public void expenDateSearch() throws Exception{
		
		
		expen.setExpenDate("2021-01-01");
		
		System.out.println(service.expenDateSearch(expen));
	
	}
	
	
	// 지출일지 조회 [월별] 1~ 12월 합
	
	@Test
	public void expenMonthRead() throws Exception{
		
		expen.setExpenDateStart("2021-01-01");
		expen.setExpenDateEnd("2021-12-31");
		
		System.out.println(service.expenMonthRead(expen));
	
		for(ExpenVO bb : service.expenMonthRead(expen)) {
			System.out.println(bb.getMonthDate()+ "이랑"+ bb.getMonthSum() );

		}
	}
	
	// 지출일지 월별 ex) 2021년 10월 1일~ 30일[1일 합계]
	
		@Test
		public void expenMonthAndDayRead() throws Exception{
			
			expen.setExpenDateStart("2021-01-01");
			expen.setExpenDateEnd("2021-12-31");
			
			System.out.println(service.expenMonthRead(expen));
		
			for(ExpenVO bb : service.expenMonthRead(expen)) {
				System.out.println(bb.getMonthDate()+ "이랑"+ bb.getMonthSum() );

			}
		}
	
	// 지출일지 조회[메인화면] ex) 2021년 10월 1일~ 30일[전체내역]
	@Test
	public void expenMonthAndDaySumRead() throws Exception{
		
		expen.setExpenDateStart("2021-05-05");
		
		System.out.println(service.expenMonthAndDaySumRead(expen));
	
		for(ExpenVO bb : service.expenMonthAndDaySumRead(expen)) {
			System.out.println(
							" 날짜 : " + bb.getDayDate() + 
					        " 액수 : " + bb.getDaySum());

		}
	}
	
	
	// 지출일지 조회 [일별조회] ex) 2021년 10월 1일 목록조회
	@Test
	public void expenDayRead() throws Exception{

		
			expen.setExpenDate("2021-10-18");
			
			
			for(ExpenVO a : service.expenDayRead(expen)) {
				System.out.println(
						"순서 : " + a.getId()+
						" 구매내역 : " + a.getExpenNote()+
						
						" 계 : " + a.getExpenPrice()+
						" 날짜 : " + a.getExpenDate()
						);
				
			}
	}
	
	// 지출일지 일별 수정
	@Test
	public void expenDayUpdate() throws Exception{

		
		expen.setId(2905);

		expen.setExpenNote("음료수 3잔");
		expen.setExpenPrice(50000);
		
		service.expenDayUpdate(expen);
			
	}
	// 지출일지 삭제

	@Test
	public void expenDayDelete() throws Exception{
		
		int id = 2904;
		service.expenDayDelete(id);
	
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
	            

	            if((i % 9) == 1) {
		            //+1달 출력
		            System.out.println(dateFormat.format(cal.getTime()));  
		            
	    			int ran = (int) (Math.random() * 30 + 1);

		    		for( int j =1  ; j <= ran;j++) {
		    			

			    			int random, random2 ;
			    			
			    			random = (int) (Math.random() * 5 + 1);
			    			random2 = (int) (Math.random() * 3000 + 1);
		
			    			expen.setExpenNote("노트"+ random+"개");
			    			expen.setExpenPrice(2000 + random2);
			    			expen.setExpenDate(dateFormat.format(cal.getTime()));
			    			service.expenRegister(expen);

		    		

		    			
		    		}
	            }
	            i++;
	        }
		}
		
	
	
}
