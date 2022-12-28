import styled from 'styled-components'

export const Nav = styled.div`
  height: 70px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => (props.isLight ? 'white' : 'black')};
  padding: 10px;
`

export default Nav
