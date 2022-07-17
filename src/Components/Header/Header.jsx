import React, { useState } from 'react'
import logo from './../../../src/assets/images/logoCB.png'
import car from './../../../src/assets/images/header_car.svg'
import Modal from '../../UI/Modal/Modal'

function Header() {
    const [modalActive, setModalActive] = useState(false)
    return (
        <div className="bg-gradient-to-r from-blue-700 to-blue-500 ">
            <header className="bg-header-pattern w-full bg-no-repeat bg-cover bg-center h-auto ">
                <nav className="flex flex-auto justify-between align-center items-center py-0	px-20 font-sans-serif">
                    <img className="mt-4" src={logo} alt="" />
                    <div className="mt-4 flex gap-4 ">
                        <a
                            href="$"
                            className="text-white text-lg	hover:underline"
                        >
                            О компании
                        </a>
                        <a
                            href="$"
                            className="text-white text-lg	hover:underline"
                        >
                            Автокредитование
                        </a>
                        <a
                            href="$"
                            className="text-white text-lg	hover:underline"
                        >
                            Страхование
                        </a>
                    </div>
                    <button
                        href="$"
                        className="border-2 rounded-xl border-white	 text-white text-base p-3 bg-transparent font-medium mt-4 hover:bg-bookmark-white hover:text-black active:bg-bookmark-grey active:text-black transition-all"
                        onClick={() => setModalActive(true)}
                    >
                        Личный кабинет партнера
                    </button>
                    <Modal active={modalActive} setActive={setModalActive}>
                        <div className="pt-8 pr-8 pb-0 pl-9">
                            <header>
                                <div className="flex justify-between items-center">
                                    <div>
                                        <h2 className="font-semibold text-base not-italic mb-1 my-0 text-black">
                                            Авторассрочка на новые автомобили и
                                            автомобили с пробегом
                                        </h2>
                                        <p className="not-italic font-normal text-sm m-0 mb-6">
                                            Автомобили в рассрочку до 18 месяцев
                                        </p>
                                    </div>
                                    <span
                                        className="self-start"
                                        // onClick={modalNewAutoHandler}
                                    >
                                        {/* <img src={icon} alt="closing btn" /> */}
                                    </span>
                                </div>
                            </header>
                            <article>
                                <h2>Условия:</h2>
                                <ul className="not-italic font-normal text-sm	list-none	pl-0 mb-6 mt-0">
                                    <li>
                                        &#8211; 0% за пользование рассрочкой;
                                    </li>
                                    <li>&#8211; первоначальный взнос от 0%;</li>
                                    <li>
                                        &#8211; рассрочка на 12 и 18 месяцев на
                                        новые автомобили марок Exeed, Geely;
                                    </li>
                                    <li>
                                        &#8211; рассрочка на 12 и 18 месяца на
                                        новые автомобили марок Hyundai, Genesis,
                                        Chery, Suzuki, Lada;
                                    </li>
                                    <li>
                                        &#8211; срок рассмотрения заявки меньше
                                        1 часа
                                    </li>
                                </ul>
                            </article>
                            <footer className="mb-6">
                                <button className="btn">Подать заявку</button>
                                <p className="ml-2 text-xs">
                                    Решение до 20 минут
                                </p>
                            </footer>
                        </div>
                    </Modal>
                </nav>
                <section className="py-20 pr-0 pl-20 mt-2">
                    <div className="grid grid-cols-2 items-center justify-center gap-6">
                        <div>
                            <h1 className="uppercase	text-5xl	font-semibold	mb-2 text-white">
                                car broker
                            </h1>
                            <p className="font-normal	text-base	text-justify	mb-12 text-white">
                                Компания «Car broker» является ведущим брокером
                                на <br />
                                российском рынке и оказывает полный спектр услуг
                                в <br />
                                области автокредитования и страхования.
                            </p>

                            <div className="flex list-none gap-6 pl-0">
                                <button className="btn">
                                    Автокредитование
                                </button>
                                <button className="btn-white">
                                    Подбор автомобиля
                                </button>
                            </div>
                        </div>
                        <div className="mr-0 self-end">
                            <img
                                className="w-full "
                                src={car}
                                alt="mercedes s-class"
                            />
                        </div>
                    </div>
                </section>
            </header>
        </div>
    )
}

export default Header
