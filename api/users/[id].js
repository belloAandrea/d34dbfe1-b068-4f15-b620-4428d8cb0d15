import { getUserById } from '../../utils/user';
export default async function handler(req, res) {
  const { id } = req.query;
  if (req.method === 'GET') {
    const user = await getUserById(id);
    return res.status(200).json(user);
  }
  return res.status(405).send('Method not allowed');
}