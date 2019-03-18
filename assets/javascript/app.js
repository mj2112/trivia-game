$(document).ready(function() {
    //  declare global variables

    var timeLeft;
    var correctAnswers;
    var wrongAnswers;
    var unanswered;
    var randomQuizArray;
    var quizIndex;
    var sec;
    //assign body element to a variable that will be used to update image with each question
    var setBackground = document.getElementById("body");
    // Initial background image
    setBackground.style.backgroundImage = "url(assets/images/start-screen-2.gif)";
    // array of quiz qestions, answers, and related images stored as objects
    var quiz = [
        q1 = {
            q: "At any time we may describe the position of an inferior planet by the angle it makes with the sun as seen from the earth. This angle is called the:",
            a1: "a) ecliptic",
            a2: "b) epicycle",
            a3: "c) elongation",
            a4: "d) proxima",
            a: "c) elongation",
            image: "assets/images/quest1.jpeg"
        },
        q2 = {
            q: "Which of the following planets has the greatest eccentricity?",
            a1: "a) Pluto",
            a2: "b) Jupiter",
            a3: "c) Mars",
            a4: "d) Mercury",
            a: "a) Pluto",
            image: "assets/images/quest2.jpeg"
        },
        q3 = {
            q: "The largest moon in our solar system has an atmosphere that is denser than the atmosphere of Mars. The name of this moon is:",
            a1: "a) Titan",
            a2: "b) Ganymede",
            a3: "c) Triton",
            a4: "d) Io",
            a: "a) Titan",
            image: "assets/images/quest3-1.jpeg"
        },
        q4 = {
            q: "On which of the following planets would the sun rise in the west?",
            a1: "a) Saturn",
            a2: "b) Pluto",
            a3: "c) Mercury",
            a4: "d) Venus",
            a: "d) Venus",
            image: "assets/images/quest4.jpeg"
        },
        q5 = {
            q: "The period from one full moon to the next is:",
            a1: "a) 30.3 days",
            a2: "b) 30 days",
            a3: "c) 29.5 days",
            a4: "d) 28 days",
            a: "c) 29.5 days",
            image: "assets/images/quest5-1.jpeg"
        },
        q6 = {
            q: "In the lowest level of the photosphere of the Sun, the temperature is:",
            a1: "a) 1,000 degrees Kelvin",
            a2: "b) 6,000 degrees Kelvin",
            a3: "c) 10,000 degrees Kelvin",
            a4: "d) 13,000 degrees Kelvin",
            a: "b) 6,000 degrees Kelvin",
            image: "assets/images/quest6.jpeg"
        },
        q7 = {
            q: "In the Milky Way there are approximately",
            a1: "a) 2 million stars",
            a2: "b) 100 million stars",
            a3: "c) 400 million stars",
            a4: "d) 200 billion stars",
            a: "d) 200 billion stars",
            image: "assets/images/quest7.jpeg"
        },
        q8 = {
            q: "Whose paradox asks why the sky is not ablaze with starlight if the universe is infinite in extent and uniformly filled with stars?",
            a1: "a) Olber's",
            a2: "b) Greigheim's",
            a3: "c) Schuller's",
            a4: "d) Miller's",
            a: "a) Olber's",
            image: "assets/images/quest8.GIF"
        },
        q9 = {
            q: "Most stars are cooler than the sun. These stars, the planets, interstellar clouds and star-forming regions emit most of their radiant energy in the:",
            a1: "a) visible",
            a2: "b) x-ray region",
            a3: "c) ultraviolet",
            a4: "d) infrared",
            a: "d) infrared",
            image: "assets/images/quest9-3.jpeg"
        },
        q10 = {
            q: "Astronomers use cepheids principally as measures of what? Is it:",
            a1: "a) size",
            a2: "b) speed",
            a3: "c) chemical composition",
            a4: "d) distance",
            a: "d) distance",
            image: "assets/images/quest10.png"
        },
        q11 = {
            q: "Where are most asteroids located? Is it between:",
            a1: "a) Jupiter and Saturn",
            a2: "b) Mars and Venus",
            a3: "c) Earth and Mars",
            a4: "d) Mars and Jupiter",
            a: "d) Mars and Jupiter",
            image: "assets/images/quest11.jpeg"
        },
        q12 = {
            q: "Andromeda, the nearest galaxy which is similar to the Milky Way, is how far from the Earth? Is it:",
            a1: "a) 200,000 light years",
            a2: "b) 2,000,000 light years",
            a3: "c) 20,000,000 light years",
            a4: "d) 200,000,000 light years",
            a: "b) 2,000,000 light years",
            image: "assets/images/quest12.jpeg"
        },
        q13 = {
            q: "The Magellanic cloud is a:",
            a1: "a) nebula",
            a2: "b) galaxy",
            a3: "c) super nova remnant",
            a4: "d) star cluster",
            a: "b) galaxy",
            image: "assets/images/quest13.jpeg"
        },
        q14 = {
            q: "With which one of the following astronomical objects are meteor showers associated?",
            a1: "a) Asteroids",
            a2: "b) Comets",
            a3: "c) Planets",
            a4: "d) None of the above",
            a: "b) Comets",
            image: "assets/images/quest14.jpeg"
        },
        q15 = {
            q: "A device which would not work on the Moon is:",
            a1: "a) thermometer",
            a2: "b) siphon",
            a3: "c) spectrometer",
            a4: "d) spring balance",
            a: "b) siphon",
            image: "assets/images/quest15.jpeg"
        },
        q16 = {
            q: "What is the motion called when a planet seems to be moving westward in the sky?",
            a1: "a) Retrograde",
            a2: "b) Parallax",
            a3: "c) Opcentric",
            a4: "d) Antegrade",
            a: "a) Retrograde",
            image: "assets/images/quest16.jpeg"
        },
        q17 = {
            q: "95% of the Martian atmosphere is composed of what substance?",
            a1: "a) Carbon dioxide",
            a2: "b) Nitrogen",
            a3: "c) Argon",
            a4: "d) Carbon monoxide",
            a: "a) Carbon dioxide",
            image: "assets/images/quest17-2.jpeg"
        },
        q18 = {
            q: "Which one of the following planets has no moons?",
            a1: "a) Mars",
            a2: "b) Neptune",
            a3: "c) Venus",
            a4: "d) Jupiter",
            a: "c) Venus",
            image: "assets/images/quest18.jpeg"
        },
        q19 = {
            q: "A black hole with the mass of the earth would be the size of:",
            a1: "a) the Sun",
            a2: "b) the Moon",
            a3: "c) a bowling ball",
            a4: "d) a marble",
            a: "d) a marble",
            image: "assets/images/quest19.jpeg"
        },
        q20 = {
            q: "The ring nebula is an example of a planetary nebula. It is:",
            a1: "a) a ring of planets circling a star",
            a2: "b) an expanding ring of gas released from a dying star",
            a3: "c) a contracting ring of gas and dust falling circling into a massive object",
            a4: "d) a ring of stars in a circular orbit",
            a: "b) an expanding ring of gas released from a dying star",
            image: "assets/images/quest20.jpeg"
        },
        q21 = {
            q: "Which planet seems to be turned on its side with an axis tilt of 98 degrees?",
            a1: "a) Uranus",
            a2: "b) Pluto",
            a3: "c) Neptune",
            a4: "d) Saturn",
            a: "a) Uranus",
            image: "assets/images/ques21.jpg"
        },
        q22 = {
            q: "The angle that the full moon takes up in the night sky is ~ equal to which of the following values?",
            a1: "a) 1/8 degree",
            a2: "b) 1/2 degrees",
            a3: "c) 1 degree",
            a4: "d) 2 degrees",
            a: "b) 1/2 degrees",
            image: "assets/images/quest22.png"
        }
    ];


    //Initialize variables at the start of each game and randomize order of quiz array
    function initializeGame() {
        setBackground.style.backgroundImage = "url(assets/images/start-screen-2.gif)";
        $("#qAndA").text = "";
        correctAnswers = 0;
        wrongAnswers = 0;
        unanswered = 0;
        randomQuizArray;
        quizIndex = 0;
        sec = 19;
        // randomize order of quiz at start of each game
        // this iterates randomly through array, adds to new array, and splices it out for next iteration
        //quiz is reassigned the new random order 
        randomQuizArray = [];
        while (quiz.length !== 0) {
            var randomIndex = Math.floor(Math.random() * quiz.length);
            randomQuizArray.push(quiz[randomIndex]);
            quiz.splice(randomIndex, 1);
        }
        quiz = randomQuizArray;
    }

    // gameTimer checks if quiz completed and counts down timeLeft for user guess
    function gameTimer() {
        if (quizIndex === quiz.length) {
            $("#timeRemaining").empty();
            clearInterval(timeLeft);
            displayResults();
            return;
        }
        timeLeft = setInterval(function() {
            //Display time remining for each question
            $("#timeRemaining").html("<h3>Time Remaining: " + sec + " sec</h3>");
            sec--;
            // if time runs out reset timer and show answer
            if (sec === -1) {
                clearInterval(timeLeft);
                displayAnswer();
            }
        }, 1000);
    };

    // Display results at the end of the quiz. Show start button again
    function displayResults() {

        $("#timeRemaining").html("<button type='button' class='btn-lg btn-primary p-3' id='start'>Start Quiz!</button>");
        $("#qAndA").html("<p>Game Over. Press Start to Play again.</p>");
        $("#a1").html("<p>You answered: " + correctAnswers + " (" + ((correctAnswers / quiz.length) * 100).toFixed() + "%) correctly!</p>");
        $("#a2").html("<p>You answered: " + wrongAnswers + " incorrectly.</p>");
        $("#a3").html("<p>You had " + unanswered + " unanswered questions (Time ran out.)</p>");
        $("#a4").empty();

    };

    // Display questions and assign buttons to each guess
    function displayQuestion() {
        $("#timeRemaining").html("<h3>Time Remaining: 20 sec</h3>");
        setBackground.style.backgroundImage = "url(" + quiz[quizIndex].image + ")";
        $("#qAndA").html("<p>" + quiz[quizIndex].q + "</p>");
        console.log(quiz[quizIndex].q);
        $("#a1").html("<button>" + quiz[quizIndex].a1 + "</button>");
        $("#a2").html("<button>" + quiz[quizIndex].a2 + "</button>");
        $("#a3").html("<button>" + quiz[quizIndex].a3 + "</button>");
        $("#a4").html("<button>" + quiz[quizIndex].a4 + "</button>");
    };

    // Game logic for if guess correct, incorrect, or time runs out
    function displayAnswer() {
        //time runs out
        if (sec === -1) {
            $("#timeRemaining").text = "";
            $("#qAndA").html("<p>Times up! The answer is: " + quiz[quizIndex].a + "</p>");
            $("#a1").empty();
            $("#a2").empty();
            $("#a3").empty();
            $("#a4").empty();
            unanswered++;
            //correct answer
        } else if ($(this).text() === quiz[quizIndex].a) {
            $("#timeRemaining").text = "";
            $("#qAndA").html("<p>Correct! The answer is: " + quiz[quizIndex].a + "</p>");
            $("#a1").empty();
            $("#a2").empty();
            $("#a3").empty();
            $("#a4").empty();
            correctAnswers++;
            //incorrect answer
        } else if ($(this).text() !== quiz[quizIndex].a) {
            $("#timeRemaining").text = "";
            $("#qAndA").html("<p>Sorry! The correct answer is: " + quiz[quizIndex].a + "</p>");
            $("#a1").empty();
            $("#a2").empty();
            $("#a3").empty();
            $("#a4").empty();
            wrongAnswers++;
        }

        // move to next index in quiz array and after 3 sec pause, move display next question
        quizIndex++
        sec = 19;
        clearInterval(timeLeft);
        setTimeout(displayQuestion, 3000);
        setTimeout(gameTimer, 3000);
    }

    // Starts first game and susequent games
    $("#timeRemaining").on('click', "button", function() {

        initializeGame();
        //randomizeArray();
        gameTimer();
        displayQuestion();


    });
    // captures input of which button (guess) user selects
    $("#a1").on("click", displayAnswer);
    $("#a2").on("click", displayAnswer);
    $("#a3").on("click", displayAnswer);
    $("#a4").on("click", displayAnswer);

});