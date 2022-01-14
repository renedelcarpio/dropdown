import './DropdownMenu.scss';

import DropdownItem from '../DropdownItem/DropdownItem';
import React from 'react';
import { useState } from 'react/cjs/react.development';

const DropdownMenu = ({ setSelectedOption, selectedOption }) => {
	const options = ['id', 'reference_name', 'nit', 'name'];

	const [isOpen, setIsOpen] = useState(false);

	const handleToggle = () => {
		setIsOpen(!isOpen);
	};

	const onOptionSelected = ({ target }) => {
		setSelectedOption(target.innerHTML);
		setIsOpen(false);
	};

	return (
		<>
			<div
				className={isOpen ? 'dropdown__menu--open' : 'dropdown__menu'}
				onClick={handleToggle}
			>
				Dropdown Menu
			</div>
			{isOpen && (
				<div className='dropdown__items'>
					{options.map((option, index) => (
						<DropdownItem onClick={onOptionSelected} key={`${option}${index}`}>
							{option}
						</DropdownItem>
					))}
				</div>
			)}
		</>
	);
};

export default DropdownMenu;
