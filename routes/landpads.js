import express from 'express'
import { getLandpads } from '../controllers/landpad.js'

const router = express.Router()

router.get('/', getLandpads)


export default router