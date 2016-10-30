<%--
  Created by IntelliJ IDEA.
  User: Naver
  Date: 2016-10-30
  Time: 오후 8:18
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
    <style>
        .body {
            margin:10%;
        }
        .logo {
            background-image: url('/img/bravepeach_logo.png');
            background-size: cover;
            max-height:200px;
            max-width: 502px;
            width: 100%;
            height: 100%;
        }
        .sns_login {
            width:100%;
        }
        .sns_login button{
            border: none;
            height: 50px;
            width: 100%;
            margin-bottom: 10px;
        }
        .sns_login .facebook{
            background-color: mediumblue;
        }

        .sns_login .naver {
            background-color: chartreuse;
        }

        .input_login input {
            width: 100%;
            height: 50px;
            margin-bottom: 10px;
        }

        .login_btn {
            width: 100%;
            height: 50px;
        }

        .or {
            width: 100%;
        }
    </style>
</head>
<body>
<div class="body">
    <div class="logo">
    </div>
    <div class="sns_login">
        <button class="facebook">Facebook으로 로그인</button>
        <button class="naver">Naver로 로그인</button>
    </div>
    <div class="or">
        OR
    </div>
    <div class="input_login">
        <input type="text" value="Email"/>
        <input type="text" value="Email"/>
        <button class="login_btn">로그인</button>
    </div>
</div>
</body>
</html>
