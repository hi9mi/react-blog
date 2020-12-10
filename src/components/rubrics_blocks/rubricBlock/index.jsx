import PropTypes from 'prop-types';
import React from 'react';

export default function RubricsBlock({ title, imageUrl, text }) {
	return (
		<section className='article'>
			<img src={imageUrl} alt='ARTICLE' className='img__article' />
			<div className='article__title'>
				<h2>{title}</h2>
			</div>
			<div className='bg__article'>
				<div className='article__text'>
					<p>{text}</p>
				</div>
			</div>
		</section>
	);
}

RubricsBlock.propTypes = {
	title: PropTypes.string.isRequired,
	imageUrl: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
};

RubricsBlock.defaultProps = {
	title: 'Нет названия',
	text: 'Нет текста',
}