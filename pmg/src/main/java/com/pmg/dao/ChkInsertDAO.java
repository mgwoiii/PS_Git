package com.pmg.dao;
import java.util.List;

import com.pmg.domain.ChkInsertVO;
import com.pmg.domain.UserVO;

public interface ChkInsertDAO {
	
//	public void userRegister(UserVO user) throws Exception;
	
	public void chkinDateRegister(ChkInsertVO chk) throws Exception;
	
	public ChkInsertVO chkinDateOverlap(ChkInsertVO chk) throws Exception;

	
	
}