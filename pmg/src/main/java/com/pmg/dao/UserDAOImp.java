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
	public void create(UserVO user) throws Exception {
		// TODO Auto-generated method stub
		sqlSession.insert
        (namespace+".insertUser", user);
		
	}

	@Override
	public List<UserVO> listAll() throws Exception {
		// TODO Auto-generated method stub
        return sqlSession.selectList(namespace+".listUser");
	}

	@Override
	public UserVO read(Integer id) throws Exception {
		// TODO Auto-generated method stub
        return sqlSession.selectOne(namespace+".detailUser", id);

	}

	@Override
	public void delete(Integer id) throws Exception {
		// TODO Auto-generated method stub
        sqlSession.delete(namespace+".deleteUser", id);

	}

	@Override
	public void update(UserVO user) throws Exception {
		// TODO Auto-generated method stub
        sqlSession.update(namespace+".updateUser", user);

	}
	
	
	@Override
	public UserVO login(UserVO user) throws Exception {
		// TODO Auto-generated method stub
		return sqlSession.selectOne(namespace+".loginUser", user);

	}
}