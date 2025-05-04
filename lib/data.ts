export const subjects = [
  {
    id: "arthematic",
    name: "Arthematic",
    category: "Mathematics",
    icon: "📚",
    iconBg: "bg-red-100",
    iconColor: "text-red-600",
    progress: 20,
    progressColor: "bg-purple-500",
    completedLessons: 5,
  },
  {
    id: "science",
    name: "Science",
    category: "Science",
    icon: "</>",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    progress: 80,
    progressColor: "bg-blue-500",
    completedLessons: 5,
  },
  {
    id: "english",
    name: "English",
    category: "Languages",
    icon: "✓",
    iconBg: "bg-yellow-100",
    iconColor: "text-yellow-600",
    progress: 50,
    progressColor: "bg-blue-500",
    completedLessons: 5,
  },
  {
    id: "social-studies",
    name: "Social Studies",
    category: "Humanities",
    icon: "📚",
    iconBg: "bg-red-100",
    iconColor: "text-red-600",
    progress: 20,
    progressColor: "bg-yellow-500",
    completedLessons: 5,
  },
  {
    id: "computer-science",
    name: "Computer Science",
    category: "Technology",
    icon: "</>",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    progress: 80,
    progressColor: "bg-green-500",
    completedLessons: 5,
  },
  {
    id: "hindhi",
    name: "Hindhi",
    category: "Languages",
    icon: "✓",
    iconBg: "bg-yellow-100",
    iconColor: "text-yellow-600",
    progress: 50,
    progressColor: "bg-red-500",
    completedLessons: 5,
  },
]

const topics = {
  arthematic: [
    {
      id: "arithmetic-number-sense",
      title: "Arithmetic & Number Sense (Foundation)",
      icon: "📊",
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
      completed: "01",
    },
    {
      id: "algebra",
      title: "Algebra",
      icon: "📈",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
      completed: "01",
    },
    {
      id: "geometry",
      title: "Geometry",
      icon: "📏",
      iconBg: "bg-orange-100",
      iconColor: "text-orange-600",
      timeframe: true,
    },
    {
      id: "trigonometry",
      title: "Trigonometry",
      icon: "📊",
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
    },
    {
      id: "statistics-probability",
      title: "Statistics and Probability",
      icon: "📈",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
      completed: "12",
    },
    {
      id: "measurement",
      title: "Measurement",
      icon: "📏",
      iconBg: "bg-orange-100",
      iconColor: "text-orange-600",
      timeframe: true,
    },
  ],
}

// Add topicId to the quiz objects to make navigation easier
const quizzes = {
  "arithmetic-number-sense": [
    {
      id: "counting-number-recognition",
      title: "Counting and Number Recognition",
      description: "Test your knowledge of counting and recognizing numbers in various formats",
      subjectId: "arthematic",
      topicId: "arithmetic-number-sense",
      icon: "📊",
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
      progress: 80,
      progressColor: "bg-blue-500",
      completedQuestions: 8,
      totalQuestions: 10,
      currentQuestion: 1,
      estimatedTime: 15,
      difficulty: "Beginner",
    },
    {
      id: "order-of-operations",
      title: "Order of Operations (PEMDAS/BODMAS)",
      description: "Practice solving expressions using the correct order of operations",
      subjectId: "arthematic",
      topicId: "arithmetic-number-sense",
      icon: "📏",
      iconBg: "bg-orange-100",
      iconColor: "text-orange-600",
      progress: 20,
      progressColor: "bg-red-500",
      completedQuestions: 2,
      totalQuestions: 12,
      currentQuestion: 1,
      estimatedTime: 20,
      difficulty: "Intermediate",
    },
    {
      id: "basic-operations",
      title: "Basic Operations",
      description: "Test your knowledge of addition, subtraction, multiplication, and division",
      subjectId: "arthematic",
      topicId: "arithmetic-number-sense",
      icon: "📊",
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
      progress: 80,
      progressColor: "bg-green-500",
      completedQuestions: 8,
      totalQuestions: 10,
      currentQuestion: 1,
      estimatedTime: 15,
      difficulty: "Beginner",
    },
    {
      id: "fractions",
      title: "Fractions",
      description: "Practice with fractions concepts, types, operations, and comparisons",
      subjectId: "arthematic",
      topicId: "arithmetic-number-sense",
      icon: "📏",
      iconBg: "bg-orange-100",
      iconColor: "text-orange-600",
      progress: 20,
      progressColor: "bg-purple-500",
      completedQuestions: 2,
      totalQuestions: 15,
      currentQuestion: 1,
      estimatedTime: 25,
      difficulty: "Advanced",
    },
  ],
}

export function getSubject(id: string) {
  return subjects.find((subject) => subject.id === id)
}

export function getTopics(subjectId: string) {
  return topics[subjectId as keyof typeof topics] || []
}

export function getTopic(subjectId: string, topicId: string) {
  const subjectTopics = getTopics(subjectId)
  return subjectTopics.find((topic) => topic.id === topicId)
}

export function getQuizzes(topicId: string) {
  return quizzes[topicId as keyof typeof quizzes] || []
}

export function getQuiz(topicId: string, quizId: string) {
  const topicQuizzes = getQuizzes(topicId)
  return topicQuizzes.find((quiz) => quiz.id === quizId)
}
