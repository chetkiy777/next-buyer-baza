
import { useEffect, useState } from "react"
import styled from "styled-components"
import Image from "next/image"


const StyledLogs = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: #000;
    color: #fff;
    max-height: 30%;
    overflow-y: scroll;
    width: 100%;
    background-color: #000;
`

const CloseButton = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    align-items: center;
    justify-content: center;

`

const List = styled.ul`
    
    padding: 10px;

    & li {
        font-size: 12px;
    }

`


const Logs = ({hidelogs}) => {

    const [logs, setLogs] = useState([])

    useEffect(() => {
        let savedLogs = localStorage.getItem("logs")
        if (savedLogs) {
            let parsedLogs = JSON.parse(savedLogs)
            setLogs([...parsedLogs])
        }

    }, [])


    return <StyledLogs>
        <CloseButton onClick={hidelogs}>
            <Image 
                src="/close.svg"
                height="18"
                width="18"
                alt="icon"
            />
        </CloseButton>

        
        <List>
            <li>
                <p>------- console 1.0 --------</p>
            </li>
            {
                logs && logs.map(l => <li key={l.id}>
                    <span style={{marginRight: "30px"}}>$status: {l.status}</span>
                    <span>$message: {l.message}</span>
                    <p>-----------</p>
                </li>)
            }
        </List>
    </StyledLogs>
}

export default Logs