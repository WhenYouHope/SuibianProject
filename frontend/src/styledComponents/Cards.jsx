import styled from "styled-components";
import { Text } from "@/styles/style";

const CardFrame = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  background: #ffffff;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.22);
  border-radius: 8px;
  width: 726px;
  padding: 20px;

  @media screen and (max-width: 768px) {
    width: 300px;
    padding: 12px;
  }

  @media screen and (max-width: 320px) {
    width: 200px;
  }
`;

const TextFrame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;

const CardText = styled(Text)`
  font-weight: 600;
  font-size: 23px;
  line-height: 24px;
  color: #09101d;

  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
`;

const SubtextFrame = styled.div`
  width: 30%;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    width: 50%;
  }

  @media screen and (max-width: 320px) {
    width: 80%;
  }
`;

const CardSubtext = styled(Text)`
  font-size: 13px;
  line-height: 20px;
`;

export default function Cards({ data }) {
  return (
    <CardFrame>
      <TextFrame>
        <CardText>{data.name}</CardText>
        <SubtextFrame>
          <CardSubtext>QS: {data.ranking.QS}</CardSubtext>
          <CardSubtext>THE: {data.ranking.THE}</CardSubtext>
        </SubtextFrame>
      </TextFrame>
    </CardFrame>
  );
}
