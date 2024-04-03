import postgres from 'postgres'

const sql = postgres('postgresql://postgres:postgres@postgres/nuxt_guestbook')

export default sql