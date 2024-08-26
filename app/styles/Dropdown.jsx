'use client'

import styled from "styled-components"
import { useState } from "react"
// import {ReactComponent as Filter } from "./../assets/images/arrowRightWhite.svg"
import { useClickAway } from "@uidotdev/usehooks";
import { useSelector } from "react-redux"


const Dropdown = styled.div`
    position: relative;
    background: transparent;
`

const DropdownButton = styled.button`
    
    position: relative;
    border: 2px solid #3F3F3F;
    border-radius: 8px;
    background: transparent;
    color: #000;
    padding: 2px;
    font-size: 1em;
    min-width: 140px;
    
`

const DropdownContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const DropdownContent = styled.ul`
    
    position: absolute;
    top: 110%;
    right: 10px;
    padding: 8px;
    max-height: 300px;
    width: max-content;
    overflow-y: auto;
    scrollbar-width: thin;
    border: 2px solid #3F3F3F;
    



    background-color: #fff;
    box-shadow: 3px 3px 10px 6px rgba(0, 0, 0, 0.06);
    border-radius: 5px;
    font-weight: 500;
    font-size: 1rem;
    z-index: 1;

    &::-webkit-scrollbar {
        width: 7px; /* ширина для вертикального скролла */
        height: 8px; /* высота для горизонтального скролла */
        background-color: #41A8DC;
    }

    &::-webkit-scrollbar-thumb {
        background-color: #143861;
    }

`

const DropdownItem = styled.li`
    padding: 10px;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.2s;
    

    &:hover {
        color: skyblue;
    }
    
`

const IconThumb = styled.div`
    
    position: absolute;
    right: 15px;
    top: 1em;
    display: inline-flex;
    margin-left: 8px;
    fill: #fff;
    align-items: flex-end;
`




const CustomDropdown = ({options, selected, value, setSelected, ...props}) => {

    let [isActive, setIsActive] = useState(false)
    // let theme = useSelector(state => state.order.theme)

    const ref = useClickAway(() => {
        setIsActive(false);
    });

    return <Dropdown>
        <DropdownButton  type='button' onClick={() => setIsActive(!isActive)}>{selected ? selected : value}
        <IconThumb>
            {/* <Filter height='15' width='15' /> */}
        </IconThumb>
        </DropdownButton>

        <DropdownContainer>
            <DropdownContent ref={ref} style={{display: isActive ? 'block' : 'none'}}>

                {
                    isActive &&  options.map(o => {
                    return <DropdownItem
                                key={o}
                                onClick={() => {
                                    setSelected(o)
                                    setIsActive(false)
                                }}
                                >
                                    {o}
                                </DropdownItem>
                    })

                }

            </DropdownContent>
        </DropdownContainer>

    </Dropdown>
}


export default CustomDropdown