'use client'

import { Container } from "../styles/Container"
import { Flex } from "../styles/Flex"
import styled from "styled-components"
import { CustomInput } from "../styles/CustomInput"
import {MainTitle} from "../styles/MainTitle"
import { useEffect, useState } from "react"
import {logger} from "../helpers/logger"
import Image from "next/image"
import {detecter} from "../helpers/buyer_detect"
import axios from "axios"
import { host } from "../host_setting"

const List = styled.ul`
    & li {
        display: flex;
        align-items: center;
        margin-top: 10px;
        margin-bottom: 10px;
    }
`

const DomainsList = (props) => {

    const [filterValue, setFilterValue] = useState("")
    const [filteredDomains, setFilteredDomains ] = useState([])
    const [data, setData] = useState({})


    const runScript = async () => {
        try {
            const response = await axios(`/api/run`)
          console.log(response);
        } catch (error) {
          console.error('Error running script:', error);
        }
      };


    useEffect(() => {

        async function getDomains() {

            let data = localStorage.getItem("auth")
            let auth = JSON.parse(data)
            const buyerId = detecter(auth.email)
            
            let query = ""

            if (buyerId === "All") {
                query = "query { boards (ids: 1598927804) {items_page {cursor items {id name }}}}"
            } else {
                query = `query { items_page_by_column_values (limit: 50, board_id: 1598927804, columns: [{column_id: \"dropdown__1\", column_values: [\"${buyerId}\"]} ]) { cursor items { id name } } }`
            }

            const token = process.env.MONDAY_API_TOKEN
            // query = "query { boards (ids: 1598927804) {items_page {cursor items {id name }}}}";

            await fetch('https://api.monday.com/v2', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  'Authorization' : token,
                  'API-Version' : '2023-04'
                 },
                 body: JSON.stringify({
                   query: query
                 })
                }).then(res => res.json())
                .then(res => {

                    let domainNames = [];

                    if (buyerId === "All") {
                        let boards = res.data.boards;
                        domainNames = boards[0]["items_page"].items
                    } else {
                        domainNames = res.data.items_page_by_column_values.items
                    }

                    setFilteredDomains(domainNames)
                    setData(domainNames)
                    
                    logger({status: "success", message: "Got response with domains from Monday.com"})
                })
                .catch(e => console.log(e))
        }

        getDomains()
    },[])




    useEffect(() => {
        if (filterValue.trim().length) {

            let findedDomains = filteredDomains.filter(d => d.name.includes(filterValue))

            if (findedDomains.length) {
                setFilteredDomains(findedDomains)
            }
        } else {
            setFilteredDomains(data)

        }
    }, [filterValue])



    return <Container>

        <Flex direction="column">
          
            <Flex justify="center">
                <MainTitle>Domains:</MainTitle>
            </Flex>

            <Flex mt="10px" mb="10px" justify="flex-start">
                <Image 
                    src="/search.svg"
                    height="28"
                    width="28"
                    alt="icon"
                />

                <CustomInput 
                    width="200px"   
                    type="text" 
                    placeholder="Find" 
                    value={filterValue} 
                    onChange={e => setFilterValue(e.target.value)} 
                />            
            </Flex>

            <List>
                {
                    filteredDomains.length && filteredDomains.map(d => <li key={d.id}>
                            <span>{d.name}</span>
                            <button  onClick={() => props.showmodal(d.id, d.name)}>
                                <Image 
                                    src="/edit.svg"
                                    width="18"
                                    height="18"
                                    style={{marginLeft: "10px"}}
                                    alt="icon"
                                />
                            </button>
      
                        </li>
                    )
                }
            </List>

                <button type="button" onClick={runScript}>RUN</button>

        </Flex>

    </Container>

}

export default DomainsList