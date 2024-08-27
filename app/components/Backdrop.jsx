import { Flex } from "../styles/Flex"
import CustomDropdown from "../styles/Dropdown"
import { useEffect, useState } from "react"
import { CustomInput } from "../styles/CustomInput"
import { Title } from "../styles/Title"
import styled from "styled-components"
import Image from "next/image"
import { MainTitle } from "../styles/MainTitle"


const Wrapper = styled.div`
    position: absolute;
    top: 100px;
    left: 10%;
    border: 2px solid #000;
    border-radius: 8px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    margin: 0 auto;
    padding: 20px 30px;
    background-color: #fff;
    box-shadow: 5px 5px 2px 0px rgba(0,0,0,0.75);


`

const CloseButton = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
`

const ApplyButton = styled.button`
    border: none;
    text-align: center;
    align-self: center;
    margin-top: 20px;

    &:hover,
    &:focus {
        transform: scale(1.2)
    }

`

const Backdrop = ({domainid, domainname, closemodal}) => {


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
            "id": domainid,
            "domain": domainname,
            "cloacking": clockingType,
            "redirect": redirType,
            "geo": geo,
            "only_mobile": onlyMobile,
        }

        setRefLink("")
        console.log(responseBody)
    }


    return <Wrapper>
        <Flex direction="column">

            <MainTitle style={{fontSize: "1.3rem"}}>{domainname}</MainTitle>


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
                        width="170px"
                    />
                </Flex>



            </Flex>
            }


            
            <ApplyButton onClick={changeClocking}>
                <Image
                    src="/apply.svg" 
                    width="50"
                    height="50"
                    alt="apply"
                />
                
            </ApplyButton>

        </Flex>      

        <CloseButton onClick={closemodal}>
            <Image 
                src="/close2.svg"
                width="18"
                height="18"
                alt="icon"
            />
        </CloseButton>

    </Wrapper>

}

export default Backdrop