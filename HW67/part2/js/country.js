var urlParams = new URLSearchParams(window.location.search);
var param = urlParams.get('code');
var indexLink = `https://restcountries.eu/rest/v2/alpha/${param}`;

function jqueryParseData(response, status) {
    console.log(response);
    console.log(status);
    renderCountryData(response);
}

function jqueryAjaxError(response, status) {
    console.log(response);
    console.log(status);
    console.log('error');
}

function jqueryLoadIndex() {
    $.ajax({
        url: indexLink,
        method: 'GET',
        success: jqueryParseData,
        error: jqueryAjaxError
    });
}

$(document).ready(function() {
    jqueryLoadIndex();
});

function renderCountryData(data) {
    const container = $('.container');
    let countryDiv = $(document.createElement('div'));
    countryDiv.addClass('country');
    countryDiv.append(`<h3>${data.name}</h3>`);
    countryDiv.append(`<img src="${data.flag}" alt="${data.name}">`);
    countryDiv.append(`<p>Столица: ${data.capital}</p>`);
    countryDiv.append(`<p>Площадь: ${data.area} км${"&#178"}</p>`);
    countryDiv.append(`<p>Население: ${data.population} человек</p>`);
    countryDiv.append(`<p>Код валюты: ${data.currencies[0]['code']}</p>`);
    container.append(countryDiv);
}

