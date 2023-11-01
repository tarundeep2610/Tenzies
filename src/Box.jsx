import { useState } from "react"
import Dice from "./Dice"
import './style.css'

export default function Box(){

    const [dies,setDies]= useState([
        {num:1, isSelected:false},
        {num:2, isSelected:false},
        {num:3, isSelected:false},
        {num:4, isSelected:false},
        {num:5, isSelected:false},
        {num:6, isSelected:false},
        {num:1, isSelected:false},
        {num:2, isSelected:false},
        {num:3, isSelected:false},
        {num:4, isSelected:false},
    ]);
    
    const diesElement= dies.map((dice,index) => {
        return <Dice key={index} index={index} num={dice.num} isSelected={dice.isSelected} handleSelection={handleSelection}></Dice>
    })

    let allSelected= dies.filter( dice => dice.isSelected).length==dies.length;

    let isAllEqual = dies.filter( dice => dice.num===dies[0].num).length==dies.length;

    let btnText= isAllEqual&allSelected?'Reset Game':'Roll';

    function handleSelection(index){
        setDies( prevDies => {
            let newDies= [...prevDies];
            newDies[index]= {num: newDies[index].num,isSelected: !newDies[index].isSelected};
            return newDies;
        })
    }

    function handleRoll(){
        setDies( prevDies => {
            return prevDies.map((dice)=> {
                if(isAllEqual){
                    return  {num: Math.floor(Math.random() * (6 ) + 1), isSelected: false}
                }

                if(dice.isSelected){
                    return dice;
                }
                else{
                    return {...dice,num: Math.floor(Math.random() * (6 ) + 1)}
                }
            })
        })
    }

    return (
        <div id='box'>
            <div id='inner-box'>
                <h2 id='title'>Tenzies</h2>
                <p id='instructions'>
                    Roll until all dices are the same. Click each die to freeze it at its current value between rolls.
                </p>
                <div className="dies">
                    {diesElement}
                </div>
                {(allSelected && isAllEqual) && <p id='win-msg'>You Won!!</p>}
                <div className="roll-btn" onClick={handleRoll}>{btnText}</div>
            </div>
        </div>
    )
}