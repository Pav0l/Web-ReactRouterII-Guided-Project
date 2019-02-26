import React from 'react';
// import { Redirect } from 'react-router-dom';
import Section from '../components/Section';


export default class RockPaperScissors extends React.Component {

	componentDidMount() {
		const isAuthed = localStorage.getItem('authed') === 'true';

		if (!isAuthed) {
			this.props.history.push('/');
		}
	}

  render() {
    return (
      <Section
        color='#66ad03'
        heading='Rock Paper Scissors'
        content={`${this.props.player} will be playing Rock Paper Scissors.`}
      />
    );
  }
}
