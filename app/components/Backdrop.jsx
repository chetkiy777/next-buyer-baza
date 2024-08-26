import { Container } from "../styles/Container"
import { Flex } from "../styles/Flex"
import { domains } from "../mokData/domains"
import CustomDropdown from "../styles/Dropdown"
import { useEffect, useState } from "react"
import { CustomInput } from "../styles/CustomInput"
import { Title } from "../styles/Title"
import styled from "styled-components"



const Wrapper = styled.div`
    position: absolute;
    top: 100px;
    left: 20px;
    border: 2px solid #000;
    border-radius: 8px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    margin: 0 auto;
    padding: 10px 20px;
    background-color: #fff;


`

const CloseButton = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    border: none;
    background-color: #000;
    color: #fff;
    text-align: center;
    border-radius: 8px;
    width: 40px;
`

const ApplyButton = styled.button`
    border: none;
    text-align: center;
    padding: 4px 8px;
    background-color: #000;
    color: #fff;
    font-weight: 500;
    border-radius: 8px;
    align-self: center;
    margin-top: 20px;

`

const Backdrop = (props) => {


    const redirTypes = ["iframe", "302"]
    const geos = ["AU", "IN", "NL", "DE", "UK"]
    const clockingTypes = ["white", "black"]

    let [redirType, setRedirType] = useState("iframe")
    let [clockingType, setClockingType] = useState("white")
    let [refLink, setRefLink] = useState("")
    let [geo, setGeo] = useState("AU")
    let [onlyMobile, setOnnlyMbile] = useState(true)

    const changeClocking = () => {
        const responseBody = {
            "id": props.domainId,
            "domain": props.domainName,
            "cloacking": clockingType,
            "redirect": redirType,
            "geo": geo,
            "only_mobile": onlyMobile,
        }

        setRefLink("")
        console.log(responseBody)
    }


    return <Wrapper {...props}>
        <Flex direction="column">

            <h2>{props.domainName}</h2>


            <Flex align="center" justify="space-between" mt="20px">


                <Title>Cloacking type: </Title>

                <CustomDropdown
                    options={clockingTypes}
                    selected={clockingType}
                    setSelected={e => setClockingType(e)}
                    value={clockingType}
                />

            </Flex>

            {
                clockingType === "black" && <Flex direction="column">
                
                <Flex mt="20px" align="center" justify="space-between">

                    <Title>Redirect type: </Title>

                    <CustomDropdown
                        options={redirTypes}
                        selected={redirType}
                        setSelected={e => setRedirType(e)}
                        value={redirType}
                    />
                </Flex>

                <Flex mt="20px" align="center" justify="space-between">

                    <Title>Geo: </Title>

                    <CustomDropdown
                        options={geos}
                        selected={geo}
                        setSelected={e => setGeo(e)}
                        value={geo}
                    />
                </Flex>

                
                <Flex mt="20px" align="center" justify="space-between">

                    <Title>Only mobile: </Title>

                    <input type="checkbox" value={onlyMobile} onChange={e => setOnnlyMbile(e.target.checked)} />
                </Flex>


                <Flex mt="20px"  align="center" justify="space-between">
                    <Title>Link:</Title>
                    <CustomInput
                        type="text"
                        autoComplete={"off"}
                        name="amount"
                        value={refLink}
                        onChange={(e) => setRefLink(e.target.value)}
                        width="100px"
                    />
                </Flex>



            </Flex>
            }


            
            <ApplyButton onClick={changeClocking}>change</ApplyButton>

        </Flex>        
        <CloseButton onClick={() => props.closemodal()}>x</CloseButton>
    </Wrapper>

}

export default Backdrop