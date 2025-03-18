export async function fetchJobs() {
	const response = await fetch('https://fakejobs-api.vercel.app/jobs');
	const data = await response.json();

	// Ograniczamy do 3 ofert
	return data.slice(0, 3);
}
