$(function () {
	console.log("DOM fully loaded and parsed");

	questions = [{
			"title": "Question 1",
			"optionA": "A",
			"optionB": "B",
			"optionC": "C",
			"optionD": "D",
			"answer": "B"
		},
		{
			"title": "Question 2",
			"optionA": "E",
			"optionB": "F",
			"optionC": "G",
			"optionD": "H",
			"answer": "G"
		},
		{
			"title": "",
			"optionA": "",
			"optionB": "",
			"optionC": "",
			"optionD": "",
			"answer": ""
		},
		{
			"title": "",
			"optionA": "",
			"optionB": "",
			"optionC": "",
			"optionD": "",
			"answer": ""
		}, {
			"title": "",
			"optionA": "",
			"optionB": "",
			"optionC": "",
			"optionD": "",
			"answer": ""
		}, {
			"title": "",
			"optionA": "",
			"optionB": "",
			"optionC": "",
			"optionD": "",
			"answer": ""
		}, {
			"title": "",
			"optionA": "",
			"optionB": "",
			"optionC": "",
			"optionD": "",
			"answer": ""
		}, {
			"title": "",
			"optionA": "",
			"optionB": "",
			"optionC": "",
			"optionD": "",
			"answer": ""
		}, {
			"title": "",
			"optionA": "",
			"optionB": "",
			"optionC": "",
			"optionD": "",
			"answer": ""
		}, {
			"title": "",
			"optionA": "",
			"optionB": "",
			"optionC": "",
			"optionD": "",
			"answer": ""
		}, {
			"title": "",
			"optionA": "",
			"optionB": "",
			"optionC": "",
			"optionD": "",
			"answer": ""
		}, {
			"title": "",
			"optionA": "",
			"optionB": "",
			"optionC": "",
			"optionD": "",
			"answer": ""
		}, {
			"title": "",
			"optionA": "",
			"optionB": "",
			"optionC": "",
			"optionD": "",
			"answer": ""
		}, {
			"title": "",
			"optionA": "",
			"optionB": "",
			"optionC": "",
			"optionD": "",
			"answer": ""
		}, {
			"title": "",
			"optionA": "",
			"optionB": "",
			"optionC": "",
			"optionD": "",
			"answer": ""
		}
	]

	const lastQuestion = questions.length;
	let runningQuestion = 0
	const questionArray = questions[runningQuestion];
	score = 0;

	$("#start-quiz-btn").click(function () {
		showNextQuestion();
	});

	$('#btn-submit').click(function (e) {
		e.preventDefault();
		submitAnswer();
		
	});

	/**
	 * Display the "quiz-page" html, show each question in order if there are ny left otherwise call the collectResultsAndDisplayHouse.
	 */
	function showNextQuestion() {
		if (runningQuestion < lastQuestion) {
			$("#home-page").addClass("hidden");
			$("#quiz-page").removeClass("hidden");
			$("#start-again-btn-div").removeClass("hidden");
			$("#btn-submit").removeClass("hidden");
			
			// Inject template HTML into fieldset element
			$('#current-question').html(questionArray.title);
			$('#answer-options').html(`
			<input class="answer-option" type="radio" name="answers" id="option-1" value="${questionArray.optionA}"required>
			<label class="answer-option" for="option-1">
			<span data-hover="${questionArray.optionA}">${questionArray.optionA}</span>
			</label>
			<input class="answer-option" type="radio" name="answers" id="option-2" value="${questionArray.optionB}">
			<label class="answer-option" for="option-2">							
			<span data-hover="${questionArray.optionB}">${questionArray.optionB}</span>
			</label>
			<input class="answer-option" type="radio" name="answers" id="option-3" value="${questionArray.optionC}">
			<label class="answer-option" for="option-3">
			<span data-hover="${questionArray.optionC}">${questionArray.optionC}</span>
			</label>
			<input class="answer-option" type="radio" name="answers" id="option-4" value="${questionArray.optionD}">
			<label class="answer-option" for="option-4">
			<span data-hover="${questionArray.optionD}">${questionArray.optionD}</span>
			</label>
		`);
		} else {
			showResult();
		}
	}

	/**
	 * When the submit button is clicked call the relavent functions to progress the quiz
	 */
	function submitAnswer() {
		checkAnswerResult();
		showNextQuestion();
	}

	/**
	 * Check which answer-option has been checked, and record the result. Otherwise display an alert if nothing is selected.
	 */
	function checkAnswerResult() {
		console.log(questionArray.answer)
		if ($('input:checked').val() == questionArray.answer) {
			score += 1;
		}
		console.log(score);
	}

	/**
	 * Resets all scores, hides results-page and quiz-page, and returns to the main screen
	 */
	function startAgainFromMenu() {
		score = 0

		$("#quiz-page").addClass("hidden");
		$("#home-page").removeClass("hidden");
		$("#results-page").addClass("hidden");
	}

	// Event listener to restart the quiz if "start again" button is clicked
	$("#start-again-btn").click(function () {
		startAgainFromMenu()
	});
	// Event listener to initiate instructions page and hide other content if button is clicked on the homepage
	$("#instructions-btn").click(function () {
		$("#home-page").classList.add("hidden");
		$("#content-container").style.position = "relative";
	});
});