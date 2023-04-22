import { PrismaClient } from '@prisma/client'
import jwt from 'jsonwebtoken'

const prisma = new PrismaClient()
const SECRET_KEY = process.env.SECRET_KEY as string

export const login = (email: string) => {
  return prisma.user.findUnique({
    where: {
      email: email
    }
  })
}

export const signToken = (payload: any) => {
  const token = jwt.sign(
    payload,
    SECRET_KEY,
    { expiresIn: 60 * 60 * 24 }
  )

  return token
}

export const verifyToken = (token: string) => {
  try {
    const decoded = jwt.verify(token, SECRET_KEY)

    return decoded
  } catch(error) {
    return false
  }
}