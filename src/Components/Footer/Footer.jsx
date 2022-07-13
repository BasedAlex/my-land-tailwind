import React from 'react'
import logo from '../../assets/images/logoFooter.svg'

function Footer() {
    return (
        <footer>
            <div className="grid grid-cols-5 gap-2.5 bg-neutral-900	p-16">
                <img src={logo} alt="" />
                <a
                    href="%"
                    className="text-zinc-400	text-sm font-normal	no-underline	"
                >
                    О компании
                </a>
                <a
                    href="%"
                    className="text-zinc-400	text-sm font-normal	no-underline	"
                >
                    Кредитный калькулятор /<br />
                    Заявка на автокредит
                </a>
                <a
                    href="%"
                    className="text-zinc-400	text-sm font-normal	no-underline	"
                >
                    Личный кабинет <br />
                    партнера
                </a>
                <a
                    href="%"
                    className="text-zinc-400	text-sm font-normal	no-underline	"
                >
                    Контакты <br /> и сотрудничество
                </a>
            </div>
        </footer>
    )
}

export default Footer
