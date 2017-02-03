convertPhone = (phoneStr)=>{
	var one = phoneStr.match(/\w/g)
	console.log(one);
	var tenOrEleven;
	if(one.length < 10){
		return "this is no good"
	}else if(one.indexOf(1)=== 0){
		tenOrEleven = one.slice(0,11);
	}else{
		tenOrEleven = one.slice(0,11);
	}
}
	tenOrEleven.map((currValue, currIndex =>{

	});


convertPhone('555-555-5555')