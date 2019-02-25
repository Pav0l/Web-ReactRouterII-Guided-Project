import React from 'react';
import Section from '../components/Section';


export default function RockPaperScissors(props) {
  return (
    <Section
      color='#66ad03'
      heading='Rock Paper Scissors'
      content={`${props.player} will be playing Rock Paper Scissors.`}
    />
  );
}
