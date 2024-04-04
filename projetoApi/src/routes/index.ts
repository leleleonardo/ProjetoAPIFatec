import { Router } from 'express'
import taskroutes from './task/task.routes'
import authRoutes from './auth/auth.routes'
import addressRoutes from "./address/address.routes"

const routes = Router()

routes.use('/task',taskroutes)
routes.use('/auth',authRoutes)
routes.use('/address',addressRoutes)

export default routes