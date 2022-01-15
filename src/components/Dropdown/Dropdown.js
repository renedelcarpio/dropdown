import './Dropdown.scss';

import DropdownMenu from '../DropdownMenu/DropdownMenu';
import InfiniteScroll from 'react-infinite-scroll-component';
import axios from 'axios';
import { useState } from 'react';

const Dropdown = () => {
	const [results, setResults] = useState([]);
	const [currentData, setCurrentData] = useState(0);
	const [selectedOption, setSelectedOption] = useState('');

	const baseURL =
		'https://back.implementaconbubo.com/v1/sales/customer/?simple=true';

	const APIKEY = process.env.REACT_APP_API_KEY;

	const AuthAxios = axios.create({
		url: baseURL,
		headers: {
			Authorization: `ApiKey ${APIKEY}`,
			DataOperations: {
				filter: {
					filters: [
						{
							field: `${selectedOption} ? ${selectedOption} : 'reference_name'`,
							operator: 'contains',
							ignoreCase: true,
							value: '',
						},
					],
					logic: 'or',
				},
				skip: 0,
				take: 5,
			},
		},
	});

	/**
	 *
	 */
	const getData = async () => {
		const { results } = await AuthAxios.get(baseURL);
		setResults(results);
	};

	const filteredData = () => {
		return results.slice(currentData, currentData + 20);
	};

	const loadMoreData = () => {
		setCurrentData(currentData + 10);
	};

	return (
		<div>
			<DropdownMenu
				setSelectedOption={setSelectedOption}
				value={selectedOption}
				className='dropdown__button'
				onClick={getData}
			/>
			{results &&
				filteredData().map(({ id, reference_name, nit, name }) => {
					return (
						<InfiniteScroll
							key={id}
							dataLength={results.length}
							hasMore={true}
							next={loadMoreData}
						>
							<div className='dropdown__data'>
								<p className='dropdown__data--item'>{id}</p>
								<p className='dropdown__data--item'>{reference_name}</p>
								<p className='dropdown__data--item'>{name}</p>
								<p className='dropdown__data--item'>{nit}</p>
							</div>
						</InfiniteScroll>
					);
				})}
		</div>
	);
};

export default Dropdown;
