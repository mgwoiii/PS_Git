package com.pmg.dao;
import java.util.List;

import com.pmg.domain.IncomeVO;
import com.pmg.domain.UserVO;

public interface IncomeDAO {
	
//	public IncomeVO incomeRegister(IncomeVO income) throws Exception;
	
	public void incomeRegister(IncomeVO income) throws Exception;
	
	public List<IncomeVO> incomeDayRead(IncomeVO income) throws Exception;
	
	public void incomeDayUpdate(IncomeVO income) throws Exception;
	
	public void incomeDayDelete(IncomeVO income) throws Exception;
	
	public List<IncomeVO> incomeMonthRead(IncomeVO income) throws Exception;

	public List<IncomeVO> incomeMonthAndDayRead(IncomeVO income) throws Exception;

	public List<IncomeVO> incomeMonthAndDaySumRead(IncomeVO income) throws Exception;
	
	
}
