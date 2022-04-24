$(function () {
	const questions = [{
			"type": "tf",
			"title": "Plastic doesn't need to be rinsed and emptied before it's recycled.",
			"optionA": "True",
			"optionB": "False",
			"answer": "False"
		},
		{
			"type": "multi",
			"title": "In 2020, how many tonnes of plastic wer produced?",
			"optionA": "257 Million",
			"optionB": "482 Million",
			"optionC": "367 Million",
			"optionD": "298 Million",
			"answer": "367 Million"
		},
		{
			"type": "multi",
			"title": "Each year, how many plastic bottles are created?",
			"optionA": "300 Billion",
			"optionB": "400 Billion",
			"optionC": "500 Billion",
			"optionD": "600 Billion",
			"answer": "500 Billion"
		},
		{
			"type": "multi",
			"title": "Which plastic object can take up to 500 years to decompose?",
			"optionA": "A Carrier Bag",
			"optionB": "A Straw",
			"optionC": "A Bottle",
			"optionD": "A Tootbrush",
			"answer": "A Tootbrush"
		}, {
			"type": "tf",
			"title": "55% of all plastic ever produced has been thrown away",
			"optionA": "True",
			"optionB": "False",
			"answer": "True"
		}, {
			"type": "multi",
			"title": "How large is the Great Pacific Garbage Patch?",
			"optionA": "800,000 Square Kilometers",
			"optionB": "1.2 Million Square Kilometers",
			"optionC": "1.6 Million Square Kilometers",
			"optionD": "2 Million Square Kilometers",
			"answer": "1.6 Million Square Kilometers"
		}, {
			"type": "multi",
			"title": "What is the biggest contributor to plastic waste each year?",
			"optionA": "Electricals Products",
			"optionB": "Textile Products",
			"optionC": "Consumer Products",
			"optionD": "Packaging Products",
			"answer": "Packaging Products"
		}, {
			"type": "tf",
			"title": "True of False, by 2050 the oceans could contain more plastic than fish.",
			"optionA": "True",
			"optionB": "False",
			"answer": "True"
		}, {
			"type": "multi",
			"title": "We know that there are 250,000 tonnes of waste plastic in the ocean, but how much ends up there each year?",
			"optionA": "8 Million Tonnes",
			"optionB": "9 Million Tonnes",
			"optionC": "10 Million Tonnes",
			"optionD": "11 Million Tonnes",
			"answer": "10 Million Tonnes"
		}, {
			"type": "multi",
			"title": "How many drinking straws are you allowed to recycle?",
			"optionA": "100",
			"optionB": "25 per month",
			"optionC": "Unlimited if clean, unused and plastic",
			"optionD": "None. Plastic straws are not accepted",
			"answer": "None. Plastic straws are not accepted"
		}, {
			"type": "tf",
			"title": "Since plastic bags are not accepted for recycling in most curbside programs, plastic food bags must not be either.",
			"optionA": "True",
			"optionB": "False",
			"answer": "True"
		}, {
			"type": "multi",
			"title": "Which of the following statements are true?",
			"optionA": "Plastic takes up to 1,000 years to degrade in a landfill",
			"optionB": "Enough plastic is thrown away each year to circle Earth four times",
			"optionC": "Recycling plastic requires 88% less energy than making plastic from raw materials",
			"optionD": "All of the above",
			"answer": "All of the above"
		}, {
			"type": "multi",
			"title": "What would happen if you put a plastic lawn chair in the recycling bin?",
			"optionA": "The neighbors may look at you kind of funny. ",
			"optionB": "You'll have one less place to sit in the yard.",
			"optionC": "The recycle truck may not pick it up.",
			"optionD": "You may find a raccoon named Nyla lounging in it because she loves plastic so much she can't help herself. Plus, she's been on her feet all day and frankly is exhausted. She's just saying.  ",
			"answer": "The recycle truck may not pick it up."
		}
	]
	const lastQuestion = questions.length;
	let runningQuestion = 0;
	let score = 0;
	$("#start-quiz-btn").click(function () {
		displayQuestion();
	});

	$('#btn-submit').click(function (e) {
		e.preventDefault();
		submitAnswer();
	});

	/**
	 * Display the "quiz-page" html, show each question in order if there are ny left otherwise call the collectResultsAndDisplayHouse.
	 */
	function displayQuestion() {
		if (runningQuestion < lastQuestion) {
			const questionArray = questions[runningQuestion]
			$("#home-page").addClass("hidden");
			$("#quiz-page").removeClass("hidden");
			$("#start-again-btn-div").removeClass("hidden");
			$("#btn-submit").removeClass("hidden");
			// Inject template HTML into fieldset element
			$('#current-question').html(questionArray.title);
			$('#question-counter').html(`Question ${runningQuestion + 1} of ${lastQuestion}`);
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
			`)
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
			};
		}
	}

	/**
	 * When the submit button is clicked call the relavent functions to progress the quiz
	 */
	function submitAnswer() {
		// get a boolean to confirm the answer is checked or not
		let checked = false;
		checked = checkAnswerResult();
		// if current question counter is less than maxium index number(12), display next question
		// else display result
		if (runningQuestion < lastQuestion - 1) {
			// check the answer, if answer is valid display next question
			// else display the current question again
			if (checked) {
				runningQuestion += 1;
				displayQuestion();
			} else {
				displayQuestion();
			}
		} else {
			// check the answer, if answer is valid display the result
			// else display the current question again
			if(checked){
				displayResults();
			} else {
				displayQuestion();
			}
		}
	}
		/**
		 * Get the checked value from the form. Display an alert and return false if nothing is selected.
		 * If answer is correct count the score and return true because user select the correct answer.
		 * If answer is incorrect return true because have select an answer but the answer is incorrect.
		 */
		function checkAnswerResult() {
			const questionArray = questions[runningQuestion]
			if (!$("input:checked").val()) {
				// if answer is empty return false
				alert('Oops! Please pick an option and try again!');
				return false;
			} else if ($("input:checked").val() == questionArray.answer) {
				// if answer is correct add a score and return true
				score += 1;
				return true;
			}
			// if answer is checked but not correct return true
			return true;
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