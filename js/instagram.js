// ======================
// Puxando pela HASHTAG
// ======================

// var accessToken = '181941196.521a8ff.ecc245c88d2f42bca1455ae357e9e2cf';
// var limit = 20; //Limite máximo de fotos
// var setSize = "large";
// var tag = "vidaarida"

// var instagram = function() {
// 	return {
// 		init: function() {
// 			instagram.loadImages();
// 		},
// 		loadImages: function() {
// 			var getImagesURL = 'https://api.instagram.com/v1/tags/'+ tag +'/media/recent?client_id=be52cb013dda4c47a03cdd5689896c37&access_token='+ accessToken +'';
// 			$.ajax({
// 				type: "GET",
// 				dataType: "jsonp",
// 				cache: false,
// 				url: getImagesURL,
// 				success: function(data) {
// 					for(var i = 0; i < limit ; i+=1) {
// 						if(setSize == "small") {
// 							var size = data.data[i].images.thumbnail.url;
// 						} else if(setSize == "medium") {
// 							var size = data.data[i].images.low_resolution.url;
// 						} else {
// 							var size = data.data[i].images.standard_resolution.url;	
// 						}
// 						$("#lista-instagram").append("<figure><a target='_blank' href='" + data.data[i].link +"'><img src='" + size +"'/></a></figure>");
// 					}
// 				}
// 			});
// 		}
// 	}
// }();

// $(document).ready(function() {
//     instagram.init();
// });


// ======================
// Puxando pelo usuário
// ======================

// accessToken para validar a API, caso contrário não funciona;
var accessToken = '181941196.521a8ff.ecc245c88d2f42bca1455ae357e9e2cf';
// username de quem voc6e quer mostrar as imagens;
var username= "thulioph";
// O limite máximo de fotos que podem ser mostradas são 20;
var limit = 20;
// Tamanho das imagens que iram aparecer, possíveis valores (small, medium, large);
var setSize = "small";

var instagram = function() {
	return {
		// Inicia chamando as informações do usuário
		init: function() {
			instagram.getUser();
		},
		// Pega as informações do usuário
		getUser: function() {
			var getUserURL = 'https://api.instagram.com/v1/users/search?q='+ username +'&access_token='+ accessToken +'';
			$.ajax({
				type: "GET",
				dataType: "jsonp",
				cache: false,
				url: getUserURL,
				success: function(data) {
					var getUserID = data.data[0].id;
					instagram.loadImages(getUserID);
				}
			});
		},
		// Carrega as imagens
		loadImages: function(userID) {
			var getImagesURL = 'https://api.instagram.com/v1/users/'+ userID +'/media/recent/?access_token='+ accessToken +'';
			$.ajax({
				type: "GET",
				dataType: "jsonp",
				cache: false,
				url: getImagesURL,
				success: function(data) {
					for(var i = 0; i < limit; i+=1) {
						if(setSize == "small") {
							var size = data.data[i].images.thumbnail.url;
						} else if(setSize == "medium") {
							var size = data.data[i].images.low_resolution.url;
						} else {
							var size = data.data[i].images.standard_resolution.url;
						}
						// Imprime no HTML a estrutura indicada, você pode alterar a forma como irá exibir no HTML;
						$("#lista-instagram").append("<figure><a target='_blank' href='" + data.data[i].link +"'><img src='" + size +"'/></a></figure>"
							);
					}
				}
			});
		}
	}
}();

$(document).ready(function() {
    instagram.init();
});