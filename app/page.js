'use client'

import Image from "next/image";
import { Flex } from "./styles/Flex";
import Header from "./components/Header";
import DomainsList from "./components/DomainsList";
import Backdrop from "./components/Backdrop";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {


  const [isVisible, setIsVisible] = useState(false)
  const [domainId, setDomainId] = useState("")
  const [domainName, setDomainName] = useState("")


  const [userEmail, setUserEmail] = useState("")

  const router = useRouter()

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

        <Flex mt="40px">
          {
            isVisible &&  <Backdrop domainId={domainId} domainName={domainName} closemodal={closeModal}/>
          }

          <DomainsList showmodal={showConfigModal} />

        </Flex>
    </Flex>
  </>
  );
}
