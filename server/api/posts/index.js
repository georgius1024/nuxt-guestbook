import sql from '../db'
export default defineEventHandler(async (event) => {
  const records = await sql`select * from guestbook order by created_at desc`
  return records;
})