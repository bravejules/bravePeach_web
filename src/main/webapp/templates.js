this["Handlebars"] = this["Handlebars"] || {};
this["Handlebars"]["templates"] = this["Handlebars"]["templates"] || {};

this["Handlebars"]["templates"]["footer"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<footer class=\"col-xs-12 pd0\">	\n	<div class=\"footer_container\">\n		<div class=\"col-xs-12 pd0\">\n			<div class=\"foot_menu\">\n				<ul>\n					<li><a href=\"#\" title=\"이용방법\">이용방법</a></li>\n					<li><a href=\"#\" title=\"자주 묻는 질문\">자주 묻는 질문</a></li>\n					<li><a href=\"#\" title=\"이용약관\">이용약관</a></li>\n					<li><a href=\"#\" title=\"개인정보 취급방침\">개인정보 취급방침</a></li>\n				</ul>\n			</div>\n		</div>\n		<div class=\"col-xs-12 pd0\">\n			<div class=\"info\">\n				용감한 복숭아 BravePeach | 대표 : 오연주 <br />\n				대표번호:0100000000000 | 일반 문의 aaaa111@dddd.com\n			</div>\n		</div>\n	</div>\n</footer>";
},"useData":true});

this["Handlebars"]["templates"]["header"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<header id=\"header\" class=\"brave_head\">\n	<div class=\"main_logo\">\n		<a href=\"/\" title=\"\">\n			<img src=\"/assets/image/main_logo.png\" alt=\"\">\n		</a>\n	</div>\n\n	<div class=\"profile_img\">\n		<a href=\"/mypage/mypage_main\" title=\"\">\n			<img src=\"/assets/image/no_profile.png\" alt=\"\">\n		</a>\n	</div>\n	<div class=\"gnb\">\n		<ul>\n			<li><a href=\"/message\" title=\"메세지\">메세지</a></li>\n			<li><a href=\"/trip\" title=\"여행\">여행</a></li>\n			<li><a href=\"/guide/like_guide_list\" title=\"가이드 찜 리스트\">가이드 찜 리스트</a></li>\n			<li><a href=\"/guide/find_guide\" title=\"가이드 찾기\">가이드 찾기</a></li>\n		</ul>\n	</div>\n\n</header><!-- /header -->\n";
},"useData":true});

this["Handlebars"]["templates"]["main"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"head_banner_bg\">\n	<div class=\"head_banner_bg_blind\"></div>\n	<div class=\"head_container\">\n		<div class=\"head_text\">\n			<h1>용감한 복숭아</h1>\n			<h4>역경매를 활용한 여행 준비 단계별<br/>\n				맞춤형 가이드 매칭 서비스\n			</h4>\n		</div>\n		<div class=\"col-xs-12 pd0\">\n			<div class=\"head_signup_frame\">\n				<div class=\"head_signup_area\">\n					<a href=\"/login/signup_form\" title=\"\">\n						<div class=\"signup_btn btn_splash_pink\">\n							<div class=\"text\">\n								가이드로 시작하기\n							</div>\n						</div>\n					</a>\n					<a href=\"/login/signup_form\" title=\"\">\n						<div class=\"signup_btn btn_splash_pink\">\n							<div class=\"text\">\n								여행자로 시작하기\n							</div>\n						</div>\n					</a>\n				</div>\n			</div>\n		</div>\n	</div>\n</div>\n<div class=\"col-xs-12 pd0\">\n	<div class=\"brave_container\">\n		<div class=\"main_signup_area\">\n			<div class=\"btn_signup_facebook\">\n\n			</div>\n		</div>\n	</div>\n</div>";
},"useData":true});