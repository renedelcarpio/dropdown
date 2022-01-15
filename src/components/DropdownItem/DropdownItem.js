import './DropdownItem.scss';

/**
 * @param {String} children This is the string that the tag will show
 * @param {function}	onClick	This function is called in father component.
 * @returns Returns the string assigned to children
 */

const DropdownItem = ({ children, onClick }) => {
	return (
		<p className='item__container' value={children} onClick={onClick}>
			{children}
		</p>
	);
};

export default DropdownItem;
