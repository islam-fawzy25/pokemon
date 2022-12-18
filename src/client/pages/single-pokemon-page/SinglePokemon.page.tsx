import React from "react";
import "./single-pokemon-page.css"
import SingleCard from "../../components/single-card/SingleCard.component";
import GenericButton from "../../components/genericButton/GenericButton.component";
import { useNavigate } from 'react-router-dom';

export default function SinglePokemonPage() {
    const navigate = useNavigate();

    return (
        <div className="single-pokemon-page-container">
            <GenericButton
                handleOnClick={() => { navigate('/') }}
                buttonLable={"<< Back"}
                className={"go-back-button"}
            />
            <SingleCard></SingleCard>
        </div>
    )
}