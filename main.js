//Accès aux noms des banques
ajaxGet("banks.json", function (reponse) {
  var banks = JSON.parse(reponse).banks;
  for (var i in banks) {
    $("#meteo").append('<option value="' + i + '">' + banks[i].name + '</option>');
  }

  // Récupération des informations relatives à la banque sélectionnée
  $('select').change(function() {
    var idBank = $('select').val() ;
    var acctypes = banks[idBank].account_types.join(' | ' , ',');
    var capabilities = banks[idBank].capabilities.join(' | ' , ',');
    $('#clean').remove();
    $("#infos").empty();
    $('#link').empty();
    $("#infos").append('<h3 class="card-title">' + banks[idBank].name + '</h3>');
    $("#infos").append('<p id="color" class="badge badge-secondary">' + banks[idBank].state + '</p>');
    $('#color').css("background-color" , "#" + banks[idBank].color);
    $("#infos").append('<legend>Type(s) : </legend><p class="card-text"> ' + acctypes + '</p>');
    $("#infos").append('<legend>Capacité(s) : </legend><p class="card-text">' + capabilities + '</p>');
    for (var i in banks[idBank].urls) {
    $('#link').append('<a href="'+ banks[idBank].urls[i] + '" class="btn btn-primary" target="_blank">' + banks[idBank].urls[i] + '</button>');
    }

    });

});

//Boucle for puis
//chercher jquery inArray pour trier les types répétés
//stocker le tout dans un tableau
//faire le dico
for (var i in banks[idBank].account_types) {
  $('#account').append('<p class="card-text">'+ banks[idBank].account_types[i] + '</p>');
}
for (var i in banks[idBank].capabilities) {
  $('#cpcts').append('<p class="card-text">'+ banks[idBank].capabilities[i] + '</p>');
}
