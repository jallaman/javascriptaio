

const logo = document.querySelector('img');

const onClick = (e) =>{ console.log(e.offsetX, e.offsetY)}




logo.addEventListener('click', onClick)


const itemInput = document.getElementById('item-form');


const onKeyDown = (e) => {
    console.log('Shift: ' + e.shiftKey)
    console.log('target is '+e.target)
}

itemInput.addEventListener('keydown' , onKeyDown)






/*
- `target` - The element that triggered the event
- `currentTarget` - The element that the event listener is attached to (These are the same in this case
- `type` - The type of event that was triggered
- `timeStamp` - The time that the event was triggered
- `clientX` - The x position of the mouse click relative to the window
- `clientY` - The y position of the mouse click relative to the window
- `offsetX` - The x position of the mouse click relative to the element
- `offsetY` - The y position of the mouse click relative to the element
- `pageX` - The x position of the mouse click relative to the page
- `pageY` - The y position of the mouse click relative to the page
- `screenX` - The x position of the mouse click relative to the screen
- `screenY` - The y position of the mouse click relative to the screen
*/