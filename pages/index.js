import Layout from '../components/Layout';
import Link from 'next/link';
import styled from 'styled-components';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

export default function Home() {
  return (
    <Layout>
      <HomeContainer>
        <h1>Welcome to Launchpad!</h1>
        <p>LAUNCHPAD HERO IN SOLANA BASED</p>
        <nav>
          <Link href="/about"><a>About</a></Link>
          <Link href="/contact"><a>Contact</a></Link>
        </nav>
      </HomeContainer>
    </Layout>
  );
}