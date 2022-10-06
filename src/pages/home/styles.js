import styled from "styled-components";

export const ContainerHome = styled.section`
  padding: 50px;
  max-width: 900px;
  margin: 0 auto;
`;

export const ContentLogo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;
    align-items: center;
  }

  img:first-child {
    width: 180px;
    height: 180px;
    border-radius: 50%;
  }

  img {
    width: 400px;
    margin-right: -80px;
  }
`;
