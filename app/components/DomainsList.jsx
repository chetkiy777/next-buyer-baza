'use client'

import { Container } from "../styles/Container"
import { Flex } from "../styles/Flex"
import { domains } from "../mokData/domains"
import styled from "styled-components"
import Backdrop from "./Backdrop"
import { CustomInput } from "../styles/CustomInput"
import { useEffect, useState } from "react"
import axios from "axios"


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

    // useEffect(() => {
    //     async function getData() {
    //         let data = await axios.get("https://api.monday.com/v2", {
    //             headers: {
    //                 'Authorization': process.env.MONDAY_API_TOKEN,
    //                 'Content-Type': 'application/json',
    //                 'Access-Control-Allow-Origin': 'http://localhost:3000',
    //                 'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
    //                 'Access-Control-Allow-Headers': 'X-Requested-With,content-type',
    //                 'Access-Control-Allow-Credentials': true,
    //             },
    //             body: {
    //                 'query': '{ boards (ids:1598927804) {  name items_page { items { name column_values {id type text} } } } }'
    //             }
    //         })

    //         console.log(data)
    //     }

    //     getData()
    // })

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
    </Container>

}

export default DomainsList