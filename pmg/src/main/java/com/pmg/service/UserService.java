package com.pmg.service;

import java.util.List;

import com.pmg.domain.Criteria;
import com.pmg.domain.PageMaker;
import com.pmg.domain.UserVO;

public interface UserService {

	public void userRegister(UserVO user) throws Exception;
	
	public UserVO loginUserRead(UserVO user) throws Exception;

	public UserVO userIdRead(String userId) throws Exception;

	//public UserVO userIdFind(UserVO user) throws Exception;

	public List<UserVO> userIdFind(UserVO user) throws Exception;
	
	public UserVO userPwFind(UserVO user) throws Exception;

	public UserVO userPwUpdate(UserVO user) throws Exception;
	
	public UserVO userPwSearch(UserVO user) throws Exception;

	public UserVO userInfoUpdate(UserVO user) throws Exception;
	
	public UserVO userInfoRead(int Id) throws Exception;
	
	public List<UserVO> userIdListRead() throws Exception;
	
	public List<UserVO> userIdListReadTen(Criteria cri) throws Exception;

	public UserVO userGradeInsert(UserVO user) throws Exception;
	
	public int userIdListCount() throws Exception;

	
	
	
	


//	public UserVO read(Integer id) throws Exception;

//	public List<UserVO> listAll() throws Exception;
//	
//	public void delete(Integer id) throws Exception;
//	
//	public void update(UserVO user) throws Exception;
//	
//	public UserVO login(UserVO user) throws Exception;
	
}
