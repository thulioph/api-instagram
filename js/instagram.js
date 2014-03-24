// ======================
// Puxando pela HASHTAG
// ======================

var accessToken = '181941196.5b9e1e6.c4df4ed6d9494b9a817be3ee7d046127';
var limit = 20; //Limite máximo de fotos
var setSize = "small";
var tag = 'recife';

var instagram = function() {
	return {
		init: function() {
			instagram.loadImages();
		},
		loadImages: function() {
			var getImagesURL = 'https://api.instagram.com/v1/tags/' + tag + '/media/recent?access_token=' + accessToken + '';
			// var getImagesURL = 'https://api.instagram.com/v1/tags/'+ tag +'/media/recent?client_id=9ec4a914b19846b694dca425582e089c&access_token='+ accessToken +'';
			$.ajax({
				type: "GET",
				dataType: "jsonp",
				cache: false,
				url: getImagesURL,
				success: function(data) {
					for(var i = 0; i < limit ; i+=1) {
						if(setSize == "small") {
							var size = data.data[i].images.thumbnail.url;
						} else if(setSize == "medium") {
							var size = data.data[i].images.low_resolution.url;
						} else {
							var size = data.data[i].images.standard_resolution.url;	
						}
						$("#hashtag-list").append("<figure><a target='_blank' href='" + data.data[i].link +"'><img src='" + size +"'/></a></figure>");
					}
				}
			});
		}
	}
}();

instagram.init();


// ======================
// Puxando pelo USUÁRIO
// ======================

// username de quem voc6e quer mostrar as imagens;
var IDuser= "18890326";
// O limite máximo de fotos que podem ser mostradas são 20;
var limit = 20;
// Tamanho das imagens que iram aparecer, possíveis valores (small, medium, large);
var setSize = "small";

var instagram = function() {
	return {
		// Inicia chamando as informações do usuário
		init: function() {
			instagram.loadImages();
		},
		// Carrega as imagens
		loadImages: function(userID) {
			var getImagesURL = 'https://api.instagram.com/v1/users/'+ IDuser +'/media/recent?client_id=9ec4a914b19846b694dca425582e089c&access_token='+ '';
			$.ajax({
				type: "GET",
				dataType: "jsonp",
				cache: false,
				url: getImagesURL,
				success: function(data) {
					for(var i = 0; i < limit; i++) {
						if(setSize == "small") {
							var size = data.data[i].images.thumbnail.url;
						} else if(setSize == "medium") {
							var size = data.data[i].images.low_resolution.url;
						} else {
							var size = data.data[i].images.standard_resolution.url;	
						}
						// Imprime no HTML a estrutura indicada, você pode alterar a forma como irá exibir no HTML;
						$("#user-list").append("<figure><a target='_blank' href='" + data.data[i].link +"'><img src='" + size +"'/></a></figure>"
							);
					}
				}
			});
		}
	}
}();

instagram.init();