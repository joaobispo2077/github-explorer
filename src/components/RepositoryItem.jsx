export function RepositoryItem({
  repository
}) {
  return (
    <div>
      <strong>{repository.name}</strong>
      <p>{repository.description}</p>
      <a href={repository.html_url}>Acessar repositório</a>
    </div>
  );
}