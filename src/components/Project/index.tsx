import {
  Project as ProjectWrapper,
  ProjectTitle,
  ProjectStack,
  ProjectStackTech,
  ProjectLink,
  ProjectLinks,
} from "./style";

import { Text } from "@/styles/Text";
import { useEffect, useState } from "react";
import { FaGithub, FaShare } from "react-icons/fa";
import { userData } from "@/utils/userData";

interface ReposType {
  id: number;
  name: string;
  language: string;
  description: string;
  git_url: string;
  homepage: string;
  html_url: string;
  topics: string;
}

export const Project = (stack: any): JSX.Element => {
  const [repositories, setRepositories] = useState<ReposType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(
        `https://api.github.com/users/${userData.githubUser}/repos`
      );
      const json = await data.json();
      const filteredProjects = await json.filter((js: any) => {
        return js.topics[0] == stack.stack;
      });
      setRepositories(filteredProjects);
      return filteredProjects;
    };
    fetchData();
  }, []);

  return (
    <>
      {stack.stack ? (
        <ProjectTitle
          as="h1"
          type="heading1"
          css={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            border: "10px solid $brand1",
            borderRadius: "50px",
            marginTop: "100px",
          }}
          color="grey4"
        >
          Projetos {stack.stack}
        </ProjectTitle>
      ) : (
        <ProjectTitle
          as="h1"
          type="heading1"
          css={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            border: "10px solid $brand1",
            borderRadius: "50px",
            marginTop: "100px",
          }}
          color="grey4"
        >
          Outros Projetos
        </ProjectTitle>
      )}
      {repositories?.map((repository) => (
        <ProjectWrapper key={repository.id}>
          <ProjectTitle
            as="h2"
            type="heading3"
            css={{ marginBottom: "$3" }}
            color="grey4"
          >
            {repository.name}
          </ProjectTitle>

          <ProjectStack>
            <Text type="body2" color="grey2">
              Linguagem:
            </Text>
            {repository.topics.length > 0 ? (
              <ProjectStackTech>
                <Text color="grey2" type="body2">
                  {repository.topics[1]}
                </Text>
              </ProjectStackTech>
            ) : (
              <ProjectStackTech>
                <Text color="grey2" type="body2">
                  Not identified
                </Text>
              </ProjectStackTech>
            )}
          </ProjectStack>

          <Text type="body1" color="grey2">
            {repository.description?.length > 129
              ? repository.description.substring(0, 129) + "..."
              : repository.description.substring(0, 129)}
          </Text>
          <ProjectLinks>
            <ProjectLink target="_blank" href={repository.html_url}>
              <FaGithub /> Github Code
            </ProjectLink>
            {repository.homepage && (
              <ProjectLink target="_blank" href={repository.homepage}>
                <FaShare /> Aplicação
              </ProjectLink>
            )}
          </ProjectLinks>
        </ProjectWrapper>
      ))}
    </>
  );
};
