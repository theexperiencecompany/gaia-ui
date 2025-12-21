import { useQuery } from "@tanstack/react-query";

interface GitHubRepo {
	stargazers_count: number;
}

async function fetchGitHubStars(): Promise<number> {
	const response = await fetch(
		"https://api.github.com/repos/theexperiencecompany/gaia-ui",
	);

	if (!response.ok) {
		throw new Error("Failed to fetch GitHub stars");
	}

	const data: GitHubRepo = await response.json();
	return data.stargazers_count;
}

export function useGitHubStars() {
	return useQuery<number, Error>({
		queryKey: ["github-stars"],
		queryFn: fetchGitHubStars,
	});
}
