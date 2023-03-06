import foto from './img/Rectangle 4-1.jpg'
import './stories.scss'

export function Stories(){
    return(
        <div className="stories">
            <div className="stories_content">
                <div className="stories_post">
                    <p>Отдыхаю на природе</p>
                    <div className="image">
                        <img src={foto} alt="" />
                    </div>
                    <p>21.09.2023</p>
                </div>
                <div className="stories_post">
                    <p>Отдыхаю на природе</p>
                    <div className="image">
                        <img src={foto} alt="" />
                    </div>
                    <p>21.09.2023</p>
                </div>
            </div>
        </div>
    )
}