import express from 'express'
import { getShips } from '../controllers/ships.js'

const router = express.Router()

router.get('/', getShips)


export default router