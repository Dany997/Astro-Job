export async function fetchJobsById(id) {
	const response = await fetch(`https://fakejobs-api.vercel.app/jobs/${id}`);
	if (!response.ok) {
		throw new Error(`Failed to fetch article with ID: ${id}`);
	}
	const data = await response.json();
	return data;
}
