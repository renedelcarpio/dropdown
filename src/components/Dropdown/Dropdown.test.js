import Dropdown from './Dropdown';
import { mount } from 'enzyme';

describe('Tests in Dropdown component', () => {
	const wrapper = mount(<Dropdown />);

	test('should match with snapshot', () => {
		expect(wrapper).toMatchSnapshot();
	});

	test('should have the DropdownMenu component', () => {
		expect(wrapper.find('DropdownMenu').exists()).toBe(true);
	});
});
