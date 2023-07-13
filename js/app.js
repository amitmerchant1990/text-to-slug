const input = document.querySelector('#rawText');
const output = document.querySelector('#sluggedText');
const separator = document.querySelector('#separator');
const clearInput = document.querySelector('#clearInput');
const copyToClipboard = document.querySelector('#copyToClipboard');

input.addEventListener('input', () => (output.value = slugify(input.value)));

separator.addEventListener('input', () => {
    output.value = slugify(input.value)
    input.focus();
});

clearInput.addEventListener('click', () => {
    input.value = '';
    output.value = '';
    input.focus();
});

copyToClipboard.addEventListener('click', () => {
    if (output.value.length === 0)
        return;

    copyToClipboard.innerHTML = 'Copied to Clipboard!';

    copyToClipboard.disabled = true;

    navigator.clipboard.writeText(output.value);

    setTimeout(function () {
        copyToClipboard.innerHTML = 'Copy to Clipboard';
        copyToClipboard.disabled = false;
    }, 400);
});

const slugify = (text) =>
    replaceAccentedCharacters(text)
        .trim()
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, separator.value)
        .replace(/(^-|-$)+/g, '');

// https://stackoverflow.com/a/70288180/1485183        
const replaceAccentedCharacters = text =>
    text.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

