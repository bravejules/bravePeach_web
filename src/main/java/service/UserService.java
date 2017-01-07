package service;

import dao.UserDAO;
import model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import repository.UserRepository;

/**
 * Created by Naver on 2016-12-29.
 */
@Service
public class UserService {

    @Autowired
    UserDAO userDAO;

    public User login(User user) {
        User login = userDAO.login(user);
        if(null != login) {
            return null;
        } else {
            return login;
        }
    }
}
