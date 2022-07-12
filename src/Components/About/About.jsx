import React from 'react'

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
					<div className='font-normal text-sm text-start self-start	border border-solid	border-gray-300 rounded-md	p-2.5	min-h-full'>
						<b>Богатый опыт</b> успешной работы на российском рынке
					</div>
					<div className='font-normal text-sm text-start self-start	border border-solid	border-gray-300 rounded-md	p-2.5	min-h-full'>
						<b>Более 1000</b> партнеров – официальных дилерских центров
					</div>
					<div className='font-normal text-sm text-start self-start	border border-solid	border-gray-300 rounded-md	p-2.5	min-h-full'>
						Сотрудничество <br /> с <b>ключевыми банками</b> и
						<b> страховыми компаниями</b>
					</div>
					<div className='font-normal text-sm text-start self-start	border border-solid	border-gray-300 rounded-md	p-2.5	min-h-full'>
						Представлены в <b>каждом регионе России</b>
					</div>
					<div className='font-normal text-sm text-start self-start	border border-solid	border-gray-300 rounded-md	p-2.5	min-h-full'>
						<b>Проверенные</b> и <b>надёжные</b> партнеры
					</div>
					<div className='font-normal text-sm text-start self-start	border border-solid	border-gray-300 rounded-md	p-2.5	min-h-full'>
						<b>Гарантии</b> и <b>высокое качество</b> оказываемых услуг
					</div>
				</div>
			</div>
		</section>
	)
}

export default About
