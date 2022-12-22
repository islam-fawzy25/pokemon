import React from 'react';
import "./singleCard.styles.css"

export default function SingleCard({ children, response }) {
    return (
        <>
            <div className='singl-card-container'>
                <div className='singl-card-image-container'>
                    <img src={response.sprites.front_shiny} alt={response.name} />
                </div>
                <h3>{response.name}</h3>
                <div className='singl-card-details-container'>
                    <div className='singl-card-details'>
                        <p>Height: {response.height}</p>
                        <p>Weight: {response.weight}</p>
                        <p>Base experience: {response.base_experience}</p>
                        <p>Default: {String(response.is_default)}</p>
                        <p>Order: {response.order}</p>
                    </div>
                </div>
                {children}
            </div>
        </>
    )
}