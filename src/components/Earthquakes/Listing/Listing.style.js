import { css } from 'styled-components'


const styles = css`
position: absolute;
left: 50%;
transform: translate(-50%, 0%);

.header{
  margin-left:100px;
}

.earthquake  {
  border-collapse: collapse;
}

.earthquake  tr th {
  cursor: pointer;
  padding: 1rem;
  text-align: center;
  height: 2rem;
  
  background-color: #444444;
  color:  #ededed;
  font-family: sans-serif;
}

.earthquaketr th:after {
  font-size: 0.5rem;
  padding-right: 0.5rem;
}

.earthquake  tr td {
  text-align: center;
  padding: 0.5rem;
}

.earthquake  .details {
  text-align: left;
}
`
export default styles;