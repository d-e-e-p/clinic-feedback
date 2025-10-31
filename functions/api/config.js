export async function onRequest(context) {
  return Response.json({
    smApiKey: context.env.SOUL_MACHINES_API_KEY
  });
}