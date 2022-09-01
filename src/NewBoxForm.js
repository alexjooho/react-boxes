import React, { useState } from "react";

function NewBoxForm( { addBox }) {

    const initialState = {
        height: "",
        width: "",
        backgroundColor: "#000000"
      };
    
    // check this with debugger! use the console components debugger
    const [formData, setFormData] = useState(initialState);
    
    function handleChange(evt) {
        const fieldName = evt.target.name;
        const value = evt.target.value;
    
        setFormData(currData => {
            currData[fieldName] = value;
            return {...currData};
        });
    }
    
    function handleSubmit(evt) {
        evt.preventDefault();
        addBox(formData);
        setFormData(initialState);
      }
    
    return (
        <form onSubmit={handleSubmit}>
          <label htmlFor="height">Height:</label>
          <input
            type="number"
            id="height"
            name="height"
            value={formData.height}
            onChange={handleChange}
          />
    
          <label htmlFor="width">Width:</label>
          <input
            type="number"
            id="width"
            name="width"
            value={formData.width}
            onChange={handleChange}
          />
          
          <label htmlFor="backgroundColor">Background Color:</label>
          <input
            type="color"
            id="backgroundColor"
            name="backgroundColor"
            value={formData.backgroundColor}
            onChange={handleChange}
          />
    
          <button>Add a new box!</button>
        </form>
      );
}

export default NewBoxForm;