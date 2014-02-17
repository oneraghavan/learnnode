function *fibonaci_series(){
	var i = 0 , j = 1, n = 0;
	while(true){
		yield i;
		var t = i;
		i = j ;
		j += t;
	}
}

var g = fibonaci_series();
for (var i = 0; i < 10; i++) {
  console.log(g.next().value);
}