$(function () {
    $(".btn").on("click", function () {
        let nekoNum = $(".hundredNum").val()+$(".tenNum").val()+$(".oneNum").val()
        //  console.log(nekoNum);
        let nekoUrl = `https://http.cat/${nekoNum}`
        $(".nekoimg").attr("src",nekoUrl)
        // console.log(nekoUrl);
    })


    $('.modal-btn').on('click',function () {
        $('.modal-container').addClass('on');
      });
    
      $('.close-btn-wrap').on('click',function () {
        $('.modal-container').removeClass('on');
      })
})