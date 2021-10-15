package com.pmg.dao;

import java.util.List;

import javax.inject.Inject;

import org.apache.ibatis.session.SqlSession;
import org.springframework.stereotype.Repository;

import com.pmg.domain.UserVO;

@Repository
public class UserDAOImp implements UserDAO {

	@Inject
    private SqlSession sqlSession;
    
    private static String namespace = "com.pmg.mapper.UserMapper";

	@Override
	public void userRegister(UserVO user) throws Exception {
		// TODO Auto-generated method stub
		sqlSession.insert
        (namespace+".insertUser", user);
		
	}
	
	
	@Override
	public UserVO loginUserRead(UserVO user) throws Exception {
		// TODO Auto-generated method stub
		return sqlSession.selectOne(namespace+".loginUserRead", user);

	}	
	
	@Override
	public UserVO userIdRead(String userId) throws Exception {
		// TODO Auto-generated method stub
		return sqlSession.selectOne(namespace+".UserIdRead", userId);

	}
	
//	@Override
//	public UserVO UserIdFind(UserVO user) throws Exception {
//		// TODO Auto-generated method stub
//		return sqlSession.selectOne(namespace+".UserIdFind", user);
//
//	}	
	
	@Override
	public List<UserVO> userIdFind(UserVO user) throws Exception {
		// TODO Auto-generated method stub
        return sqlSession.selectList(namespace+".UserIdFind", user);
	}
	
	@Override
	public UserVO userPwFind(UserVO user) throws Exception {
		// TODO Auto-generated method stub
		return sqlSession.selectOne(namespace+".userPwFind", user);

	}	
	
	@Override
	public UserVO userPwUpdate(UserVO user) throws Exception {
		// TODO Auto-generated method stub
		return sqlSession.selectOne(namespace+".userPwUpdate", user);

	}	

	@Override
	public UserVO userInfoUpdate(UserVO user) throws Exception {
		// TODO Auto-generated method stub
		return sqlSession.selectOne(namespace+".userInfoUpdate", user);

	}
	
	@Override
	public UserVO userInfoRead(int id) throws Exception {
		// TODO Auto-generated method stub
		return sqlSession.selectOne(namespace+".userInfoRead", id);

	}

	
	


//	@Override
//	public List<UserVO> listAll() throws Exception {
//		// TODO Auto-generated method stub
//        return sqlSession.selectList(namespace+".listUser");
//	}
//
//	@Override
//	public UserVO read(Integer id) throws Exception {
//		// TODO Auto-generated method stub
//        return sqlSession.selectOne(namespace+".detailUser", id);
//
//	}
//
//	@Override
//	public void delete(Integer id) throws Exception {
//		// TODO Auto-generated method stub
//        sqlSession.delete(namespace+".deleteUser", id);
//
//	}
//
//	@Override
//	public void update(UserVO user) throws Exception {
//		// TODO Auto-generated method stub
//        sqlSession.update(namespace+".updateUser", user);
//
//	}
//	
//	

}
