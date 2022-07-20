import React, { useState } from 'react'
import { Formik } from 'formik'
import Modal from '../UI/Modals/Modal'
import logo from '../../assets/images/logoFooter.svg'

function Footer() {
    // const [activeBodyModal, setActiveBodyModal] = useState([])
    const [modalActive, setModalActive] = useState(false)
    // const showModal = (item) => {
    //     setActiveBodyModal([item])
    //     setModalActive(true)
    // }
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
                    Открыть модалку
                </button>
                <Modal active={modalActive} setActive={setModalActive}>
                    <Formik
                        initialValues={{
                            name: '',
                            email: '',
                            phone: '',
                            city: '',
                            message: '',
                        }}
                        onSubmit={(values, { resetForm }) => {
                            console.log(values)
                            resetForm({ values: '' })
                        }}
                    >
                        {({ values, handleSubmit, handleChange }) => (
                            <div>
                                <p>
                                    <label htmlFor={'name'}>Имя</label>
                                    <br />
                                    <input
                                        className="px-4"
                                        type={'text'}
                                        name={'name'}
                                        onChange={handleChange}
                                        value={values.name}
                                    />
                                </p>

                                <p>
                                    <label htmlFor={'email'}>Email</label>
                                    <br />
                                    <input
                                        className="px-4"
                                        type={'text'}
                                        name={'email'}
                                        onChange={handleChange}
                                        value={values.email}
                                    />
                                </p>

                                <p>
                                    <label htmlFor={'phone'}>
                                        Номер телефона
                                    </label>
                                    <br />
                                    <input
                                        className="px-4"
                                        type={'text'}
                                        name={'phone'}
                                        onChange={handleChange}
                                        value={values.phone}
                                    />
                                </p>

                                <p>
                                    <label htmlFor={'city'}>Ваш город</label>
                                    <br />
                                    <input
                                        className="px-4"
                                        type={'text'}
                                        name={'city'}
                                        onChange={handleChange}
                                        value={values.city}
                                    />
                                </p>

                                <p>
                                    <label htmlFor={'message'}>Сообщение</label>
                                    <br />
                                    <input
                                        className="block h-40 w-full p-4 align-top"
                                        type={'text'}
                                        name={'message'}
                                        onChange={handleChange}
                                        value={values.message}
                                        placeholder={'Введите Ваше сообщение'}
                                    />
                                </p>

                                <button onClick={handleSubmit} type={'submit'}>
                                    Отправить
                                </button>
                            </div>
                        )}
                    </Formik>
                </Modal>
            </div>
        </footer>
    )
}

export default Footer
