package com.pmg.dao;

import java.util.List;

import javax.inject.Inject;

import org.apache.ibatis.session.SqlSession;
import org.springframework.stereotype.Repository;

import com.pmg.domain.IncomeVO;
import com.pmg.domain.UserVO;

@Repository
public class IncomeDAOImp implements IncomeDAO {

	@Inject
    private SqlSession sqlSession;
    
    private static String namespace = "com.pmg.mapper.IncomeMapper";

    
		@Override
		public void incomeRegister(IncomeVO income) throws Exception {
			// TODO Auto-generated method stub
			sqlSession.insert
	        (namespace+".incomeRegister", income);
			
		}
		
		@Override
		public List<IncomeVO> incomeDayRead(IncomeVO income) throws Exception {
			// TODO Auto-generated method stub
			return sqlSession.selectList(namespace+".incomeDayRead", income);

		}

		@Override
		public void incomeDayUpdate(IncomeVO income) throws Exception {
			// TODO Auto-generated method stub
			sqlSession.update
	        (namespace+".incomeDayUpdate", income);
			
		}

		@Override
		public void incomeDayDelete(IncomeVO income) throws Exception {
			// TODO Auto-generated method stub
			sqlSession.delete
	        (namespace+".incomeDayDelete", income);
			
		}

		@Override
		public  List<IncomeVO> incomeMonthRead(IncomeVO income) throws Exception {
			// TODO Auto-generated method stub
			return sqlSession.selectList
	        (namespace+".incomeMonthRead", income);
			
		}
		
		@Override
		public  List<IncomeVO> incomeMonthAndDayRead(IncomeVO income) throws Exception {
			// TODO Auto-generated method stub
			return sqlSession.selectList
	        (namespace+".incomeMonthAndDayRead", income);
			
		}

		@Override
		public  List<IncomeVO> incomeMonthAndDaySumRead(IncomeVO income) throws Exception {
			// TODO Auto-generated method stub
			return sqlSession.selectList
	        (namespace+".incomeMonthAndDaySumRead", income);
			
		}
		
		
//		@Override
//		public void userRegister(UserVO user) throws Exception {
//			// TODO Auto-generated method stub
//			sqlSession.insert
//	        (namespace+".insertUser", user);
//			
//		}
	

}
