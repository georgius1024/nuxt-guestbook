import sql from '../db';
export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id');
  // function sleep(ms) {
  //   return new Promise(resolve => setTimeout(resolve, ms));
  // }
  // await sleep(4000)

  const [record] = await sql`select * from guestbook where id=${id}`;
  if (record) {
    return record;
  } else {
    setResponseStatus(event, 404);
    return `${id} not found`;
  }
});