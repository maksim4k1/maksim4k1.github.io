import styled from "styled-components";

const TitleElement = styled.h2`
  position: relative;
  padding: 0 0 0 60px;
  font-size: 28px;
  font-weight: 600;
  &::before, &::after{
    content: "";
    position: absolute;
    height: 4px;
    background-color: var(--color-coral);
  }
  &::before{
    top: 10px;
    left: 0;
    width: 50px;
  }
  &::after{
    bottom: 10px;
    left: 20px;
    width: 30px;
  }
  @media screen and (max-width: 400px){
    font-size: 24px;
    &::before{
      top: 10px;
    }
    &::after{
      bottom: 10px;
    }
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