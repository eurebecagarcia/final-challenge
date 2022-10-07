import styled from "styled-components";

export const Container = styled.section`
  width: 200px;
  height: 400px;
  background: ${({ color }) => color};
  border-radius: 20px;
  color: #000;
  padding: 20px 35px;
  display: flex;
  flex-direction: column;
  /* justify-content: space-evenly; */
  align-items: center;

  figure {
    width: auto;
    height: 50px;
  }

  span {
    width: 100%;
    display: flex;
    align-items: center;

    p {
      width: 100%;
      margin-left: 15px;
      font-size: 14px;
      margin: 20px 0;
    }
  }
`;
