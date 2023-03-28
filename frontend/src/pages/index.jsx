import Head from "next/head";
import path from "path";
import fs from "fs/promises";

import TopBar from "@/styledComponents/TopBar";
import Cards from "@/styledComponents/Cards";
import styled from "styled-components";

const Screen = styled.div`
  width: 100%;
  background: linear-gradient(180deg, #FFFFFF 0%, rgba(147, 149, 151, 0.6) 100%);
`;
const MainPage = styled.div`
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 10px;
  gap: 20px;
`;

export default function Home(props) {
  const { universities } = props;

  return (
    <>
      <Head>
        <title>Suibian</title>
      </Head>
      <Screen>
        <TopBar />
        <MainPage>
          {universities.map((university) => (
            <Cards key={university.id} data={university} />
          ))}
        </MainPage>
      </Screen>
    </>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "public", "dummy-backend.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  return {
    props: {
      universities: data.universities,
    },
  };
}
