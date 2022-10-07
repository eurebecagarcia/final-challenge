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

export const ContentBanner = styled.div`
  display: flex;
  flex-direction: column;

  p {
    text-align: center;
  }
  h2 {
    text-align: center;
    margin: 20px;
  }

  ul {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    margin-top: 25px;

    li {
      list-style: none;
      margin-bottom: 10px;
    }
  }
`;

export const BoxCard = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  margin: 40px;
`;
