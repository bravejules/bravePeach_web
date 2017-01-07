package dao;

import junit.framework.TestCase;
import model.User;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import java.sql.Connection;
import java.sql.DriverManager;

/**
 * Created by Naver on 2016-12-04.
 */
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = {"classpath:spring/applicationContext.xml"})
public class UserDAOTest extends TestCase {

    @Autowired
    UserDAO userDao;

    @Test
    public void testName() throws Exception {
        System.out.println(userDao.selectTest());

    }

    @Test
    public void testName1() throws Exception {
        Connection root = DriverManager.getConnection("jdbc:mysql://103.60.126.50:3306/bravepeach", "USER", "pswd");
    }

    @Test
    public void ftpTest() throws Exception {
    }

    @Test
    public void loginTest() throws Exception {
        User login = userDao.login(new User("logintest", "pswd"));
        System.out.println(login);
    }
}