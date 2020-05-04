$(document).ready(function () {
    // start qcm 

    $('.btn-start').on('click', function () {
        $(this).hide(200);
        Start();
        $('.qcm-container').show(200)
    })
})

// qcm slider function 
function qcm_slider() {
    var current_index_quizz = 0;
    let nb_of_quizz = $('.qcm-box').length;
    $('.qcm-box').eq(current_index_quizz).show(); 

    // $('.btn-prev').css('display', 'none'); or :
    $('.btn-prev').hide(200);

    // Click on the 'next' button to go to the next question.
    $('.btn-next').on('click', function () {
        current_index_quizz++;
        if (current_index_quizz == 1) {
            $('.btn-prev').show();
        }
        // $('.qcm-box').css('display', 'none'); or :
        $('.qcm-box').hide();

        $('.qcm-box').eq(current_index_quizz).show();

        if ((nb_of_quizz - 1) == current_index_quizz) {
            $('.btn-next').hide();
            $('.btn-valid').show();
            return;
        }
    })
    $('.btn-prev').on('click', function () {
        current_index_quizz--;
        $('.btn-next').show();
        $('.btn-valid').hide();
        $('.qcm-box').hide();
        $('.qcm-box').eq(current_index_quizz).show();
        if (current_index_quizz == 0) {
            $(this).hide();
        }
    })
}