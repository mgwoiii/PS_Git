package com.pmg.service;

import java.util.List;

import javax.inject.Inject;

import org.springframework.stereotype.Service;

import com.pmg.dao.UserDAO;
import com.pmg.domain.UserVO;

@Service
public class UserServiceImpl implements UserService {

	@Inject
	private UserDAO dao;
	
	@Override
	public void userRegister(UserVO user) throws Exception {
		// TODO Auto-generated method stub
		dao.userRegister(user);
		
	}
	
	@Override
	public UserVO loginUserRead(UserVO user) throws Exception {
		// TODO Auto-generated method stub

		return dao.loginUserRead(user);
	}
	
	
	@Override
	public UserVO UserIdRead(String userId) throws Exception {
		// TODO Auto-generated method stub
		return dao.UserIdRead(userId);
	}
	

//
//	@Override
//	public List<UserVO> listAll() throws Exception {
//		// TODO Auto-generated method stub
//		return dao.listAll();
//	}
//
//	@Override
//	public UserVO read(Integer id) throws Exception {
//		// TODO Auto-generated method stub
//		return dao.read(id);
//	}
//
//	@Override
//	public void delete(Integer id) throws Exception {
//		// TODO Auto-generated method stub
//		dao.delete(id);
//	}
//
//	@Override
//	public void update(UserVO user) throws Exception {
//		// TODO Auto-generated method stub
//		dao.update(user);
//		
//	}
//

}
