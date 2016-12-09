package dao;

import mapper.UserInterface;
import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;

/**
 * Created by Naver on 2016-12-04.
 */
@Repository
public class UserDAO implements UserInterface{

    @Autowired
    @Resource(name = "sqlSessionTemplate")
    private SqlSession sqlSession;

    @Override
    @Transactional
    public String selectTest() {
        return sqlSession.selectOne("mapper.UserInterface.selectTest");
    }
}
