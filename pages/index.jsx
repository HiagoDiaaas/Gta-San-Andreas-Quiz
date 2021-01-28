import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import db from './db.json';
import Widget from '../src/components/Widget';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import GtaLogo from '../src/components/Gtalogo';

// const BackgroundImage = styled.div`
//   background-image: url(${db.bg});
//   flex: 1;
//   background-size: cover;
//   background-position: center;
// `;

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>Gta San Andreas Quiz</title>
        <meta name="title" content="Gta San Andreas Quiz" />
        <meta name="description" content="Teste seus conhecimentos sobre Gta San Andreas!" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gta-san-andreas-quiz.hiagodiaaas.vercel.app" />
        <meta property="og:title" content="Gta San Andreas Quiz" />
        <meta property="og:description" content="Teste seus conhecimentos sobre Gta San Andreas!" />
        <meta property="og:image" content="https://www.wallpapertip.com/wmimgs/147-1471414_gta-san-andreas.jpg" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://gta-san-andreas-quiz.hiagodiaaas.vercel.app" />
        <meta property="twitter:title" content="Gta San Andreas Quiz" />
        <meta property="twitter:description" content="Teste seus conhecimentos sobre Gta San Andreas!" />
        <meta property="twitter:image" content="https://www.wallpapertip.com/wmimgs/147-1471414_gta-san-andreas.jpg" />
      </Head>
      <QuizContainer>
        <GtaLogo />
        <Widget>
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <p>{db.description}</p>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <h1>Quizes da Galera</h1>

            <p> quizes da galera aqui </p>
          </Widget.Content>
        </Widget>
        <Footer />

      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/HiagoDiaaas" />
    </QuizBackground>
  );
}
