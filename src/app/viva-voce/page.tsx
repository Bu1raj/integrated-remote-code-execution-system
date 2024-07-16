'use client';
import React, { useState, useEffect } from 'react';
import quiz from './data';

interface Question {
  question: string;
  answers: string[];
  correctAnswer: string;
  correctAnswerIndex?: number;
}

interface Result {
  score: number;
  correctAnswers: number;
  wrongAnswers: number;
}

const QuizPage: React.FC = () => {
  const [activeQuestion, setActiveQuestion] = useState<number>(0);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<number | null>(null);
  const [selectedAnswers, setSelectedAnswers] = useState<(number | null)[]>(Array(4).fill(null));
  const [showResult, setShowResult] = useState<boolean>(false);
  const [result, setResult] = useState<Result>({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  });
  const [questions, setQuestions] = useState<Question[]>([]);
  const [time, setTime] = useState<number>(120); // 2 minutes in seconds

  const selectRandomQuestions = (): Question[] => {
    const shuffledQuestions = quiz.questions.sort(() => 0.5 - Math.random());
    let selectedQuestions = shuffledQuestions.slice(0, 4);
    return selectedQuestions.map((question) => ({
      ...question,
      correctAnswerIndex: question.answers.findIndex((ans) => ans === question.correctAnswer),
    }));
  };

  useEffect(() => {
    const randomQuestions = selectRandomQuestions();
    setQuestions(randomQuestions);
  }, []);

  useEffect(() => {
    if (time > 0) {
      const timer = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);

      return () => clearInterval(timer);
    } else {
      setShowResult(true);
    }
  }, [time]);

  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  if (questions.length === 0) {
    return <div>Loading...</div>;
  }

  const { question, answers, correctAnswerIndex } = questions[activeQuestion];

  const onAnswerSelected = (answer: string, idx: number): void => {
    const newSelectedAnswers = [...selectedAnswers];
    newSelectedAnswers[activeQuestion] = idx;
    setSelectedAnswers(newSelectedAnswers);
    setSelectedAnswerIndex(idx);
    const isCorrect = idx === correctAnswerIndex;
    setResult((prev) => ({
      ...prev,
      score: isCorrect ? prev.score + 1 : prev.score,
      correctAnswers: isCorrect ? prev.correctAnswers + 1 : prev.correctAnswers,
      wrongAnswers: !isCorrect ? prev.wrongAnswers + 1 : prev.wrongAnswers,
    }));
    setShowResult(false);
  };

  const nextQuestion = (): void => {
    if (activeQuestion < questions.length - 1) {
      setActiveQuestion(activeQuestion + 1);
      setSelectedAnswerIndex(selectedAnswers[activeQuestion + 1]);
    } else {
      setShowResult(true);
    }
  };

  const previousQuestion = (): void => {
    if (activeQuestion > 0) {
      setActiveQuestion(activeQuestion - 1);
      setSelectedAnswerIndex(selectedAnswers[activeQuestion - 1]);
    }
  };

  const restartQuiz = (): void => {
    setActiveQuestion(0);
    setShowResult(false);
    setResult({
      score: 0,
      correctAnswers: 0,
      wrongAnswers: 0,
    });
    const randomQuestions = selectRandomQuestions();
    setQuestions(randomQuestions);
    setSelectedAnswers(Array(4).fill(null));
    setTime(240); // Reset timer to 4 minutes
  };

  return (
    <div className='bg-blue-900 min-h-screen text-white'>
      <div className='container max-w-4xl mx-auto px-4 py-16'>
        {!showResult && (
          <>
            <h1 className='text-3xl font-bold'>Quiz Page</h1>
            <div className='bg-blue-900 rounded-md p-4'>
              <h2 className='text-xl mb-2'>
                Question: {activeQuestion + 1}
                <span>/{questions.length}</span>
              </h2>
              <div className='bg-blue-900 rounded-md border border-blue-800 p-4 mb-4'>
                <h3 className='text-2xl mb-4'>{question}</h3>
                {answers.map((answer, idx) => (
                  <div
                    key={idx}
                    onClick={() => onAnswerSelected(answer, idx)}
                    className={`py-2 px-4 mb-3 cursor-pointer border border-blue-400 rounded ${
                      selectedAnswerIndex === idx ? 'bg-yellow-300' : 'hover:bg-yellow-500'
                    }`}
                  >
                    {answer}
                  </div>
                ))}
              </div>
              <div className='flex justify-between'>
                <button
                  onClick={previousQuestion}
                  disabled={activeQuestion === 0}
                  className='btn bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md mt-4'
                >
                  Previous
                </button>
                <div className='flex items-center'>
                  <span className='text-xl font-bold'>{formatTime(time)}</span>
                </div>
                <button
                  onClick={nextQuestion}
                  disabled={selectedAnswerIndex === null}
                  className={`btn ${selectedAnswerIndex !== null ? 'bg-blue-600 hover:bg-yellow-600' : 'bg-blue-400 cursor-not-allowed'} text-white py-2 px-4 rounded-md mt-4`}
                >
                  {activeQuestion === questions.length - 1 ? 'Finish' : 'Next'}
                </button>
              </div>
            </div>
          </>
        )}
        {showResult && (
          <div className='bg-blue-900 rounded-md p-4 mt-4 flex justify-between'>
            {/* Right Container */}
            <div className='flex-1 items-center justify-center bg-blue-700 rounded-md border border-blue-800 p-9  mr-4'>
              <h3 className='text-2xl mb-4'>Overall {(result.score / questions.length) * 100}%</h3>
              <p>Total Questions: <span>{questions.length}</span></p>
              <p>Total Score: <span>{result.score}</span></p>
              
              <button onClick={restartQuiz} className='btn bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md mt-4'>
                Restart Quiz
              </button>
            </div>
            {/* Left Container */}
            <div className='flex-1 bg-blue-700 rounded-md border border-blue-800 p-4'>
              <h3 className='text-2xl mb-4'>Results</h3>
              {questions.map((q, index) => (
                <div key={index} className='flex items-center justify-between border-b border-blue-800 py-2'>
                  <div>
                    <p className='text-xl'>Question {index + 1}</p>
                    {selectedAnswers[index] !== null && (
                      selectedAnswers[index] === q.correctAnswerIndex ? (
                        <span className='text-green-500 ml-2'>&#10004;</span>
                      ) : (
                        <span className='text-red-500 ml-2'>&#10006;</span>
                      )
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizPage;
