'use client'

import styled from "styled-components";

const StyledTitle = styled.span`
    font-size: 0.9rem;
    font-weight: 500;
    margin-right: 20px;

`

export const Title = (props) => {
    return <StyledTitle {...props} />

}