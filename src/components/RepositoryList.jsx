import { useEffect, useState } from "react";
import "../styles/repositories.scss";

import { RepositoryItem } from "./RepositoryItem";

export function RepositoryList() {
  const [repositories, setRepositories] = useState([]);

  const handleLoadRepos = (username) => {
    fetch(`https://api.github.com/users/${username}/repos`)
      .then((response) => response.json())
      .then((data) => setRepositories(data));
  };

  useEffect(() => {
    handleLoadRepos('joaobispo2077');
  }, []);

  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        {repositories.map((repo) => ((
          <li>
            <RepositoryItem repository={repo} />
          </li>
        )))}
      </ul>
    </section>
  );
}