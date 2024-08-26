'use client'

import styled from "styled-components"

const Container = styled.div`
    display: flex;
    gap: 20px;
`

const StyledCustomInput = styled.input`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: ${({width}) => width || '100%'};
    background-color: transparent;
    border: none;
    outline: none;
    color: #000;
    text-align: ${props => props.textalign || 'left'};
    font-size: 1.25em;
    font-weight: 500;
    border-bottom: 2px solid #000;
    
    &::placeholder {
        text-align: ${props => props.textalign || 'left'};
        font-size: 1rem;
    }

    &:focus {
        border-bottom: 2px solid blue;
    }
`

export const CustomInput = (props) => {
    return <StyledCustomInput {...props}  />
}

