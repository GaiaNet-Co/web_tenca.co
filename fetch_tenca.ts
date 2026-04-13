import fs from 'fs';

async function fetchAndExtract() {
  try {
    const response = await fetch('https://tenca.co/');
    const html = await response.text();
    fs.writeFileSync('tenca.html', html);
    console.log('HTML saved to tenca.html');
  } catch (error) {
    console.error('Error:', error);
  }
}

fetchAndExtract();
