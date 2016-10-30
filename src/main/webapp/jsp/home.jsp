<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
    <style>
        html {
            background-image: url('/img/main_img.png');
            background-size: cover;
        }
        button {
            font-size: 1.5rem;
        }
        #header {
            display: block;
            position: fixed;
            top: 0;
            right: 0;
            left: 0;
            z-index: 900;
            height: 15%;
        }
        .left {
            background-image: url('/img/bravepeach_logo.png');
            background-size: cover;
            background-size: contain;
            background-repeat: no-repeat;
            height: 72%;
            max-width: 500px;
        }
        .menu {
            right: 0;
            position: absolute;
            top: 15;
            background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAFE0lEQVR4Xu2dz2scZRjHn+edRKIGvESShmZnZjcaSrDiqT1ULXgQg3+D2IIiIoqerVjBs4UiKKgV/4caDx4UFYIQ/EUokczuzG5Ijb2mTWx231fmIHgwuNDwzM5+vznlsOzzfL7vJ9/JTmCiwi/oBBSanvBCAcAloAAUADwBcHw2AAUATwAcnw1AAcATAMdnA1AA8ATA8dkAFAA8AXB8NgAFAE8AHJ8NQAHAEwDHZwNQAPAEwPHZABQAPAFwfDYABQBPAByfDUABwBMAx2cDUADwBMDx2QAUADwBcHw2AAUATwAcnw1AAcATAMdnA1AA8ATA8dkAFAA8AXD8Shug2Ww2pC+PqvMTiOcQvOvrpG5mWdarir8SAVonW4sS+Y9EwjNVgY/W3PC1ev/KVq+XWe9lLsDiwkJr4NyaE52xhh3leV7CrckQzv7e7bYt9zQXoNVofCXqnrWErM0sL6tZL1+x3NdUgCRJ5qIgNy0B6zbLO53rdDq7VnubCtBsNM+p+u+s4Oo4JwT3ZLvb/t5qd1MB0jQ97Xz4xQqujnPCwJ1ub7d/s9rdVAARiVpxUn7kOWEFWLM5O1mRN0RkYLW3tQDSjOOLKvqpFWCd5gSVi+08v2a5s7kAIqKtOH1bJFwuv7eEHeFZQUTfyYrO+yISLPes7ACaJ5uPaTR4QcSdkjCAvBMoGvVF/I0wiL6wvO7/W7DKBLC0nLOOToACgNtBASgAeALg+GwACgCeADg+G4ACgCcAjs8GoADgCYDjswEogH0Cy8vL9x3s3Xk9SLigIkvln4nttxiJiYMgsqkSPpuanr66sbFx13or8waYn59/YGpiYlXVPWUNO9rzwrf7h4crOzs7dyz3NBeglSRXJMgblpB1maVBrmx18zct9zUVYPnh5emDqdu3xMmUJWRtZnk5ePDu/syvu7u3rXY2FeCRJDnjg6xZwdVxjnd6ptPp/Gi1OwWwSnrIOWMtAC8B/2PBuF8CSnz+Eni0BEHkg3aRvzVkWRzLy0wvAeXG5cfA+ycnvxTRp4+FYEzexHv55jD0V7a3t/ctkcwFKOHKG0F/7e29FkQuiOgp5BtBIuGGilx7aGbm6vr6+qHl4ZezKhHAGpLzjk6AAoDbQQEoAHgC4PhsAAoAngA4PhuAAoAnAI7PBqAA4AmA47MBKEA1CSzG8RNB9UXxfkk0wnxARBj0xblNDeHzraL4qYqTqKIBtBXHl0X0UhXAozpTVd7byvN3x/4RMa1G+rJo+HhUD6LKvVT0pa2i84nlDqYNcF7OT/QW8p44mbOErNGsm1mRL4ztY+LSNH3c+fBzjQ7EfNWxflAkHxU7hE/Bn8u63R+GeOWxvMT0EpCm6azz4Y9j2Xxc32Qims2y7E8rPFMBSqhWI7kuKqaPRLcK897n6PWs6Dx/7+8z/DuYC5AkSRIN/Jo4Nzv8mgCv9H53ELmzeZ7nlrTmApRwS3Gc9r1+KE6es4Qd2VleVgeRvGp9+GUelQjwz0HEcXxiUnXJewd5J9A53z8MYbMoisr+iUalAozsTyTQYhQA6LD/C5UCUADwBMDx2QAUADwBcHw2AAUATwAcnw1AAcATAMdnA1AA8ATA8dkAFAA8AXB8NgAFAE8AHJ8NQAHAEwDHZwNQAPAEwPHZABQAPAFwfDYABQBPAByfDUABwBMAx2cDUADwBMDx2QAUADwBcHw2AAUATwAcnw1AAcATAMdnA1AA8ATA8dkA4AL8DY1yJJBoDQ+bAAAAAElFTkSuQmCC');
            background-size: cover;
            width: 50px;
            height: 50px;
        }
        #content {
            margin-top : 28%;
            width: 100%;
        }

        .content_bottom {
            position: fixed;
            bottom: 0;
            left: 0;
            height: 13%;
            width: 100%;
            z-index: 0;
            background-color: #FAF8F1;
        }

        ._start_guide, ._start_tour{
            width: 41%;
            height: 50px;
            border : 1px solid white;
            border-radius: 0.5em;
            position: absolute;
            bottom: 100px;
        }

        ._start_guide {
            background-color: #FFD8C8;
            left: 50px;
        }

        ._start_tour {
            background-color: #E885AB;
            right: 50px;
        }

        .buttons {
            text-align: center;
            width: 100%;
            position: absolute;
            bottom: 0;
            z-index: 1000;
            cursor: pointer;
        }

    </style>
</head>
<body>
<%--전체 바디--%>
<div id="wrap">

<%--헤더 영역
    로고
    햄버거 버튼--%>
    <div id="header">
        <div class="left">
            <%--brave peach--%>
        </div>
        <div class="menu">
        </div>
    </div>

<%--컨텐트 영역--%>
    <div id="content">
        <div class="prologue">
            <p>여행은 함께하는 거야</p>
            <div class="buttons">
                <a href="#"><button class="_start_guide">가이드로 시작하기</button></a>
                <a href="#"><button class="_start_tour">여행자로 시작하기</button></a>
            </div>
            <div class="content_bottom">

            </div>
        </div>
    </div>

<%--푸터 영역--%>
    <div id="footer"></div>
</div>
<jsp:include page="menu.jsp"/>
<script src="js/main-home.js" type="text/javascript"/>
</body>
</html>
