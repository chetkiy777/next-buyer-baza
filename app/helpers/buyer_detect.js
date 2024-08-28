import { buyers } from "../buyers"

export const detecter = (email) => {
    let result  = ""

    for (let buyer of buyers) {

        if (email === buyer.email) {
            result = buyer.shortName
        }
    }

    return result
}