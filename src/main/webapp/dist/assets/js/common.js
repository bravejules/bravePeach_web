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