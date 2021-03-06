package com.pmg.service;

import java.util.List;

import javax.inject.Inject;

import org.springframework.stereotype.Service;

import com.pmg.dao.ExpenDAO;
import com.pmg.domain.ExpenVO;
import com.pmg.domain.IncomeVO;

@Service
public class ExpenServiceImpl implements ExpenService {

	@Inject
	private ExpenDAO dao;
	
	@Override
	public void expenRegister(ExpenVO expen) throws Exception {
		// TODO Auto-generated method stub
		dao.expenRegister(expen);
		
	}	

	@Override
	public List<ExpenVO> expenMonthRead(ExpenVO expen) throws Exception {
		// TODO Auto-generated method stub
		return dao.expenMonthRead(expen);
	}
	

	@Override
	public List<ExpenVO> expenMonthAndDayRead(ExpenVO expen) throws Exception {
		// TODO Auto-generated method stub
		return dao.expenMonthAndDayRead(expen);
	}

	@Override
	public List<ExpenVO> expenMonthAndDaySumRead(ExpenVO expen) throws Exception {
		// TODO Auto-generated method stub
		return dao.expenMonthAndDaySumRead(expen);
	}
	
	@Override
	public List<ExpenVO> expenDayRead(ExpenVO expen) throws Exception {
		// TODO Auto-generated method stub
		return dao.expenDayRead(expen);
	}

	
	
	@Override
	public void expenDayUpdate(ExpenVO expen) throws Exception {
		// TODO Auto-generated method stub
		dao.expenDayUpdate(expen);
		
	}

	@Override
	public void expenDayDelete(int id) throws Exception {
		// TODO Auto-generated method stub
		dao.expenDayDelete(id);
		
	}
	
	@Override
	public List<ExpenVO> expenDateSearch(ExpenVO expen) throws Exception {
		// TODO Auto-generated method stub
		return dao.expenDateSearch(expen);
	}
	

}
