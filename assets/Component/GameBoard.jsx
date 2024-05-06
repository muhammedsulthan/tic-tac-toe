import { useState } from "react"


export default function GameBoard({onSelecetSquare,board}){

    return(
        <ol id='game-board'>
        {board.map((row,rowIndex) =>( <li key={rowIndex}>
           <ol>
            {row.map((PlayerSymbol,colIndex) => (<li key={colIndex}>
                <button onClick={() => onSelecetSquare(rowIndex,colIndex)}
                 disabled={PlayerSymbol !==null}>

                {PlayerSymbol}
                    </button>
               </li>
            ))}

           </ol>
        </li>
        ))}
        </ol>
    )
}           