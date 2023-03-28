import Image from "next/image";
import styled from "styled-components";
import SuibianLogo from "../../public/SuibianLogo.png";
import { Text } from "@/styles/style";

const TopBarFrame = styled.div`
  width: 100%;
  background: rgba(255, 255, 255, 0.9);
  border-bottom: 4px solid rgba(147, 149, 151, 0.2);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  position: fixed;
  top: 0;

  @media screen and (max-width: 768px) {
    padding: 3px;
  }
`;

const Logo = styled(Image)`
  width: 51px;
  height: 30px;
  margin-left: 2%;
  margin-right: -10%;

  @media screen and (max-width: 768px) {
    width: 34px;
    height: 20px;
  }
`;

const Title = styled(Text)`
  font-size: 30px;
  color: #09101d;
  margin: 0 auto 0 auto;

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`;

export default function TopBar() {
  return (
    <TopBarFrame>
      <Logo src={SuibianLogo} alt="logo" priority />
      <Title>University</Title>
    </TopBarFrame>
  );
}
