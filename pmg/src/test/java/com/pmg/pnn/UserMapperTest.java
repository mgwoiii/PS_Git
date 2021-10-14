package com.pmg.pnn;

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
	
	@Test
	public void create() throws Exception{

		UserVO user = new UserVO();
		
		user.setGrade_id(2);
		user.setUserId("1234@naver.com");
		user.setUserPassword("2311");
		user.setUserName("박박박2");
		user.setUserPhonNumber("01012341234");
		user.setUserBirthday("19930101");
		
		service.create(user);
		
	}

	@Test
	public void loginUserRead() throws Exception{

		UserVO user = new UserVO();
		
		user.setUserId("1234@naver.com");
		user.setUserPassword("12341234");
		
		service.loginUserRead(user);
		
	}
}
