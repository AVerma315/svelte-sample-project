/** @type {import('./$types').PageLoad} */

export async function load({ fetch }) {
	try {
		const response = await fetch(
			'https://jsonplaceholder.typicode.com/todos',
			{
				method: 'GET'
			}
		);
		const data = await response.json();

		return {
			todos: data
		};
	} catch (error) {
		console.error('Error fetching data:', error);
		return {
			todos: null
		};
	}
}
