$(function() {
  var about = {
    init: () => {
      $(".activeSpan").css("width", "375px;");
    },
    linstent: () => {
      var left = 0;
      $("#bgleft").on("click", function() {
        $("#bgright > .bgright")
          .find("img")
          .attr("src", "../../images/about/arrowSelected.png");
        if (left < 0) {
          left++;
          $("#wrap_content_list")
            .find("li")
            .eq(-left)
            .addClass("active")
            .siblings()
            .removeClass("active");
        }
        if (left < 1 && left > -2) {
          $("#wrap_content_list").css("marginLeft", left * 371);
        }
        if (left == 0) {
          $("#bgleft > .bgleft")
            .find("img")
            .attr("src", "../../images/about/arrow.png");
        }
      });
      $("#bgright").on("click", function() {
        $("#bgleft > .bgleft")
          .find("img")
          .attr("src", "../../images/about/arrowSelected.png");
        if (left > -3) {
          left--;
          $("#wrap_content_list")
            .find("li")
            .eq(-left)
            .addClass("active")
            .siblings()
            .removeClass("active");
        }
        if (left > -2) {
          $("#wrap_content_list").css("marginLeft", left * 371);
        }
        if (left == -3) {
          $("#bgright > .bgright")
            .find("img")
            .attr("src", "../../images/about/arrow.png");
        }
      });

      $("#wrap_content_list").on("click", "li", function() {
        left = -$(this).index();
        $(this)
          .addClass("active")
          .siblings()
          .removeClass("active");
        if (left <= 0 && left >= -1) {
          $("#wrap_content_list").css("marginLeft", left * 371);
        } else if (left == -2) {
          $("#wrap_content_list").css("marginLeft", (left + 1) * 371);
          $("#bgright > .bgright")
            .find("img")
            .attr("src", "../../images/about/arrow.png");
        }
        if (left == 0) {
          $("#bgleft > .bgleft")
            .find("img")
            .attr("src", "../../images/about/arrow.png");
        } else {
          $("#bgleft > .bgleft")
            .find("img")
            .attr("src", "../../images/about/arrowSelected.png");
        }
        console.log(left);
        if (left == -3) {
          $("#bgright > .bgright")
            .find("img")
            .attr("src", "../../images/about/arrow.png");
        } else {
          $("#bgright > .bgright")
            .find("img")
            .attr("src", "../../images/about/arrowSelected.png");
        }
      });

      $("#contactUsList > li").hover(
        function() {
          $(this)
            .find("img")
            .attr(
              "src",
              "../../images/about/" +
                $(this).find("div")[0].className +
                "Selected.png"
            );
          $(this)
            .css(
              { "box-shadow": "0px 0px 10px 3px rgba(50,182,238,.15)" },
              { border: "none" }
            )
            .find(".lastP")
            .css({ color: "#34BBF0" });
          $(this).css({ border: "none" });
        },
        function() {
          $(this)
            .find("img")
            .attr(
              "src",
              "../../images/about/" + $(this).find("div")[0].className + ".png"
            );
          $(this)
            .css({ "box-shadow": "none" })
            .find(".lastP")
            .css({ color: "#666666" });
          $(this).css({ border: "1px solid #EEEEEE" });
        }
      );

      $(window).scroll(function() {
        if ($(window).scrollTop() > 400) {
          $(".fantop").show();
        } else {
          $(".fantop").hide();
        }
      });
      $(".fantop").click(function() {
        $("body,html").animate({ scrollTop: 0 }, 1000);
        return false;
      });
    }
  };
  about.linstent();
});
