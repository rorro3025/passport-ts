import { Request, Response, NextFunction } from 'express'

const checkUser = (req: Request, res: Response, next: NextFunction) => {
  try {
    const { role } = req.headers
    if (role === 'admin') {
      next()
    } else {
      res.status(403).send('unauthorized request')
    }
  } catch (error) {
    res.status(403).send('error in the last request')
  }
}

export default checkUser
