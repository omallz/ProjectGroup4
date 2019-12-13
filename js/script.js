// Get core Pokemon information
var searchValue = ""; // number or name
var params = new URLSearchParams(document.location.search.substring(1));
var searchValue = params.get("pokemon-search"); 
var validPokemon = false;

$.ajax({
    url: "https://pokeapi.co/api/v2/pokemon/" + searchValue,
    method: "GET"
}).then(function(response) {
	console.log(response);

	// Adds padding to the ID, making it three digits which can be then used to embed a image from serebii.net
	var pokemonID = response.id;
	var pokemonIDString = pokemonID.toString();
	var pokemonIDPrefixed = pokemonIDString.padStart(3, '0');
	var pokemonMainImage = "https://serebii.net/pokemon/art/" + pokemonIDPrefixed + ".png";
	$("#pokemon-image1").append("<img src=" + pokemonMainImage + ">");
	$("#pokemon-image2").append("<img class='img-responsive' src=" + pokemonMainImage + ">");
	// General Attributes
    var pokemonName = response.name;
    var pokemonHeight = response.height * 10 + " cm";
	var pokemonWeight = response.weight / 10 + " kg";
	var pokemonSpecies = response.species.name;

    // Base Stats
    var pokemonSpeedStat = response.stats[0].base_stat // Speed
    var pokemonSpecDefStat = response.stats[1].base_stat // Special Defense
    var pokemonSpecAttStat = response.stats[2].base_stat // Special Attack
    var pokemonDefenseStat = response.stats[3].base_stat // Defense 
    var pokemonAttackStat = response.stats[4].base_stat // Attack
	var pokemonHP = response.stats[5].base_stat // Hit Points (HP)

	// Evolutions

	console.log(response.types[1]);
	// Types
	if (response.types[0].type.name) {
		var pokemonType1 = response.types[0].type.name;
	}
	if (response.types[1] != undefined) {
		var pokemonType2 = response.types[1].type.name;
		$(".pokemon-type-2").show();
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
    $("#pokemon-id").append("<span>" + pokemonIDPrefixed + "</span>");
    $("#pokemon-name").append("<span>" + pokemonName + "</span>");
    $("#pokemon-height").append("<span class='pokemon-data'>" + pokemonHeight + "</span>"); // convert decimeters to centimeters
	$("#pokemon-weight").append("<span class='pokemon-data'>" + pokemonWeight + "</span>"); // convert hectograms to now kilograms
	
	$("#pokemon-ability1").append("<span class='pokemon-data'>" + pokemonAbility1 + "</span>" + ",");
	$("#pokemon-ability2").append("<span class='pokemon-data'>" + pokemonAbility2 + "</span>" + ",");
	
    if (pokemonAbility3) {
        $("#pokemon-ability3").append("<span class='pokemon-data'>" + pokemonAbility3 + "</span>" + ",");
    }
    if (pokemonAbility4) {
        $("#pokemon-ability4").append("<span class='pokemon-data'>" + pokemonAbility4 + "</span>" + ",");
    }

	if (pokemonType1) {
		$("#pokemon-type1").append("<span>" + pokemonType1 + "</span>");

		/*
		if (pokemonType1 = "normal") {
			$("#pokemon-image1").css("background-color", "#A8A878");
		} else if (pokemonType1 = "fighting") {
			$("#pokemon-image1").css("background-color", "#F08030");
		}
		else if (pokemonType1 = "flying") {
			$("#pokemon-image1").css("background-color", "#C03028");
		}
		else if (pokemonType1 = "poison") {
			$("#pokemon-image1").css("background-color", "#A890F0");
		}
		else if (pokemonType1 = "ground") {
			$("#pokemon-image1").css("background-color", "#E0C068");
		}
		else if (pokemonType1 = "rock") {
			$("#pokemon-image1").css("background-color", "#B8A038");
		}
		else if (pokemonType1 = "bug") {
			$("#pokemon-image1").css("background-color", "#A8B820");
		}
		else if (pokemonType1 = "ghost") {
			$("#pokemon-image1").css("background-color", "#705898");
		}
		else if (pokemonType1 = "steel") {
			$("#pokemon-image1").css("background-color", "#B8B8D0");
		}
		else if (pokemonType1 = "fire") {
			$("#pokemon-image1").css("background-color", "#F08030");
		}
		else if (pokemonType1 = "water") {
			$("#pokemon-image1").css("background-color", "#6890F0");
		}
		else if (pokemonType1 = "grass") {
			$("#pokemon-image1").css("background-color", "#78C850");
		}
		else if (pokemonType1 = "electric") {
			$("#pokemon-image1").css("background-color", "#F8D030");
		}
		else if (pokemonType1 = "psychic") {
			$("#pokemon-image1").css("background-color", "#F85888");
		}
		else if (pokemonType1 = "ice") {
			$("#pokemon-image1").css("background-color", "#98D8D8");
		}
		else if (pokemonType1 = "dragon") {
			$("#pokemon-image1").css("background-color", "#7038F8");
		}
		else if (pokemonType1 = "dark") {
			$("#pokemon-image1").css("background-color", "#705848");
		}
		else if (pokemonType1 = "fairy") {
			$("#pokemon-image1").css("background-color", "#EE99AC");
		}
		else {

		} */

	}
	if (pokemonType2 != undefined) {
		$("#pokemon-type2").append("<span>" + pokemonType2 + "</span>");
	}
	
	if (pokemonSpecies) {
		$("#pokemon-species").append("<span class='pokemon-data'>" + pokemonSpecies + "</span>");
	}

	// Base Stats
	if (pokemonHP) {
		$("#pokemon-hp").append("<span class='pokemon-data'>" + pokemonHP + "</span>"); //Hit points
	}
	if (pokemonAttackStat) {
		$("#pokemon-attack").append("<span class='pokemon-data'>" + pokemonAttackStat + "</span>"); //Hit points
	}
	if (pokemonDefenseStat) {
		$("#pokemon-defence").append("<span class='pokemon-data'>" + pokemonDefenseStat + "</span>"); //Defence points
	}
	if (pokemonSpecAttStat) {
		$("#pokemon-spec-att").append("<span class='pokemon-data'>" + pokemonSpecAttStat + "</span>"); //Special Attack
	}
	if (pokemonSpecDefStat) {
		$("#pokemon-spec-def").append("<span class='pokemon-data'>" + pokemonSpecDefStat + "</span>"); //Special Attack
	}
	if (pokemonSpeedStat) {
		$("#pokemon-speed").append("<span class='pokemon-data'>" + pokemonSpeedStat + "</span>"); //Special Attack
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
	if (searchValue != undefined) {
		var rawParagraphHtml = $('<div></div>').html(parsedSection);
		pokemonParagraph = $('#pokemon-description').html($(rawParagraphHtml).find('p'));
		// var cleanedUp = $("a").contents().unwrap(); // https://api.jquery.com/unwrap/
	} else {
		pokemonParagraph = $('#pokemon-description').html("No information found");
	}
});

function showDetails() {
	if (searchValue) {
		$("#pokemon-details").show();
		$("#pokemon-home").hide();
	} else {
		$("#pokemon-details").hide();
		$("#pokemon-home").show();
	}
}