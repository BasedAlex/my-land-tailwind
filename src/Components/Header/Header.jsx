import React from 'react'
import logo from './../../../src/assets/images/logoCB.png'
import car from './../../../src/assets/images/header_car.svg'

function Header() {
	return (
		<div className='bg-gradient-to-r from-blue-700 to-blue-500 '>
			<header className='bg-header-pattern w-full bg-no-repeat bg-cover bg-center h-auto '>
				<nav className='flex flex-auto justify-between align-center items-center py-0	px-20 font-serif'>
					<img className='mt-4' src={logo} alt='' />
					<div className='mt-4 flex gap-4 '>
						<a href='$' className='text-white text-lg	hover:underline'>
							О компании
						</a>
						<a href='$' className='text-white text-lg	hover:underline'>
							Автокредитование
						</a>
						<a href='$' className='text-white text-lg	hover:underline'>
							Страхование
						</a>
					</div>
					<button
						href='$'
						className='border-2 rounded-xl border-white	 text-white text-base p-3 bg-transparent font-medium mt-4 hover:bg-bookmark-white hover:text-black active:bg-bookmark-grey active:text-black transition-all'
					>
						Личный кабинет партнера
					</button>
				</nav>
				<section className='py-20 pr-0 pl-20 mt-2'>
					<div className='grid grid-cols-2 items-center justify-center gap-6'>
						<div>
							<h1 className='uppercase	text-5xl	font-semibold	mb-2 text-white'>
								car broker
							</h1>
							<p className='font-normal	text-base	text-justify	mb-12 text-white'>
								Компания «Car broker» является ведущим брокером на <br />
								российском рынке и оказывает полный спектр услуг в <br />
								области автокредитования и страхования.
							</p>

							<div className='flex list-none gap-6 pl-0'>
								<button className='rounded-md	font-medium	text-sm	border-none	transition-all text-white bg-bookmark-blue px-5 py-3 hover:bg-bookmark-hover-blue active:bg-bookmark-hover-blue focus:bg-bookmark-focus-blue'>
									Автокредитование
								</button>
								<button className='rounded-md	font-medium	text-sm	border-none	transition-all text-bookmark-purple bg-bookmark-white px-5 py-3 hover:bg-bookmark-blue hover:text-bookmark-white active:bg-bookmark-blue active:text-bookmark-white focus:bg-bookmark-purple focus:text-bookmark-white'>
									Подбор автомобиля
								</button>
							</div>
						</div>
						<div className='mr-0 self-end'>
							<img className='w-full ' src={car} alt='mercedes s-class' />
						</div>
					</div>
				</section>
			</header>
		</div>
	)
}

export default Header
