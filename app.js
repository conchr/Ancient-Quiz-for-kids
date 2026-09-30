/* ============================================================
   ΤΟ ΠΑΙΧΝΙΔΙ ΤΟΥ ΑΡΧΑΙΟΛΟΓΟΥ — QUIZ SCRIPT
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {

    // --------------------------------------------------------
    // ΕΡΩΤΗΣΕΙΣ
    // --------------------------------------------------------
    const quizData = [
        {
            question: "Τι κάνει ένας Αρχαιολόγος;",
            icon: "fas fa-shovel",
            answers: [
                { text: "Σκάβει το χώμα για να βρει παλιά αντικείμενα.", isCorrect: true, info: "Ο αρχαιολόγος σκάβει προσεκτικά για να βρει και να μελετήσει αντικείμενα από το παρελθόν." },
                { text: "Χτίζει καινούρια σπίτια.", isCorrect: false, info: "Αυτό είναι δουλειά του οικοδόμου." },
                { text: "Φτιάχνει νόστιμα φαγητά.", isCorrect: false, info: "Αυτό είναι δουλειά του μάγειρα ή του σεφ." },
                { text: "Διδάσκει στο σχολείο.", isCorrect: false, info: "Αυτό είναι δουλειά του δασκάλου." }
            ]
        },
        {
            question: "Τι ονομάζουμε «Ιστορία»;",
            icon: "fas fa-clock",
            answers: [
                { text: "Όλα τα σημαντικά πράγματα που έγιναν στο παρελθόν.", isCorrect: true, info: "Η Ιστορία μας λέει τις αληθινές ιστορίες των ανθρώπων που έζησαν πριν από εμάς." },
                { text: "Τις ιστορίες που λέμε το βράδυ.", isCorrect: false, info: "Αυτά είναι παραμύθια ή προσωπικές ιστορίες." },
                { text: "Τα μαθήματα που κάνουμε τώρα.", isCorrect: false, info: "Αυτά είναι οι σημερινές μας ασχολίες." },
                { text: "Τον καιρό που θα έχει αύριο.", isCorrect: false, info: "Αυτό είναι η πρόγνωση του καιρού!" }
            ]
        },
        {
            question: "Ποια εργαλεία χρησιμοποιεί συχνά ένας Αρχαιολόγος;",
            icon: "fas fa-tools",
            answers: [
                { text: "Φτυάρι, πινέλο και σκαλιστήρι.", isCorrect: true, info: "Το φτυάρι σκάβει, το σκαλιστήρι αφαιρεί χώμα και το πινέλο καθαρίζει τα ευρήματα!" },
                { text: "Κατσαβίδι και κλειδί.", isCorrect: false, info: "Αυτά είναι εργαλεία για μηχανικούς." },
                { text: "Ψαλίδι και κόλλα.", isCorrect: false, info: "Αυτά είναι εργαλεία για χειροτεχνίες." },
                { text: "Μπάλες και παιχνίδια.", isCorrect: false, info: "Αυτά είναι για το διάλειμμα!" }
            ]
        },
        {
            question: "Τι μαθαίνουμε από την Ιστορία;",
            icon: "fas fa-lightbulb",
            answers: [
                { text: "Πώς ζούσαν οι άνθρωποι πριν από εμάς.", isCorrect: true, info: "Μαθαίνουμε για τα σπίτια τους, τα φαγητά τους, τα ρούχα τους και τις ιδέες τους!" },
                { text: "Πώς να πετάμε στον ουρανό.", isCorrect: false, info: "Αυτό το μαθαίνουμε από την επιστήμη." },
                { text: "Πώς να φτιάχνουμε ρομπότ.", isCorrect: false, info: "Αυτό είναι η Ρομποτική." },
                { text: "Τις γλώσσες των ζώων.", isCorrect: false, info: "Κανείς δεν ξέρει όλες τις γλώσσες των ζώων!" }
            ]
        },
        {
            question: "Πώς ονομάζονται τα πολύ παλιά αντικείμενα που βρίσκει ο αρχαιολόγος;",
            icon: "fas fa-gem",
            answers: [
                { text: "Αρχαία ευρήματα ή αντικείμενα.", isCorrect: true, info: "Τα αρχαία ευρήματα είναι οι «θησαυροί» της ιστορίας!" },
                { text: "Καινούρια παιχνίδια.", isCorrect: false, info: "Τα καινούρια παιχνίδια είναι φτιαγμένα τώρα." },
                { text: "Πέτρες του δρόμου.", isCorrect: false, info: "Μόνο αν είναι ξεχωριστές πέτρες από παλιά κτίρια." },
                { text: "Χαμένα κέρματα.", isCorrect: false, info: "Μπορεί να βρει και κέρματα, αλλά τα ονομάζουμε ευρήματα." }
            ]
        },
        {
            question: "Γιατί είναι σημαντική η δουλειά του Αρχαιολόγου;",
            icon: "fas fa-heart",
            answers: [
                { text: "Μας βοηθά να καταλάβουμε το παρελθόν μας.", isCorrect: true, info: "Μόνο αν καταλάβουμε το παρελθόν, μπορούμε να ζήσουμε καλύτερα στο παρόν και το μέλλον." },
                { text: "Γιατί φοράει ωραία ρούχα.", isCorrect: false, info: "Τα ρούχα δεν έχουν σημασία στη δουλειά του." },
                { text: "Γιατί βρίσκει χρυσό.", isCorrect: false, info: "Δεν βρίσκει πάντα χρυσό, αλλά βρίσκει κάτι πιο σημαντικό: Γνώση!" },
                { text: "Γιατί του αρέσει να σκάβει.", isCorrect: false, info: "Αν και του αρέσει, ο σκοπός είναι η γνώση." }
            ]
        },
        {
            question: "Τι σημαίνει «ανασκαφή»;",
            icon: "fas fa-map-marked-alt",
            answers: [
                { text: "Το σκάψιμο σε ένα μέρος για να βρεθούν παλιά πράγματα.", isCorrect: true, info: "Η ανασκαφή είναι η διαδικασία κατά την οποία οι αρχαιολόγοι φέρνουν στο φως τα αρχαία." },
                { text: "Το να κολυμπάμε στη θάλασσα.", isCorrect: false, info: "Αυτό είναι κολύμπι!" },
                { text: "Το να φτιάχνουμε έναν πύργο.", isCorrect: false, info: "Αυτό είναι κατασκευή." },
                { text: "Το να τρώμε το φαγητό μας.", isCorrect: false, info: "Αυτό είναι φαγητό!" }
            ]
        },
        {
            question: "Ποιο είναι ένα πολύ παλιό πράγμα που μπορεί να βρει ένας αρχαιολόγος;",
            icon: "fas fa-landmark",
            answers: [
                { text: "Ένα πήλινο αγγείο.", isCorrect: true, info: "Τα αγγεία είναι πολύ συχνά ευρήματα και μας δείχνουν πολλά για την καθημερινή ζωή." },
                { text: "Ένα κινητό τηλέφωνο.", isCorrect: false, info: "Τα κινητά είναι πολύ καινούρια." },
                { text: "Μια πλαστική φιάλη.", isCorrect: false, info: "Οι πλαστικές φιάλες είναι φτιαγμένες πρόσφατα." },
                { text: "Ένα καινούριο ποδήλατο.", isCorrect: false, info: "Αυτό δεν είναι αρχαίο!" }
            ]
        }
    ];

    // --------------------------------------------------------
    // STATE
    // --------------------------------------------------------
    let currentQuestionIndex = 0;
    let score = 0;
    let questions = []; // shuffled copy

    // --------------------------------------------------------
    // DOM
    // --------------------------------------------------------
    const introScreen      = document.getElementById('intro-screen');
    const quizScreen       = document.getElementById('quiz-screen');
    const resultsScreen    = document.getElementById('results-screen');
    const questionBox      = document.getElementById('question-box');
    const answersContainer = document.getElementById('answers-container');
    const nextButton       = document.getElementById('next-button');
    const feedbackMessage  = document.getElementById('feedback-message');
    const scoreDisplay     = document.getElementById('score');
    const totalQuestionsDisplay = document.getElementById('total-questions');
    const currentQuestionNumberDisplay = document.getElementById('current-question-number');
    const finalScoreDisplay = document.getElementById('final-score');
    const resultMessage    = document.getElementById('result-message');

    // --------------------------------------------------------
    // SHUFFLE (Fisher-Yates)
    // --------------------------------------------------------
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    // --------------------------------------------------------
    // START
    // --------------------------------------------------------
    window.startGame = function () {
        // Deep copy + shuffle
        questions = quizData.map(q => ({
            question: q.question,
            icon: q.icon,
            answers: q.answers.map(a => ({ ...a }))
        }));

        shuffleArray(questions);
        questions.forEach(q => shuffleArray(q.answers));

        currentQuestionIndex = 0;
        score = 0;

        scoreDisplay.textContent = score;
        totalQuestionsDisplay.textContent = questions.length;

        // Reset final score color classes
        finalScoreDisplay.classList.remove('text-gold', 'text-green', 'text-red');

        introScreen.classList.add('hidden');
        quizScreen.classList.remove('hidden');
        resultsScreen.classList.add('hidden');
        nextButton.classList.add('hidden');
        feedbackMessage.classList.add('hidden');
        feedbackMessage.classList.remove('feedback-correct', 'feedback-wrong');

        showQuestion();
    };

    // --------------------------------------------------------
    // SHOW QUESTION
    // --------------------------------------------------------
    function showQuestion() {
        if (currentQuestionIndex >= questions.length) {
            showResults();
            return;
        }

        currentQuestionNumberDisplay.textContent = currentQuestionIndex + 1;

        const q = questions[currentQuestionIndex];

        questionBox.innerHTML = `<i class="${q.icon}"></i> ${q.question}`;

        answersContainer.innerHTML = '';
        nextButton.classList.add('hidden');
        feedbackMessage.classList.add('hidden');
        feedbackMessage.classList.remove('feedback-correct', 'feedback-wrong');

        q.answers.forEach((answer, index) => {
            const btn = document.createElement('button');
            btn.type = 'button';
            btn.className = 'answer-button';
            btn.textContent = answer.text;
            btn.setAttribute('data-index', index);
            btn.addEventListener('click', () => selectAnswer(btn, answer));
            answersContainer.appendChild(btn);
        });
    }

    // --------------------------------------------------------
    // SELECT ANSWER
    // --------------------------------------------------------
    function selectAnswer(selectedButton, answer) {
        // Disable all buttons
        Array.from(answersContainer.children).forEach(btn => btn.classList.add('disabled'));

        const isCorrect = answer.isCorrect;

        if (isCorrect) {
            score++;
            scoreDisplay.textContent = score;

            // Bounce animation on score
            scoreDisplay.classList.add('bounce');
            setTimeout(() => scoreDisplay.classList.remove('bounce'), 500);

            // Highlight correct button
            selectedButton.classList.add('correct');

            // Feedback
            feedbackMessage.classList.remove('hidden');
            feedbackMessage.classList.add('feedback-correct');
            feedbackMessage.innerHTML = `
                <span class="feedback-icon">🎉</span>
                Μπράβο! Σωστή απάντηση!
                <span class="feedback-sub">${answer.info}</span>
            `;
        } else {
            // Wrong
            selectedButton.classList.add('incorrect');

            // Highlight correct answer
            const correctIndex = questions[currentQuestionIndex].answers.findIndex(a => a.isCorrect);
            const correctButton = answersContainer.children[correctIndex];
            if (correctButton) {
                setTimeout(() => correctButton.classList.add('correct'), 400);
            }

            // Feedback
            feedbackMessage.classList.remove('hidden');
            feedbackMessage.classList.add('feedback-wrong');
            feedbackMessage.innerHTML = `
                <span class="feedback-icon">😢</span>
                Λάθος! Μην ανησυχείς!
                <span class="feedback-sub">Η σωστή απάντηση ήταν: ${answer.info}</span>
            `;
        }

        nextButton.classList.remove('hidden');
    }

    // --------------------------------------------------------
    // NEXT QUESTION
    // --------------------------------------------------------
    window.nextQuestion = function () {
        currentQuestionIndex++;
        showQuestion();
    };

    // --------------------------------------------------------
    // PREVIOUS QUESTION
    // --------------------------------------------------------
    function previousQuestion() {
        if (currentQuestionIndex > 0) {
            currentQuestionIndex--;
            showQuestion();
        }
    }

    // --------------------------------------------------------
    // SHOW RESULTS
    // --------------------------------------------------------
    function showResults() {
        quizScreen.classList.add('hidden');
        resultsScreen.classList.remove('hidden');
        feedbackMessage.classList.add('hidden');

        finalScoreDisplay.textContent = `${score} / ${questions.length}`;

        // Remove previous color classes
        finalScoreDisplay.classList.remove('text-gold', 'text-green', 'text-red');

        if (score === questions.length) {
            finalScoreDisplay.classList.add('text-gold');
            resultMessage.innerHTML = `
                <p>Είσαι ένας <strong>σούπερ Αρχαιολόγος</strong>! Γνωρίζεις τα πάντα για την Ιστορία!</p>
                <i class="fas fa-crown"></i>
            `;
        } else if (score >= questions.length / 2) {
            finalScoreDisplay.classList.add('text-green');
            resultMessage.innerHTML = `
                <p>Πολύ καλά! Έμαθες πολλά και είσαι έτοιμος για ανασκαφές!</p>
                <i class="fas fa-shovel"></i>
            `;
        } else {
            finalScoreDisplay.classList.add('text-red');
            resultMessage.innerHTML = `
                <p>Καλή προσπάθεια! Με λίγη εξάσκηση ακόμα θα γίνεις ο καλύτερος!</p>
                <i class="fas fa-book"></i>
            `;
        }
    }

    // --------------------------------------------------------
    // KEYBOARD NAVIGATION
    // --------------------------------------------------------
    document.addEventListener('keydown', function (event) {
        if (event.key === 'ArrowLeft') {
            if (!introScreen.classList.contains('hidden')) {
                // Intro → τίποτα
            } else if (!quizScreen.classList.contains('hidden')) {
                previousQuestion();
            } else if (!resultsScreen.classList.contains('hidden')) {
                window.startGame();
            }
        } else if (event.key === 'ArrowRight') {
            if (!introScreen.classList.contains('hidden')) {
                window.startGame();
            } else if (!quizScreen.classList.contains('hidden')) {
                if (nextButton.classList.contains('hidden')) {
                    // Δεν έχει απαντηθεί η ερώτηση
                    feedbackMessage.classList.remove('hidden');
                    feedbackMessage.classList.remove('feedback-correct');
                    feedbackMessage.classList.add('feedback-wrong');
                    feedbackMessage.innerHTML = `<span class="feedback-icon">⚠️</span> Παρακαλώ απάντησε πρώτα στην ερώτηση!`;
                    setTimeout(() => {
                        if (nextButton.classList.contains('hidden')) {
                            feedbackMessage.classList.add('hidden');
                        }
                    }, 2000);
                } else {
                    window.nextQuestion();
                }
            } else if (!resultsScreen.classList.contains('hidden')) {
                window.startGame();
            }
        }
    });

    // --------------------------------------------------------
    // INITIALIZE
    // --------------------------------------------------------
    introScreen.classList.remove('hidden');
});