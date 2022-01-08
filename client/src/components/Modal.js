import React from 'react'

const Modal = ({show,setShow}) => {

    let onClick = (e) => {

    }
    
    return (
        <div className='modal' style={show ? {display:"flex"}:{display:"none"}}>
            <div className='block' onClick={() => onClick()}>
                <div className='top'>
                    <h3>Add entry</h3>
                    <span onClick={() => setShow(false)}>&times;</span>
                </div>
                <div className='form'>
                    <form>
                        <textarea placeholder='Wirte your entry'></textarea>
                        <input type="text" placeholder='Your name/nickname'/>
                    </form>
                </div>
                <div className='submit'>
                    <button>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default Modal
