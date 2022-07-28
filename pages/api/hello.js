// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

let users = [{ name: 'John Doe' }];

export default function handler(req, res) {
  const { method } = req;

  switch (method) {
    case 'GET':
      return res.status(200).json(users);
    case 'POST':
      users = [...users, { name: 'New guide' }];
      return res.status(200).json(users);
    default:
      return res.status(400).send('Error');
  }
}
