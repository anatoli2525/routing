import React, { useState, useEffect } from 'react';

import List from '@mui/material/List';
import ListSubheader from '@mui/material/ListSubheader';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

const DOG_API = 'https://dog.ceo/api/breeds/list/all';

const App = () => {
  const [dogs, setDogs] = useState([]);
  const [breedImage, setBreedImage] = useState('')
  const [src, setSrc] = useState('')
  const [open, setOpen] = useState({});

  const handleClick = (breed) => {
    setOpen((open) => ({
      ...open,
      [breed]: !open[breed],
    }));
    setBreedImage(breed)
  };

  useEffect(() => {
    fetch(DOG_API)
      .then((res) => res.json())
      .then((data) => {
        setDogs(
          Object.entries(data.message).map(([breed, subbreeds]) => ({ breed, subbreeds }))
        );
      });
  }, []);

  useEffect(() => {
    if (breedImage) {
      fetch(`https://dog.ceo/api/breed/${breedImage}/images/random`)
        .then((res) => res.json())
        .then((data) => {
          setSrc(data.message);
        });
    }
  }, [breedImage]);

  return (
    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
      <List
        sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
        component='nav'
        aria-labelledby='nested-list-subheader'
        subheader={
          <ListSubheader component='div' id='nested-list-subheader'>
            Dog Breeds
          </ListSubheader>
        }
      >
        {dogs.map(({ breed, subbreeds }) => (
          <div key={breed}>
            <ListItemButton onClick={() => handleClick(breed)}>
              <ListItemText primary={breed} />
              {subbreeds.length > 0 && (open[breed] ? <ExpandLess /> : <ExpandMore />)}
            </ListItemButton>
            <Collapse in={open[breed]} timeout='auto' unmountOnExit>
              <List component='div' disablePadding>
                {subbreeds.map((subbreed) => (
                  <ListItemButton key={subbreed} sx={{ pl: 4 }}>
                    <ListItemText primary={subbreed} />
                  </ListItemButton>
                ))}
              </List>
            </Collapse>
          </div>
        ))}
      </List>
      <div>
        {src && <img src={src} alt="breed image" />}
      </div>
    </div>
  );
};

export default App;
