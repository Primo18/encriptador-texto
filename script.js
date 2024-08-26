document.getElementById('encrypt-btn').addEventListener('click', function () {
    let text = document.getElementById('input-text').value;
    let encryptedText = text
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
    document.getElementById('output-text').value = encryptedText;
});

document.getElementById('decrypt-btn').addEventListener('click', function () {
    let text = document.getElementById('input-text').value;
    let decryptedText = text
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
    document.getElementById('output-text').value = decryptedText;
});

document.getElementById('copy-btn').addEventListener('click', function () {
    let textToCopy = document.getElementById('output-text');
    textToCopy.select();
    document.execCommand('copy');
    alert('Texto copiado al portapapeles');
});
