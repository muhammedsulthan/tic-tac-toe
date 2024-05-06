import { useState } from "react"

export default function Player({initialName,symbol,isActive}){

    const[playerName,setPlayerName]=useState(initialName)
    const [isEditing,setIsEdinting] = useState(false)

    function handleEditClick(){
       
    setIsEdinting((editing )=> !editing);

    if (isEditing) {
      onChangeName={symbol,playerName}
    }

    }

    function handleChange(event){
      setPlayerName(event.target.value);
    }
    let editablePlayerName=<span className="player-name">{playerName}</span>
    // let btnCaption='Edit'
     if (isEditing) {

        editablePlayerName=<input type="text" required value={playerName} onChange={handleChange}/>
    // btnCaption="Save" another way of condition you can use below terniory operator also
        
     }
    return(
        <li className={isActive?'active':undefined}>
            <span className="player"> 
            {editablePlayerName} 
        <span className="player-symbol">{symbol}</span>

        <button onClick={handleEditClick}>   {isEditing?'save' : 'Edit'}   </button>
        </span>

      </li>
     
    )
}