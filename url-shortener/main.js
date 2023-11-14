const shortenUrl = async () => {
    const longUrl = document.getElementById('long-url').value;
    const response = await fetch('https://tinyurl.com/api-create.php?url=' + longUrl);

    if (response.ok) {
        const shortUrl = await response.text(); // Get the shortened URL from the response
        const output = document.getElementById('output');
        const outputLink = document.getElementById('short-url').querySelector('a');
        outputLink.href = shortUrl;
        outputLink.textContent = shortUrl;
        output.style.display = 'block';

        const copyBtn = document.getElementById('copy-btn');
        copyBtn.addEventListener('click', () => {
            navigator.clipboard.writeText(shortUrl).then(() => {
                alert('Copied to clipboard!');
            });
        });
    } else {
        alert('Failed to shorten URL.');
    }
};

const shortenBtn = document.getElementById('shorten-btn');
shortenBtn.addEventListener('click', shortenUrl);
