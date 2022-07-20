import React from 'react'
import { Formik } from 'formik'

function FooterModal() {
    return (
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
                        <label htmlFor={'phone'}>Номер телефона</label>
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
    )
}

export default FooterModal
