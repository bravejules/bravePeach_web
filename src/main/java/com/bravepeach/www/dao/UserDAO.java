package com.bravepeach.www.dao;

import com.bravepeach.www.model.User;
import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;
import java.util.List;

/**
 * Created by Naver on 2016-12-04.
 */
@Repository
public class UserDAO{

    @Autowired
    @Resource(name = "sqlSessionTemplate")
    private SqlSession sqlSession;

    @Transactional
    public List selectTest() {
        return sqlSession.selectList("com.bravepeach.www.mapper.UserInterface.selectTest");
    }

    @Transactional
    public User login(User user) {
        return sqlSession.selectOne("com.bravepeach.www.mapper.UserInterface.login", user);
    }

    @Transactional
    public void updateMemberIPInfo(User user) {
        sqlSession.update("com.bravepeach.www.mapper.UserInterface.updateMemberIPInfo", user);
    }
}
