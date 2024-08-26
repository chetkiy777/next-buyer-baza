'use client'

import styled from "styled-components";

const StyledFlex = styled.div`
    display: flex;
    width: 100%;
    flex-direction: ${props => props.direction || "row"};
    align-items: ${props => props.align || "flex-start"};
    justify-content: ${props => props.justify || "flex-start"};
    margin-top: ${props => props.mt || "0"};
    margin-bottom: ${props => props.mb || "0"};
    margin-right: ${props => props.mr || "0"};
`

export const Flex = (props) => {
    return <StyledFlex {...props} />

}