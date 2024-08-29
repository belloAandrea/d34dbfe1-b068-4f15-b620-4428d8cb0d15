import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: #333;
  color: white;
  text-align: center;
  padding: 10px;

  position: relative;
  bottom: 0;
  width: 100%;
`;

export default function Footer() {
  return (
    <FooterContainer>
      <p>&copy; {new Date().getFullYear()} Launchpad. All rights reserved.</p>
    </FooterContainer>
  );
}