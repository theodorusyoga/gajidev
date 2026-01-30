'use client'

import { useState, useEffect } from 'react'
import { useTranslations } from 'next-intl'

export function AnimatedHeroTitle() {
  const t = useTranslations('hero')
  const questions = t.raw('questions') as string[]
  
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState('')
  const [isTyping, setIsTyping] = useState(true)
  const [typingSpeed, setTypingSpeed] = useState(80)

  useEffect(() => {
    const currentQuestion = questions[currentQuestionIndex]

    const handleTyping = () => {
      if (isTyping) {
        // Typing forward
        if (displayedText.length < currentQuestion.length) {
          setDisplayedText(currentQuestion.substring(0, displayedText.length + 1))
          setTypingSpeed(80)
        } else {
          // Finished typing, wait for reading time
          setIsTyping(false)
          setTypingSpeed(3000) // 3 second delay for reading
        }
      } else {
        // Reading time finished, clear text and move to next question
        setDisplayedText('')
        setIsTyping(true)
        setCurrentQuestionIndex((prev) => (prev + 1) % questions.length)
        setTypingSpeed(80)
      }
    }

    const timer = setTimeout(handleTyping, typingSpeed)
    return () => clearTimeout(timer)
  }, [displayedText, isTyping, currentQuestionIndex, questions, typingSpeed])

  return (
    <h1 className="text-lg md:text-xl text-muted-foreground mb-4 min-h-[2rem] md:min-h-[2.5rem]">
      {displayedText}
      {isTyping && displayedText.length > 0 && (
        <span className="typing-cursor">|</span>
      )}
    </h1>
  )
}
