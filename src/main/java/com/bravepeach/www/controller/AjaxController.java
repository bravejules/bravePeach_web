package com.bravepeach.www.controller;

import com.bravepeach.www.model.User;
import org.apache.log4j.Logger;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

/**
 * Created by Naver on 2016-12-04.
 */
@Controller
public class AjaxController {
    protected Logger logger = Logger.getLogger(this.getClass());

    @RequestMapping(value = "/api/getLoginInfo", method = RequestMethod.GET)
    public String getLoginInfo(Model model) {
        User user = (User) SecurityContextHolder.getContext().getAuthentication().getDetails();
        model.addAttribute("result", user);
        return "jsonView";
    }

}
