/* 
 * Author: Generative AI
 * Version: 1.0
 * Date: 2025-01-17
 */
$(function () {
    $.get('../static/templates/script-pages.html')
        .done(function (html) {
            $('#script-container').html(html);
        })
        .fail(function (error) {
            console.error('Error loading the script:', error);
        });
});