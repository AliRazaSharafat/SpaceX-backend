import express from 'express'
import { getCrew } from '../controllers/crew.js'

const router = express.Router()

router.get('/', getCrew)


export default router