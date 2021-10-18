import styled from "styled-components";

const TitleElement = styled.h2`
  position: relative;
  padding: 0 0 0 80px;
  font-size: 32px;
  font-weight: 600;
  text-transform: capitalize;
  &::before, &::after{
    content: "";
    position: absolute;
    height: 4px;
    background-color: var(--color-coral);
  }
  &::before{
    top: 12px;
    left: 0;
    width: 70px;
  }
  &::after{
    bottom: 12px;
    left: 30px;
    width: 40px;
  }
`;

function Title ({children}) {
  return(
    <TitleElement>
      {children}
    </TitleElement>
  );
}

export default Title;