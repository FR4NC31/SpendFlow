import jwt from 'jsonwebtoken'
import crypto from 'crypto'

export const generateAccessToken = (userId: string) => {
    return jwt.sign(
        { userId },
        process.env.JWT_SECRET as string,
        { expiresIn: '7d' }
    )
}

export const generateRefreshToken = () => {
    return crypto.randomBytes(40).toString("hex")
}