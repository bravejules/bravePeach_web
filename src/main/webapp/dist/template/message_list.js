this["Handlebars"] = this["Handlebars"] || {};
this["Handlebars"]["templates"] = this["Handlebars"]["templates"] || {};

this["Handlebars"]["templates"]["message_list"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "			<!-- list -->\n			<div class=\"col-xs-12 pd0 message_object\">\n				<div class=\"message_thumbnail\">\n					<div class=\"thumbnail_area\">\n						<div class=\"thumbnail_img\"></div>\n					</div>\n				</div>\n				<div class=\"description\">\n					<div class=\"col-xs-12 description_area\">\n						<div class=\"col-xs-12 pd0\">\n							<div class=\"name\">조진웅</div>\n						</div>\n						<div class=\"col-xs-12 pd0\" style=\"margin-top:20px;\">\n							<div class=\"text\">\n								안녕하세요 지원하신 내용 잘 봤습니다 :) 일정보고 하나만 문의드리려구요 혹시 프랑스 여행 1일차에 몽마르뜨 언덕에서 정심먹는 일정으로 수정해 주실수 있나요?\n							</div>\n						</div>\n					</div>\n					<div class=\"date_time\">2016. 11. 30</div>\n				</div>\n			</div>\n			<!-- list_end -->\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, options, buffer = 
  "<div class=\"sub_head\" style=\"height: 140px;\">\n</div>\n<div class=\"col-xs-12 pd0\">\n	<div class=\"brave_container\">\n		<div class=\"col-xs-12 pd0 sub_title_area\">\n			<div class=\"col-xs-6 pd0 \">\n				<h1 style=\"color: #e85450;\">메세지</h1>\n				<h4>안읽은 메세지<span>0</span></h4>\n			</div>\n			<div class=\"col-xs-6 pd0 text-right\">\n				\n			</div>\n		</div>\n		<div class=\"col-xs-12 pd0\">\n";
  stack1 = ((helper = (helper = helpers.message_list_data || (depth0 != null ? depth0.message_list_data : depth0)) != null ? helper : helpers.helperMissing),(options={"name":"message_list_data","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data}),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},options) : helper));
  if (!helpers.message_list_data) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + "		</div>\n	</div>\n</div>";
},"useData":true});