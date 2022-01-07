import React from 'react'

const Card = ({content,name,date}) => {
    return (
        <div className='card'>
            <div className='above'>
                {content}
            </div>
                <div className='below'>
                    {name}
                </div>
                <div className='date'>
                    {date}
                </div>

        </div>
    )
}

export default Card
