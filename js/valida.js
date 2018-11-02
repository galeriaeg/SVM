function validaPost(formpost){
	if (formpost.texto.value == ""){ 
	alert("Escreva sua mensagem!");
	formpost.texto.focus();
	return (false); 
	}
	if (formpost.nome.value == ""){ 
	alert("Informe seu nome!");
	formpost.nome.focus();
	return (false); 
	}
	if (formpost.email.value == ""){ 
	alert("Informe seu email!");
	formpost.email.focus();
	return (false); 
	}

}