package com.pmg.dao;

import java.util.List;

import javax.inject.Inject;

import org.apache.ibatis.session.SqlSession;
import org.springframework.stereotype.Repository;

import com.pmg.domain.IncomeVO;

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
	  
//		@Override
//		public void userRegister(UserVO user) throws Exception {
//			// TODO Auto-generated method stub
//			sqlSession.insert
//	        (namespace+".insertUser", user);
//			
//		}
	

}
