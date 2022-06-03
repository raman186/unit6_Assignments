import React from 'react'
import './staticCard.css'

function Card(){
    return (
        <div id='container'> 
            <div>
                <div id='os'>
                    <h1>Mobile Operating System</h1>
                    <div>
                        <ul>
                            <li>Android</li>
                            <li>Blackberry</li>
                            <li>iPhone</li>
                            <li>Windows Phone</li>
                        </ul>
                    </div>
                </div>
                <div id='manufact'>
                    <h1>Mobile Manufacturers</h1>
                    <div>
                        <ul className='manuItem'>
                            <li>Samsung</li>
                            <li>HTC</li>
                            <li>Micromax</li>
                            <li>Apple</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>    
       
    )
}
export default Card