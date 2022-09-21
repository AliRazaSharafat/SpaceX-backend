import express from 'express'
import { getStarlinks } from '../controllers/starlinks.js'

const router = express.Router()

router.get('/', getStarlinks)


export default router