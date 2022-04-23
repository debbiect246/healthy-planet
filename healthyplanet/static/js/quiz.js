// $.getJSON("../static/js/questions.json", function (data) {
//   console.log("It worked");
// });

$.ajax({
    url: "../static/js/questions.json",
    dataType: "json",
    type: "GET",
    cache: false,
    success: function (data) {
        console.log(data);
    }
})
