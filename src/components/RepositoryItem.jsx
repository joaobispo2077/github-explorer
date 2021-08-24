export function RepositoryItem({
  repository
}) {
  return (
    <div>
      <strong>{repository.reponame}</strong>
      <p>{repository.description}</p>
      <a href={repository.link}>'Acessar repositório'</a>
    </div>
  );
}