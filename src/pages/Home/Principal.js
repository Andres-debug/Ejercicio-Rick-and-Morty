import React from 'react';
import CharacterList from './CharacterList';
import Title from '../Login/components/Title/Title';

const Principal= () =>{
    return(
        <div>
            <Title text='Personajes'/>
            <CharacterList/>
        </div>
    )
}

export default Principal;