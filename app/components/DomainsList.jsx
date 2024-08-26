'use client'

import { Container } from "../styles/Container"
import { Flex } from "../styles/Flex"
import { domains } from "../mokData/domains"
import styled from "styled-components"
import Backdrop from "./Backdrop"
import { CustomInput } from "../styles/CustomInput"
import { useEffect, useState } from "react"
import Logs from "./Logs"

const EditButton = styled.button`
    text-align: center;
    max-width: 40px;
    border: none;
    background-color: #000;
    color: #fff;
    padding: 4px;
    border-radius: 4px;
    margin-left: 15px;
`

const List = styled.ul`
    & li {
        margin-top: 10px;
        margin-bottom: 10px;
    }

`

const DomainsList = (props) => {

    const [filterValue, setFilterValue] = useState("")
    const [filteredDomains, setFilteredDomains ] = useState([])
    const [isLogsVisible, setIsLogsVisible] = useState(true);

    useEffect(() => {
        if (domains) {
            setFilteredDomains([...domains])
        }
    }, [])


    useEffect(() => {
        if (filterValue.trim().length) {

            let findedDomains = filteredDomains.filter(d => d.name.includes(filterValue))

            if (findedDomains.length) {
                setFilteredDomains(findedDomains)
            }
        } else {
            setFilteredDomains([...domains])

        }
    }, [filterValue])



    return <Container>

        <Flex direction="column">
          
            <Flex justify="center">
                <h3>Your Domains:</h3>
            </Flex>

            <Flex mt="10px" mb="10px" justify="flex-end">
                <CustomInput 
                    width="120px"   
                    type="text" 
                    placeholder="Find" 
                    value={filterValue} 
                    onChange={e => setFilterValue(e.target.value)} 
                />            
            </Flex>

            <List>
                {
                    filteredDomains && filteredDomains.map(d => <li key={d.id}>
                            <span>{d.name}</span>
                            <EditButton onClick={() => props.showmodal(d.id, d.name)}>edit</EditButton>
                        </li>
                    )
                }
            </List>

        </Flex>

        {isLogsVisible && <Logs />}
    </Container>

}

export default DomainsList