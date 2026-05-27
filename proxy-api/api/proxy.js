export default async function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    const response = await fetch(
      'https://script.google.com/macros/s/AKfycbyEUJSVL8JdnEJSdZHJOpn19O434nJn4y9uDMSmjY341A2WEnSFg14BqyuSv-WlvrpyKA/exec',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(req.body),
      }
    );

    const data = await response.json();
    return res.json(data);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}