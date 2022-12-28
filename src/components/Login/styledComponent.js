import styled from 'styled-components'

export const Form = styled.form`
  background-color: ${props => (props.isLight ? 'white' : 'black')};
  height: 400px;
  width: 350px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`
export default Form
