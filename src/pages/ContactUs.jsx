import React from 'react';

export default function ContactUs() {
	return (
		<div className='container'>
			<div className='title__page'>
				<h1>Контакты</h1>
			</div>
			<div className='wrapper__contacts'>
				<div className='text__contacts'>
					Связаться со мной можно по почте blog@beautyprof.ru, которая всегда со мной на всех девайсах. Отвечаю не
					мгновенно, но обязательно. А также можно написать в этом разделе, заполнив необходимые поля для комментария.
					Всегда рада общению 🙂
				</div>
				<p>Отправьте ваше письмо прямо сейчас!</p>
				<form action='#'>
					<textarea className='textarea__contacts' name='text' placeholder='Ваше сообщение'></textarea>
					<input className='input__contacts' type='text' placeholder='Ваш email' />
					<button className='btn__contacts' type='submit'>
						Отправить
					</button>
				</form>
			</div>
		</div>
	);
}
