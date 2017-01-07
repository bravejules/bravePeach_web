package mapper;

import model.User;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

/**
 * Created by Naver on 2016-12-04.
 */

public interface UserInterface {
    List selectTest();
    User login(User user);
}
