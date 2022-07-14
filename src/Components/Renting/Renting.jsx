import React from 'react'
import useModal from '../../hooks/use-modal'
import Modal from '../../UI/Modal/Modal'
import icon from '../../assets/images/coolicon-close.svg'

/* eslint-disable react/prop-types */

function Renting() {
    const [modalNewAuto, modalNewAutoHandler] = useModal()
    const [modalUsedAuto, modalUsedAutoHandler] = useModal()
    const [modalLoanPayment, modalLoanPaymentHandler] = useModal()
    const [modalInstallment, modalInstallmentHandler] = useModal()
    const [modalGOS, modalGOSHandler] = useModal()

    const modalContentNewAuto = modalNewAuto && (
        <Modal onClick={modalNewAutoHandler}>
            <div className="pt-8 pr-8 pb-0 pl-9">
                <header>
                    <div className="flex justify-between items-center">
                        <div>
                            <h2 className="font-semibold text-base not-italic mb-1 my-0 text-black">
                                Авторассрочка на новые автомобили и автомобили с
                                пробегом
                            </h2>
                            <p className="not-italic font-normal text-sm m-0 mb-6">
                                Автомобили в рассрочку до 18 месяцев
                            </p>
                        </div>
                        <span
                            className="self-start"
                            onClick={modalNewAutoHandler}
                        >
                            <img src={icon} alt="closing btn" />
                        </span>
                    </div>
                </header>
                <article>
                    <h2>Условия:</h2>
                    <ul className="not-italic font-normal text-sm	list-none	pl-0 mb-6 mt-0">
                        <li>&#8211; 0% за пользование рассрочкой;</li>
                        <li>&#8211; первоначальный взнос от 0%;</li>
                        <li>
                            &#8211; рассрочка на 12 и 18 месяцев на новые
                            автомобили марок Exeed, Geely;
                        </li>
                        <li>
                            &#8211; рассрочка на 12 и 18 месяца на новые
                            автомобили марок Hyundai, Genesis, Chery, Suzuki,
                            Lada;
                        </li>
                        <li>&#8211; срок рассмотрения заявки меньше 1 часа</li>
                    </ul>
                </article>
                <footer className="mb-6">
                    <button className="btn">Подать заявку</button>
                    <p className="ml-2 text-xs">Решение до 20 минут</p>
                </footer>
            </div>
        </Modal>
    )

    const modalContentUsedAuto = modalUsedAuto && (
        <Modal onClick={modalUsedAutoHandler}>
            <div className="pt-8 pr-8 pb-0 pl-9">
                <header>
                    <div className="flex justify-between items-center">
                        <div>
                            <h2 className="font-semibold text-base not-italic mb-1 my-0 text-black">
                                Условия кредитования
                            </h2>
                        </div>
                        <span
                            className="self-start"
                            onClick={modalUsedAutoHandler}
                        >
                            <img src={icon} alt="closing btn" />
                        </span>
                    </div>
                </header>
                <article>
                    <ul className="not-italic font-normal text-sm	list-none	pl-0 mb-6 mt-0">
                        <li>&#8211; Быстрое и простое оформление;</li>
                        <li>
                            &#8211; Минимальный пакет документов для оформления
                            – паспорт гражданина РФ;
                        </li>
                        <li>&#8211; Рассмотрение заявки – 1 час;</li>
                        <li>
                            &#8211; Первоначальный взнос – от 0% от стоимости
                            автомобиля;
                        </li>
                        <li>
                            &#8211; Максимальная сумма кредита 6 900 000 рублей;
                        </li>
                    </ul>
                </article>
                <article>
                    <h2 className="font-semibold text-base not-italic mb-1 my-0 text-black">
                        Условия:
                    </h2>
                    <ul className="not-italic font-normal text-sm	list-none	pl-0 mb-6 mt-0">
                        <li>&#8211; Гражданство РФ</li>
                        <li>&#8211; Возраст от 20 лет</li>
                    </ul>
                </article>
                <footer className="mb-6">
                    <button className="btn">Подать заявку</button>
                    <p className="ml-2 text-xs">Решение до 20 минут</p>
                </footer>
            </div>
        </Modal>
    )

    const modalContentLoanPayment = modalLoanPayment && (
        <Modal onClick={modalLoanPaymentHandler}>
            <div className="pt-8 pr-8 pb-0 pl-9">
                <header>
                    <div className="flex justify-between items-center">
                        <div>
                            <h2 className="font-semibold text-base not-italic mb-1 my-0 text-black">
                                Банк возмещает каждый 12-й платеж по кредиту,{' '}
                                <br />
                                оплачиваемый заемщиком в течение срока действия
                                договора потребительского кредита, если:
                            </h2>
                        </div>
                        <span
                            className="self-start"
                            onClick={modalLoanPaymentHandler}
                        >
                            <img src={icon} alt="closing btn" />
                        </span>
                    </div>
                </header>
                <article>
                    <ul className="not-italic font-normal text-sm	list-none	pl-0 mb-6 mt-0">
                        <li>
                            &#8211; весь период пользования кредитом
                            отсутствовала просроченная задолженность;
                        </li>
                        <li>
                            &#8211; заемщик в каждом отчетном периоде совершал
                            от 5 покупок на общую сумму от 10 000 рублей за счет
                            собственных и/или заемных средств;
                        </li>
                        <li>
                            &#8211; кредит является действующим на дату каждого
                            12 платежа по Графику платежей, <br />и Заемщик в
                            течение всего срока действия кредита оплачивал
                            платежи согласно первоначальным условиям,
                            установленным в Договоре потребительского кредита{' '}
                            <br />
                            на момент заключения.
                        </li>
                    </ul>
                </article>
                <article>
                    <p>
                        При соблюдении вышеуказанных условий каждый 12-й платеж
                        по кредиту, оплачиваемый заемщиком в течение срока
                        действия договора потребительского кредита.
                    </p>
                </article>
                <footer className="mb-6">
                    <button className="btn">Подать заявку</button>
                    <p className="ml-2 text-xs">Решение до 20 минут</p>
                </footer>
            </div>
        </Modal>
    )

    const modalContentInstallment = modalInstallment && (
        <Modal onClick={modalInstallmentHandler}>
            <div className="pt-8 pr-8 pb-0 pl-9">
                <header>
                    <div className="flex justify-between items-center">
                        <div>
                            <h2 className="font-semibold text-base not-italic mb-1 my-0 text-black">
                                Условия:
                            </h2>
                        </div>
                        <span
                            className="self-start"
                            onClick={modalInstallmentHandler}
                        >
                            <img src={icon} alt="closing btn" />
                        </span>
                    </div>
                </header>
                <article>
                    <ul className="not-italic font-normal text-sm	list-none	pl-0 mb-6 mt-0">
                        <li>&#8211; 0% за пользование рассрочкой;</li>
                        <li>&#8211; первоначальный взнос от 0%;</li>
                        <li>
                            &#8211; рассрочка на 12 и 18 месяцев на новые
                            автомобили марок Exeed, Geely;
                        </li>
                        <li>
                            &#8211; рассрочка на 12 и 18 месяца на новые
                            автомобили марок Hyundai, Genesis, Chery, Suzuki,
                            Lada;
                        </li>
                        <li>&#8211; срок рассмотрения заявки меньше 1 часа</li>
                    </ul>
                </article>
                <footer className="mb-6">
                    <button className="btn">Подать заявку</button>
                    <p className="ml-2 text-xs">Решение до 20 минут</p>
                </footer>
            </div>
        </Modal>
    )

    const modalContentGOS = modalGOS && (
        <Modal onClick={modalGOSHandler}>
            <div className="pt-8 pr-8 pb-0 pl-9">
                <header>
                    <div className="flex justify-between items-center">
                        <div>
                            <h2 className="font-semibold text-base not-italic mb-1 my-0 text-black">
                                Программа «Гарантия Отличной Ставки»
                            </h2>
                            <p className="not-italic font-normal text-sm m-0 mb-6">
                                предполагает осуществление Банком при полном
                                погашении кредита пересчета <br />
                                процентов, оплаченных за весь срок действия
                                Договора потребительского кредита, <br />
                                по сниженной ставке, при условии что:
                            </p>
                        </div>
                        <span className="self-start" onClick={modalGOSHandler}>
                            <img src={icon} alt="closing btn" />
                        </span>
                    </div>
                </header>
                <article>
                    <ul className="not-italic font-normal text-sm	list-none	pl-0 mb-6 mt-0">
                        <li>
                            &#8211; за весь период пользования кредитом
                            отсутствовала просроченная задолженность;
                        </li>
                        <li>
                            &#8211; частичное/полное досрочное погашение
                            произведено не ранее, чем через 2 (два) года <br />с
                            даты начала действия Договора потребительского
                            кредита;
                        </li>
                        <li>
                            &#8211; в течение всего срока кредитного договора в
                            каждом отчётном периоде было сделано <br />
                            от 5 любых покупок (их общая сумма должна составлять
                            от 10 000 руб.)
                        </li>
                        <li>
                            &#8211; заемщик в течение всего срока действия
                            кредита оплачивал платежи согласно <br />
                            первоначальным условиям, установленным в Договоре
                            потребительского кредита <br />
                            на момент заключения (за исключением изменений,
                            вызванных досрочным погашением, <br />с соблюдением
                            предусмотренных услугой требований).
                        </li>
                    </ul>
                </article>
                <article>
                    <p>
                        Разница в оплаченных процентах и процентах, рассчитанных
                        по сниженной процентной ставке, возвращается Заемщику на
                        его Банковский счет. <br />
                        Является первой услугой в автокредитовании,
                        подразумевающей наличие кэшбэка заемщику!
                    </p>
                </article>
                <footer className="mb-6">
                    <button className="btn">Подать заявку</button>
                    <p className="ml-2 text-xs">Решение до 20 минут</p>
                </footer>
            </div>
        </Modal>
    )

    return (
        <>
            <section>
                <div className="grid grid-cols-renting bg-bookmark-white py-14 px-20 ">
                    <div className="flex flex-col align-start text-xl font-serif">
                        <h3 className="font-semibold">Автокредитование</h3>
                        <p className="text-base	mb-2 mt-5">
                            Кредит на покупку автомобиля
                        </p>
                        <p className="text-base	mb-2">
                            Ставка от <br />
                            <b>14.9%</b>
                        </p>
                        <p className="text-base	mb-2">
                            Сумма кредита до <br />
                            <b>9 млн.</b>
                        </p>
                        <p className="text-base	mb-2 ">
                            Срок кредита
                            <br />
                            <b>до 84 месяцев</b>
                        </p>
                        <button className="btn">Подать заявку</button>
                        <p className="text-xs self-center text-slate-500">
                            Решение до 20 минут
                        </p>
                    </div>
                    <div className="ml-12">
                        <div className="grid grid-cols-2 gap-8">
                            <div className="bg-white shadow-md	 shadow-neutral-500	">
                                <div className="grid grid-cols-rentingrevtop">
                                    <h4 className="text-sky-900	text-base font-semibold	pl-6 pr-14 pt-4">
                                        Новый автомобиль
                                    </h4>
                                    <input
                                        type="submit"
                                        value=""
                                        className="bg-modalViewButtonG hover:bg-modalViewButtonB active:bg-modalViewButtonB bg-no-repeat	bg-center	border-none	pt-6"
                                        onClick={modalNewAutoHandler}
                                    />
                                </div>
                                <p className="font-sm pl-6 pr-5 my-3.5">
                                    Иностранные и отечественные марки. Срок
                                    кредита – от 6 до 84 месяцев. Досрочное
                                    погашение без комиссии. Программой
                                    предусмотрено оформление договора
                                    страхования автомобиля от рисков хищения
                                    (угона), утраты (гибели).
                                </p>
                                {modalContentNewAuto}
                            </div>

                            <div className="bg-white shadow-md shadow-neutral-500">
                                <div className="grid grid-cols-rentingrevtop">
                                    <h4 className="text-sky-900	text-base font-semibold	pl-6 pr-14 pt-4">
                                        Автомобиль с пробегом
                                    </h4>
                                    <input
                                        type="submit"
                                        value=""
                                        className="bg-modalViewButtonG hover:bg-modalViewButtonB active:bg-modalViewButtonB bg-no-repeat	bg-center	border-none	pt-6"
                                        onClick={modalUsedAutoHandler}
                                    />
                                </div>
                                <p className="font-sm pl-6 pr-5 my-3.5">
                                    Автомобили иностранных и отечественных
                                    марок. Максимальный возраст автомобиля — 15
                                    лет. Срок кредита – от 6 до 72 месяцев.
                                    Досрочное погашение без комиссии.
                                    Специальные ставки на покупку автомобилей не
                                    старше 5 и 10 лет.
                                </p>
                                {modalContentUsedAuto}
                            </div>
                        </div>

                        <div className="grid grid-cols-3 mt-8 gap-x-7">
                            <div className="bg-white shadow-md	shadow-neutral-500">
                                <div className="grid grid-cols-rentingrev">
                                    <h4 className="text-sky-900	text-base font-semibold	pl-6 pr-14	pt-4">
                                        Платежи в подарок!
                                    </h4>
                                    <input
                                        type="submit"
                                        value=""
                                        className="bg-modalViewButtonG hover:bg-modalViewButtonB active:bg-modalViewButtonB bg-no-repeat	bg-center	border-none	pt-6"
                                        onClick={modalLoanPaymentHandler}
                                    />
                                </div>
                                <p className="font-sm pl-6 pr-5 font-sans	my-3.5">
                                    Возмещение каждого 12-го платежа по кредиту
                                </p>
                                {modalContentLoanPayment}
                            </div>
                            <div className="bg-white shadow-md	 shadow-neutral-500">
                                <div className="grid grid-cols-rentingrev">
                                    <h4 className="text-sky-900	text-base font-semibold	pl-6 pr-14 pt-4">
                                        Авторассрочка на новые автомобили и на
                                        автомобили с пробегом
                                    </h4>

                                    <input
                                        type="submit"
                                        value=""
                                        className="bg-modalViewButtonG hover:bg-modalViewButtonB active:bg-modalViewButtonB bg-no-repeat bg-center	border-none	pt-6 "
                                        onClick={modalInstallmentHandler}
                                    />
                                </div>
                                <p className="font-sm pl-6 pr-5 my-3.5">
                                    Возмещение каждого 12-го платежа по кредиту
                                </p>
                                {modalContentInstallment}
                            </div>
                            <div className="bg-white shadow-md	shadow-neutral-500">
                                <div className="grid grid-cols-rentingrev">
                                    <h4 className="text-sky-900	text-base font-semibold	pl-6 pr-14 pt-4">
                                        Г.О.С. программа
                                    </h4>
                                    <input
                                        type="submit"
                                        value=""
                                        className="bg-modalViewButtonG hover:bg-modalViewButtonB active:bg-modalViewButtonB bg-no-repeat	bg-center	border-none	pt-6  "
                                        onClick={modalGOSHandler}
                                    />
                                </div>
                                <p className="font-sm pl-6 pr-5 my-3.5">
                                    Снижению процентной ставки по договору
                                    потребительского кредита на покупку
                                    транспортного средства.
                                </p>
                                {modalContentGOS}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
/* eslint-enable react/prop-types */
export default Renting
