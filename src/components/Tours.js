import React from 'react'
import Tour from './Tour'

const Tours = ({tours,removeTour}) => {
    return (
        <div>
             <section>
                <div  className='title'>
                    <h2>热门旅游目的地</h2>
                    <div className='underline'></div>
                </div>
             </section>

            {tours.map((tour)=>{
                return (
                   <Tour removeTour={removeTour} key={tour.id} {...tour}></Tour>
                )
            })}
        </div>
    )
}

export default Tours
