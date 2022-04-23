$(function () {
	console.log("DOM fully loaded and parsed");

	// Get the Questions object from questions.json
	// questions = $.ajax({
	// 	url: "../static/js/questions.json",
	// 	dataType: "json",
	// 	type: "GET",
	// 	cache: false,
	// 	success: function (data) {
	// 		console.log("JSON Loaded");
	// 	}
	// });

	questions = [{
			"title": "Question 1",
			"option1": "A",
			"option2": "B",
			"option3": "C",
			"option4": "C",
			"answer": "B"
		},
		{
			"title": "Question 2",
			"option1": "E",
			"option2": "F",
			"option3": "G",
			"option4": "H",
			"answer": "G"
		},
		{
			"title": "",
			"option1": "",
			"option2": "",
			"option3": "",
			"option4": "",
			"answer": ""
		},
		{
			"title": "",
			"option1": "",
			"option2": "",
			"option3": "",
			"option4": "",
			"answer": ""
		},
		{
			"title": "",
			"option1": "",
			"option2": "",
			"option3": "",
			"option4": "",
			"answer": ""
		},
		{
			"title": "",
			"option1": "",
			"option2": "",
			"option3": "",
			"option4": "",
			"answer": ""
		},
		{
			"title": "",
			"option1": "",
			"option2": "",
			"option3": "",
			"option4": "",
			"answer": ""
		},
		{
			"title": "",
			"option1": "",
			"option2": "",
			"option3": "",
			"option4": "",
			"answer": ""
		},
		{
			"title": "",
			"option1": "",
			"option2": "",
			"option3": "",
			"option4": "",
			"answer": ""
		},
		{
			"title": "",
			"option1": "",
			"option2": "",
			"option3": "",
			"option4": "",
			"answer": ""
		},
		{
			"title": "",
			"option1": "",
			"option2": "",
			"option3": "",
			"option4": "",
			"answer": ""
		},
		{
			"title": "",
			"option1": "",
			"option2": "",
			"option3": "",
			"option4": "",
			"answer": ""
		},
		{
			"title": "",
			"option1": "",
			"option2": "",
			"option3": "",
			"option4": "",
			"answer": ""
		},
		{
			"title": "",
			"option1": "",
			"option2": "",
			"option3": "",
			"option4": "",
			"answer": ""
		},
		{
			"title": "",
			"option1": "",
			"option2": "",
			"option3": "",
			"option4": "",
			"answer": ""
		}
	]

	const currentQuestion = $("#current-question");
	const answerOptions = $("#answer-options");
	const lastQuestion = questions.length;
	let runningQuestion = 0
	
	$("#start-quiz-btn").click(function () {
		showNextQuestion
	});

	$('btn-submit').click(function () {
		preventDefault();
		submitAnswer();
	});

	/**
	 * Display the "quiz-page" html, show each question in order if there are ny left otherwise call the collectResultsAndDisplayHouse.
	 */
	function showNextQuestion() {
		if (runningQuestion < lastQuestion) {
			const questionArray = questions[runningQuestion];
			$("#home-page").classList.add("hidden");
			$("#quiz-page").classList.remove("hidden");
			$("#start-again-btn-div").classList.remove("hidden");
			$("#btn-submit").classList.remove("hidden");

			// Inject template HTML into fieldset element
			currentQuestion.innerHTML = questionArray.title;
			answerOptions.innerHTML = `
			<input class="answer-option" type="radio" name="answers" id="option-1" required>
			<label class="answer-option" for="option-1">
			<span data-hover="${questionArray.optionA}">${questionArray.optionA}</span>
			</label>
			<input class="answer-option" type="radio" name="answers" id="option-2">
			<label class="answer-option" for="option-2">							
			<span data-hover="${questionArray.optionB}">${questionArray.optionB}</span>
			</label>
			<input class="answer-option" type="radio" name="answers" id="option-3">
			<label class="answer-option" for="option-3">
			<span data-hover="${questionArray.optionC}">${questionArray.optionC}</span>
			</label>
			<input class="answer-option" type="radio" name="answers" id="option-4">
			<label class="answer-option" for="option-4">
			<span data-hover="${questionArray.optionD}">${questionArray.optionD}</span>
			</label>
			`;
		} else {
			showResult();
		}
	}

	// /**
	//  * When the submit button is clicked call the relavent functions to progress the quiz
	//  */
	// function submitAnswer() {
	// 	checkAnswerResult();
	// 	showNextQuestion();
	// }

	// /**
	//  * Check which answer-option has been checked, and record the result. Otherwise display an alert if nothing is selected.
	//  */
	// function checkAnswerResult() {

	// }

	// /**
	//  * Resets all scores, hides results-page and quiz-page, and returns to the main screen
	//  */
	// function startAgainFromMenu() {
	// 	score = 0

	// 	$("#quiz-page").classList.add("hidden");
	// 	$("#home-page").classList.remove("hidden");
	// 	$("#results-page").classList.add("hidden");
	// 	$("#content-container").style.position = "absolute";
	// }

	// // Event listener to restart the quiz if "start again" button is clicked
	// $("#start-again-btn").click(function () {
	// 	startAgainFromMenu
	// });
	// // Event listener to initiate instructions page and hide other content if button is clicked on the homepage
	// $("#instructions-btn").click(function () {
	// 	$("#home-page").classList.add("hidden");
	// 	$("#content-container").style.position = "relative";
	// });

});