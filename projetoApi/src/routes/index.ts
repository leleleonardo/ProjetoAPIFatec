import { Router } from 'express'
import taskroutes from './task/task.routes'

const routes = Router()

routes.use('/task',taskroutes)

export default routes