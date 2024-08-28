'use client'

import styled from "styled-components"
import { Container } from "../styles/Container"
import { Flex } from "../styles/Flex"
import { useRouter } from "next/navigation"
import Notiflix from "notiflix"
import Image from 'next/image'
import Link from "next/link"


const RightBlock = styled.div`
    display: flex;
    gap: 5px;

`

const LocalWrapper = styled.div`
    width: 100vw;
    background-color: #000;
    color: #fff;
`

const Header = ({email}) => {

    const router = useRouter()

    const logout = () => {
        localStorage.removeItem("auth")
        Notiflix.Notify.success("Logout success!")
        router.push('/login')
    }

    const gotoUpdate = () => {
        router.push('/update')
    }


    return <LocalWrapper>
        <Container>
            <Flex align="center" justify="space-between">
                <Link href="/" style={{fontWeight: "700", fontSize: "22px"}}>pixoram</Link>
                <RightBlock>
                    <button style={{display: "flex", alignItems: "center", gap: "5px"}} onClick={gotoUpdate}>
                        <Image 
                            src="/profilew.svg"
                            width="18"
                            height="18"
                            alt="icon"
                        />
                        <span>{email}</span>
                    </button>

                    <button onClick={logout}>
                        <Image
                            src="/exit.svg"
                            height="18"
                            width="18"
                            alt="icon"
                        />
                    </button>
                </RightBlock>
            </Flex>
            </Container>
        </LocalWrapper>

}

export default Header;