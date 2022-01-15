import './DropdownMenu.scss';

import DropdownItem from '../DropdownItem/DropdownItem';
import React from 'react';
import { useState } from 'react/cjs/react.development';

const DropdownMenu = ({ setSelectedOption }) => {
	const options = ['id', 'reference_name', 'nit', 'name'];

	const [isOpen, setIsOpen] = useState(false);

	/**
	 * This function change the state true to show the list of DropdownItems or false to hide this
	 */
	const handleToggle = () => {
		setIsOpen(!isOpen);
	};

	/**
	 * This function set the innerHtml of the target to the selectedOption and change the isOpen boolean to false
	 * @param {target} event Make reference to the event
	 */
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
