package com.pmg.service;

import java.util.List;

import javax.inject.Inject;

import org.springframework.stereotype.Service;

import com.pmg.dao.IncomeDAO;
import com.pmg.domain.IncomeVO;
import com.pmg.domain.UserVO;

@Service
public class IncomeServiceImpl implements IncomeService {

	@Inject
	private IncomeDAO dao;

	@Override
	public void incomeRegister(IncomeVO income) throws Exception {
		// TODO Auto-generated method stub
		dao.incomeRegister(income);
		
	}
		
	@Override
	public List<IncomeVO> incomeDayRead(IncomeVO income) throws Exception {
		// TODO Auto-generated method stub
		return dao.incomeDayRead(income);
	}

}
