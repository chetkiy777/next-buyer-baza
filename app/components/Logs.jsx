
import styled from "styled-components"

const StyledLogs = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: #000;
    color: #fff;
    max-height: 300px;
    width: 100%;
`


const Logs = () => {
    return <StyledLogs>
        Logs
    </StyledLogs>
}

export default Logs