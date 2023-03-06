import './header.scss'

export function Header(){
    return(
        <div className="header_wrap">
            <nav>
                <ul>
                    <li><a href="">Главная</a></li>
                    <li><a href="">Статьи</a></li>
                    <li><a href="">Обо мне</a></li>
                    <li><a href="">Реклама</a></li>
                    <li><a href="">Профиль</a></li>
                </ul>
            </nav>
            <input type="text" placeholder='Поиск по блогу'/>
        </div>
    )
}