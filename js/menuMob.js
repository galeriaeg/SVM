function exibeOculta(a){
	var b = a;
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



function perfilMob(a){
	var b = a;
	
	if(b==0){
		//alert("fecha");
		document.getElementById('boxPerfil').style.display='none';
	}
	else{
		//alert("abre");
		document.getElementById('boxPerfil').style.display='block';
	}
} 