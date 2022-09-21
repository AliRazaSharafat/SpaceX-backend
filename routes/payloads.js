import express from 'express'
import { getPayloads } from '../controllers/payloads.js'

const router = express.Router()

router.get('/', getPayloads)


export default router