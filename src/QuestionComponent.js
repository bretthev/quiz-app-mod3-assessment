import React from 'react';
import Answer from './AnswerComponent';
import { map } from 'lodash';

const Question = ( question ) => {
  const renderAnswers = map(question.answers, (answer) => {
      return <Answer key={answer.id} {...answer} /> })
  return (
    <section className="question" key={question.id}>
      <h1 className="question-title">{question.title}</h1>
      {renderAnswers}
    </section>
  )
}

export default Question;
