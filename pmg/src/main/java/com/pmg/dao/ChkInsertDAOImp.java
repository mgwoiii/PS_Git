package com.pmg.dao;

import java.util.List;

import javax.inject.Inject;

import org.apache.ibatis.session.SqlSession;
import org.springframework.stereotype.Repository;

import com.pmg.domain.ChkInsertVO;

@Repository
public class ChkInsertDAOImp implements ChkInsertDAO {

	@Inject
    private SqlSession sqlSession;
    
    private static String namespace = "com.pmg.mapper.ChkInsertMapper";

    
    
    
	@Override
	public void chkinDateRegister(ChkInsertVO chk) throws Exception {
		// TODO Auto-generated method stub
		sqlSession.insert(namespace+".chkinDateRegister", chk);
		
	}   
	
	@Override
	public ChkInsertVO chkinDateOverlap(ChkInsertVO chk) throws Exception {
		// TODO Auto-generated method stub

		return sqlSession.selectOne(namespace+".chkinDateOverlap", chk);

	}
	
	
	@Override
	public List<ChkInsertVO> chkinDateOverlap_Day(ChkInsertVO chk) throws Exception {
		// TODO Auto-generated method stub

		return sqlSession.selectList(namespace+".chkinDateOverlap_Day", chk);

	}
	@Override
	public void chkinDateDelete(ChkInsertVO chk ) throws Exception {
		// TODO Auto-generated method stub
		sqlSession.delete(namespace+".chkinDateDelete", chk);
		
	}   
	@Override
	public List<ChkInsertVO> WeekList(ChkInsertVO chk) throws Exception{
		// TODO Auto-generated method stub

		return sqlSession.selectList(namespace+".WeekList", chk);

	}
	
	
//	@Override
//	public void userRegister(UserVO user) throws Exception {
//		// TODO Auto-generated method stub
//		sqlSession.insert
//        (namespace+".insertUser", user);
//		
//	}
	

}
