export function ColorPickerPallet({ toggleColorpicker, noteId, onNoteColorChange }) {

    function pickColor(color) {
        onNoteColorChange(noteId, color)
        toggleColorpicker()
    }


    return (
        <div className="picker-pallet-options">
                <div onClick={() => { pickColor('#da0101') }} className="color-picker-option red"></div>
                <div onClick={() => { pickColor('#5cc077') }} className="color-picker-option green"></div>
                <div onClick={() => { pickColor('#62a8e4') }} className="color-picker-option lightBlue"></div>
                <div onClick={() => { pickColor('#fff3bf') }} className="color-picker-option lightyellow"></div>
                <div onClick={() => { pickColor('#91a91f') }} className="color-picker-option lightgreen"></div>
                <div onClick={() => { pickColor('#ff65a3') }} className="color-picker-option pink"></div>
        </div>
    )
}