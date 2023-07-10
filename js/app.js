$(document).ready(function () {
    $('#texttoslug').on('click', function () {
        textToSlug($('#rawText').val());
    })

    const slugify = (str) => str.toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)+/g, '');

    function textToSlug(text) {
        let slug = slugify(text)
        $('#rawText').val(slug)
    }
});