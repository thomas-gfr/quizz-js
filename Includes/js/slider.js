$(document).ready(function()
{
    // start qcm 

    $('.btn-start').on('click',function()
    {
        $(this).hide(200);
        Start(); 
        $('.qcm-container').show(200)
    })
})

    // qcm slider function 
    function qcm_slider()
    {
        var index = 0;
        let q_lenth = $('.qcm-box').length;
        console.log(q_lenth);
        $('.qcm-box').eq(index).css('display','block');

        $('.btn-prev').css('display','none');

        $('.btn-next').on('click',function()
        {
            index++;
            if(index == 1)
            {
                $('.btn-prev').css('display','initial');
            }
        $('.qcm-box').css('display','none');
        $('.qcm-box').eq(index).css('display','block');
        
        if((q_lenth - 1) == index)
            {
                $('.btn-next').hide();
                $('.btn-valid').show();
                return;
            }
        })

        $('.btn-prev').on('click',function()
        {
            index--;
            $('.btn-next').css('display','block');
            $('.btn-valid').css('display','none');
            $('.qcm-box').css('display','none');
            $('.qcm-box').eq(index).css('display','block');
            if(index == 0)
            {
            $(this).hide(); 
            }
        })
    }