import React from 'react';

const Answer = (answer) => {
  return (
    <section className="answer" key={answer.id}>
      <input type='checkbox' value={answer.score} className="answer-checkbox"/>
      <h3 className="answer-title">{answer.title}</h3>
    </section>
  )
}

export default Answer;
