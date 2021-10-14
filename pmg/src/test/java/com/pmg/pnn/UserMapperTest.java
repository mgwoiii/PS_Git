package com.pmg.pnn;

import static org.junit.Assert.assertEquals;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.pmg.domain.UserVO;
import com.pmg.service.UserService;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration("file:src/main/webapp/WEB-INF/spring/root-context.xml")
public class UserMapperTest {
	
	@Autowired
	private UserService service;
	
	UserVO user = new UserVO();

	// ID, PASSWORD 조회 (로그인)
	@Test
	public void loginUserRead() throws Exception{
		
		user.setUserId("1234@naver.com");
		user.setUserPassword("12341234");
		
		service.loginUserRead(user);
		
	}
	
	// 회원가입 정보
	@Test
	public void userRegister() throws Exception{

		
		user.setGrade_id(2);
		user.setUserId("aaa2a22@naver.com");
		user.setUserPassword("2222");
		user.setUserName("박박박");
		user.setUserPhonNumber("01012351235");
		user.setUserBirthday("19930101");
		
		service.userRegister(user);
		
	}
	
	// id 중복 검사
	@Test
	public void userIdOverlap() throws Exception{

		// 값이 없을때
		String UserId = "aaadda@naver.com";
		
		// 값이 있을때
		String UserId2 = "2222@naver.com";
		
		 
		assertEquals(UserId2, service.userIdRead(UserId2).getUserId());
		
	}
	
	// id 찾기 검사
	@Test
	public void userIdFind() throws Exception{

		user.setUserName("박박박");
		user.setUserPhonNumber("01012351235");
		user.setUserBirthday("19930101");
		
		System.out.println(service.userIdFind(user));
		
		int count = 0;
		for(UserVO str : service.userIdFind(user)){
		    System.out.println(count + "번째 id는: " + str.getUserId());
		    count++;
		}
		

	}
	
	
	
	
	
	
	
}
