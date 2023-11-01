export default function Dice({index, num, isSelected, handleSelection}){
    let selected= isSelected?'selected':'';
    return (
            <div className={`dice ${selected}`} onClick={()=> handleSelection(index)}>
            {num}
        </div>
    )
}