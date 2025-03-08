import React, { useState } from 'react';
import {
  Camera,
  Mic,
  Shield,
  Clock,
  AlertCircle,
  CheckCircle,
  ChevronRight,
  Eye,
  FileCheck,
  Lock,
  X,
  Award,
  BarChart,
  CheckCircle2,
  XCircle
} from 'lucide-react';

function App() {
  const [examStarted, setExamStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: number }>({});
  
  const mockQuestions = [
    {
      id: 1,
      question: "What is the primary purpose of React's virtual DOM?",
      options: [
        "To directly manipulate the browser's DOM",
        "To create a lightweight copy of the actual DOM for performance optimization",
        "To store component state",
        "To handle routing in React applications"
      ],
      correctAnswer: 1
    },
    {
      id: 2,
      question: "Which hook is used for side effects in React?",
      options: [
        "useEffect()",
        "useState()",
        "useContext()",
        "useReducer()"
      ],
      correctAnswer: 0
    },
    {
      id: 3,
      question: "What is the purpose of the 'key' prop in React lists?",
      options: [
        "It's purely for documentation",
        "To style list items differently",
        "To help React identify which items have changed",
        "To set the order of list items"
      ],
      correctAnswer: 2
    },
    {
      id: 4,
      question: "What is Redux used for?",
      options: [
        "Server-side rendering",
        "State management",
        "Routing",
        "Form validation"
      ],
      correctAnswer: 1
    },
    {
      id: 5,
      question: "What is the purpose of React.memo()?",
      options: [
        "To memorize React components",
        "To prevent unnecessary re-renders",
        "To cache API responses",
        "To store component state"
      ],
      correctAnswer: 1
    },
    {
      id: 6,
      question: "Which method is NOT part of the React component lifecycle?",
      options: [
        "componentDidMount",
        "componentWillUpdate",
        "componentShouldRender",
        "componentDidUpdate"
      ],
      correctAnswer: 2
    },
    {
      id: 7,
      question: "What is the purpose of React.Fragment?",
      options: [
        "To fragment large components into smaller ones",
        "To group multiple elements without adding extra nodes to the DOM",
        "To split code into different files",
        "To create partial components"
      ],
      correctAnswer: 1
    },
    {
      id: 8,
      question: "What is the correct way to pass a prop to a component?",
      options: [
        "<Component props={value} />",
        "<Component value={props} />",
        "<Component propName={value} />",
        "<Component {props} />"
      ],
      correctAnswer: 2
    },
    {
      id: 9,
      question: "Which hook is used to access context in functional components?",
      options: [
        "useContext()",
        "useProvider()",
        "useConsumer()",
        "withContext()"
      ],
      correctAnswer: 0
    },
    {
      id: 10,
      question: "What is the purpose of React.StrictMode?",
      options: [
        "To enforce strict type checking",
        "To prevent runtime errors",
        "To highlight potential problems in development",
        "To optimize production builds"
      ],
      correctAnswer: 2
    }
  ];

  const calculateScore = () => {
    let correct = 0;
    Object.entries(selectedAnswers).forEach(([questionId, answerIndex]) => {
      if (mockQuestions[parseInt(questionId)].correctAnswer === answerIndex) {
        correct++;
      }
    });
    return correct;
  };

  const handleSubmitExam = () => {
    if (Object.keys(selectedAnswers).length === mockQuestions.length) {
      setSubmitted(true);
    }
  };

  const ProctorStatus = () => (
    <div className="fixed top-4 right-4 bg-white rounded-lg shadow-lg p-4 w-64">
      <h3 className="text-lg font-semibold mb-3">Proctor Status</h3>
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Camera className="w-4 h-4 text-green-500" />
            <span>Camera</span>
          </div>
          <span className="text-green-500">Active</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Mic className="w-4 h-4 text-green-500" />
            <span>Microphone</span>
          </div>
          <span className="text-green-500">Active</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Eye className="w-4 h-4 text-green-500" />
            <span>Focus Tracking</span>
          </div>
          <span className="text-green-500">Normal</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-green-500" />
            <span>Security Status</span>
          </div>
          <span className="text-green-500">Secure</span>
        </div>
      </div>
    </div>
  );

  const StartScreen = () => (
    <div className="max-w-2xl mx-auto p-8 bg-white rounded-xl shadow-lg">
      <h1 className="text-3xl font-bold mb-6">Remote Exam Platform</h1>
      <div className="space-y-6">
        <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
          <Shield className="w-6 h-6 text-blue-600" />
          <div>
            <h3 className="font-semibold">AI-Powered Proctoring</h3>
            <p className="text-gray-600">Advanced monitoring ensures exam integrity</p>
          </div>
        </div>
        <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
          <Lock className="w-6 h-6 text-blue-600" />
          <div>
            <h3 className="font-semibold">Secure Environment</h3>
            <p className="text-gray-600">Tamper-proof exam verification system</p>
          </div>
        </div>
        <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
          <FileCheck className="w-6 h-6 text-blue-600" />
          <div>
            <h3 className="font-semibold">Real-time Monitoring</h3>
            <p className="text-gray-600">Continuous assessment of exam conditions</p>
          </div>
        </div>
        <button
          onClick={() => setExamStarted(true)}
          className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
        >
          Start Exam <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );

  const ResultsScreen = () => {
    const score = calculateScore();
    const percentage = (score / mockQuestions.length) * 100;
    const getGrade = () => {
      if (percentage >= 90) return { text: 'Excellent!', color: 'text-green-600' };
      if (percentage >= 80) return { text: 'Very Good!', color: 'text-blue-600' };
      if (percentage >= 70) return { text: 'Good!', color: 'text-blue-500' };
      if (percentage >= 60) return { text: 'Fair', color: 'text-yellow-600' };
      return { text: 'Needs Improvement', color: 'text-red-600' };
    };
    
    const grade = getGrade();

    return (
      <div className="max-w-4xl mx-auto p-8">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Results Header */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white">
            <div className="text-center">
              <Award className="w-16 h-16 mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-2">Exam Results</h2>
              <div className="text-7xl font-bold mb-2">{score}/10</div>
              <div className={`text-2xl font-semibold ${grade.color}`}>
                {grade.text}
              </div>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="text-center p-4 bg-white/10 rounded-lg">
                <div className="text-4xl font-bold mb-1">{percentage}%</div>
                <div className="text-sm opacity-90">Overall Score</div>
              </div>
              <div className="text-center p-4 bg-white/10 rounded-lg">
                <div className="text-4xl font-bold mb-1">{score}</div>
                <div className="text-sm opacity-90">Correct Answers</div>
              </div>
              <div className="text-center p-4 bg-white/10 rounded-lg">
                <div className="text-4xl font-bold mb-1">{10 - score}</div>
                <div className="text-sm opacity-90">Incorrect Answers</div>
              </div>
            </div>
          </div>

          {/* Detailed Results */}
          <div className="p-8">
            <h3 className="text-2xl font-bold mb-6">Detailed Analysis</h3>
            <div className="space-y-6">
              {mockQuestions.map((question, index) => {
                const selectedAnswer = selectedAnswers[index];
                const isCorrect = selectedAnswer === question.correctAnswer;

                return (
                  <div 
                    key={index} 
                    className={`p-6 rounded-lg border ${
                      isCorrect ? 'border-green-200 bg-green-50' : 'border-red-200 bg-red-50'
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      {isCorrect ? (
                        <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                      ) : (
                        <XCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                      )}
                      <div className="flex-1">
                        <h4 className="font-semibold text-lg mb-3">
                          Question {index + 1}: {question.question}
                        </h4>
                        <div className="space-y-2">
                          {question.options.map((option, optIndex) => (
                            <div
                              key={optIndex}
                              className={`p-3 rounded-lg flex items-center justify-between ${
                                optIndex === question.correctAnswer
                                  ? 'bg-green-100 text-green-800'
                                  : optIndex === selectedAnswer && optIndex !== question.correctAnswer
                                  ? 'bg-red-100 text-red-800'
                                  : 'bg-white'
                              }`}
                            >
                              <span>{option}</span>
                              {optIndex === question.correctAnswer && (
                                <CheckCircle2 className="w-5 h-5 text-green-600" />
                              )}
                              {optIndex === selectedAnswer && optIndex !== question.correctAnswer && (
                                <XCircle className="w-5 h-5 text-red-600" />
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <button
              onClick={() => {
                setExamStarted(false);
                setSubmitted(false);
                setSelectedAnswers({});
                setCurrentQuestion(0);
              }}
              className="mt-8 w-full bg-blue-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
            >
              <Award className="w-5 h-5" />
              Start New Exam
            </button>
          </div>
        </div>
      </div>
    );
  };

  const ExamInterface = () => {
    const answeredQuestions = Object.keys(selectedAnswers).length;
    const remainingQuestions = mockQuestions.length - answeredQuestions;

    return (
      <div className="max-w-4xl mx-auto p-8">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">React Development Exam</h2>
            <div className="flex items-center gap-4">
              <Clock className="w-5 h-5 text-gray-600" />
              <span className="font-semibold">45:00</span>
            </div>
          </div>
          
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-sm text-gray-600">Question {currentQuestion + 1} of {mockQuestions.length}</span>
              <div className="flex-1 h-2 bg-gray-200 rounded-full">
                <div 
                  className="h-2 bg-blue-600 rounded-full"
                  style={{ width: `${((currentQuestion + 1) / mockQuestions.length) * 100}%` }}
                ></div>
              </div>
            </div>
            <div className="text-sm text-gray-600">
              {remainingQuestions > 0 ? (
                <span>{remainingQuestions} questions remaining</span>
              ) : (
                <span className="text-green-600">All questions answered</span>
              )}
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-semibold">{mockQuestions[currentQuestion].question}</h3>
            <div className="space-y-3">
              {mockQuestions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedAnswers(prev => ({ ...prev, [currentQuestion]: index }))}
                  className={`w-full text-left p-4 rounded-lg border ${
                    selectedAnswers[currentQuestion] === index
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-blue-500 hover:bg-blue-50'
                  } transition-colors`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          <div className="flex justify-between mt-8">
            <button
              onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
              disabled={currentQuestion === 0}
              className="px-6 py-2 rounded-lg border border-gray-200 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Previous
            </button>
            {currentQuestion === mockQuestions.length - 1 ? (
              <button
                onClick={handleSubmitExam}
                className={`px-6 py-2 rounded-lg ${
                  Object.keys(selectedAnswers).length === mockQuestions.length
                    ? 'bg-green-600 hover:bg-green-700 text-white'
                    : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                }`}
                disabled={Object.keys(selectedAnswers).length !== mockQuestions.length}
              >
                Submit Exam
              </button>
            ) : (
              <button
                onClick={() => setCurrentQuestion(Math.min(mockQuestions.length - 1, currentQuestion + 1))}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Next
              </button>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {examStarted && !submitted && <ProctorStatus />}
      <div className="container mx-auto py-12">
        {!examStarted ? (
          <StartScreen />
        ) : submitted ? (
          <ResultsScreen />
        ) : (
          <ExamInterface />
        )}
      </div>
    </div>
  );
}

export default App;