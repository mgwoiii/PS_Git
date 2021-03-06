package com.pmg.service;

import java.util.List;

import javax.inject.Inject;

import org.springframework.stereotype.Service;

import com.pmg.dao.UserDAO;
import com.pmg.domain.Criteria;
import com.pmg.domain.PageMaker;
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
	public UserVO userIdRead(String userId) throws Exception {
		// TODO Auto-generated method stub
		return dao.userIdRead(userId);
	}
	
	@Override
	public List<UserVO> userIdFind(UserVO user) throws Exception {
		// TODO Auto-generated method stub
		return dao.userIdFind(user);
	}
	
	@Override
	public UserVO userPwFind(UserVO user) throws Exception {
		// TODO Auto-generated method stub
		return dao.userPwFind(user);
	}

	@Override
	public UserVO userPwUpdate(UserVO user) throws Exception {
		// TODO Auto-generated method stub
		return dao.userPwUpdate(user);
	}
	
	@Override
	public UserVO userPwSearch(UserVO user) throws Exception {
		// TODO Auto-generated method stub
		return dao.userPwSearch(user);
	}
	
	@Override
	public UserVO userInfoUpdate(UserVO user) throws Exception {
		// TODO Auto-generated method stub
		return dao.userInfoUpdate(user);
	}

	@Override
	public UserVO userInfoRead(int Id) throws Exception {
		// TODO Auto-generated method stub
		return dao.userInfoRead(Id);
	}


	@Override
	public List<UserVO> userIdListRead() throws Exception {
		// TODO Auto-generated method stub
		return dao.userIdListRead();
	}
	
	
	@Override
	public List<UserVO> userIdListReadTen(Criteria cri) throws Exception {
		// TODO Auto-generated method stub
		return dao.userIdListReadTen(cri);
	}
	
	
	
	
	@Override
	public UserVO userGradeInsert(UserVO user) throws Exception {
		// TODO Auto-generated method stub
		return dao.userGradeInsert(user);
	}
	
	@Override
	public int userIdListCount() throws Exception {
		// TODO Auto-generated method stub
		return dao.userIdListCount();
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
