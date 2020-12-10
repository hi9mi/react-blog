import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

export default function Button({ children, requestCall, showMore }) {
	return (
		<button
			className={classNames(
				' ',
				{
					request__call: requestCall,
				},
				{ show__more: showMore },
			)}>
			{children}
		</button>
	);
}

Button.propTypes = {
	requestCall: PropTypes.bool,
	showMore: PropTypes.bool,
	children: PropTypes.object,
};
