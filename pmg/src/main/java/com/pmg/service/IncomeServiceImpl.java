package com.pmg.service;

import java.util.List;

import javax.inject.Inject;

import org.springframework.stereotype.Service;

import com.pmg.dao.IncomeDAO;

@Service
public class IncomeServiceImpl implements IncomeService {

	@Inject
	private IncomeDAO dao;
	
//	@Override
//	public void userRegister(UserVO user) throws Exception {
//		// TODO Auto-generated method stub
//		dao.userRegister(user);
//		
//	}
	

}