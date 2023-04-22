import { Request, Response, NextFunction } from 'express'
import { verifyToken } from '../auth/auth.services'
import { AuthUser } from '../auth/auth.types'

export const isAuthenticated = (req: AuthUser, res: Response, next: NextFunction) => {
  try {   
    const { authorization } = req.headers

    if(!authorization){
      throw new Error('Session Expired')
    }

    const [_, token] = authorization.split(' ')

    if(!token) {
      throw new Error('Session Expired')
    }

    const { id } = verifyToken(token) as { id: string  }

    req.user = id

    next()    
  } catch(error: any) {
    res.status(401).json({ message: error.message })
  }
}