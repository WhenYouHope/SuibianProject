import React from "react";
import Image from "next/image";
import styled from "styled-components";
import SuibianLogo from "../../public/SuibianLogo.png";

const TopBarFrame = styled.div`
  width: 100%;
  background: rgba(255, 255, 255, 0.5);
  border-bottom: 4px solid rgba(147, 149, 151, 0.2);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
`;

const Logo = styled(Image)`
  width: 51px;
  height: 30px;
  margin-left: 2%;
`;

const Title = styled.p`
  font-family: "Source Sans Pro";
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  color: #09101d;
  margin: 0 auto;
`;

export default function TopBar() {
  return (
    <TopBarFrame>
      <Logo src={SuibianLogo} alt="logo" priority />
      <Title>University</Title>
    </TopBarFrame>
  );
}
