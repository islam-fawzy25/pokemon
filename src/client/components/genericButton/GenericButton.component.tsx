import React from "react";
import "./genericButton.styles.css"

interface Props {
    handleOnClick: () => void
    buttonLable: string
    className:string
}

export default function GenericButton({ handleOnClick, buttonLable,className }: Props) {

    return (
        <div >
            <button 
            className={className}     
                onClick={handleOnClick}>
                {buttonLable}
            </button>
        </div>
    )
}
