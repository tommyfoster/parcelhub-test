jQuery(document).ready(function ($) {
    $('.modifycomment').on('click', function () {
        var commentid = $(this).attr("id").split('-')[1];
        $('#modifycommentid').val(commentid);
        $('#modifycommenttext').val($('#commentnew-' + commentid).val());
    });
});

