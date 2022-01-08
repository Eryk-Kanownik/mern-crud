import React from 'react'

const AddEntry = ({modal,openModal}) => {

    return (
        <div className='add-entry' style = {modal ? {display:"none"}:{display:"flex"}} onClick={() => openModal()}>
            <span>+</span>
        </div>
    )
}

export default AddEntry
