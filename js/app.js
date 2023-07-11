const input = document.querySelector("#rawText");
const output = document.querySelector("#sluggedText");
const copyToClipboard = document.querySelector("#copyToClipboard");

input.addEventListener("input", () => (output.value = slugify(input.value)));

copyToClipboard.addEventListener("click", () => {
    if (output.value.length === 0)
        return;

    copyToClipboard.innerHTML = 'Copied to Clipboard!';

    navigator.clipboard.writeText(output.value);

    setTimeout(function () {
        copyToClipboard.innerHTML = 'Copy to Clipboard';
    }, 1000);
});

const slugify = (text) =>
    replaceAccentedCharacters(text)
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)+/g, "");

// https://stackoverflow.com/a/70288180/1485183        
const replaceAccentedCharacters = text =>
    text.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

