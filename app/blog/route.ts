export async function GET(req: Request, res: Response) {
  let obj = req;
  return new Response(JSON.stringify({ method: obj.method }));
}
