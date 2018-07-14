$(() => {
  var tools = {
    init: () => {
      tools.listent();
    },
    listent: () => {
        // menu
      $(".produce").hover(
        function() {
          $(".produce-content")
            .stop()
            .animate({ height: "100px" }, 500);
        },
        function() {
          $(".produce-content")
            .stop()
            .animate({ height: "0px" }, 500);
        }
      );
    }
  };
  tools.init();
});
