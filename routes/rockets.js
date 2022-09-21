import express from 'express'
import { getRockets } from '../controllers/rockets.js'

const router = express.Router()

router.get('/', getRockets)


export default router