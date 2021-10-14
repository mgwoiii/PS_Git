package com.pmg.service;

import java.util.List;

import com.pmg.domain.UserVO;

public interface UserService {

	public void userRegister(UserVO user) throws Exception;
	
	public UserVO loginUserRead(UserVO user) throws Exception;

	public UserVO UserIdRead(String userId) throws Exception;

	
//	public UserVO read(Integer id) throws Exception;

//	public List<UserVO> listAll() throws Exception;
//	
//	public void delete(Integer id) throws Exception;
//	
//	public void update(UserVO user) throws Exception;
//	
//	public UserVO login(UserVO user) throws Exception;
	
}
