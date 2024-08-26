import bcrypt from "bcrypt"

export function hashPass(password) {
    return bcrypt.hashSync(password, 7)
}

export async function comparePass(password, hashPassword) {
    return bcrypt.compare(password, hashPassword)
}