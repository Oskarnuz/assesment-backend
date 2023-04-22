import { createUser } from '../../api/user/user.services';
import { Request, Response } from "express";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { login } from "../auth.services";
import { signToken } from "../auth.services";

export const signupController = async (
  req: Request,
  res: Response
) => {
  try {
    const { email, password } = req.body
    const encPassword = await bcrypt.hash(req.body.password, 10)
    const user = await createUser({...req.body, password: encPassword})

    const token = signToken({ id: user.id})

    res.status(201).json({ message: 'User Created', data: { email, password }, token })

  } catch(error: any) {
    res.status(500).json({ message: error.message })
  }
}


export const loginController = async(
  req: Request,
  res: Response
) => {
  try {
    console.log("aqui voy")
    const { email, password } = req.body
    
    const user = await login(email)
    
    if(!user) {
      throw new Error('Invalid email or password')
    }
    
    const isValid = await bcrypt.compare(password, user.password)

    if(!isValid) {
      throw new Error('Invalid email or password')
    }
    
    const token = signToken({ id: user.id, email })

    res.status(201).json({ message: 'User login successfully', data: { email, password }, token })

  } catch(error: any) {
    res.status(500).json({ message: error.message})
  }
}