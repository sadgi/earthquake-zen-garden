import { css } from 'styled-components'


const styles = css`
display: flex;
flex-direction: row;
justify-content: space-between;
padding: 1rem;
align-items: center;
background-color: #ededed;

.logo-image  {
  width: 4rem;
}

.link {
  color: #6600cc;
  font-weight: bold;
  text-decoration: none;
}

.title {
  color: #777777;
  font-size: 2rem;
  font-weight: bold;
}
`
export default styles;