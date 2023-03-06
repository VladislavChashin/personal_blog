import './sidebar.scss'
import book from './img/noutbook.png'
import avatar from './img/avatar.png'
import inst from './img/instagram.svg'
import vk from './img/vk.svg'
import pinterest from './img/pinterest.svg'

export function Sidebar(){
    return(
        <div className="content">
            <div className="image">
                <img src={book} alt="" />
            </div>
            <div className="avatar">
                <img src={avatar} alt="" />
            </div>
            <div className="initial">
                <h4>Дмитрий Валак</h4>
                <p>блог Front-end разработчика</p>
            </div>
            <div className="contacts">
                <img src={inst} alt="" /><img src={vk} alt="" /><img src={pinterest} alt="" />
            </div>
            <div className="description">
                <p>Front-end разработчик. Практик верстки сайтов.
                    Созданием сайтов занимаюсь с 2012 года. 
                    Работал в нескольких ИТ компаниях и наработал более 10 000 часов
                    в создании сайтов различной сложности.</p>
            </div>
            <div className="buttons">
                <button>Мои работы</button>
                <button>Написать мне</button>
            </div>
        </div>
    )
}