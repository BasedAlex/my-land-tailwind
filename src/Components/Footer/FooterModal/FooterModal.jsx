import React from 'react'
import { Formik } from 'formik'
import * as yup from 'yup'

import InputMask from 'react-input-mask'

function FooterModal() {
    const unmask = (value) => {
        const arr = value.split('')
        return arr
            .filter((i) => i !== '-' && i !== '(' && i !== ')' && i !== ' ')
            .join('')
    }

    const validationSchema = yup.object().shape({
        name: yup
            .string()
            .typeError('Должно быть строкой')
            .required('Обязательное поле'),
        phone: yup
            .string()
            .typeError('Должно быть строкой')
            .required('Обязательное поле'),
        message: yup
            .string()
            .typeError('Должно быть строкой')
            .required('Введите сообщение'),
    })

    return (
        <Formik
            initialValues={{
                name: '',
                email: '',
                city: '',
                message: '',
                phone: '',
            }}
            onSubmit={(values, { resetForm }) => {
                const obj = { ...values, phone: unmask(values.phone) }
                console.log(obj)
                resetForm({ values: '' })
            }}
            validationSchema={validationSchema}
        >
            {({
                values,
                errors,
                touched,
                handleSubmit,
                handleChange,
                isValid,
                dirty,
            }) => (
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
                    {touched.name && errors.name && (
                        <p className="text-red-600">{errors.name}</p>
                    )}
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
                        <InputMask
                            className="px-4"
                            type={'text'}
                            name={'phone'}
                            onChange={handleChange}
                            value={values.phone}
                            mask="+7(999) 999 99 99"
                            placeholder="+7(000) 000 00 00"
                            maskChar=" "
                            inputMode="numeric"
                        />
                    </p>
                    {touched.phone && errors.phone && (
                        <p className="text-red-600">{errors.phone}</p>
                    )}
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
                    {touched.message && errors.message && (
                        <p className="text-red-600">{errors.message}</p>
                    )}

                    <button
                        disabled={!isValid && !dirty}
                        onClick={handleSubmit}
                        type={'submit'}
                    >
                        Отправить
                    </button>
                </div>
            )}
        </Formik>
    )
}

export default FooterModal
