package com.pmg.pnn;

import static org.junit.Assert.assertEquals;

import java.text.SimpleDateFormat;
import java.util.Calendar;

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
		chk.setCkeckName_id(1);
		chk.setChkDate("2021-10-15");
		
		service.chkinDateOverlap(chk);
		
		assertEquals(chk.getChkDate(), service.chkinDateOverlap(chk).getChkDate());

	}
	
	
	// 입실 데이터 삭제
	
	@Test
	public void chkinDateDelete() throws Exception{
		
		int id = 2786;
		
		service.chkinDateDelete(id);
		

	}
	
	// 1년치 데이터 추가.
	@Test
	public void aa() throws Exception{
		
		SimpleDateFormat dateFormat;
        //dateFormat = new SimpleDateFormat("yyyyMM"); //년월 표시
        dateFormat = new SimpleDateFormat("yyyy-MM-dd"); //년월일 표시
        
        Calendar cal = Calendar.getInstance();
        
        
        cal.set ( 2022, 1-1, 1 ); //종료 날짜 셋팅
        String endDate = dateFormat.format(cal.getTime());
        
        cal.set ( 2021, 1-1, 1 ); //시작 날짜 셋팅
        String startDate = dateFormat.format(cal.getTime());    
        
        int i = 0;
        while(!startDate.equals(endDate)){ //다르다면 실행, 동일 하다면 빠져나감
            
            if(i==0) { //최초 실행 출력
                System.out.println(dateFormat.format(cal.getTime()));
            }
            
            //cal.add(Calendar.MONTH, 1); //1달 더해줌
            cal.add(Calendar.DATE, 1); //1일 더해줌
            startDate = dateFormat.format(cal.getTime()); //비교를 위한 값 셋팅
            

            if((i % 7) == 1) {
	            //+1달 출력
	            System.out.println(dateFormat.format(cal.getTime()));  
	            
	            
	    		
	    		for( int j =1  ; j <=10;j++) {
	    			chk.setClassName_id(j);
	    			chk.setCkeckName_id(1);

		    		chk.setChkDate(dateFormat.format(cal.getTime()));
		    		
		    		service.chkinDateRegister(chk);
	    		}
            }
            i++;
        }
	}
	
}
