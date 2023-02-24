$(function () {

    $('input:visible').eq(0).focus();

    $("button").click(function () {
        var value = $(this).val(); // クリックしたボタンのvalueを取得
        var currentVal = $(".input").val(); // 現在のinputの値を取得
        if (currentVal.length < 3) { // inputの値が3桁未満の場合
            $(".input").val(currentVal + value); // valueをinputに追加
        }
    });



    $(".gobtn").on("click", function () {
        let nekoNum = $(".input").val()
        //  console.log(nekoNum);
        let nekoUrl = `https://http.cat/${nekoNum}`
        $(".nekoimg").attr("src", nekoUrl)
        // console.log(nekoUrl);
    })


    $('.modal-btn').on('click', function () {
        $('.modal-container').addClass('on');
    });

    $('.close-btn-wrap').on('click', function () {
        $('.modal-container').removeClass('on');
    })
});






