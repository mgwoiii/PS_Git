package com.pmg.dao;

import java.util.List;

import javax.inject.Inject;

import org.apache.ibatis.session.SqlSession;
import org.springframework.stereotype.Repository;

@Repository
public class GradeDAOImp implements GradeDAO {

	@Inject
    private SqlSession sqlSession;
    
    private static String namespace = "com.pmg.mapper.UserMapper";

//	@Override
//	public void userRegister(UserVO user) throws Exception {
//		// TODO Auto-generated method stub
//		sqlSession.insert
//        (namespace+".insertUser", user);
//		
//	}
	

}
