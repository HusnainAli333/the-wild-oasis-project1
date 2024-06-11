import styled from "styled-components";

const StyledHeader = styled.header`
  padding: 1.8rem 4.2rem;
  border-bottom: 1px solid var(--color-grey-100);
`;

function Header() {
  return <StyledHeader>header</StyledHeader>;
}

export default Header;
