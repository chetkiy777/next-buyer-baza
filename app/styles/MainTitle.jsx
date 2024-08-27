import styled from "styled-components"


const StyledMainTitle = styled.p`
    font-size: 1.6rem;
    font-weight: 700;
`

export const MainTitle = (props) => {
    return <StyledMainTitle {...props}/>
}