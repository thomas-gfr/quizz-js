$(document).ready(function(){

    var request = $.ajax({
        url: "https://api.airtable.com/v0/appPlwhI6soNExja7/Questions?maxRecords=3&view=Grid%20view",  
        method: "GET",
        headers: {
            Authorization: "Bearer keyhyv0KQcAU56pdI",
        },
        dataType: "jsonp",

        });
        
        request.done(function( msg ) {
        console.log(msg)
        });
        
        request.fail(function( jqXHR, textStatus ) {
        alert( "Request failed: " + textStatus );
        console.log(jqXHR);
        });
});