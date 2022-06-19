import React, {useState} from 'react';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Main from './components/Main';

import './App.css';

function App() {
  const [backgrounds] = useState([
    {
      title: 'Tropical Paradise',
      file: 'dithered_beach.webp',
      alt: 'Tropical beach',
      premium: false
    },
    {
      title: 'Urban Jungle',
      file: 'dithered_city.webp',
      premium: false
    },
    {
      title: 'Cozy Cabin',
      file: 'dithered_cabin.webp',
      premium: false
    },
    {
      title: 'The Tub',
      file: 'dithered_bathtub.webp',
      premium: false
    },
    {
      title: 'Passion Bedroom',
      file: 'dithered_bedroom.webp',
      premium: false
    }
  ]);

  const [activeBg, setActiveBg] = useState(-1);

  const [dancers] = useState([
    {
        name: 'Cassandra',
        file: 'dancer_01_VP9.webm',
        premium: false,
        nsfw: false,
        cost: 0
    },
    {
        name: 'Lando',
        file: 'dancer_02_VP9.webm',
        poster: 'height_test.jpg',
        premium: false,
        nsfw: false,
        cost: 0
    },
    {
        name: 'Jodi',
        file: 'dancer_03.webp',
        premium: true,
        nsfw: false,
        cost: 2
    },
    {
        name: 'Brad',
        file: 'dancer_04.webp',
        premium: true,
        nsfw: true,
        cost: 5
    },
    {
        name: 'Desiree',
        file: 'dancer_05.webp',
        premium: true,
        nsfw: true,
        cost: 5
    }
  ]);

  const [activeDancer, setActiveDancer] = useState(-1);

  const [menuOpen, setMenuOpen] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);

  return (
    <div className='app'>
      <Header setMenuOpen={setMenuOpen}
              setHeaderHeight={setHeaderHeight} />

      <Nav  menuOpen={menuOpen} 
            setMenuOpen={setMenuOpen}
            backgrounds={backgrounds}
            dancers={dancers}
            activeBg={activeBg}
            setActiveBg={setActiveBg}
            activeDancer={activeDancer}
            setActiveDancer={setActiveDancer}
      />

      <Main headerHeight={headerHeight}
            bg={backgrounds[activeBg]} 
            dancer={dancers[activeDancer]} 
            activeBg={activeBg}
            activeDancer={activeDancer} />

      <footer>
        <a href="https://joemccarthy.dev/" target="_blank">joemccarthy.dev</a>
      </footer>
    </div>
  );
}

export default App;
