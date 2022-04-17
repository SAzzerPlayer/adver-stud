import React from "react";
import styled from "styled-components";
import { H1, Paragraph } from "../shared";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

interface ITitleBlockProps {
  title: string;
  description: string;
}

export const TitleBlock: React.FC<ITitleBlockProps> = ({
  title,
  description,
}) => {
  return (
    <Container>
      <H1 style={{ textAlign: "center" }}>{title}</H1>
      <Paragraph style={{ textAlign: "center", margin: 0 }}>
        {description}
      </Paragraph>
    </Container>
  );
};
