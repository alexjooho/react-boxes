import React, { useState } from "react";
import { v4 as uuid } from 'uuid';
import Box from './Box';
import NewBoxForm from "./NewBoxForm";

/** Boxes list: manages boxes created in an array
 * 
 * State:
 * - boxes: array like [{id, backgroundColor, width, height}]
 * 
 * BoxList -> Box -> NewBoxForm
 */

function BoxList() {
    const [boxes, setBoxes] = useState([]);

    /** Add new item object to cart. */
    function addBox(box) {
        const newbox = { ...box, id: uuid() };
        setBoxes(boxes => [...boxes, newbox]);
    }

    function handleDelete(id) {
        const newBoxes = boxes.filter(box => box.id !== id);
        setBoxes(newBoxes);
    }
// don't forget key (this caused a bug where color was transferred to other boxes)
// CAN DESTRUCTURE OBJECT WITHIN A MAP!!
    function renderBoxes() {
        return (
            <div>
              {boxes.map(({id, width, height, backgroundColor}) =>
              <Box key={id} width={width} height={height} 
              backgroundColor={backgroundColor} id={id} handleDelete={handleDelete}/>
              )}
            </div>
        );
    }

    return (
        <div>
            <NewBoxForm addBox={addBox} />
            {renderBoxes()}
        </div>
    )

}

export default BoxList;