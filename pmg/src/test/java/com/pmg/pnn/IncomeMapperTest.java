package com.pmg.pnn;

import static org.junit.Assert.assertEquals;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.pmg.domain.IncomeVO;
import com.pmg.service.IncomeService;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration("file:src/main/webapp/WEB-INF/spring/root-context.xml")
public class IncomeMapperTest {
	
	@Autowired
	private IncomeService service;
	
	IncomeVO income = new IncomeVO();

	/*
	 * ( className_id , reserveType_id , roomPrice , roomType_id , bbqPrice , bbqType_id ,
     extraPeoplePrice ,extraPeopleType_id ,totalPrice ,note ,guestName ,IncomeDate  )
	 * */
	// 수입일지 등록 (insert)
	
	@Test
	public void incomeRegister() throws Exception{

		
		income.setClassName_id(1);
		income.setReserveType_id(1);
		income.setRoomPrice(1);
		income.setRoomType_id(1);
		income.setBbqPrice(1);
		income.setBbqType_id(1);
		income.setExtraPeoplePrice(1);
		income.setExtraPeopleType_id(1);
		income.setTotalPrice(1);
		income.setNote(null);
		income.setGuestName(null);
		income.setIncomeDate(null);
		

		
		service.incomeRegister(income);
		
	}
	
	
}
