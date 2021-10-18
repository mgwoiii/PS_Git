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
	
	// 회원가입 (정보입력)
	@Test
	public void userRegister() throws Exception{

		
		user.setGrade_id(1);
		user.setUserId("admin");
		user.setUserPassword("admin");
		user.setUserName("admin");
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
		
		service.userIdFind(user);
		
		//System.out.println(service.userIdFind(user));
		
//		int count = 0;
//		for(UserVO str : service.userIdFind(user)){
//		    System.out.println(count + "번째 id는: " + str.getUserId());
//		    count++;
//		}
		

	}
	
	// password 찾기 [회원정보 조회]
	@Test
	public void userPwFind() throws Exception{

		user.setUserId("aaaa22@naver.com");
		user.setUserName("박박박");
		user.setUserPhonNumber("01012351235");
		user.setUserBirthday("19930101");
		
		service.userPwFind(user);
		
		System.out.println(service.userPwFind(user).getId());

	}
	
	// password 찾기, 변경 [update]
	@Test
	public void userPwUpdate() throws Exception{

		user.setId(15);
		user.setUserPassword("7777");
		
		service.userPwUpdate(user);

	}
	
	// password 조회 [select]
		@Test
		public void userPwSearch() throws Exception{

			user.setId(18);
			user.setUserPassword("a62227666");
			
			 UserVO user2 = service.userPwSearch(user);
			 
			 System.out.println(user2.getUserId());

		}
		
	// 개인정보 조회 [아이디, 이름, 휴대폰번호, 생일]
		@Test
		public void userInfoRead() throws Exception{

			int Id = 15;
			
			service.userInfoRead(Id);
			
		}
	
	// 개인정보 변경[ 개인정보 창(이름, 휴대폰번호, 생일) ]
		@Test
		public void userInfoUpdate() throws Exception{

			user.setId(15);
			user.setUserName("이이이");
			user.setUserPhonNumber("01011112222");
			user.setUserBirthday("19990909");

			service.userInfoUpdate(user);

		}
		
	// 계정 조회
		@Test
		public void userIdListRead() throws Exception{

			service.userIdListRead();
			
//			int count = 0;
//			for(UserVO str : service.userIdListRead()){
//			    System.out.println(count + "번째 id는: " + str.getUserId());
//			    count++;
//			}
//
		}
		
		
	// 계정 등급 조정
		@Test
		public void userGradeInsert() throws Exception{

			user.setId(15);
			user.setGrade_id(3);
			
			service.userGradeInsert(user);

		}
	
}
