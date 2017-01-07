package com.bravepeach.www.factory;

import com.bravepeach.www.model.User;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import com.bravepeach.www.service.UserService;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by Naver on 2017-01-07.
 */
public class LoginAuthenticationFactory implements AuthenticationProvider{

    protected Logger logger = Logger.getLogger(this.getClass());

    @Autowired
    UserService userService;

    @Override
    public Authentication authenticate(Authentication authentication) throws AuthenticationException {
        String userId = (String)authentication.getPrincipal();
        String userPw = (String)authentication.getCredentials();

        if(null != userService.login(new User(userId, userPw))) {
            logger.info("Login Success");
            List<GrantedAuthority> roles = new ArrayList<GrantedAuthority>();
            roles.add(new SimpleGrantedAuthority("ROLE_USER"));

            UsernamePasswordAuthenticationToken result = new UsernamePasswordAuthenticationToken(userId, userPw, roles);
            result.setDetails(new User(userId, userPw));
            return result;
        } else {
            logger.info("사용자 크리덴셜 정보가 틀립니다.");
            throw new BadCredentialsException("Bad crendential");
        }
    }

    @Override
    public boolean supports(Class<?> authentication) {
        return authentication.equals(UsernamePasswordAuthenticationToken.class);
    }
}
