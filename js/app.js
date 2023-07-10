const input = document.querySelector("#rawText");
const output = document.querySelector("#sluggedText");
const copyToClipboard = document.querySelector("#copyToClipboard");

input.addEventListener("input", () => (output.value = slugify(input.value)));

copyToClipboard.addEventListener("click", () => {
    navigator.clipboard.writeText(output.value);
});

const slugify = (str) =>
  str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
