package com.pmg.dao;

import java.util.List;

import javax.inject.Inject;

import org.apache.ibatis.session.SqlSession;
import org.springframework.stereotype.Repository;

import com.pmg.domain.BoardVO;

@Repository
public class BoardDAOImp implements BoardDAO {

	@Inject
    private SqlSession sqlSession;
    
    private static String namespace = "com.pmg.mapper.BoardMapper";
    
    //게시판추가
    @Override
    public void create(BoardVO vo) throws Exception {
        
        sqlSession.insert
        (namespace+".insertBoard", vo);
 
    }
    
    //게시판보기
    @Override
    public List<BoardVO> listAll() throws Exception {
        
        
        return sqlSession.selectList(namespace+".listBoard");
    }
    
    //게시판 상세
    @Override
    public BoardVO read(Integer b_no) throws Exception {
        
        return sqlSession.selectOne(namespace+".detailBoard", b_no);
    }
 
    //게시판 삭제
    @Override
    public void delete(Integer b_no) throws Exception {
        sqlSession.delete(namespace+".deleteBoard", b_no);
 
    }
 
    //게시판 수정
    @Override
    public void update(BoardVO vo) throws Exception {
        sqlSession.update(namespace+".updateBoard", vo);
 
    }
 
}
