import React,{useState} from 'react'

const Tour = ({id,name,image,info,price,removeTour}) => {
    const [readmore,setReadMore]=useState(false);
    const [btntext,setBtntext]=useState(false);
    const changeState = ()=>{
       
             setReadMore(!readmore)
             setBtntext(!btntext)
        
       
    }
    
    return (
       <article className='single-tour'>
           <img src={image} alt={name}/>
           <footer>
               <div className='tour-info'>
                    <h4>{name}</h4>
                    <h4 className='tour-price'>${price}</h4>
               </div>
                <p>{readmore ? info: `${info.substring(0,200)}...`}
    <button onClick={changeState}>{btntext?'收起':'了解更多'}</button></p>
                <button onClick={()=>removeTour(id)} className='delete-btn'>不感兴趣</button>
           </footer>
       </article>
    )
}

export default Tour
