'use client'

import styled from "styled-components"
import { Container } from "../styles/Container"
import { Flex } from "../styles/Flex"
import { useRouter } from "next/navigation"
import Notiflix from "notiflix"

const LocalWrapper = styled.div`
    width: 100vw;
    background-color: #000;
    color: #fff;
`

const Header = ({email}) => {

    const router = useRouter()

    const logout = () => {
        localStorage.clear()
        Notiflix.Notify.success("Logout success!")
        router.push('/login')
    }


    return <LocalWrapper>
        <Container>
            <Flex align="center" justify="space-between">
                <span>Pixoram</span>

                <div>
                    <span style={{marginRight: "20px"}}>{email}</span>
                    <button onClick={logout}>Log out</button>
                </div>
            </Flex>
            </Container>
        </LocalWrapper>

}

export default Header;