package com.pmg.service;

import java.util.List;

import javax.inject.Inject;

import org.springframework.stereotype.Service;

import com.pmg.dao.GradeDAO;

@Service
public class GradeServiceImpl implements GradeService {

	@Inject
	private GradeDAO dao;
	
//	@Override
//	public void userRegister(UserVO user) throws Exception {
//		// TODO Auto-generated method stub
//		dao.userRegister(user);
//		
//	}
	

}
