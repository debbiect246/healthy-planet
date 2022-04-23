$(function () {
	console.log("DOM fully loaded and parsed");

	questions = [{
			"type": "tf",
			"title": "Plastic doesn't need to be rinsed and emptied before it's recycled.",
			"optionA": "True",
			"optionB": "False",
			"answer": "B"
		},
		{
			"type": "multi",
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

	const lastQuestion = 2;
	let runningQuestion = 0;
	let score = 0;
	$("#start-quiz-btn").click(function () {
		console.log("clicked")
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
			const questionArray = questions[runningQuestion]
			$("#home-page").addClass("hidden");
			$("#quiz-page").removeClass("hidden");
			$("#start-again-btn-div").removeClass("hidden");
			$("#btn-submit").removeClass("hidden");
			console.log(questionArray.type)
			// Inject template HTML into fieldset element
			$('#current-question').html(questionArray.title);
			if (questionArray.type === "multi") {
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
			} else if (questionArray.type === "tf") {
				$('#answer-options').html(`
				<input class="answer-option" type="radio" name="answers" id="option-1" value="${questionArray.optionA}"required>
				<label class="answer-option" for="option-1">
				<span data-hover="${questionArray.optionA}">${questionArray.optionA}</span>
				</label>
				<input class="answer-option" type="radio" name="answers" id="option-2" value="${questionArray.optionB}">
				<label class="answer-option" for="option-2">							
				<span data-hover="${questionArray.optionB}">${questionArray.optionB}</span>
				</label>
			`)
			} else {
				displayResults();
			};
		}
	}

	/**
	 * When the submit button is clicked call the relavent functions to progress the quiz
	 */
	function submitAnswer() {
		checkAnswerResult();
		runningQuestion += 1;
		showNextQuestion();
	}

	/**
	 * Check which answer-option has been checked, and record the result. Otherwise display an alert if nothing is selected.
	 */
	function checkAnswerResult() {
		const questionArray = questions[runningQuestion]
		if (!$("input:checked").val()) {
			alert('Oops! Please pick an option and try again!');
		} else if ($("input:checked").val() == questionArray.answer) {
			score += 1;
		}
	}


	/**
	 * Displays the final score to the user
	 */
	function displayResults() {

		$("#quiz-page").addClass("hidden");
		$("#home-page").addClass("hidden");
		$("#results-page").removeClass("hidden");
		$('#results-page').html(`
			<h2>Congratulations on finishing the Quiz!</h2>
            <p id="final-score">You scored ${score} out of ${lastQuestion}</p>
			<button id="return-to-menu-btn" class="btn btn-primary btn-block">Start Again</button>`)
		$("#return-to-menu-btn").click(function () {
			startAgainFromMenu()
		});
	}


	/**
	 * Resets all scores, hides results-page and quiz-page, and returns to the main screen
	 */
	function startAgainFromMenu() {
		score = 0;
		runningQuestion = 0;

		$("#quiz-page").addClass("hidden");
		$("#home-page").removeClass("hidden");
		$("#results-page").addClass("hidden");
	}


	// Event listener to restart the quiz if "start again" button is clicked
	$("#start-again-btn").click(function () {
		startAgainFromMenu()
	});
});