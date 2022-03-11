import { css } from 'styled-components'


const styles = css`
position: absolute;
left: 50%;
transform: translate(-50%, 0%);

.first-column {
  display: flex;
  flex-direction: column;
  flex: 0
}

.second-column {
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 2
}

.avatar {
  width: 10rem;
}

.row {
  flex-wrap: wrap;
  width: 100%;
  display: flex;
  flex-direction: row;
}

.title {
  margin:0.75rem;
  font-weight: bold;
  width: 100px;
  font-family:sans-serif;
}

.value {
  margin:0.75rem;
  width: 50%;
  font-family:sans-serif;
}

.header {
  margin-left: 200px;
}

`
export default styles;