import React, { useState } from 'react'

import Modal from '../../UI/Modals/Modal'
import logo from '../../assets/images/logoFooter.svg'
import FeedbackForm from './FeedbackForm/FeedbackForm'

function Footer() {
    const [modalActive, setModalActive] = useState(false)

    return (
        <footer>
            <div className="grid grid-cols-6 gap-2.5 bg-neutral-900	p-16">
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
                <button
                    className="text-zinc-400	text-sm font-normal	no-underline"
                    onClick={() => setModalActive(true)}
                >
                    Связаться с нами
                </button>
                <Modal active={modalActive} setActive={setModalActive}>
                    <FeedbackForm />
                </Modal>
            </div>
        </footer>
    )
}

export default Footer
