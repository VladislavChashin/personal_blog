import photo from './img/photo.svg'
import send from './img/send.svg'
import './search.scss' 

export function Search(){
    return(
        <div className="search">
            <div className="search_content">
                <input type="text" placeholder='Напишите что нибудь'/>
                <div className="images">
                    <img src={photo} alt="" />
                </div>
                <div className="images">
                    <img src={send} alt="" />
                </div>
                
            </div>
        </div>
    )
}