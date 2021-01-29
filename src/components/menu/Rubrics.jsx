import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import useOutsideClick from '../../utils/Helpers/useOutsideClick';

const Rubrics = React.memo(function Rubrics({ activeRubric, rubricsItems, onClickRubrics }) {
	const rubricsRef = React.useRef();

	const onSelectRubricItem = (index) => {
		setVisableRubrics(false);
		onClickRubrics(index);
	};

	let activeNameRubric = rubricsItems[activeRubric];

	const [visableRubrics, setVisableRubrics] = React.useState(false);

	const toggleVisableRubrics = () => {
		setVisableRubrics(!visableRubrics);
	};

	useOutsideClick(rubricsRef, setVisableRubrics);

	return (
		<li ref={rubricsRef} className='menu__item rubrics'>
			<b onClick={toggleVisableRubrics}>
				{activeNameRubric != null ? activeNameRubric : 'Все рубрики'}
				<span>
					<i className={classNames('fas fa-arrow-up rotate', visableRubrics ? 'rotated' : '')}></i>
				</span>
			</b>

			{visableRubrics && (
				<ul className='sub-menu__item'>
					<Link to='/rubrics'>
						<li onClick={() => onSelectRubricItem(null)}>Все рубрики</li>
					</Link>
					{rubricsItems &&
						rubricsItems.map((rubricsName, index) => (
							<Link to='/rubrics'>
								<li onClick={() => onSelectRubricItem(index)} key={`${rubricsName}_${index}`}>
									{rubricsName}
								</li>
							</Link>
						))}
				</ul>
			)}
		</li>
	);
});

Rubrics.propTypes = {
	activeRubric: PropTypes.number,
	rubricsItems: PropTypes.arrayOf(PropTypes.string).isRequired,
	onClickRubrics: PropTypes.func,
};

Rubrics.defaultProps = {
	activeRubric: null,
	rubricsItems: [],
};

export default Rubrics;
