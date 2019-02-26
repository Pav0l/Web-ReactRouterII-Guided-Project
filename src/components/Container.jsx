import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import Blackjack from '../screens/Blackjack';
import RockPaperScissors from '../screens/RockPaperScissors';
import TicTacToe from '../screens/TicTacToe';
import Section from './Section';


// const apps = [
//   { id: 'blackjack', label: 'Black', Component: Blackjack },
//   { id: 'rock_paper_scissors', label: 'Rock', Component: RockPaperScissors },
//   { id: 'tic_tac_toe', label: 'Tic', Component: TicTacToe },
// ];

// const App = props => {
//   const { Component } = apps.find(
//     app => app.id === props.match.params.id,
//   );
//   return <Component {...props} />;
// };

const StyledContainer = styled.div`
  padding: 20px;
  height: 100%;

  nav {
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
  }
`;

export default function Container(props) {
  return (
    <Router>
      <StyledContainer>
        <nav>
          <Link to='/'>Home</Link>
          {/* <Link to='/blackjack'>Black</Link> */}
			{/* Link can take an OBJECT instead of a STRING
				the Object can have state ! */}
			<Link to={{
				pathname: '/blackjack',
				state: { from: 'Link from top of the page' },
			}}>
			Black
			</Link>
          <Link to='/rock_paper_scissors'>Rock</Link>
          <Link to='/tic_tac_toe'>Tic</Link>
        </nav>

        <Route
			path='/blackjack'
		//   component={Blackjack}  // this is replaced by render prop to pass other props to Blackjack component
		// without passing in the 'routeProps' in the CB, Blackjack component would lost access
		// to Route props (history, match, location)
			// render={(routeProps) => <Blackjack player={props.player} {...routeProps} />}
		// the same thing is:

			render={({ history, match, location }) => (
				<Blackjack
					player={props.player}
					history={history}
					match={match}
					location={location}
				/>


		// children prop will render every time!
		/*
			children={({ history, match, location }) => (
				<Blackjack
					player={props.player}
					history={history}
					match={match}
					location={location}
				/>
			)}
		*/
        />

        <Route
    		path='/rock_paper_scissors'
		//   component={RockPaperScissors}
			render={(routeProps) => <RockPaperScissors player={props.player} {...routeProps} />}
        />

        <Route
          path='/tic_tac_toe'
          component={TicTacToe}
        />

        <Section
          color='#d6247a'
          heading='Log In'
          content='Log in, please.'
        />
      </StyledContainer>
    </Router>
  );
}
