$(function () {
  $('.btn').hover(
    function () {
      $(this).fadeTo('slow', 0.7);
    },
    function () {
      $(this).fadeTo('slow', 1);
    }
  );
});
