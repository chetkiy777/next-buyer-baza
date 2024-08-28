'use client'

import Image from "next/image";
import { Flex } from "./styles/Flex";
import Header from "./components/Header";
import DomainsList from "./components/DomainsList";
import Backdrop from "./components/Backdrop";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import styled from "styled-components";
import Logs from "./components/Logs";


 const LogsButton = styled.button`
  position: absolute;
  display: flex;
  gap: 5px;
  font-weight: 700;

  bottom: 5px;
  left: 5px;

 `

export default function Home() {


  const [isVisible, setIsVisible] = useState(false)
  const [domainId, setDomainId] = useState("")
  const [domainName, setDomainName] = useState("")
  const [isLogsVisible, setIsLogsVisible] = useState(false)

  const [userEmail, setUserEmail] = useState("")
  
  const router = useRouter()

  const hideLogs = () => {
    setIsLogsVisible(false)
  }

  useEffect(() => { 
    let data = localStorage.getItem("auth")
    
    if (!data) {
      router.push('/login')
    } else {
        let auth = JSON.parse(data)
        setUserEmail(auth.email)
        router.push('/')
    }
  }, [])

  const showConfigModal = (id, domain) => {
    
    setDomainId(id)
    setDomainName(domain)
    console.log(id, domain)
    setIsVisible(true)
  }

  const closeModal = () => {
    setDomainId("")
    setDomainName("")
    setIsVisible(false)
  }

  return (
    <>
    <Flex direction="column">
        <Header email={userEmail}/>

        <Flex>
          {
            isVisible &&  <Backdrop domainid={domainId} domainname={domainName} closemodal={closeModal}/>
          }

          <DomainsList showmodal={showConfigModal} email={userEmail}/>

        </Flex>

        <LogsButton onClick={() => setIsLogsVisible(!isLogsVisible)}>logs
          <Image 
            src="/logs.svg"
            height="18"
            width="18"
            alt="icon"
          />

        </LogsButton>
        {isLogsVisible && <Logs hidelogs={hideLogs}/>}
    </Flex>
  </>
  );
}
