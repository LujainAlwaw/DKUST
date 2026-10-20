

import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { useTranslation } from 'react-i18next';
import QuestionCard from '../../components/question-card';
import { questionsData } from '../../data/questionsArray'; 
import { 
  QuizContainer, 
  HeroSection, 
  MainTitle, 
  QuestionsWrapper, 
  ResultBox, 
  ActionButtonsContainer, 
  SubmitButton 
} from './styles';

const QuizPage = () => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState({});

  const currentLang = i18n.language && i18n.language.startsWith('ar') ? 'ar' : 'en';
  const questionsArray = questionsData[currentLang] || questionsData.en;

  const totalQuestions = questionsArray.length;

  const handleSubmit = () => {
    const answeredCount = Object.keys(answers).length;
    if (answeredCount < totalQuestions) {
      alert(t('quiz.alertUnanswered', 'Please answer all questions before submitting.'));
      return;
    }

    let currentScore = 0;
    questionsArray.forEach((q) => {
      if (answers[q.id] === q.answer) {
        currentScore += 1;
      }
    });
    setScore(currentScore);
    setIsSubmitted(true);
  };

  const handleSelectAnswer = (questionId, selectedOption) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: selectedOption,
    }));
  };

  return (
    <QuizContainer>
      <HeroSection isSubmitted={isSubmitted} score={score} total={totalQuestions}>
        <h2>{t('quiz.heroTitle', 'Test Your Knowledge')}</h2>
        <p>{t('quiz.heroDesc', 'Answer the questions below and click Submit to check your score.')}</p>
        
        <div className="badge">
          {!isSubmitted 
            ? `${totalQuestions} ${t('quiz.questionsCount', 'Questions')}` 
            : `${t('quiz.scoreText', 'Score')}: ${score}/${totalQuestions}`}
        </div>
      </HeroSection>

      <MainTitle>{t('quiz.mainTitle', 'Choose the Correct Answer')}</MainTitle>

      <QuestionsWrapper>
        {questionsArray.map((q) => (
          <QuestionCard 
            key={q.id} 
            questionData={q} 
            isSubmitted={isSubmitted} 
            selectedAnswer={answers[q.id]}
            onSelectAnswer={handleSelectAnswer}
          />
        ))}

        {!isSubmitted && (
          <SubmitButton onClick={handleSubmit}>
            {t('quiz.submitBtn', 'SUBMIT QUIZ')}
          </SubmitButton>
        )}
      </QuestionsWrapper>

      {isSubmitted && (
        <>
          <ResultBox score={score} total={totalQuestions}>
            <h3>
              {score === totalQuestions 
                ? t('quiz.perfectScore', 'Perfect Score!') 
                : score > 0 
                ? t('quiz.goodEffort', 'Good Effort!') 
                : t('quiz.keepPracticing', 'Keep Practicing!')}
            </h3>
            <p>
              {t('quiz.resultMessage', 'You answered {{score}} out of {{total}} questions correctly.', { score, total: totalQuestions })}
            </p>
          </ResultBox>

          <ActionButtonsContainer>
            <button className="try-again-btn" onClick={() => { setIsSubmitted(false); setAnswers({}); }}>
              {t('quiz.tryAgainBtn', 'TRY AGAIN')}
            </button>
            <button className="back-btn" onClick={() => navigate('/')}>
              {t('quiz.backToHome', 'Back to Home')}
            </button>
          </ActionButtonsContainer>
        </>
      )}
    </QuizContainer>
  );
};

export default QuizPage;