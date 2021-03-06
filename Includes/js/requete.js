$(document).ready(function () {

    // connection to Airtable
    let url = "https://api.airtable.com/v0/appPlwhI6soNExja7/Questions?api_key=keymCLVB3ihwbOq9k";
    var data = [];
    var request = $.ajax({
        url: url,
        method: "GET",
        dataType: "json",
    });

    // data recovery from Airtable
    request.done(function (response) {
        data = response.records;
        $(".loader").remove();
        data.forEach(function (element) {
            var div = $('<div class="qcm-box"><h2 class="h1 mx-auto title col-xl-12 text-center">'
                + element.fields.question + '</h2><form name="'
                + element.id + '" class="row col-xl-12"><div class="inputGroup col-xl-12"><input id="'
                + element.id + '_1' + '" name="radio" value="1" type="radio"/><label for="'
                + element.id + '_1' + '">'
                + element.fields.response_1 + '</label></div><div class="inputGroup col-xl-12"><input id="'
                + element.id + '_2' + '" name="radio" value="2" type="radio"/><label for="'
                + element.id + '_2' + '">'
                + element.fields.response_2 + '</label></div><div class="inputGroup col-xl-12"><input id="'
                + element.id + '_3' + '" name="radio" value="3" type="radio"/><label for="'
                + element.id + '_3' + '">'
                + element.fields.response_3 + '</label></div></form></div>');
            $('.qcm-content').append(div);
        });

        qcm_slider();

    });

    request.fail(function (error, textStatus) {
        alert("Request failed: " + textStatus);
        console.error(error);
    });


    // valid qcm 
    $('.btn-valid').on('click', function () {
        Stop();
        $('.qcm-container').hide(200);
        forms = $('form');
        var score = 0;
        for (let index = 0; index < forms.length; index++) {

            // retrieve the correct answer on Airtable and compare it with the chosen answer.
            let response = data[index].fields.correct_response_index;
            let response_checked = $('input[name=radio]:checked', forms[index]).val();

            // if the answer checked is correct.
            if (response_checked == response) {
                score++;
            }
            //no need for elif because if he doesn't have the right answer the score doesn't move.
        }

        if (score < 5) {
            $('.img_1').attr('src', 'https://media.giphy.com/media/fVEMVRX0AS4wVrOAUc/giphy.gif');
            $('.img_2').attr('src', 'https://media.giphy.com/media/xT1R9YUaUwR49MdDLa/giphy.gif');
            $('.score').css('color', '#B40431');
        }
        else if (score < 8) {
            $('.img_1').attr('src', 'https://media.giphy.com/media/l41m5sBnMGzBDXBny/giphy.gif');
            $('.img_2').attr('src', 'https://media.giphy.com/media/t0AIG7ldNyMBG/giphy.gif');
            $('.score').css('color', '#DF7401');
        }
        else {
            $('.img_1').attr('src', 'https://media.giphy.com/media/3o72FcJmLzIdYJdmDe/giphy.gif');
            $('.img_2').attr('src', 'https://media.giphy.com/media/12xWfDQcGkbU1W/giphy.gif');
            $('.score').css('color', '#088A4B');
        }

        // display the score + the timer.
        $('.score').text(score + "/10");
        $('.timing-span').append('<span id="timer"></span>')
        chrono();
        $('.results-container').show(200);
    })
});