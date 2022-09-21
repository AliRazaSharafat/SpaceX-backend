import express from 'express'
import { getCores } from '../controllers/core.js'

const router = express.Router()

router.get('/', getCores)


export default router