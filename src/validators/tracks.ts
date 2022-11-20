import { Request, Response, NextFunction } from 'express'
import { check } from 'express-validator'
import { validate } from '../utils'

export const validateTrackCreating = [
  check('name').exists().notEmpty(),
  check('album').exists().notEmpty(),
  check('cover').exists().notEmpty(),
  check('artist').exists().notEmpty(),
  check('artist.name').exists().notEmpty(),
  check('artist.nickname').exists().notEmpty(),
  check('artist.nationality').exists().notEmpty(),
  check('duration').exists().notEmpty(),
  check('duration.start').exists().notEmpty(),
  check('duration.end').exists().notEmpty(),
  (req: Request, res: Response, next: NextFunction) => validate(req, res, next)
]

export const validateMongoId = [
  check('id').exists().notEmpty().isMongoId(),
  (req: Request, res: Response, next: NextFunction) => validate(req, res, next)
]
