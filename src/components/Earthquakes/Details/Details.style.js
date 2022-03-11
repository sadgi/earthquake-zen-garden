import { css } from 'styled-components'

const styles = css`
position: absolute;
left: 50%;
transform: translate(-50%, 0%); 

.row {
display: flex;
flex-direction: row;
flex-wrap: wrap;
width: 100%;
}

.title {
margin:0.5rem;
font-weight: bold;
width: 90px;
font-family:sans-serif;
}

.value {
margin:0.5rem;
width: 62%;
min-width: 60%;
font-family:sans-serif;
color:#777777;
}

.header {
margin-left: 200px;
}

`
export default styles;