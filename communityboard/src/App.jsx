import React from 'react';
import Park from './components/parks';
import './styles/App.css';
// Import your images
import parkImage1 from './assets/images/Universals-Islands-of-Adventure.jpg';
import parkImage2 from './assets/images/discoverycove.jpeg';
import parkImage3 from './assets/images/harrypotter.jpg';
import parkImage4 from './assets/images/magickingdom.jpg';
import parkImage5 from './assets/images/universal-orlando-studios.jpg';
import parkImage6 from './assets/images/animalkingdom.jpg';
import parkImage7 from './assets/images/funspot.jpg';
import parkImage8 from './assets/images/epcot.jpg';
import parkImage9 from './assets/images/seaworld.jpeg';
import parkImage10 from './assets/images/disneyresort.jpg';

function App() {
  return (
    <div>
      <h1>Top 10 Orlando Parks</h1>
      <h2>info from : TripAdvisor</h2>
      <div className="park-container">
        <Park name="Universal Studios-Island of Adventure" type="Theme Park" image={parkImage1} parkLink="https://www.universalorlando.com/web/en/us/theme-parks/islands-of-adventure"/>
        <Park name="Discovery Cove" type="Water Park" image={parkImage2} parkLink="https://seaworldentertainment.com/our-brands/discovery-cove/"/>
        <Park name="The Wizarding World of Harry Potter at Universal Orlando Resort" type="Theme Park" image={parkImage3} parkLink="https://www.universalorlando.com/web/en/us/universal-orlando-resort/the-wizarding-world-of-harry-potter/hub"/>
        <Park name="Magic Kingdom Park" type="Disney Park" image={parkImage4} parkLink="https://disneyworld.disney.go.com/destinations/magic-kingdom/"/>
        <Park name="Universal Studios Florida" type="Theme Park" image={parkImage5} parkLink="https://www.universalorlando.com/web/en/us/tickets-packages/park-tickets"/>
      </div>
      <div className="park-container">
        <Park name="Animal Kingdom" type="Disney Park" image={parkImage6} parkLink="https://disneyworld.disney.go.com/destinations/animal-kingdom/"/>
        <Park name="Fun Spot America" type="Theme Park" image={parkImage7} parkLink="https://fun-spot.com/orlando/"/>
        <Park name="Epcot" type="Disney Park" image={parkImage8} parkLink="https://disneyworld.disney.go.com/destinations/epcot/"/>
        <Park name="Sea-World" type="Water Park" image={parkImage9} parkLink="https://seaworld.com/orlando/"/>
        <Park name="Walt Disney Resort" type="Disney Park" image={parkImage10} parkLink="https://disneyworld.disney.go.com/"/>
      </div>
    </div>
  );
}

export default App;
