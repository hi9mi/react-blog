import PropTypes from 'prop-types';
import React from 'react';

export default function BigRubricBlock({ title, imageUrl, text }) {
	return (
		<section className='article__big'>
			<img src={imageUrl} alt='ARTICLE' className='img__article__big' />
			<div className='article__title__big'>
				<h2>{title}</h2>
			</div>
			<div className='bg__article__big'>
				<div className='article__text__big'>
					<p className='p-big'>{text}</p>
				</div>
			</div>
		</section>
	);
}

BigRubricBlock.propTypes = {
	title: PropTypes.string.isRequired,
	imageUrl: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
};
