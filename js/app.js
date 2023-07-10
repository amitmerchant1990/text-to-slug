$(document).ready(function () {
    $('#rawText').on('keyup', function () {
        let sluggedText = textToSlug($(this).val());

        $('#sluggedText').val(sluggedText);
    });

    $('#copyToClipboard').on('click', function () {
        copyToClipboard($('#sluggedText').val());
    });

    const slugify = (str) => str.toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)+/g, '');

    function textToSlug(text) {
        return slugify(text);
    }

    function copyToClipboard(text) {
        if (text.length === 0)
            return;

        $('#copyToClipboard').html('Copied to Clipboard!');

        let textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('Copy');
        textArea.remove();

        setTimeout(function () {
            $('#copyToClipboard').html('Copy to Clipboard');
        }, 2000);
    }
});