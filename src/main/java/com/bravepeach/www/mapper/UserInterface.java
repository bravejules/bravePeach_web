package com.bravepeach.www.mapper;

import com.bravepeach.www.model.User;

import java.util.List;

/**
 * Created by Naver on 2016-12-04.
 */

public interface UserInterface {
    List selectTest();
    User login(User user);
    void updateMemberIPInfo(User user);

}
