import Loading from '../Loading/Loading';
import axios from 'axios';
import { useState } from 'react';

const baseURL = 'https://jsonplaceholder.typicode.com/posts';

const Dropdown = () => {
	const [posts, setPosts] = useState(null);
	const [loading, setLoading] = useState(false);

	const getData = async () => {
		const { data } = await axios.get(baseURL);
		setPosts(data);
		if (!data) {
			setLoading(true);
		} else {
			setLoading(false);
		}
	};

	return (
		<div>
			<button onClick={getData}>get data</button>
			{loading && <Loading />}
			{posts &&
				posts.map(({ title, body, id }) => {
					return (
						<div key={id}>
							<h3>{title}</h3>
							<p>{body}</p>
							<br />
						</div>
					);
				})}
		</div>
	);
};

export default Dropdown;
