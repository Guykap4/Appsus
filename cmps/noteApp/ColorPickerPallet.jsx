export function ColorPickerPallet({ toggleColorpicker, noteId,onNoteColorChange}){

    function pickColor(color) {
        onNoteColorChange(noteId, color)
        toggleColorpicker()
}


    return (
        <div className="picker-pallet-options">
            <div onClick={() => { pickColor('red') } } className="color-picker-option red"></div>
            <div onClick={() => { pickColor('green') } } className="color-picker-option green"></div>
            <div onClick={() => { pickColor('blue') }} className="color-picker-option blue"></div>
            <div onClick={() => {pickColor('yellow')} } className="color-picker-option yellow"></div>
            <div onClick={() => { pickColor('teal') }} className="color-picker-option teal"></div>
            <div onClick={() => {pickColor('purple')} } className="color-picker-option purple"></div>
        </div>
    )
}