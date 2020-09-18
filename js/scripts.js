var controleSideMenu = 0;

function abrirFecharSideMenu(){

	const mediaQuery2 = window.matchMedia('(max-width: 540px)');
 
	if (mediaQuery2.matches) {

		         if(controleSideMenu==0){
		    
				    $(".sidemenu").css("top",0);
				    controleSideMenu = 1;
				  
				  }else{

				    $(".sidemenu").css("top","-1000%");
				    controleSideMenu = 0;
				  
				  }
	  
	}else{

				if(controleSideMenu==0){
		    
				    $(".sidemenu").css("right",0);
				    controleSideMenu = 1;
				  
				  }else{

				    $(".sidemenu").css("right","-120%");
				    controleSideMenu = 0;
				  
				  }

	}
  
  

}



function ordenarProdutos(ordenacao){

  console.log("USUÁRIO QUER REORDENAR PRODUTOS DA PÁGINA DA LOJA");
  console.log("ORDENAÇÃO POR: "+ordenacao);

  /*
   <option value="0">Ordenação:</option>
   <option value="1">Ordenar por destaques</option>
   <option value="2">Mais recentes</option>
   <option value="3">Por preço: mais baratos para mais caros</option>
   <option value="4">Por preço: mais caros para mais baratos</option>
   <option value="5">Mais vendidos</option>

  */
  
  console.log("DIRECIONANDO O USUÁRIO");

  if(ordenacao==1 || ordenacao==0){ location.href="?ordenacao=default-list"; }
  if(ordenacao==2){ location.href="?orderby=date"; }
  if(ordenacao==3){ location.href="?orderby=price"; }
  if(ordenacao==4){ location.href="?orderby=price-desc"; }
  if(ordenacao==5){ location.href="?orderby=popularity"; }

}




$( document ).ready(function() {

                            var superBanner = $('#superBanner').owlCarousel({
                                    loop:true,
                                    margin:0,
                                    items: 1,
                                    autoplay: false,
                                    center: true,
                                    //navText: [
                                    //    '<img src="images/esquerda.png" alt="Banner anterior">',
                                    //    '<img src="images/direita.png" alt="Próximo Banner">'
                                    //], 
                                    //navContainer: '.custom-nav-banner2',
                                    autoplay:false,
                                    autoplayTimeout:6500,
                                    //dotsContainer: '#carousel-custom-dots',
                                    autoplayHoverPause:true                                        
                            });

                            var loopProdutos1 = $('#loopProdutos1').owlCarousel({
                                    loop:true,
                                    margin:20,
                                    items: 5.5,
                                    autoplay: true,
                                    center: true,
                                    autoplayHoverPause:true,
                                    navText: [
                                        '<img src="images/left.svg" alt="Página anterior">',
                                        '<img src="images/right.svg" alt="Próximo Página">'
                                    ], 
                                    navContainer: '.custom-nav-loop1',
                                    responsive:{
                                            0:{
                                                items:1.5,
                                                margin:10
                                            },
                                            600:{
                                                items:3.5,
                                                margin:10
                                            },
                                            900:{
                                                items:4.5,
                                                margin:12
                                            },
                                            1200:{
                                                items:5.5,
                                                margin:20
                                            }
                                    }                                     
                            });



                            var loopProdutos2 = $('#loopProdutos2').owlCarousel({
                                    loop:true,
                                    margin:20,
                                    items: 5.5,
                                    autoplay: true,
                                    center: true,
                                    autoplayHoverPause:true,
                                    navText: [
                                        '<img src="images/left.svg" alt="Página anterior">',
                                        '<img src="images/right.svg" alt="Próximo Página">'
                                    ], 
                                    navContainer: '.custom-nav-loop2',
                                    responsive:{
                                            0:{
                                                items:1.5,
                                                margin:10
                                            },
                                            600:{
                                                items:3.5,
                                                margin:10
                                            },
                                            900:{
                                                items:4.5,
                                                margin:12
                                            },
                                            1200:{
                                                items:5.5,
                                                margin:20
                                            }
                                    }                                     
                            });

                            

}); 



// MENU FIXO NAS PÁGINAS INTERNA
jQuery(document).ready(function ($) {
  var entreiAnimateNumber = 0;
  $(window).scroll(function(){
    var scroll = $(window).scrollTop();
     if (scroll < 400){
         $("header.fixo").css("top","-200%");
     }
     if (scroll > 400){
         $("header.fixo").css("top","0px");
     }
  });
});

const mediaQuery = window.matchMedia('(max-width: 540px)');
 
if (mediaQuery.matches) {
    
    $(".sidemenu").css("display","block");
	$(".sidemenu").css("top","-1000%");
	$(".sidemenu").css("right","auto");
  
}


function mudarImagemProduto(srcImagem){
    
	$("#imagemPrincipalProduto").attr("src",srcImagem);

}






