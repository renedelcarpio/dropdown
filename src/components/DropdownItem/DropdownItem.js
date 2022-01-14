import './DropdownItem.scss';

const DropdownItem = ({ children, onClick }) => {
	return (
		<p className='item__container' value={children} onClick={onClick}>
			{children}
		</p>
	);
};

export default DropdownItem;
