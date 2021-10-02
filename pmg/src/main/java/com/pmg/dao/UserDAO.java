package com.pmg.dao;
import java.util.List;
import com.pmg.domain.UserVO;

public interface UserDAO {
	
	public void create(UserVO user) throws Exception;
	
	public List<UserVO> listAll() throws Exception;
	
	public UserVO read(Integer id) throws Exception;
	
	public void delete(Integer id) throws Exception;
	
	public void update(UserVO user) throws Exception;
	
	public UserVO login(UserVO user) throws Exception;

	

}