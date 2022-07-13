import React from 'react'

const data = [
	{
		text: (
			<>
				<b>Богатый опыт</b> успешной работы на российском рынке
			</>
		),
	},
	{
		text: (
			<>
				<b>Более 1000</b> партнеров – официальных дилерских центров
			</>
		),
	},
	{
		text: (
			<>
				Сотрудничество <br /> с <b>ключевыми банками</b> и{' '}
				<b> страховыми компаниями</b>
			</>
		),
	},
	{
		text: (
			<>
				Представлены в <b>каждом регионе России</b>
			</>
		),
	},
	{
		text: (
			<>
				<b>Проверенные</b> и <b>надёжные</b> партнеры
			</>
		),
	},
	{
		text: (
			<>
				<b>Гарантии</b> и <b>высокое качество</b> оказываемых услуг
			</>
		),
	},
]

const Card = () =>
	data.map((item, idX) => {
		return (
			<div
				key={idX}
				className='font-normal text-sm text-start self-start	border border-solid	border-gray-300 rounded-md	p-2.5	min-h-full'
			>
				{item.text}
			</div>
		)
	})

export default Card
