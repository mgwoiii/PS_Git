package com.pmg.dao;
import java.util.List;
import com.pmg.domain.UserVO;

public interface UserDAO {
	
	public void userRegister(UserVO user) throws Exception;
	
	public UserVO loginUserRead(UserVO user) throws Exception;
	
	public UserVO userIdRead(String userId) throws Exception;
	
//	public UserVO UserIdFind(UserVO user) throws Exception;

	public List<UserVO> userIdFind(UserVO user) throws Exception;

	public UserVO userPwFind(UserVO user) throws Exception;

	
	
//	public List<UserVO> listAll() throws Exception;
//	
//	public UserVO read(Integer id) throws Exception;
//	
//	public void delete(Integer id) throws Exception;
//	
//	public void update(UserVO user) throws Exception;
//	
//	public UserVO login(UserVO user) throws Exception;

	

}
