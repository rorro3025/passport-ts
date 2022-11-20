import { Request, Response, NextFunction } from 'express'
import { validationResult } from 'express-validator'

export function validate(req: Request, res: Response, next: NextFunction) {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    res.status(403).json({ errors: errors.array() })
  }
  return next()
}

export function handleError(res: Response, message = 'Unauthorized', code = 404) {
  res.status(code).json({ message })
}
