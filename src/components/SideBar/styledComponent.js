import styled from 'styled-components'

export const Side = styled.div`
  height: 100vh;
  width: 20%;
  background-attachment: fixed;
  background-color: ${props => (props.isLight ? 'white' : 'black')};
`

export default Side
