import styled from "styled-components";

export const BoxBanner = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  background-color: #5ce6e6;
  -webkit-clip-path: polygon(0 0, 100% 0, 81% 100%, 0% 100%);
  clip-path: polygon(0 0, 100% 0, 81% 100%, 0% 100%);
  padding: 0.5em 1em;
  color: #000;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  margin: 20px;
`;
