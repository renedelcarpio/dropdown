import DropdownMenu from './DropdownMenu';
import { mount } from 'enzyme';

describe('Tests in DropdownMenu component', () => {
	const wrapper = mount(<DropdownMenu />);

	test('should match with snapshot', () => {
		expect(wrapper).toMatchSnapshot();
	});

	test('should not exist before click', () => {
		expect(wrapper.find('.dropdown__items').exists()).toBe(false);
	});
});
