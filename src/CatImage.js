import React, { useState, useEffect } from 'react';

function CatImage() {
    const [catImageUrl, setCatImageUrl] = useState('');

    useEffect(() => {
        fetch('https://api.thecatapi.com/v1/images/search?api_key=live_35Nc2NjDynNIuiqNVoEKuGZMTiKcPh9UCUaTlvHzYg0BbHs6ed53hdLTTDiEiZzh')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setCatImageUrl(data[0].url);
            })
            .catch(error => {
                console.error('Error fetching cat image:', error);
            });
    }, []);

    return (
        <div className="cat-image">
            <img src={catImageUrl} alt="A cute cat" />
        </div>
    );
}

export default CatImage;
