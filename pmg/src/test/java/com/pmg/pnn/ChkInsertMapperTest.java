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

import com.pmg.domain.ChkInsertVO;
import com.pmg.service.ChkInsertService;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration("file:src/main/webapp/WEB-INF/spring/root-context.xml")
public class ChkInsertMapperTest {

	
	@Autowired
	private ChkInsertService service;
	
	ChkInsertVO chk = new ChkInsertVO();
	
	// 입실 데이터 추가
	@Test
	public void chkinDateRegister() throws Exception{
		
		chk.setClassName_id(1);
		chk.setCkeckName_id(1);
		chk.setChkDate("2021-10-15");
		
		service.chkinDateRegister(chk);
		
	}
	
	// 입실 데이터 [중복확인]
	@Test
	public void chkinDateOverlap() throws Exception{
		
		chk.setClassName_id(1);
		//chk.setCkeckName_id(1);
		chk.setChkDate("2021-10-15");
		
		service.chkinDateOverlap(chk);
		
		//assertEquals(chk.getChkDate(), service.chkinDateOverlap(chk).getChkDate());

	}
	
	// 입실 데이터 [중복확인]
		@Test
		public void chkinDateOverlap_Day() throws Exception{
			
			chk.setChkDate("2021-10-15");
			
			System.out.println(service.chkinDateOverlap_Day(chk));
			

		}
		
	// 입실 데이터 삭제
	
	@Test
	public void chkinDateDelete() throws Exception{
		
		
		chk.setClassName_id(1);
		chk.setChkDate("2021-10-15");
		
		
		service.chkinDateDelete(chk);
		

	}
	
	
	
	@Test
	public void WeekList() throws Exception{
		
		chk.setChkDateStart("2021-10-03");
		chk.setChkDateEnd("2021-10-09");
		
		List<ChkInsertVO> chkList = service.WeekList(chk);
		System.out.println(chkList);
		
		int c = 0;
		for(ChkInsertVO aa : chkList) {
			System.out.println("날짜: " + aa.getChkDate() + 
					"방호수 : " + aa.getClassName_id() +
					"체크인 여부 : " + aa.getCkeckName_id());
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
            

            if((i % 4) == 1) {
	            //+1달 출력
	            System.out.println(dateFormat.format(cal.getTime()));  
	            
	            int ran3 = (int) (Math.random() * 9 + 1);
    			
				int ran4 = (int) (Math.random() * 9 + 1);
	
				int ran5 = (int) (Math.random() * 9 + 1);
				
	    		for( int j =1  ; j <=10;j++) {
	    			
	    			
	    			if(ran3 == j) {
	    	    		System.out.println("통과");

	    			}else if(ran4 == j) {
	    				System.out.println("통과");
	    			}else if(ran5 == j) {
	    				System.out.println("통과");
	    			}else {
	    				chk.setClassName_id(j);
		    			chk.setCkeckName_id(1);
	
			    		chk.setChkDate(dateFormat.format(cal.getTime()));
			    		
			    		service.chkinDateRegister(chk);
	    			}
		    			
					
	    		}
            }
            i++;
        }
	}
	
}
