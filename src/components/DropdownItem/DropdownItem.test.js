import DropdownItem from './DropdownItem';
import { mount } from 'enzyme';

describe('Tests in DropdownItem component', () => {
	const wrapper = mount(<DropdownItem />);

	test('should return the content of p tag', () => {
		expect(wrapper.find('p').exists()).toBe(true);
	});
});
