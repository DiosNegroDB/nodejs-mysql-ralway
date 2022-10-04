import {createPool} from 'mysql2/promise'
import {
    DB_PORT,
    DB_USER,
    DB_NAME,
    DB_HOST,
    DB_PASSWORD,
}from './config.js'

export const pool = createPool({
    user:DB_USER,
    password:DB_PASSWORD,
    host:DB_HOST,
    port:DB_PORT,
    database: DB_NAME

})