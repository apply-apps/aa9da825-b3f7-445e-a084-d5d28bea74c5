// Filename: index.js
// Combined code from all files

import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

const questions = [
    {
        question: "What is Venture Capital?",
        options: ["A type of debt financing", "Equity investment in startups", "A government grant", "A bank loan"],
        correctAnswer: "Equity investment in startups"
    },
    {
        question: "Who is known as the father of Venture Capital?",
        options: ["Warren Buffet", "Arthur Rock", "Robert K. Merton", "Elon Musk"],
        correctAnswer: "Arthur Rock"
    },
    {
        question: "What is the primary objective of venture capitalists?",
        options: ["To provide loans", "To earn dividends", "To make a profit through capital gains", "To acquire real estate"],
        correctAnswer: "To make a profit through capital gains"
    }
];

const Quiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);

    const handleAnswerOptionClick = (selectedOption) => {
        if (selectedOption === questions[currentQuestion].correctAnswer) {
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
    };

    const resetQuiz = () => {
        setCurrentQuestion(0);
        setScore(0);
        setShowScore(false);
    };

    return (
        <View style={styles.quizContainer}>
            {showScore ? (
                <View style={styles.scoreSection}>
                    <Text style={styles.scoreText}>You scored {score} out of {questions.length}</Text>
                    <Button title="Play Again" onPress={resetQuiz} />
                </View>
            ) : (
                <View>
                    <Text style={styles.questionText}>{questions[currentQuestion].question}</Text>
                    {questions[currentQuestion].options.map((option, index) => (
                        <TouchableOpacity
                            key={index}
                            style={styles.optionButton}
                            onPress={() => handleAnswerOptionClick(option)}
                        >
                            <Text style={styles.optionText}>{option}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            )}
        </View>
    );
};

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Venture Capital Quiz</Text>
            <Quiz />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        paddingHorizontal: 10,
        backgroundColor: '#f0f0f0',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    quizContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    scoreSection: {
        alignItems: 'center',
    },
    scoreText: {
        fontSize: 24,
        marginVertical: 20,
    },
    questionText: {
        fontSize: 20,
        marginBottom: 20,
    },
    optionButton: {
        backgroundColor: '#007bff',
        padding: 10,
        borderRadius: 5,
        marginVertical: 5,
    },
    optionText: {
        color: '#ffffff',
        textAlign: 'center',
        fontSize: 16,
    },
});