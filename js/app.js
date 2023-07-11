const input = document.querySelector("#rawText");
const output = document.querySelector("#sluggedText");
const copyToClipboard = document.querySelector("#copyToClipboard");

input.addEventListener("input", () => (output.value = slugify(input.value)));

copyToClipboard.addEventListener("click", () => {
    if (output.value.length === 0)
        return;

    copyToClipboard.innerHTML = 'Copied to Clipboard!';

    let textArea = document.createElement('textarea');
    textArea.value = output.value;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('Copy');
    textArea.remove();

    setTimeout(function () {
        copyToClipboard.innerHTML = 'Copy to Clipboard';
    }, 1000);
});

const slugify = (str) =>
    str
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)+/g, "");
