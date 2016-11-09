import React, { Component }from 'react';
import axios from 'axios';
import { map } from 'lodash';
import Question from './QuestionComponent';

export default class Quiz extends Component {
  constructor() {
    super()
    this.state = {
      quiz: {}
    }
  }

  getAllQuizzesFromServer() {
    axios.get('/quizzes', {})
    .then((response) => {
      this.setState({quiz: response.data})
    })
    .catch(function() {
      console.log('Error getting quiz from server.')
    })
  }

  componentWillMount() {
    this.getAllQuizzesFromServer()
  }

  render() {
    const { quiz } = this.state

    return (
      <section>
        <h1 className="quiz-title">
          {quiz.quizzes ? quiz.quizzes[0].title : 'Loading your quiz.'}
        </h1>
        {quiz.quizzes ?  map(quiz.quizzes[0].questions, (question, i) => {
          return <Question key={question.id} {...question} />
        }): ''}
      </section>
    )
  }
}
