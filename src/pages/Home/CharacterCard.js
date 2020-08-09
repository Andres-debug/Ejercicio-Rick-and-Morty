import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./CharacterCard.css";

export default function CharacterCard(props) {
    return (
        <div>
            <div className="card">
                <img src={props.chars.image} className="card-img-top" />
                <div className="card-body">
                    <h1 className="card-title">{props.chars.name}</h1>
                    <h1 className="card-text">{props.chars.species}</h1>
                    <h1 className="card-text">{props.chars.status}</h1>
                    <a href="#" className="btn btn-primary">Mas info...</a>
                </div>
            </div>

        </div>
    );
}