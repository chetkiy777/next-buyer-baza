import generateUniqueId from "generate-unique-id";

export const logger = (log) => {

    let logs = localStorage.getItem("logs");
    
    if (!log) {
        return
    }
    
    let newId = generateUniqueId()

    if (!logs) {

        let newLogs = [];

        newLogs.push({
            id: newId,
            status: log.status,
            message: log.message
        })

        localStorage.setItem("logs", JSON.stringify(newLogs))
    } 

    let parsedLogs = JSON.parse(logs)
    parsedLogs.push({
        id: newId,
        status: log.status,
        message: log.message
    })

    localStorage.setItem("logs", JSON.stringify(parsedLogs))

}