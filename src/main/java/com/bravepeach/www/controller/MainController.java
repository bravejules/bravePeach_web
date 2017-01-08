package com.bravepeach.www.controller;

import com.bravepeach.www.model.User;
import org.apache.log4j.Logger;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

/**
 * Created by Naver on 2016-10-23.
 */
@Controller
public class MainController {
    protected Logger logger = Logger.getLogger(this.getClass());

    @RequestMapping(value = "login", method = RequestMethod.GET)
    public String login(HttpSession session){
        return "redirect:/";
    }

    @RequestMapping(value = "login_success", method = RequestMethod.GET)
    public String loginSuccess(HttpSession session){
        User user = (User)SecurityContextHolder.getContext().getAuthentication().getDetails();
        logger.info("Welcome login success!" + session.getId() + user.getUsername());
        session.setAttribute("loginInfo", user);
        return "redirect:/";
    }

    @RequestMapping(value = "logout", method = RequestMethod.GET)
    public String logout(HttpSession session) {
        User user = (User)SecurityContextHolder.getContext().getAuthentication().getDetails();
        logger.info("Logout " + user.getId());
        session.invalidate();
        return "redirect:/";
    }
}
