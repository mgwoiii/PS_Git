package com.pmg.service;

import java.util.List;

import javax.inject.Inject;

import org.springframework.stereotype.Service;

import com.pmg.dao.CheckDAO;

@Service
public class CheckServiceImpl implements CheckService {

	@Inject
	private CheckDAO dao;
	
//	@Override
//	public void userRegister(UserVO user) throws Exception {
//		// TODO Auto-generated method stub
//		dao.userRegister(user);
//		
//	}
	

}
