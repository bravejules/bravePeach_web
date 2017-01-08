this["Handlebars"] = this["Handlebars"] || {};
this["Handlebars"]["templates"] = this["Handlebars"]["templates"] || {};

this["Handlebars"]["templates"]["head"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<!-- ICON -->\n<link rel=\"shortcut icon\" href=\"/assets/image/favicon.ico\" />\n<link rel=\"apple-touch-icon\" href=\"/assets/image/mobicon.png\" />\n\n<title>용감한 복숭아</title>\n\n<link rel=\"stylesheet\" href=\"/assets/css/common.css\">\n<link rel=\"stylesheet\" type=\"text/css\" href=\"/assets/css/service.css\">";
},"useData":true});

this["Handlebars"]["templates"]["header"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<header id=\"header\" class=\"brave_head\">\n	<div class=\"main_logo\">\n		<a href=\"/\" title=\"\">\n			<img src=\"/assets/image/main_logo.png\" alt=\"\">\n		</a>\n	</div>\n\n	<div class=\"gnb\">\n		<ul>\n			<li><a href=\"/help.html\" title=\"도움말\">도움말</a></li>\n			<li><a href=\"/login.html\" title=\"로그인\">로그인</a></li>\n			<li><a href=\"/sign_up.html\" title=\"회원가입\">회원가입</a></li> \n			<li><a href=\"/message_list.html\" title=\"메세지\">메세지</a></li>\n			<li><a href=\"/trip_list.html\" title=\"여행\">여행</a></li>\n			<li><a href=\"#\" title=\"가이드 찜 리스트\">가이드 찜 리스트</a></li>\n			<li><a href=\"#\" title=\"가이드 찾기\">가이드 하기</a></li>\n		</ul>\n	</div>\n\n</header><!-- /header -->\n";
},"useData":true});

this["Handlebars"]["templates"]["footer"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<footer class=\"col-xs-12 pd0\">	\n	<div class=\"footer_container\">\n		<div class=\"col-xs-12 pd0\">\n			<div class=\"foot_menu\">\n				<ul>\n					<li><a href=\"#\" title=\"이용방법\">이용방법</a></li>\n					<li><a href=\"#\" title=\"자주 묻는 질문\">자주 묻는 질문</a></li>\n					<li><a href=\"#\" title=\"이용약관\">이용약관</a></li>\n					<li><a href=\"#\" title=\"개인정보 취급방침\">개인정보 취급방침</a></li>\n				</ul>\n			</div>\n		</div>\n		<div class=\"col-xs-12 pd0\">\n			<div class=\"info\">\n				용감한 복숭아 Bravepeach | 대표 : 오연주. Jules Oh <br />\n				대표번호 : +82) 10-5133-1564 | 일반 문의 : bravepeach.trip@gmail.com\n			</div>\n		</div>\n	</div>\n</footer>";
},"useData":true});