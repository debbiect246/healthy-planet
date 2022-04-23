// Get the Questions object from questions.json
$.ajax({
    url: "../static/js/questions.json",
    dataType: "json",
    type: "GET",
    cache: false,
    success: function (data) {
        console.log(data);
        $(data.Questions).each(function (index, value) {
            console.log(value.title);
        })
    }
})