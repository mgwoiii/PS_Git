package com.pmg.pnn;

import static org.junit.Assert.assertEquals;

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
	
	
//
//	// id 중복 검사
//	@Test
//	public void userIdOverlap() throws Exception{
//
//		// 값이 없을때
//		String UserId = "aaadda@naver.com";
//		
//		// 값이 있을때
//		String UserId2 = "2222@naver.com";
//		
//		 
//		assertEquals(UserId2, service.userIdRead(UserId2).getUserId());
//		
//	}

	

	
}
