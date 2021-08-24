export function RepositoryItem({
  repository
}) {
  return (
    <div>
      <strong>{repository.name}</strong>
      <p>{repository.description}</p>
      <a href={repository.link}>Acessar repositório</a>
    </div>
  );
}