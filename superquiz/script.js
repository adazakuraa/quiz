// グローバル変数の設定
let questions = []; //問題の情報を格納する配列
let usedQuestions = []; // 出題済みの問題を管理する配列
let currentQuestionIndex = 0; 
let selectedQuestionSet = [];
let selectedAnswer = null;
let lastQuestionAnswer = null;
let life = 3;
let seikai = 0;
const goal = 10;

// イベントリスナーの設定
document.getElementById('start-game').addEventListener('click', startGame);
document.getElementById('restart-game').addEventListener('click', startGame);
document.getElementById('file-input').addEventListener('change', handleFile);
document.getElementById('current-question-number').style.display = 'none';
document.getElementById('life-container').style.display = 'none';
document.getElementById('status-container').style.display = 'none';
document.getElementById('start-game').style.display = 'none';

// ゲームを開始する関数
function startGame() {
    if(questions.length!=0){
        document.getElementById('status-container').style.display = 'flex';
        document.getElementById('life-container').style.display = 'block';
        document.getElementById('start-game').style.display = 'none';
        document.getElementById('restart-game').style.display = 'none';
        document.getElementById('file-input').style.display = 'none';
        document.getElementById('quiz-container').style.display = 'block';
        document.getElementById('current-question-number').style.display = 'block';
        
        life = 3;
        seikai = 0;
        usedQuestions = [];
        document.getElementById('life').textContent = life;
        questions = shuffleArray(questions);
        currentQuestionIndex = 0;
        document.getElementById('result').style.display = 'none';
        
        nextQuestion();
    }
}

// 配列をシャッフルする関数
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// CSVデータを解析する関数
function parseCSV(data) {
    const lines = data.split('\n').filter(line => line.trim() !== '');
    return lines.map(line => {
        const [explanation, question, answer, genre, type, ...options] = line.split(',').map(item => item.trim());
        return {
            explanation: explanation,
            question: question,
            answer: answer,
            genre: genre,
            type: parseInt(type),
            options: options
        };
    }).filter(q => q.type === 1 || q.type === 2 || q.type === 3 || q.type === 4); // マルバツ、択一、直接回答のみフィルター
}

// ファイル読み込みを処理する関数
function handleFile(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
        const contents = e.target.result;
        questions = parseCSV(contents);
        questions = shuffleArray(questions);
        document.getElementById('file-input').style.display = 'none';
        document.getElementById('start-game').innerHTML="ゲームスタート";
        document.getElementById('start-game').style.display = 'block';
    };
    reader.readAsText(file, 'UTF-8');
}

// 次の問題を表示する関数
function nextQuestion() {
    let availableQuestions = questions.filter(q => !usedQuestions.includes(q));
    if (availableQuestions.length === 0) {
        alert("すべての問題が出題されました！");
        document.getElementById('restart-game').style.display = 'block';
        document.getElementById('submit-answer').style.display = 'none';
        return;
    }

    selectedQuestionSet = [
        availableQuestions[Math.floor(Math.random() * availableQuestions.length)],
        ...shuffleArray(availableQuestions).slice(0, 2)
    ];
    selectedQuestionSet = shuffleArray(selectedQuestionSet);

    // 50%の確率でジャンルを択一にする
    selectedQuestionSet = selectedQuestionSet.map(q => {
        if (q.type === 3 && Math.random() < 0.5) { // 出題形式が直接回答で50%の確率
            return {
                ...q,
                type: 2 // 出題形式を択一に変更
            };
        }
        return q;
    });

    const genres = selectedQuestionSet.map(q => q.genre + ' (' + getQuestionTypeName(q.type) + ')');
    const questionSelect = genres.map((genre, index) => 
        `<button onclick="selectQuestion(${index})">${genre}</button>`
    ).join('');

    // 現在の問題番号を更新
    document.getElementById('current-question-number').textContent = `${seikai}問正解`;
    document.getElementById('question-container').innerHTML = 'ジャンルを選んでください<br>' + questionSelect;
    document.getElementById('options-container').innerHTML = '';
    document.getElementById('submit-answer').style.display = 'none';
    document.getElementById('result').style.display = 'none';
}


// 選択された問題を表示する関数
function selectQuestion(index) {
    const selectedQuestion = selectedQuestionSet[index];
    showQuestion(selectedQuestion);
    usedQuestions.push(selectedQuestion); // 出題済みの問題をリストに追加
    currentQuestionIndex++;
}

// 問題を表示する関数
function showQuestion(question) {
    document.getElementById('question-container').innerHTML = question.question;
    MathJax.typesetPromise();
    selectedAnswer = null;

    // 直前の問題の答えを保存
    lastQuestionAnswer = question.answer;
    lastWuestionExpalanation = question.explanation;

    switch (question.type) {
        case 1:
            showTrueFalseOptions();
            break;
        case 2:
            showSingleChoiceOptions(shuffleArray([...question.options]));
            break;
        case 3:
            showInputOption();
            break;
        case 4:
            showInputOption();
            break;
    }

    document.getElementById('submit-answer').style.display = 'block';
    document.getElementById('submit-answer').onclick = () => checkAnswer(question);
}

// イベントリスナーでShiftキーを押したときに直前の問題の答えを表示する
document.addEventListener('keydown', (event) => {
    MathJax.typesetPromise();
    if (event.key === 'Shift') {
        alert(currentQuestionIndex+'問目の答え: ' + lastQuestionAnswer+ '\n\n'+lastWuestionExpalanation);
    }
});

// マルバツ問題の選択肢を表示する関数
function showTrueFalseOptions() {
    document.getElementById('options-container').innerHTML = `
        <button onclick="handleOptionClick(this, 'マル')">マル</button>
        <button onclick="handleOptionClick(this, 'バツ')">バツ</button>
    `;
}

// 択一問題の選択肢を表示する関数
function showSingleChoiceOptions(options) {
    const optionsHTML = options.map((option, index) => 
        `<button onclick="handleOptionClick(this, '${option.replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/"/g, '')}')">${option}</button>
`
    ).join('');
    document.getElementById('options-container').innerHTML = optionsHTML;
    MathJax.typesetPromise();
}


// 直接入力の問題を表示する関数
function showInputOption() {
    document.getElementById('options-container').innerHTML = '<input type="text" id="input-answer">';
}

// 選択肢がクリックされたときの処理を行う関数
function handleOptionClick(button, option) {
    document.querySelectorAll('#options-container button').forEach(btn => {
        btn.classList.remove('selected');
        btn.style.backgroundColor = ''; // 元の色に戻す
    });
    button.classList.add('selected');
    button.style.backgroundColor = '#4CAF50'; // 緑色に変更
    selectedAnswer = option;
}

// 音声要素を取得
const correctSound = document.getElementById('correct-sound');
const incorrectSound = document.getElementById('incorrect-sound');

// 回答をチェックする関数
function checkAnswer(question) {
    let isCorrect = false;

    if (question.type === 3 || question.type === 4) {
        selectedAnswer = document.getElementById('input-answer').value.trim();
        console.log(selectedAnswer);
    }

    // 部分一致を確認
    if (question.type === 3 || question.type === 4) {
        let a=question.answer;
        MathJax.typesetPromise();
        isCorrect = a.includes(selectedAnswer);
        console.log(a);
    } else {
        isCorrect = selectedAnswer === question.answer;
    }

    console.log(selectedAnswer);
    console.log(question.answer);

    if (isCorrect) {
        seikai++;
        showResult("正解！");
        correctSound.play(); // 正解の音を再生
        if (seikai == goal) {
            alert("ゲームクリア！！");
            document.getElementById('restart-game').style.display = 'block';
            document.getElementById('submit-answer').style.display = 'none';
            return;
        }
    } else {
        showResult("不正解！");
        incorrectSound.play(); // 不正解の音を再生
        life--;
        document.getElementById('life').textContent = life;

        if (life <= 0) {
            alert("ゲームオーバー！");
            document.getElementById('restart-game').style.display = 'block';
            document.getElementById('submit-answer').style.display = 'none';
            return;
        }
    }

    setTimeout(nextQuestion, 1000); // 1秒後に次の質問へ
}


// 質問タイプの名前を取得する関数
function getQuestionTypeName(type) {
    switch (type) {
        case 1: return "マルバツ";
        case 2: return "択一";
        case 3: return "直接回答";
        case 4: return "直接回答";
        default: return "不明";
    }
}

// 結果を表示する関数
function showResult(message) {
    const resultElement = document.getElementById('result');
    resultElement.textContent = message;
    resultElement.style.display = 'block';
}

