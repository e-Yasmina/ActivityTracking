import React, { useEffect, useState } from "react";
import "./Activity3.css";

const PasswordGuesser = ({ password }) => {
  const [currentGuess, setCurrentGuess] = useState("");
  const [attempts, setAttempts] = useState(0);
  const [isGuessed, setIsGuessed] = useState(false);
  const [startTime, setStartTime] = useState(null);
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    //if (!password) return;
    const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+[]{}|;:'\",.<>?/`~\\";
    let guess = "";

    const startTimer = () => setStartTime(Date.now());

    const guessPassword = () => {
      if (!isGuessed) {
        guess += characters.charAt(Math.floor(Math.random() * characters.length));
        setCurrentGuess(guess);
        setAttempts((prev) => prev + 1);

        if (guess === password) {
          setIsGuessed(true);
          setElapsedTime(((Date.now() - startTime) / 1000).toFixed(2));
        } else {
          setTimeout(guessPassword, 50); // Delay for the animation
        }
      }
    };

    // Start guessing on component mount
    startTimer();
    guessPassword();
  }, [password, isGuessed, startTime]);

  return (
    <div className="password-guesser">
      <div className="animation">
        {isGuessed ? (
          <div className="success">Password guessed: {currentGuess}</div>
        ) : (
          <div className="loading">Trying to guess: {currentGuess}</div>
        )}
      </div>
      <div className="details">
        <p>Attempts: {attempts}</p>
        <p>Elapsed Time: {isGuessed ? `${elapsedTime} seconds` : "Calculating..."}</p>
        {isGuessed && <p>Success!</p>}
      </div>
    </div>
  );
};

export default PasswordGuesser;
