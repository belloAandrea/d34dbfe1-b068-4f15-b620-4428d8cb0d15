import { sendRecoveryEmail } from '../../utils/auth';
export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email } = req.body;
    await sendRecoveryEmail(email);
    return res.status(200).send('Recovery email sent');
  }
  return res.status(405).send('Method not allowed');
}