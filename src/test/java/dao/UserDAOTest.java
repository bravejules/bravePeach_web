package dao;

import junit.framework.TestCase;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

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
        userDao.selectTest();

    }
}