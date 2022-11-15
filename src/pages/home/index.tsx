// Styles
import { Container, Flex } from "@/styles/Global";
import { Text } from "@/styles/Text";
import { Button } from "@/styles/Buttons";

// Components
import { Stack } from "@/components/Stack";
import { Project } from "@/components/Project";
import { Contacts } from "@/components/Contacts";

// Data
import { stackData } from "@/utils/stackData";
import { userData } from "@/utils/userData";

import { FaGithub } from "react-icons/fa";

// Page Style
import {
  Header,
  HeaderContent,
  HeaderButtonsArea,
  UserImage,
  StackCards,
  ProjectsArea,
  ProjectsAreaSocialMediaMessage,
  ProjectAreaWrapperColumns,
  ProjectsAreaContent,
} from "./style";
import { HandEffect } from "@/components/HandEffect";

import { i18n } from "../../translate/i18n";

export const Home = (): JSX.Element => {
  return (
    <main id="home">
      <Header>
        <Container>
          <HeaderContent>
            <Flex>
              <UserImage
                src={`https://github.com/${userData.githubUser}.png`}
                alt={userData.nameUser}
                title={userData.nameUser}
                width={"48px"}
                height={"48px"}
              />
              <Text color="grey4" css={{ marginLeft: "$2" }}>
                {i18n.t("home.name")} {userData.nameUser} <HandEffect />
              </Text>
            </Flex>
            <Text as="h1" type="heading1" color="grey5">
              {i18n.t("home.i")}{" "}
              <Text as="span" type="heading1" color="brand1">
                {i18n.t("home.love")}
              </Text>{" "}
              {i18n.t("home.creatingAnd")}{" "}
              <Text as="span" type="heading1" color="brand1">
                {i18n.t("home.developing")}
              </Text>{" "}
              {i18n.t("home.projects")}
            </Text>
            <Text type="body1" color="grey2">
              {i18n.t("home.aboutMe")}
              <br></br>
              {i18n.t("home.discover")}
            </Text>
            <HeaderButtonsArea>
              <Button as="a" type="primary" href="#projects">
                {i18n.t("home.seeProjects")}
              </Button>
              <Button
                as="a"
                type="circle"
                target="_blank"
                href={`https://github.com/${userData.githubUser}`}
              >
                <FaGithub />
              </Button>
            </HeaderButtonsArea>
            <StackCards>
              {stackData.map((stack, index) => (
                <Stack key={index} title={stack.title} icon={stack.img} />
              ))}
            </StackCards>
          </HeaderContent>
        </Container>
      </Header>
      <ProjectsArea id="projects">
        <Container>
          <ProjectAreaWrapperColumns>
            <ProjectsAreaSocialMediaMessage>
              <Text as="h2" type="heading4" color="grey4">
                {i18n.t("projects.myProjects")}
              </Text>
              <Text as="p" type="body1" color="grey2">
                {i18n.t("projects.projectsCreated")}{" "}
                <Text as="span" color="brand5">
                  {userData.nameUser}
                </Text>
              </Text>
            </ProjectsAreaSocialMediaMessage>
            <ProjectsAreaContent
              css={{
                width: "100%",
                borderBottom: "3px solid $brand1",
                padding: "0px 0px 15px",
                marginBottom: "0px",
              }}
            >
              <Project stack="back-end" />
            </ProjectsAreaContent>
            <ProjectsAreaContent
              css={{
                width: "100%",
                borderBottom: "3px solid $brand1",
                padding: "0px 0px 15px",
                marginBottom: "0px",
              }}
            >
              <Project stack="front-end" />
            </ProjectsAreaContent>
            <ProjectsAreaContent>
              <Project stack="full-stack" />
            </ProjectsAreaContent>
          </ProjectAreaWrapperColumns>
        </Container>
      </ProjectsArea>
      <Contacts />
    </main>
  );
};
