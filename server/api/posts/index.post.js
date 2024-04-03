import sql from '../db';
import { nanoid } from "nanoid";

export default defineEventHandler(async (event) => {
  const { title, text, author } = await readBody(event);
  const id = nanoid();
  await sql`insert into guestbook (id, title, text, author, created_at) values(${id}, ${title}, ${text}, ${author}, NOW())`;
  return { id, title, text, author };
});