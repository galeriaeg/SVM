function exibeOculta(a){
		var b = a;
		//alert(b);
		if(b==0){
			document.getElementById('menuBars').alt=1;
			document.getElementById('menu').style.display='block';
			document.getElementById('menuBars').src='imgs/btnFechaMenu.png';
			}
		else{
			document.getElementById('menuBars').alt=0;
			document.getElementById('menu').style.display='none';
			document.getElementById('menuBars').src='imgs/btnAbreMenu.png';
			}
		} 