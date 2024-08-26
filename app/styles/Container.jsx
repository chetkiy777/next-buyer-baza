'use client'

import styled from "styled-components";

const StyledContainer = styled.div`
    display: flex;
    padding: 10px 30px;
    width: ${props => props.width || "100%"};
    margin: 0 auto;
`

export const Container = (props) => {
    return <StyledContainer {...props} />

}