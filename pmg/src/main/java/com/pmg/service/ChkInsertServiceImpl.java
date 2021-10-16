package com.pmg.service;

import java.util.List;

import javax.inject.Inject;

import org.springframework.stereotype.Service;

import com.pmg.dao.ChkInsertDAO;
import com.pmg.domain.ChkInsertVO;

@Service
public class ChkInsertServiceImpl implements ChkInsertService {

	@Inject
	private ChkInsertDAO dao;
	
	
	
	@Override
	public void chkinDateRegister(ChkInsertVO chk) throws Exception {
		// TODO Auto-generated method stub
		dao.chkinDateRegister(chk);
		
	}	
	
	@Override
	public ChkInsertVO chkinDateOverlap(ChkInsertVO chk) throws Exception {
		// TODO Auto-generated method stub
		
		return dao.chkinDateOverlap(chk);
		
	}
	
	@Override
	public void chkinDateDelete(int id) throws Exception {
		// TODO Auto-generated method stub
		dao.chkinDateDelete(id);
		
	}	
	
//	@Override
//	public void userRegister(UserVO user) throws Exception {
//		// TODO Auto-generated method stub
//		dao.userRegister(user);
//		
//	}
	

}
