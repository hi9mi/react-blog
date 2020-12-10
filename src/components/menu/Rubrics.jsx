import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const Rubrics = React.memo(function Rubrics({ activeRubric, rubricsItems, onClickRubrics, rotated }) {
	const rubricsRef = React.useRef();

	const onSelectRubricItem = (index) => {
		setVisableRubrics(false);
		onClickRubrics(index);
	};

	const activeNameRubric = rubricsItems[activeRubric];

	const [visableRubrics, setVisableRubrics] = React.useState(false);

	const toggleVisableRubrics = () => {
		setVisableRubrics(!visableRubrics);
	};

	const handlOutSideRubricsClick = (e) => {
		if (!e.path.includes(rubricsRef.current)) {
			setVisableRubrics(false);
		}
	};

	React.useEffect(() => {
		document.body.addEventListener('click', handlOutSideRubricsClick);
	}, []);

	return (
		<li ref={rubricsRef} className='menu__item rubrics'>
			<b onClick={toggleVisableRubrics}>
				{activeNameRubric}
				<span>
					<i className={classNames('fas fa-arrow-up rotate', visableRubrics ? 'rotated' : '')}></i>
				</span>
			</b>

			{visableRubrics && (
				<ul className='sub-menu__item'>
					<li onClick={() => onSelectRubricItem(null)}>Все рубрики</li>
					{rubricsItems &&
						rubricsItems.map((rubricsName, index) => (
							<li onClick={() => onSelectRubricItem(index)} key={`${rubricsName}_${index}`}>
								{rubricsName}
							</li>
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
