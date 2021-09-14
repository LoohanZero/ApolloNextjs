import { withApiAuthRequired, getAccessToken } from '@auth0/nextjs-auth0';

export default withApiAuthRequired(async function token(req, res) {
  const accessToken = await getAccessToken(req, res);
  res.status(200).json({ accessToken });
});
