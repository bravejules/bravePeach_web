this["Handlebars"] = this["Handlebars"] || {};
this["Handlebars"]["templates"] = this["Handlebars"]["templates"] || {};

this["Handlebars"]["templates"]["main"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "			<div class=\"col-xs-4 theme_item\">\n				<div style=\"background: url("
    + alias4(((helper = (helper = helpers.main_theme_img_url || (depth0 != null ? depth0.main_theme_img_url : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"main_theme_img_url","hash":{},"data":data}) : helper)))
    + "); height: 300px; background-size: cover;\">\n					<div class=\"text_area\">\n						<div class=\"intro_text\">\n							<p>"
    + alias4(((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"text","hash":{},"data":data}) : helper)))
    + "</p>\n							<h2>"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h2>\n						</div>\n						<a title=\""
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "\">View more</a>\n					</div>\n				</div>\n			</div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, options, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=helpers.blockHelperMissing, buffer = 
  "<div class=\"head_main_banner_bg\">\n	<div class=\"head_banner_bg_blind\"></div>\n	<div class=\"head_container\">\n		<div class=\"head_main_text\">\n			<div class=\"main_text\">\n				<h4>겁니지만 세상이 너무나 궁금만 당신을 위해<br/>\n					1204명의 가이드가 기다리고 있습니다.\n				</h4>\n				<h1>어디로 가시나요?</h1>\n			</div>\n		</div>\n		<div class=\"col-xs-12 pd0\">\n			<div class=\"main_search_area SearchForm\">\n				<div class=\"SearchForm_inputs_wrapper\">\n					<div class=\"SearchForm_row\">\n						<div class=\"SearchForm_location\">\n							<label for=\"search-location\" class=\"SearchForm_label\">\n								<span>위치</span>\n							</label>\n							<div>\n								<div>\n									<input class=\"LocationInput input-large\" name=\"location\" type=\"text\" placeholder=\"목적지, 도시명, 주소\" autocomplete=\"off\" id=\"search-location\" value=\"\">\n								</div>\n								<div class=\"DropDownWrapper col-md-12\"></div>\n							</div>\n						</div>\n						<div class=\"SearchForm_dates text-left\">\n							<label for=\"startDate\" class=\"SearchForm__label\" >\n								<span>날짜</span>\n							</label>\n							<div class=\"DateRangePicker\">\n\n							</div>\n						</div>\n						<div class=\"SearchForm_guests text-left\">\n							<label for=\"how-many-guests\" class=\"SearchForm_label\">\n								<span>인원</span>\n							</label>\n						</div>\n						<div class=\"SearchForm_submit text-left\">\n							<button type=\"submit\" class=\"btn btn-primary\">숙소 검색\n							</button>\n						</div>\n					</div>\n				</div>\n			</div>\n		</div>\n	</div>\n</div>\n<div class=\"col-xs-12 pd0\">\n	<div class=\"brave_container\">\n		<div class=\"main_theme\">\n";
  stack1 = ((helper = (helper = helpers.main_theme || (depth0 != null ? depth0.main_theme : depth0)) != null ? helper : alias2),(options={"name":"main_theme","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!helpers.main_theme) { stack1 = alias4.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += "		</div>\n		<div class=\"clearfix\"></div>\n		<div class=\"main_theme\">\n";
  stack1 = ((helper = (helper = helpers.main_theme || (depth0 != null ? depth0.main_theme : depth0)) != null ? helper : alias2),(options={"name":"main_theme","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!helpers.main_theme) { stack1 = alias4.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += "		</div>\n		<div class=\"clearfix\"></div>\n		<div class=\"main_theme\">\n";
  stack1 = ((helper = (helper = helpers.main_theme || (depth0 != null ? depth0.main_theme : depth0)) != null ? helper : alias2),(options={"name":"main_theme","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!helpers.main_theme) { stack1 = alias4.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + "		</div>\n		<div class=\"clearfix\"></div>\n	</div>\n</div>\n<script type=\"text/javascript\">\n$(window).scroll(function( )  //스크롤이 움직일때마다 이벤트 발생\n{\n	var position = $(window).scrollTop(); // 현재 스크롤바의 위치값을 반환합니다.\n	if (position > 500) {\n		$('.brave_head').addClass('brave_fixed_head');\n	}\n	else{\n		$('.brave_head').removeClass('brave_fixed_head');\n	}\n});\n\n</script>";
},"useData":true});