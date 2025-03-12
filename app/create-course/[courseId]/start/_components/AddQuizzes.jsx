import React, { useState } from "react";

function AddQuizzes({ quizzes }) {
  const [currentQuiz, setCurrentQuiz] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  if (!quizzes?.length) {
    return <div>No quizzes available</div>;
  }

  const quiz = quizzes[currentQuiz];

  const handleAnswerSelect = (questionIndex, answer) => {
    setUserAnswers((prev) => ({
      ...prev,
      [`quiz${currentQuiz}_q${questionIndex}`]: answer,
    }));
  };

  const calculateResults = () => {
    let correct = 0;
    let total = quiz.questions.length;

    quiz.questions.forEach((question, index) => {
      if (
        userAnswers[`quiz${currentQuiz}_q${index}`] === question.correctAnswer
      ) {
        correct++;
      }
    });

    return { correct, total, percentage: Math.round((correct / total) * 100) };
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      {/* Quiz Header */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-800">{quiz.title}</h2>
          <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">
            Duration: {quiz.duration}
          </span>
        </div>
        <div className="flex gap-2">
          {quizzes.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentQuiz(index);
                setShowResults(false);
              }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all
                ${
                  currentQuiz === index
                    ? "bg-primary text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
            >
              Quiz {index + 1}
            </button>
          ))}
        </div>
      </div>

      {/* Questions List */}
      <div className="space-y-6">
        {quiz.questions.map((question, qIndex) => (
          <div
            key={qIndex}
            className="p-4 border rounded-lg hover:border-primary transition-colors"
          >
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              {qIndex + 1}. {question.question}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {question.options.map((option, oIndex) => {
                const questionKey = `quiz${currentQuiz}_q${qIndex}`;
                const isSelected = userAnswers[questionKey] === option;
                const isCorrect =
                  showResults && option === question.correctAnswer;
                const isWrong = showResults && isSelected && !isCorrect;

                return (
                  <div
                    key={oIndex}
                    className={`p-3 rounded-lg border cursor-pointer transition-all
                      ${isSelected ? "bg-blue-50 border-blue-300" : ""}
                      ${isCorrect ? "bg-green-50 border-green-300" : ""}
                      ${isWrong ? "bg-red-50 border-red-300" : ""}
                      hover:bg-gray-50 hover:border-gray-300`}
                  >
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name={`question-${qIndex}`}
                        value={option}
                        checked={isSelected}
                        onChange={() => handleAnswerSelect(qIndex, option)}
                        className="mr-3"
                        disabled={showResults}
                      />
                      <span
                        className={`
                        ${isCorrect ? "text-green-700" : ""}
                        ${isWrong ? "text-red-700" : ""}
                      `}
                      >
                        {option}
                      </span>
                    </label>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Results Section */}
      {showResults && (
        <div className="mt-6 p-4 bg-gray-50 rounded-lg border">
          <h3 className="text-xl font-bold mb-2">Quiz Results</h3>
          {(() => {
            const results = calculateResults();
            return (
              <div>
                <p className="text-lg">
                  Score: {results.correct} out of {results.total} (
                  {results.percentage}%)
                </p>
              </div>
            );
          })()}
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex justify-between mt-8">
        {!showResults ? (
          <button
            onClick={() => setShowResults(true)}
            className="px-6 py-2 rounded-lg font-medium bg-primary text-white hover:bg-primary/90 transition-all"
          >
            Submit Quiz
          </button>
        ) : (
          <button
            onClick={() => {
              setShowResults(false);
              setUserAnswers({});
            }}
            className="px-6 py-2 rounded-lg font-medium bg-blue-500 text-white hover:bg-blue-600 transition-all"
          >
            Retry Quiz
          </button>
        )}

        <div className="flex gap-2">
          <button
            onClick={() => setCurrentQuiz(Math.max(0, currentQuiz - 1))}
            disabled={currentQuiz === 0}
            className={`px-6 py-2 rounded-lg font-medium transition-all
              ${
                currentQuiz === 0
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                  : "bg-primary text-white hover:bg-primary/90"
              }`}
          >
            Previous Quiz
          </button>
          <button
            onClick={() =>
              setCurrentQuiz(Math.min(quizzes.length - 1, currentQuiz + 1))
            }
            disabled={currentQuiz === quizzes.length - 1}
            className={`px-6 py-2 rounded-lg font-medium transition-all
              ${
                currentQuiz === quizzes.length - 1
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                  : "bg-primary text-white hover:bg-primary/90"
              }`}
          >
            Next Quiz
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddQuizzes;
