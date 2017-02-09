function number_fomrat(str){
	str = str + "";
	if(str == "" || /[^0-9,]/.test(str)) return str;
	str = str.replace(/,/g, "");
	for(var i=0; i<parseInt(str.length/3, 10); i++){
		str = str.replace(/([0-9])([0-9]{3})(,|$)/, "$1,$2$3");
	}
	return str;
}

function phoneNumberFormat(src) {
	var retValue = src;
	try {
		if(src.length == 11) {
			retValue = src.substring(0, 3) + "-" + src.substring(3, 7) + "-" + src.substring(7, 11);
		} else if(src.length == 10) {
			if(src.substring(0, 2) == "02") {
				retValue = src.substring(0, 2) + "-" + src.substring(2, 6) + "-" + src.substring(6, 10);
			} else {
				retValue = src.substring(0, 3) + "-" + src.substring(3, 6) + "-" + src.substring(6, 10);
			}
		}
	} catch(e) {
	}
	return retValue;
}

// 일정 위치이상 스크롤시 헤더 고정
$(window).scroll(function( )  //스크롤이 움직일때마다 이벤트 발생
{
	var position = $(window).scrollTop(); // 현재 스크롤바의 위치값을 반환합니다.
	if (position > 500) {
		$('.brave_head').addClass('brave_fixed_head');
	}
	else{
		$('.brave_head').removeClass('brave_fixed_head');
	}
});
