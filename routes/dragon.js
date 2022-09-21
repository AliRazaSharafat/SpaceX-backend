import express from 'express'
import { getDragon } from '../controllers/dragon.js'

const router = express.Router()

router.get('/', getDragon)


export default router