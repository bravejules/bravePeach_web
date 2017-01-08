package com.bravepeach.www.service;

import com.bravepeach.www.dao.UserDAO;
import com.bravepeach.www.exception.LoginFailException;
import com.bravepeach.www.model.User;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.support.SecurityContextProvider;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

/**
 * Created by Naver on 2016-12-29.
 */
@Service
public class UserService {

    protected Logger logger = Logger.getLogger(this.getClass());

    @Autowired
    UserDAO userDAO;

    public User login(User user) {
        if(null == user || StringUtils.isEmpty(user.getId()) || StringUtils.isEmpty(user.getPassword())) {
            throw new LoginFailException("Login에 필요한 정보가 들어있지 않습니다." + user.toString());
        }
        User login = userDAO.login(user);
        //userDAO.updateMemberIPInfo(user);
        if(null == login) {
            return null;
        } else {
            logger.info("로그인 한 계정" + user.getId());
            return login;
        }
    }
}
