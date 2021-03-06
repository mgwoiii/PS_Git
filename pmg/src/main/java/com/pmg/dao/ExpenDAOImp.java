package com.pmg.dao;

import java.util.List;

import javax.inject.Inject;

import org.apache.ibatis.session.SqlSession;
import org.springframework.stereotype.Repository;

import com.pmg.domain.ExpenVO;


@Repository
public class ExpenDAOImp implements ExpenDAO {

	@Inject
    private SqlSession sqlSession;
    
    private static String namespace = "com.pmg.mapper.ExpenMapper";

	@Override
	public void expenRegister(ExpenVO expen) throws Exception {
		// TODO Auto-generated method stub
		sqlSession.insert
        (namespace+".expenRegister", expen);
		
	}
	
	@Override
	public List<ExpenVO> expenMonthRead(ExpenVO expen) throws Exception {
		// TODO Auto-generated method stub
		return sqlSession.selectList
        (namespace+".expenMonthRead", expen);
		
	}
	

	@Override
	public List<ExpenVO> expenMonthAndDayRead(ExpenVO expen) throws Exception {
		// TODO Auto-generated method stub
		return sqlSession.selectList
        (namespace+".expenMonthAndDayRead", expen);
		
	}
	
	

	@Override
	public List<ExpenVO> expenMonthAndDaySumRead(ExpenVO expen) throws Exception {
		// TODO Auto-generated method stub
		return sqlSession.selectList
        (namespace+".expenMonthAndDaySumRead", expen);
		
	}
	

	@Override
	public List<ExpenVO> expenDayRead(ExpenVO expen) throws Exception {
		// TODO Auto-generated method stub
		return sqlSession.selectList
        (namespace+".expenDayRead", expen);
		
	}
	

	@Override
	public void expenDayUpdate(ExpenVO expen) throws Exception {
		// TODO Auto-generated method stub
		sqlSession.update
        (namespace+".expenDayUpdate", expen);
		
	}

	@Override
	public void expenDayDelete(int id) throws Exception {
		// TODO Auto-generated method stub
		sqlSession.delete
        (namespace+".expenDayDelete", id);
		
	}  
	  
	@Override
	public List<ExpenVO> expenDateSearch(ExpenVO expen) throws Exception {
		// TODO Auto-generated method stub
		return sqlSession.selectList
        (namespace+".expenDateSearch", expen);
		
	}
	
	
	
	
//	@Override
//	public void userRegister(UserVO user) throws Exception {
//		// TODO Auto-generated method stub
//		sqlSession.insert
//        (namespace+".insertUser", user);
//		
//	}
	

}
