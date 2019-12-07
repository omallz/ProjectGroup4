// Get core Pokemon information
var searchValue = "bulbasaur"; // number or name, will come from the search in future

$.ajax({
    url: "https://pokeapi.co/api/v2/pokemon/" + searchValue,
    method: "GET"
}).then(function(response) {

    var pokemonFrontImage = response.sprites.front_default;

    var pokemonID = response.id;
    var pokemonName = response.name;

    var pokemonHeight = response.height * 10 + " cm";
    var pokemonWeight = response.weight / 10 + " kg";

    var pokemonType1 = response.types[0].type.name;
    var pokemonType2 = response.types[1].type.name;

    var pokemonAbility1 = response.abilities[0].ability.name;
    var pokemonAbility2 = response.abilities[1].ability.name;
    if (response.abilities[2]) {
        var pokemonAbility3 = response.abilities[2].ability.name;
    }
    if (response.abilities[3]) {
        var pokemonAbility4 = response.abilities[3].ability.name;
    }

    // var pokemonAbility4 = response.abilities[3].ability.name;

    $("#pokemon-image").append("<img src=" + pokemonFrontImage + ">");
    $("#pokemon-id").append("<p>" + pokemonID + "</p>");
    $("#pokemon-name").append("<p>" + pokemonName + "</p>");
    $("#pokemon-height").append("<p>" + pokemonHeight + "</p>"); // convert decimeters to centimeters
    $("#pokemon-weight").append("<p>" + pokemonWeight + "</p>"); // convert hectograms to now kilograms
    $("#pokemon-type1").append("<p>" + pokemonType1 + "</p>");
    $("#pokemon-type2").append("<p>" + pokemonType2 + "</p>");

    $("#pokemon-ability1").append("<p>" + pokemonAbility1 + "</p>");
    $("#pokemon-ability2").append("<p>" + pokemonAbility2 + "</p>");
    if (pokemonAbility3) {
        $("#pokemon-ability3").append("<p>" + pokemonAbility3 + "</p>");
    }
    if (pokemonAbility4) {
        $("#pokemon-ability4").append("<p>" + pokemonAbility4 + "</p>");
    }

    /* console.log(response.id); // pokemon ID
    console.log(response.sprites.back_default); // back image
    console.log(response.sprites.back_female); // back image
    console.log(response.sprites.back_shiny); // back image
    console.log(response.sprites.back_shiny_female); // back image
    console.log(response.sprites.front_default); // front image
    console.log(response.sprites.front_female); // front image
    console.log(response.sprites.front_shiny); // front image
    console.log(response.sprites.front_shiny_female); // front image

    /* vi = response.value; */
    /* $("#current-uvi").text("UV Index: " + uvi); */
});

var endPoint = "https://en.wikipedia.org/w/api.php";
var params = "?action=parse&page=Bulbasaur&format=json";
var url = endPoint + params + "&origin=*";

$.ajax({
    url: url,
    method: "GET"
}).then(function(response) {
    console.log(response);
    
});

