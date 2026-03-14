let userProgress = {
    points: 0,
    level: 1,
    streak: 0,
    lastStudyDate: null,
    todayCompleted: 0,
    todaySubjects: new Set(),
    completedLessons: new Set(),
    totalCompleted: 0,
    chineseCompleted: 0,
    mathCompleted: 0,
    englishCompleted: 0,
    unlockedAchievements: new Set()
};

let currentLesson = null;
let currentQuiz = null;
let quizAnswers = [];

function init() {
    loadProgress();
    setupNavigation();
    renderLessons();
    updateUI();
    renderDailyTasks();
    renderAchievements();
    checkDailyReset();
}

function loadProgress() {
    const saved = localStorage.getItem('userProgress');
    if (saved) {
        const parsed = JSON.parse(saved);
        userProgress = {
            ...userProgress,
            ...parsed,
            todaySubjects: new Set(parsed.todaySubjects || []),
            completedLessons: new Set(parsed.completedLessons || []),
            unlockedAchievements: new Set(parsed.unlockedAchievements || [])
        };
    }
}

function saveProgress() {
    const toSave = {
        ...userProgress,
        todaySubjects: Array.from(userProgress.todaySubjects),
        completedLessons: Array.from(userProgress.completedLessons),
        unlockedAchievements: Array.from(userProgress.unlockedAchievements)
    };
    localStorage.setItem('userProgress', JSON.stringify(toSave));
}

function checkDailyReset() {
    const today = new Date().toDateString();
    if (userProgress.lastStudyDate !== today) {
        userProgress.todayCompleted = 0;
        userProgress.todaySubjects = new Set();
        dailyTasks.forEach(task => task.completed = false);
        saveProgress();
    }
}

function setupNavigation() {
    const navBtns = document.querySelectorAll('.nav-btn');
    navBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const tab = btn.dataset.tab;
            switchTab(tab);
        });
    });
}

function switchTab(tabName) {
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    document.getElementById(tabName).classList.add('active');
    document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');
}

function renderLessons() {
    const subjects = ['chinese', 'math', 'english'];
    subjects.forEach(subject => {
        const container = document.getElementById(`${subject}Lessons`);
        const lessons = courseData[subject].lessons;
        
        container.innerHTML = lessons.map(lesson => {
            const isCompleted = userProgress.completedLessons.has(lesson.id);
            const isLocked = shouldLockLesson(lesson, subject);
            
            return `
                <div class="lesson-card ${isCompleted ? 'completed' : ''} ${isLocked ? 'locked' : ''}" 
                     data-lesson-id="${lesson.id}" 
                     data-subject="${subject}"
                     onclick="${isLocked ? '' : `openLesson('${lesson.id}', '${subject}')`}">
                    <div class="lesson-number">第${lesson.number}课</div>
                    <div class="lesson-title">${lesson.title}</div>
                    <div class="lesson-points">+${lesson.points}💎</div>
                </div>
            `;
        }).join('');
    });
}

function shouldLockLesson(lesson, subject) {
    const lessons = courseData[subject].lessons;
    const currentIndex = lessons.findIndex(l => l.id === lesson.id);
    
    if (currentIndex === 0) return false;
    
    const previousLesson = lessons[currentIndex - 1];
    return !userProgress.completedLessons.has(previousLesson.id);
}

function openLesson(lessonId, subject) {
    const lesson = courseData[subject].lessons.find(l => l.id === lessonId);
    if (!lesson) return;
    
    currentLesson = { ...lesson, subject };
    
    document.getElementById('lessonTitle').textContent = lesson.title;
    
    let content = lesson.content;
    if (lesson.quiz && lesson.quiz.length > 0) {
        content += `
            <div class="quiz-section">
                <h3>📝 知识检测</h3>
                <p>完成以下题目来巩固所学知识！</p>
                <button class="btn btn-primary" onclick="startQuiz('${lessonId}', '${subject}')">开始检测</button>
            </div>
        `;
    }
    
    document.getElementById('lessonContent').innerHTML = content;
    document.getElementById('lessonModal').classList.add('active');
}

function startQuiz(lessonId, subject) {
    const lesson = courseData[subject].lessons.find(l => l.id === lessonId);
    if (!lesson || !lesson.quiz) return;
    
    currentQuiz = { ...lesson, subject };
    quizAnswers = [];
    
    let quizHtml = `
        <h3>📝 知识检测</h3>
        <div class="quiz-container">
    `;
    
    lesson.quiz.forEach((question, index) => {
        quizHtml += `
            <div class="quiz-question">
                <p class="question-number">${index + 1}. ${question.question}</p>
                ${renderQuestionType(question, index)}
            </div>
        `;
    });
    
    quizHtml += `
            </div>
            <div class="quiz-actions">
                <button class="btn btn-secondary" onclick="cancelQuiz()">取消</button>
                <button class="btn btn-primary" onclick="submitQuiz()">提交答案</button>
            </div>
        `;
    
    document.getElementById('lessonContent').innerHTML = quizHtml;
}

function renderQuestionType(question, index) {
    switch (question.type) {
        case 'multiple-choice':
            return `
                <div class="multiple-choice">
                    ${question.options.map((option, i) => `
                        <div class="option">
                            <input type="radio" id="q${index}_${i}" name="q${index}" value="${option}">
                            <label for="q${index}_${i}">${option}</label>
                        </div>
                    `).join('')}
                </div>
            `;
        case 'true-false':
            return `
                <div class="true-false">
                    <div class="option">
                        <input type="radio" id="q${index}_true" name="q${index}" value="true">
                        <label for="q${index}_true">正确</label>
                    </div>
                    <div class="option">
                        <input type="radio" id="q${index}_false" name="q${index}" value="false">
                        <label for="q${index}_false">错误</label>
                    </div>
                </div>
            `;
        case 'fill-blank':
            return `
                <div class="fill-blank">
                    <input type="text" id="q${index}" placeholder="请输入答案">
                </div>
            `;
        default:
            return '';
    }
}

function cancelQuiz() {
    openLesson(currentQuiz.id, currentQuiz.subject);
}

function submitQuiz() {
    if (!currentQuiz || !currentQuiz.quiz) return;
    
    let score = 0;
    let total = currentQuiz.quiz.length;
    let feedbackHtml = `
        <h3>📝 检测结果</h3>
        <div class="quiz-result">
    `;
    
    currentQuiz.quiz.forEach((question, index) => {
        let userAnswer;
        switch (question.type) {
            case 'multiple-choice':
            case 'true-false':
                const radio = document.querySelector(`input[name="q${index}"]:checked`);
                userAnswer = radio ? radio.value : '';
                break;
            case 'fill-blank':
                userAnswer = document.getElementById(`q${index}`).value.trim();
                break;
        }
        
        let isCorrect = false;
        if (question.type === 'true-false') {
            isCorrect = userAnswer === question.answer.toString();
        } else {
            isCorrect = userAnswer === question.answer;
        }
        
        if (isCorrect) score++;
        
        feedbackHtml += `
            <div class="question-feedback ${isCorrect ? 'correct' : 'incorrect'}">
                <p class="question-text">${index + 1}. ${question.question}</p>
                <p class="user-answer">你的答案：${userAnswer}</p>
                <p class="correct-answer">正确答案：${question.answer}</p>
            </div>
        `;
    });
    
    feedbackHtml += `
            <p class="score">得分：<strong>${score}/${total}</strong></p>
            </div>
            <div class="quiz-actions">
                ${score === total ? `
                    <button class="btn btn-primary" onclick="completeLessonAfterQuiz()">完成课程 (+${currentQuiz.points}💎)</button>
                ` : `
                    <button class="btn btn-secondary" onclick="retryQuiz()">重新检测</button>
                    <button class="btn btn-primary" onclick="continueLearning()">继续学习</button>
                `}
            </div>
        `;
    
    document.getElementById('lessonContent').innerHTML = feedbackHtml;
}

function retryQuiz() {
    startQuiz(currentQuiz.id, currentQuiz.subject);
}

function continueLearning() {
    openLesson(currentQuiz.id, currentQuiz.subject);
}

function completeLessonAfterQuiz() {
    if (!currentQuiz) return;
    
    const { id, points, subject } = currentQuiz;
    
    if (userProgress.completedLessons.has(id)) {
        closeLessonModal();
        return;
    }
    
    userProgress.completedLessons.add(id);
    userProgress.points += points;
    userProgress.totalCompleted++;
    userProgress.todayCompleted++;
    userProgress.todaySubjects.add(subject);
    
    if (subject === 'chinese') userProgress.chineseCompleted++;
    if (subject === 'math') userProgress.mathCompleted++;
    if (subject === 'english') userProgress.englishCompleted++;
    
    updateLevel();
    updateStreak();
    checkAchievements();
    checkDailyTasks();
    
    saveProgress();
    updateUI();
    renderLessons();
    renderDailyTasks();
    renderAchievements();
    
    showReward(points);
    closeLessonModal();
}

function closeLessonModal() {
    document.getElementById('lessonModal').classList.remove('active');
    currentLesson = null;
    currentQuiz = null;
    quizAnswers = [];
}

function completeLesson() {
    if (!currentLesson) return;
    
    const { id, points, subject, quiz } = currentLesson;
    
    if (quiz && quiz.length > 0) {
        startQuiz(id, subject);
        return;
    }
    
    if (userProgress.completedLessons.has(id)) {
        closeLessonModal();
        return;
    }
    
    userProgress.completedLessons.add(id);
    userProgress.points += points;
    userProgress.totalCompleted++;
    userProgress.todayCompleted++;
    userProgress.todaySubjects.add(subject);
    
    if (subject === 'chinese') userProgress.chineseCompleted++;
    if (subject === 'math') userProgress.mathCompleted++;
    if (subject === 'english') userProgress.englishCompleted++;
    
    updateLevel();
    updateStreak();
    checkAchievements();
    checkDailyTasks();
    
    saveProgress();
    updateUI();
    renderLessons();
    renderDailyTasks();
    renderAchievements();
    
    showReward(points);
    closeLessonModal();
}

function updateLevel() {
    const newLevel = Math.floor(userProgress.points / 100) + 1;
    if (newLevel > userProgress.level) {
        showLevelUp(newLevel);
    }
    userProgress.level = newLevel;
}

function updateStreak() {
    const today = new Date().toDateString();
    const yesterday = new Date(Date.now() - 86400000).toDateString();
    
    if (userProgress.lastStudyDate === yesterday) {
        userProgress.streak++;
    } else if (userProgress.lastStudyDate !== today) {
        userProgress.streak = 1;
    }
    
    userProgress.lastStudyDate = today;
}

function checkAchievements() {
    const progress = {
        totalCompleted: userProgress.totalCompleted,
        chineseCompleted: userProgress.chineseCompleted,
        mathCompleted: userProgress.mathCompleted,
        englishCompleted: userProgress.englishCompleted,
        streak: userProgress.streak,
        points: userProgress.points,
        level: userProgress.level
    };
    
    achievements.forEach(achievement => {
        if (!userProgress.unlockedAchievements.has(achievement.id) && achievement.condition(progress)) {
            userProgress.unlockedAchievements.add(achievement.id);
            showAchievementUnlock(achievement);
        }
    });
}

function checkDailyTasks() {
    const progress = {
        todayCompleted: userProgress.todayCompleted,
        todaySubjects: userProgress.todaySubjects
    };
    
    dailyTasks.forEach(task => {
        if (!task.completed && task.check(progress)) {
            task.completed = true;
            userProgress.points += task.reward;
            showTaskComplete(task);
        }
    });
}

function updateUI() {
    document.getElementById('userPoints').textContent = userProgress.points;
    document.getElementById('userLevel').textContent = userProgress.level;
    document.getElementById('userStreak').textContent = userProgress.streak;
    
    document.getElementById('profilePoints').textContent = userProgress.points;
    document.getElementById('profileLevel').textContent = userProgress.level;
    document.getElementById('profileStreak').textContent = userProgress.streak;
    document.getElementById('profileLessons').textContent = userProgress.totalCompleted;
    
    const subjects = ['chinese', 'math', 'english'];
    subjects.forEach(subject => {
        const total = courseData[subject].lessons.length;
        const completed = userProgress[`${subject}Completed`];
        const percent = Math.round((completed / total) * 100);
        
        document.getElementById(`${subject}Progress`).style.width = `${percent}%`;
        document.getElementById(`${subject}Percent`).textContent = `${percent}%`;
        document.getElementById(`${subject}Completed`).textContent = completed;
        document.getElementById(`${subject}Total`).textContent = total;
    });
}

function renderDailyTasks() {
    const container = document.getElementById('dailyTasks');
    container.innerHTML = dailyTasks.map(task => `
        <div class="daily-task-item ${task.completed ? 'completed' : ''}">
            <span>${task.name}</span>
            <span class="task-reward">+${task.reward}💎</span>
        </div>
    `).join('');
}

function renderAchievements() {
    const container = document.getElementById('achievementsList');
    container.innerHTML = achievements.map(achievement => {
        const isUnlocked = userProgress.unlockedAchievements.has(achievement.id);
        return `
            <div class="achievement-card ${isUnlocked ? '' : 'locked'}">
                <div class="achievement-icon">${achievement.icon}</div>
                <div class="achievement-name">${achievement.name}</div>
                <div class="achievement-desc">${achievement.desc}</div>
            </div>
        `;
    }).join('');
}

function showReward(points) {
    document.getElementById('rewardTitle').textContent = '恭喜完成！';
    document.getElementById('rewardMessage').textContent = `你获得了 ${points} 积分！`;
    document.getElementById('rewardDetails').innerHTML = `
        <p>当前积分：${userProgress.points}💎</p>
        <p>当前等级：Lv.${userProgress.level}</p>
    `;
    document.getElementById('rewardModal').classList.add('active');
}

function showLevelUp(newLevel) {
    document.getElementById('rewardTitle').textContent = '🎉 升级啦！';
    document.getElementById('rewardMessage').textContent = `恭喜你升到了 ${newLevel} 级！`;
    document.getElementById('rewardDetails').innerHTML = `
        <p>继续保持，你是最棒的！</p>
    `;
    document.getElementById('rewardModal').classList.add('active');
}

function showAchievementUnlock(achievement) {
    document.getElementById('rewardTitle').textContent = '🏆 成就解锁！';
    document.getElementById('rewardMessage').textContent = `你获得了成就：${achievement.name}`;
    document.getElementById('rewardDetails').innerHTML = `
        <p>${achievement.icon} ${achievement.desc}</p>
    `;
    document.getElementById('rewardModal').classList.add('active');
}

function showTaskComplete(task) {
    document.getElementById('rewardTitle').textContent = '✅ 任务完成！';
    document.getElementById('rewardMessage').textContent = `你完成了今日任务：${task.name}`;
    document.getElementById('rewardDetails').innerHTML = `
        <p>获得奖励：${task.reward}💎</p>
    `;
    document.getElementById('rewardModal').classList.add('active');
}

function closeRewardModal() {
    document.getElementById('rewardModal').classList.remove('active');
}

function startRandomLesson() {
    const allLessons = [
        ...courseData.chinese.lessons.map(l => ({...l, subject: 'chinese'})),
        ...courseData.math.lessons.map(l => ({...l, subject: 'math'})),
        ...courseData.english.lessons.map(l => ({...l, subject: 'english'}))
    ];
    
    const incompleteLessons = allLessons.filter(l => !userProgress.completedLessons.has(l.id));
    
    if (incompleteLessons.length === 0) {
        alert('恭喜你！你已经完成了所有课程！');
        return;
    }
    
    const randomIndex = Math.floor(Math.random() * incompleteLessons.length);
    const lesson = incompleteLessons[randomIndex];
    
    switchTab(lesson.subject);
    setTimeout(() => {
        openLesson(lesson.id, lesson.subject);
    }, 300);
}

function showReviewMode() {
    const completedLessons = Array.from(userProgress.completedLessons);
    
    if (completedLessons.length === 0) {
        alert('你还没有完成任何课程，先去学习吧！');
        return;
    }
    
    const randomIndex = Math.floor(Math.random() * completedLessons.length);
    const lessonId = completedLessons[randomIndex];
    
    let subject, lesson;
    for (const s of ['chinese', 'math', 'english']) {
        lesson = courseData[s].lessons.find(l => l.id === lessonId);
        if (lesson) {
            subject = s;
            break;
        }
    }
    
    if (lesson && subject) {
        openLesson(lesson.id, subject);
    }
}

function showChallengeMode() {
    alert('挑战模式即将推出，敬请期待！');
}

function resetProgress() {
    if (confirm('确定要重置所有进度吗？此操作不可恢复！')) {
        localStorage.removeItem('userProgress');
        location.reload();
    }
}

document.addEventListener('DOMContentLoaded', init);