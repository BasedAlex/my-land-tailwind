import React from 'react'
import Card from './Card/Card'

function About() {
	return (
		<section>
			<h2 className='font-semibold	not-italic	text-2xl ml-24 mt-6 font-Montserrat'>
				О компании
			</h2>
			<div className='grid grid-cols-2 items-center justify-center mx-24 gap-x-10	mb-20'>
				<div>
					<p className='font-normal	text-base text-start mt-6 mb-4'>
						Компания «Car broker»* является ведущим брокером на российском рынке
						и оказывает полный спектр услуг в области автокредитования и
						страхования.
					</p>
					<p className='font-normal	text-base text-start mb-4'>
						«Car broker» сотрудничает с крупными автопроизводителями и
						представительствами компаний иностранных брендов в Российской
						Федерации, с официальными дилерскими центрами, ключевыми банками и
						страховыми компаниями на рынке автокредитования.
					</p>
					<p className='font-normal text-xs	text-start my-0 text-zinc-400	'>
						* Юридическое наименование ООО «Автозайм»
					</p>
					<p className='font-normal text-xs	text-start my-0 text-zinc-400 '>
						Юридический адрес: 156000, г. Кострома, пр. Текстильщиков, 40/39,
						помещение 2 <br /> ОГРН 1054408615470, ИНН 4401051345, КПП 440101001
					</p>
				</div>
				<div className='grid auto-rows-fr grid-cols-3 gap-4 items-center justify-center'>
					<Card />
				</div>
			</div>
		</section>
	)
}

export default About
