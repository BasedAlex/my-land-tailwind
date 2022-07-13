import React from 'react'
import useModal from '../../../hooks/use-modal'
import Modal from '../../../UI/Modal/Modal'
import ModalBtn from '../../../UI/ModalBtn/ModalBtn'
import icon from '../../../assets/images/coolicon-close.svg'

export default function RentingModals() {
    // const [modalNewAuto, modalNewAutoHandler] = useModal()
    const [modalUsedAuto, modalUsedAutoHandler] = useModal()
    // const [modalLoanPayment, modalLoanPaymentHandler] = useModal()
    // const [modalInstallment, modalInstallmentHandler] = useModal()
    // const [modalGOS, modalGOSHandler] = useModal()

    // const modalContentNewAuto = modalNewAuto && (
    // 	<Modal onClick={modalNewAutoHandler}>
    // 		<div className={s['modal-container']}>
    // 			<header>
    // 				<div className={s['modal-wrapper']}>
    // 					<div className={s['modal-text-box']}>
    // 						<h2 className={s['modal-title']}>
    // 							Авторассрочка на новые автомобили и автомобили с пробегом
    // 						</h2>
    // 						<p className={s['modal-description']}>
    // 							Автомобили в рассрочку до 18 месяцев
    // 						</p>
    // 					</div>
    // 					<span className={s['closing-btn']} onClick={modalNewAutoHandler}>
    // 						<img src={icon} alt='closing btn' />
    // 					</span>
    // 				</div>
    // 			</header>
    // 			<article>
    // 				<h2>Условия:</h2>
    // 				<ul className={s['modal-list']}>
    // 					<li>&#8211; 0% за пользование рассрочкой;</li>
    // 					<li>&#8211; первоначальный взнос от 0%;</li>
    // 					<li>
    // 						&#8211; рассрочка на 12 и 18 месяцев на новые автомобили марок
    // 						Exeed, Geely;
    // 					</li>
    // 					<li>
    // 						&#8211; рассрочка на 12 и 18 месяца на новые автомобили марок
    // 						Hyundai, Genesis, Chery, Suzuki, Lada;
    // 					</li>
    // 					<li>&#8211; срок рассмотрения заявки меньше 1 часа</li>
    // 				</ul>
    // 			</article>
    // 			<footer className={s['modal-footer']}>
    // 				<ModalBtn />
    // 				<p className={s.smallText}>Решение до 20 минут</p>
    // 			</footer>В
    // 		</div>
    // 	</Modal>
    // )

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
                    <ModalBtn />
                    <p className="ml-8">Решение до 20 минут</p>
                </footer>
            </div>
        </Modal>
    )

    // const modalContentLoanPayment = modalLoanPayment && (
    // 	<Modal onClick={modalLoanPaymentHandler}>
    // 		<div className={s['modal-container']}>
    // 			<header>
    // 				<div className={s['modal-wrapper']}>
    // 					<div className={s['modal-text-box']}>
    // 						<h2 className={s['modal-title']}>
    // 							Банк возмещает каждый 12-й платеж по кредиту, <br />
    // 							оплачиваемый заемщиком в течение срока действия договора
    // 							потребительского кредита, если:
    // 						</h2>
    // 					</div>
    // 					<span
    // 						className={s['closing-btn']}
    // 						onClick={modalLoanPaymentHandler}
    // 					>
    // 						<img src={icon} alt='closing btn' />
    // 					</span>
    // 				</div>
    // 			</header>
    // 			<article>
    // 				<ul className={s['modal-list']}>
    // 					<li>
    // 						&#8211; весь период пользования кредитом отсутствовала
    // 						просроченная задолженность;
    // 					</li>
    // 					<li>
    // 						&#8211; заемщик в каждом отчетном периоде совершал от 5 покупок на
    // 						общую сумму от 10 000 рублей за счет собственных и/или заемных
    // 						средств;
    // 					</li>
    // 					<li>
    // 						&#8211; кредит является действующим на дату каждого 12 платежа по
    // 						Графику платежей, <br />
    // 						и Заемщик в течение всего срока действия кредита оплачивал платежи
    // 						согласно первоначальным условиям, установленным в Договоре
    // 						потребительского кредита <br />
    // 						на момент заключения.
    // 					</li>
    // 				</ul>
    // 			</article>
    // 			<article>
    // 				<p>
    // 					При соблюдении вышеуказанных условий каждый 12-й платеж по кредиту,
    // 					оплачиваемый заемщиком в течение срока действия договора
    // 					потребительского кредита.
    // 				</p>
    // 			</article>
    // 			<footer className={s['modal-footer']}>
    // 				<ModalBtn />
    // 				<p className={s.smallText}>Решение до 20 минут</p>
    // 			</footer>
    // 		</div>
    // 	</Modal>
    // )

    // const modalContentInstallment = modalInstallment && (
    // 	<Modal onClick={modalInstallmentHandler}>
    // 		<div className={s['modal-container']}>
    // 			<header>
    // 				<div className={s['modal-wrapper']}>
    // 					<div className={s['modal-text-box']}>
    // 						<h2 className={s['modal-title']}>Условия:</h2>
    // 					</div>
    // 					<span
    // 						className={s['closing-btn']}
    // 						onClick={modalInstallmentHandler}
    // 					>
    // 						<img src={icon} alt='closing btn' />
    // 					</span>
    // 				</div>
    // 			</header>
    // 			<article>
    // 				<ul className={s['modal-list']}>
    // 					<li>&#8211; 0% за пользование рассрочкой;</li>
    // 					<li>&#8211; первоначальный взнос от 0%;</li>
    // 					<li>
    // 						&#8211; рассрочка на 12 и 18 месяцев на новые автомобили марок
    // 						Exeed, Geely;
    // 					</li>
    // 					<li>
    // 						&#8211; рассрочка на 12 и 18 месяца на новые автомобили марок
    // 						Hyundai, Genesis, Chery, Suzuki, Lada;
    // 					</li>
    // 					<li>&#8211; срок рассмотрения заявки меньше 1 часа</li>
    // 				</ul>
    // 			</article>
    // 			<footer className={s['modal-footer']}>
    // 				<ModalBtn />
    // 				<p className={s.smallText}>Решение до 20 минут</p>
    // 			</footer>
    // 		</div>
    // 	</Modal>
    // )

    // const modalContentGOS = modalGOS && (
    // 	<Modal onClick={modalGOSHandler}>
    // 		<div className={s['modal-container']}>
    // 			<header>
    // 				<div className={s['modal-wrapper']}>
    // 					<div className={s['modal-text-box']}>
    // 						<h2 className={s['modal-title']}>
    // 							Программа «Гарантия Отличной Ставки»
    // 						</h2>
    // 						<p className={s['modal-description']}>
    // 							предполагает осуществление Банком при полном погашении кредита
    // 							пересчета <br />
    // 							процентов, оплаченных за весь срок действия Договора
    // 							потребительского кредита, <br />
    // 							по сниженной ставке, при условии что:
    // 						</p>
    // 					</div>
    // 					<span className={s['closing-btn']} onClick={modalGOSHandler}>
    // 						<img src={icon} alt='closing btn' />
    // 					</span>
    // 				</div>
    // 			</header>
    // 			<article>
    // 				<ul className={s['modal-list']}>
    // 					<li>
    // 						&#8211; за весь период пользования кредитом отсутствовала
    // 						просроченная задолженность;
    // 					</li>
    // 					<li>
    // 						&#8211; частичное/полное досрочное погашение произведено не ранее,
    // 						чем через 2 (два) года <br />с даты начала действия Договора
    // 						потребительского кредита;
    // 					</li>
    // 					<li>
    // 						&#8211; в течение всего срока кредитного договора в каждом
    // 						отчётном периоде было сделано <br />
    // 						от 5 любых покупок (их общая сумма должна составлять от 10 000
    // 						руб.)
    // 					</li>
    // 					<li>
    // 						&#8211; заемщик в течение всего срока действия кредита оплачивал
    // 						платежи согласно <br />
    // 						первоначальным условиям, установленным в Договоре потребительского
    // 						кредита <br />
    // 						на момент заключения (за исключением изменений, вызванных
    // 						досрочным погашением, <br />с соблюдением предусмотренных услугой
    // 						требований).
    // 					</li>
    // 				</ul>
    // 			</article>
    // 			<article>
    // 				<p>
    // 					Разница в оплаченных процентах и процентах, рассчитанных по
    // 					сниженной процентной ставке, возвращается Заемщику на его Банковский
    // 					счет. <br />
    // 					Является первой услугой в автокредитовании, подразумевающей наличие
    // 					кэшбэка заемщику!
    // 				</p>
    // 			</article>
    // 			<footer className={s['modal-footer']}>
    // 				<ModalBtn />
    // 				<p className={s.smallText}>Решение до 20 минут</p>
    // 			</footer>
    // </div>
    // </Modal>
    // )

    return <div>RentingModals</div>
}