import React from 'react';

const InputSelect = (props) => {
    const handleSelectChange = (event) => {
        props.selectChange(props.selectName, event.target.checked)
    }
    return (
            <input
                type="checkbox"
                onClick={handleSelectChange}
                defaultChecked
            >
            </input>
    )
}

export default InputSelect;