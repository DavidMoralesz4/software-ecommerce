import { Request, Response } from "express"


export const loginController = (req: Request, res: Response) => {
    const {email, password} = req.body
    try {
        if(!email || !password) {
            res.status(401).json({message: 'Campos obligatorios'})
        }
        
        

        res.status(200).json({
            succes: true,
            message: ''
        })
    } catch (error) {
        
    }
}


const registerController = () => {}