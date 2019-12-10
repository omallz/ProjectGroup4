// Get core Pokemon information
var searchValue = ""; // number or name, will come from the search in future https://stackoverflow.com/questions/406192/get-current-url-with-jquery
var params = new URLSearchParams(document.location.search.substring(1));
var searchValue = params.get("pokemonz"); 

$.ajax({
    url: "https://pokeapi.co/api/v2/pokemon/" + searchValue,
    method: "GET"
}).then(function(response) {

	// Adds padding to the ID, making it three digits which can be then used to embed a image from serebii.net
	var pokemonID = response.id;
	var pokemonIDString = pokemonID.toString();
	var pokemonIDPrefixed = pokemonIDString.padStart(3, '0');
	var pokemonMainImage = "https://serebii.net/pokemon/art/" + pokemonIDPrefixed + ".png";
	$("#pokemon-image").append("<img src=" + pokemonMainImage + ">");

	// General Attributes
    var pokemonName = response.name;
    var pokemonHeight = response.height * 10 + " cm";
	var pokemonWeight = response.weight / 10 + " kg";
	
	// Types
	if (response.types[0].type.name) {
		var pokemonType1 = response.types[0].type.name;
	}
	if (response.types[1] !== undefined) {
		var pokemonType2 = response.types[1].type.name;
	}
	
	// Abilities
    if (response.abilities[0]) {
        var pokemonAbility1 = response.abilities[0].ability.name;
	}
	if (response.abilities[1] !== undefined) {
        var pokemonAbility2 = response.abilities[1].ability.name;
    }
    if (response.abilities[2] !== undefined) {
        var pokemonAbility3 = response.abilities[2].ability.name;
	}
    if (response.abilities[3] !== undefined) {
        var pokemonAbility4 = response.abilities[3].ability.name;
	}
	
	// Images
	var pokemonFrontImage = response.sprites.front_default;
	var pokemonBackImage = response.sprites.back_default;
	var pokemonFemaleFrontImage = response.sprites.front_female;
	var pokemonFemaleBackImage = response.sprites.back_female;
	var pokemonFrontShiny =  response.sprites.front_shiny;
	var pokemonBackShiny = response.sprites.back_shiny;
	var pokemonFemaleFrontShiny =  response.sprites.front_shiny_female;
	var pokemonFemaleBackShiny =  response.sprites.back_shiny_female;

	// Front Male
	if (pokemonFrontImage) {
		$("#pokemon-image").append("<img src=" + pokemonFrontImage + ">");
	}
	// Back Male
	if (pokemonBackImage) {
		$("#pokemon-image").append("<img src=" + pokemonBackImage + ">");
	}

	// Front Female
	if (pokemonFemaleFrontImage) {
		$("#pokemon-image").append("<img src=" + pokemonFemaleFrontImage + ">");
	}
	// Back Female
	if (pokemonFemaleBackImage) {
		$("#pokemon-image").append("<img src=" + pokemonFemaleBackImage + ">");
	}

	// Front Male - Shiny
	if (pokemonFrontShiny) {
		$("#pokemon-image").append("<img src=" + pokemonFrontShiny + ">");
	}
	// Back Male - Shiny
	if (pokemonBackShiny) {
		$("#pokemon-image").append("<img src=" + pokemonBackShiny + ">");
	}

	// Front Female - Shiny
	if (pokemonFemaleFrontShiny) {
		$("#pokemon-image").append("<img src=" + pokemonFemaleFrontShiny + ">");
	}
	// Back Female - Shiny
	if (pokemonFemaleBackShiny) {
		$("#pokemon-image").append("<img src=" + pokemonFemaleBackShiny + ">");
	}

	// Append To Page
    $("#pokemon-id").append("<p>" + pokemonIDPrefixed + "</p>");
    $("#pokemon-name").append("<p>" + pokemonName + "</p>");
    $("#pokemon-height").append("<p>" + pokemonHeight + "</p>"); // convert decimeters to centimeters
	$("#pokemon-weight").append("<p>" + pokemonWeight + "</p>"); // convert hectograms to now kilograms
	
	if (pokemonType1) {
		$("#pokemon-type1").append("<p>" + pokemonType1 + "</p>");
	}
	if (pokemonType2) {
		$("#pokemon-type2").append("<p>" + pokemonType2 + "</p>");
	}

    $("#pokemon-ability1").append("<p>" + pokemonAbility1 + "</p>");
    $("#pokemon-ability2").append("<p>" + pokemonAbility2 + "</p>");
    if (pokemonAbility3) {
        $("#pokemon-ability3").append("<p>" + pokemonAbility3 + "</p>");
    }
    if (pokemonAbility4) {
        $("#pokemon-ability4").append("<p>" + pokemonAbility4 + "</p>");
    }
});

// return info from Wikipedia's first paragraph
var endPoint = "https://en.wikipedia.org/w/api.php";
var params = "?action=parse&format=json&section=0&page=";
var url = endPoint + params + searchValue +"&origin=*";

$.ajax({
	url: url,
	method: "GET"
}).then(function(response) {
	var parsedSection = response.parse.text["*"];
	/* need to strip the tags from wikipedia, eg [1] or [2]. Not working
	var parsedSectionReplaced = parsedSection.replace(/<sup>/g, '');
	var parsedSectionReplaced2 = parsedSectionReplaced.replace(/<\/sup>/g, '')
	*/
	var rawParagraphHtml = $('<div></div>').html(parsedSection);
	$('#pokemon-text').html($(rawParagraphHtml).find('p'));
	// var cleanedUp = $("a").contents().unwrap(); // https://api.jquery.com/unwrap/
});



