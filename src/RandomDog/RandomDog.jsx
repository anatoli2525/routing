import React, { useEffect, useState } from 'react';
import { Box, CircularProgress} from '@mui/material';

const RANDOM_DOG_IMAGE = 'https://dog.ceo/api/breeds/image/random';

const RandomDog = () => {
    const [randomImage, setRandomImage] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(RANDOM_DOG_IMAGE)
            .then((res) => res.json())
            .then((data) => {
                setRandomImage(data.message);
                setLoading(false);
            });
    }, []);

    return (
        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="100vh" width="100vw">
            {loading ? (
                <CircularProgress />
            ) : (
                <Box display="flex" alignItems="center" justifyContent="center" height="90vh" width="90vw">
                    <img src={randomImage} alt="randomDog" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </Box>
            )}
        </Box>
    );
};

export default RandomDog;
