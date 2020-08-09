import React,{useEffect,useState} from 'react';
import axios from 'axios';
import CharacterCard from './CharacterCard';
import "./CharacterList.css"

export default function CharList() {
    const [CharList, getCharList]= useState([]);

    useEffect(()=>{
        axios.get('https://rickandmortyapi.com/api/character/')
        .then(response=>{
            console.log(response.data.results);
            getCharList(response.data.results)
        })
        .catch(err=>{
            console.log(err)
        })
    },[])

    return(
        <section className="card-grid">
            {CharList.map((chars,id)=>{
                    return<CharacterCard key={id} chars={chars}/>
                })

            }
        </section>
    )

}