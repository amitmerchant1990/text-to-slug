$(document).ready(function () {
    $('#texttoslug').on('click', function () {
        textToSlug($('#rawText').val());
    });

    $('#copyToClipboard').on('click', function () {
        copyToClipboard($('#rawText').val());
    });

    const slugify = (str) => str.toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)+/g, '');

    function textToSlug(text) {
        let slug = slugify(text)
        $('#rawText').val(slug)
    }

    function copyToClipboard(text) {
        if (text.length === 0)
            return;

        $('#copyToClipboard').html('Copied to Clipboard');

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