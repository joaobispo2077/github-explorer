import { RepositoryItem } from "./RepositoryItem";

const repository = {
  reponame: "unform",
  description: "Um formulário simples e flexível",
  link: "",
};

export function RepositoryList() {
  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        <li>
          <RepositoryItem
            repository={repository}
          />
        </li>
        <li>
          <RepositoryItem
            repository={repository}
          />
        </li>
        <li>
          <RepositoryItem
            repository={repository}
          />
        </li>
      </ul>
    </section>
  );
}