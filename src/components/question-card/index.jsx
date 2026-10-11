// import { CardWrapper, QuestionTitle, OptionLabel, OptionInput } from './styles';

// const QuestionCard = ({ questionData, selectedAnswer, onSelectAnswer, isSubmitted }) => {
//   return (
//     <CardWrapper>
//       <QuestionTitle>
//         Q{questionData.id}. {questionData.question}
//       </QuestionTitle>

//       <div className="options-list">
//         {questionData.options.map((option, index) => {
//           const isSelected = selectedAnswer === option;
//           const isCorrect = option === questionData.answer;
          
//           let statusClass = '';
//           if (isSubmitted) {
//             if (isCorrect) statusClass = 'correct';
//             else if (isSelected && !isCorrect) statusClass = 'incorrect';
//           }

//           return (
//             <OptionLabel 
//               key={index} 
//               className={statusClass}
//               selected={isSelected}       
//               isSubmitted={isSubmitted} 
//             >
//               <OptionInput
//                 type="radio"
//                 name={`question-${questionData.id}`}
//                 value={option}
//                 checked={isSelected}
//                 disabled={isSubmitted}
//                 onChange={() => !isSubmitted && onSelectAnswer(questionData.id, option)}
//               />
//               <span>{option}</span>
//               {isSubmitted && isCorrect && <span className="feedback-text">correct</span>}
//             </OptionLabel>
//           );
//         })}
//       </div>
//     </CardWrapper>
//   );
// };

// export default QuestionCard;



import { useTranslation } from 'react-i18next'; // [إضافة الترجمة]: استيراد خطاف الترجمة
import { CardWrapper, QuestionTitle, OptionLabel, OptionInput } from './styles';

const QuestionCard = ({ questionData, selectedAnswer, onSelectAnswer, isSubmitted }) => {
  const { t } = useTranslation(); // [إضافة الترجمة]: تفعيل دالة الترجمة

  return (
    <CardWrapper>
      <QuestionTitle>
        Q{questionData.id}. {questionData.question}
      </QuestionTitle>

      <div className="options-list">
        {questionData.options.map((option, index) => {
          const isSelected = selectedAnswer === option;
          const isCorrect = option === questionData.answer;
          
          let statusClass = '';
          if (isSubmitted) {
            if (isCorrect) statusClass = 'correct';
            else if (isSelected && !isCorrect) statusClass = 'incorrect';
          }

          return (
            <OptionLabel 
              key={index} 
              className={statusClass}
              selected={isSelected}       
              isSubmitted={isSubmitted} 
            >
              <OptionInput
                type="radio"
                name={`question-${questionData.id}`}
                value={option}
                checked={isSelected}
                disabled={isSubmitted}
                onChange={() => !isSubmitted && onSelectAnswer(questionData.id, option)}
              />
              <span>{option}</span>
              {isSubmitted && isCorrect && <span className="feedback-text">{t('quiz.correct', 'correct')}</span>}
            </OptionLabel>
          );
        })}
      </div>
    </CardWrapper>
  );
};

export default QuestionCard;