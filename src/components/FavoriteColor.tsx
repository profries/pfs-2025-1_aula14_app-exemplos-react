import { useState } from "react";

export default function FavoriteColor() {
    let [color, setColor] = useState('blue');

    function alteraCor() {
        if(color == 'blue') 
        {
            setColor('red');
        }
        else {
            setColor('blue');
        }
        console.log("color", color);
    }
    return (
        <button style={{backgroundColor: color, color: 'white'}}
            onClick = {alteraCor}
        >
            {color}
        </button>
    );
}