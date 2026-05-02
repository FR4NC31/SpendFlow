import { Response, Request } from 'express'
import bcrypt from 'bcrypt'
import User from '../models/user'
import { generateAccessToken, generateRefreshToken } from '../utils/token'

// REGISTER USER
export const registerUser = async (req: Request, res: Response) => {
    try {
        const { name, email, password } = req.body

        // If the user account already exist
        const existing = await User.findOne({ email })
        if(existing) {
            return res.status(400).json({ message: 'User already exists' })
        }

        //Set hash password
        const hashedPassword = await bcrypt.hash(password, 10)

        const user = await User.create({
            name,
            email,
            password: hashedPassword
        })

        return res.status(201).json({
            message: "User created successfully",
            user: {
                id: user._id,
                name: user.name,
                email: user.email
            }
        })
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong' })
    }
}

//LOGIN USER
export const loginUser = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body

        const user = await User.findOne({ email })
        if(!user) {
            return res.status(400).json({ message: 'Invalid Credentials' })
        }

        const isMatch = await bcrypt.compare(password, user.password)
        if(!isMatch) {
            return res.status(400).json({ message: 'Invalid Credentials' })
        }

        const accessToken = generateAccessToken(user._id.toString())
        const refreshToken = generateRefreshToken()

        user.refreshToken = refreshToken
        await user.save()

        return res.status(200).json({
            message: 'Login successful',
            user: {
                id: user._id,
                name: user.name,
                email: user.email
            },
            accessToken,
        })
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong' })
    }
}

export const logout = async (req: any, res: any) => {
    const { refreshToken } = req.body

    const user = await User.findOne({ refreshToken })

    if(user){
        user.refreshToken = null
        await user.save()
    }

    res.json({ message: 'Logged out successfully' })
}