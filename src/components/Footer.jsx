import React from 'react';

export default function Footer() {
	return (
		<footer className='foot'>
			<div className='container'>
				<div className='foot__items'>
					<div className='foot__item'>
						<div className='foot__items__mini'>
							<div className='foot__item__mini'>
								<h1 className='foot__title'>Подписаться</h1>
								<p>
									<a href='/' className='a-foot'>
										О нас
									</a>
								</p>
								<p>
									<a href='/' className='a-foot'>
										Реклама на сайте
									</a>
								</p>
							</div>
							<div className='foot__item__mini'>
								<h1 className='foot__title'>Рубрики</h1>
								<p>
									<a href='/' className='a-foot'>
										Рубрика 1
									</a>
								</p>
								<p>
									<a href='/' className='a-foot'>
										Рубрика 2
									</a>
								</p>
								<p>
									<a href='/' className='a-foot'>
										Рубрика 3
									</a>
								</p>
								<p>
									<a href='/' className='a-foot'>
										Рубрика 4
									</a>
								</p>
							</div>
						</div>
					</div>
					<div className='foot__item'>
						<div className='foot__items__mini'>
							<div className='foot__item__mini'>
								<h1 className='foot__title'>Контакты</h1>
								<p>
									<a href='/' className='a-foot'>
										+7 777 719 28 86
									</a>
								</p>
								<p>
									<a href='/' className='a-foot'>
										blog@beautyprof.ru
									</a>
								</p>
							</div>
							<div className='foot__item__mini'>
								<a className='a-foot' href='/'>
									<i className='fab fa-telegram'></i>
								</a>
								<a className='a-foot' href='/'>
									<i className='fab fa-facebook'></i>
								</a>
								<a className='a-foot' href='/'>
									<i className='fab fa-instagram'></i>
								</a>
								<p>
									<b>Внимание!</b> Копирование материалов разрешается только с указание dofollow-ссылки
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
