import React from 'react';
import ContentLoader from 'react-content-loader';

export default function LoadingBlock() {
	return (
		<ContentLoader
			className='article'
			speed={2}
			width={277}
			height={330}
			viewBox='0 0 277 330'
			backgroundColor='#dbfbff'
			foregroundColor='#ffffff'>
			<rect x='0' y='0' rx='0' ry='0' width='277' height='330' />
		</ContentLoader>
	);
}
