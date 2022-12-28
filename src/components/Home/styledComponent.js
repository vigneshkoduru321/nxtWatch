import styled from 'styled-components'

export const DivData = styled.div`
  background-color: ${props => (props.isLight ? 'white' : 'black')};
  overflow: auto;
  width: 100%;
`

export default DivData
