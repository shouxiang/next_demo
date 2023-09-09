async function fetchRepo(name) {
  const response = await fetch(
    `https://api.github.com/repos/bradtraversy/${name}`,
    {
      next: {
        revalidate: 60,
      },
    }
  );
  const repo = await response.json();
  return repo;
}

const Repo = ({ name }) => {
    const repo = await fetchRepo(name)
    
  return (
    <div>Repo</div>
  )
}
export default Repo