package dao;

import mapper.UserInterface;
import model.User;
import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;
import java.util.List;
import java.util.Map;

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
        return sqlSession.selectList("mapper.UserInterface.selectTest");
    }

    @Transactional
    public User login(User user) {
        return sqlSession.selectOne("mapper.UserInterface.login", user);
    }
}
