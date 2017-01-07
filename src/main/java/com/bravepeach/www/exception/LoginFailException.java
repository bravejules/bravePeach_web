package com.bravepeach.www.exception;

/**
 * Created by Naver on 2017-01-07.
 */
public class LoginFailException extends RuntimeException{

    public LoginFailException(String message) {
        super(message);
    }
}
