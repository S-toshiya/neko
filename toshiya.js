$(function () {
    $(".btn").on("click", function () {
        // console.log($(".hundredNum").val());
        // console.log($(".tenNum").val());
        // console.log($(".oneNum").val());
        // console.log($(".hundredNum").val()+$(".tenNum").val()+$(".oneNum").val());
        let nekoNum = $(".hundredNum").val()+$(".tenNum").val()+$(".oneNum").val()
         console.log(nekoNum);

        $(".nekoimg").append(`<p>https://http.cat/${nekoNum}</p>`)
    })
})