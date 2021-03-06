package com.pmg.service;

import java.util.List;
import com.pmg.domain.ChkInsertVO;


public interface ChkInsertService {

	
	public void chkinDateRegister(ChkInsertVO chk) throws Exception;
	
	public ChkInsertVO chkinDateOverlap(ChkInsertVO chk) throws Exception;
		
	public List<ChkInsertVO> chkinDateOverlap_Day(ChkInsertVO chk) throws Exception;
	
	public List<ChkInsertVO> WeekList(ChkInsertVO chk) throws Exception;

	public void chkinDateDelete(ChkInsertVO chk) throws Exception;


	
//	public UserVO read(Integer id) throws Exception;

//	public List<UserVO> listAll() throws Exception;
//	
//	public void delete(Integer id) throws Exception;
//	
//	public void update(UserVO user) throws Exception;
//	
//	public UserVO login(UserVO user) throws Exception;
	
}
