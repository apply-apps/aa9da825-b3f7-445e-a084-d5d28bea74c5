// Filename: index.js
// Combined code from all files

import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';

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
    },
];

const Quiz = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);

    const handleAnswerOptionClick = (answer) => {
        if (answer === questions[currentQuestionIndex].correctAnswer) {
            setScore(score + 1);
        }

        const nextQuestionIndex = currentQuestionIndex + 1;
        if (nextQuestionIndex < questions.length) {
            setCurrentQuestionIndex(nextQuestionIndex);
        } else {
            setShowScore(true);
        }
    };

    const handleRestartQuiz = () => {
        setCurrentQuestionIndex(0);
        setScore(0);
        setShowScore(false);
    };

    return (
        <View style={styles.quizContainer}>
            {showScore ? (
                <View style={styles.scoreSection}>
                    <Text style={styles.scoreText}>You scored {score} out of {questions.length}</Text>
                    <Button title="Restart Quiz" onPress={handleRestartQuiz} />
                </View>
            ) : (
                <View style={styles.questionSection}>
                    <Text style={styles.questionText}>
                        {questions[currentQuestionIndex].question}
                    </Text>
                    {questions[currentQuestionIndex].options.map((option, index) => (
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

const App = () => {
    return (
        <SafeAreaView style={appStyles.container}>
            <Text style={appStyles.title}>Venture Capital Quiz</Text>
            <Quiz />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    quizContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    questionSection: {
        alignItems: 'center',
    },
    questionText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    optionButton: {
        backgroundColor: '#007bff',
        width: '100%',
        padding: 10,
        borderRadius: 5,
        marginVertical: 5,
        alignItems: 'center',
    },
    optionText: {
        color: '#ffffff',
        fontSize: 16,
    },
    scoreSection: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    scoreText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 20,
    },
});

const appStyles = StyleSheet.create({
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
});

export default App;