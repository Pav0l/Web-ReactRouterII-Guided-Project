import React from 'react';
import { Link, Route } from 'react-router-dom';
import Section from '../components/Section';


export default function Blackjack(props) {
	console.log(props);
  return (
    <Section
      color='#4286f4'
      heading='Blackjack'
	  content={`${props.player} will be playing Blackjack.`}
    >
	{/* // This is used to demostrate the children prop of the Route - if match prop
	matches, display span */}
	{/* {
      props.match && <span>URL Matches!</span>
	} */}
	
	{/* // NESTED ROUTES
		The code below will work properly only if you call the Blackjack component with render
		and not children prop
	*/}
	<Link to={`${props.match.url}/rock1`}>Rock1</Link> <br />
      <Link to={`${props.match.url}/rock2`}>Rock2</Link>

      <Route
        path={`${props.match.path}/rock1`}
        render={() => <h1>sub route 1</h1>}
      />
      <Route
        path={`${props.match.path}/rock2`}
        render={() => <h1>sub route 2</h1>}
      />
    </Section>
  );
}
