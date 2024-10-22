function reloadPage() {
  window.location.search = "";
}

$(document).ready(function() {
  $("body").click(function() {
    if (!$(this.target).is(".ftrH") || !$(this.target).is(".b_toggle")) {
      $(".b_dropdown").addClass("b_hide");
    }

    if (!$(this.target).is(".card")) {
      $("#ent-car-exp .item .small").css({
        width: "290px",
      });
      $("#ent-car-exp .item .small .cico").css({
        height: "190px",
      });
      $("#ent-car-exp .item .card").removeClass("expand");
    }

    $(".icon-checkbox").click(function() {
      $(this)
        .removeClass("icon-checkbox")
        .addClass("icon-checkboxChecked");
    });
    $(".icon-checkboxChecked").click(function() {
      $(this)
        .removeClass("icon-checkboxChecked")
        .addClass("icon-checkbox");
    });

    //ButtonText();
    iconEpandCollapse();
    //$('.bt-ts-list').show();
  });

  // $('.review-card-hdr li').click(function() {
  //     $(this).addClass('active').siblings().removeClass('active');

  // });
  //  $('.bl-rest-review-opt span').click(function() {
  //     $(this).addClass('active').siblings().removeClass('active');

  // });

  function _tabFunction(argument) {
    $(this)
      .addClass("active")
      .siblings()
      .removeClass("active");
  }

  $(".review-card-hdr li").on("click", _tabFunction);
  $(".bl-rest-review-opt span").on("click", _tabFunction);

  $(".b_res_list > li").click(function(event) {
    var active_tab_selector = $(".b_res_list > li.active > a").attr("rel");
    var active_tab_selector = $(this)
      .find("a")
      .attr("rel");

    var actived_nav = $(".b_res_list > li.active");
    actived_nav.removeClass("active");

    $(this).addClass("active");

    //show target tab content
    var target_tab_selector = $(this)
      .find("a")
      .attr("rel");
    //$(target_tab_selector).addClass('hide');
    $(target_tab_selector)
      .addClass("active")
      .siblings()
      .removeClass("active")
      .addClass("hide");

    event.preventDefault();
  });

  //expand collpase fucntion
  function iconEpandCollapse() {
    if ($(".bt-icon-expnd").is(":visible")) {
    } else {
      $(".bt-icon-collapse").text("");
    }
  }

  $(".bt-tsfl-icon").click(function() {
    $(".bt-ts-fsEdt").slideToggle("slow");

    $(".bt-ts-list").slideToggle("slow");
    iconEpandCollapse();
  });

  $(".wishlisticon").click(function(e) {
    e.stopPropagation();
    $(this.parentElement).toggleClass("active", "");
  });

  $(".ftrbt").click(function(el) {
    if ($(this).hasClass("active")) {
      return;
    } else {
      $(this).addClass("active");
      $("#ec-title").removeClass("active");
      $("#ent-car-exp").hide();
      $("#btv").show();
    }
  });

  $("#ec-title").click(function(el) {
    if ($(this).hasClass("active")) {
      return;
    } else {
      $(this).addClass("active");
      $(".ftrbt").removeClass("active");
      $("#ent-car-exp").show();
      $("#btv").hide();
      $(".greece").show();
      $(".rest").hide();
    }
  });

  $(".buybt").click(function(e) {
    var link = $(this)[0].getAttribute("h");
    window.location.href = link;
  });

  $(".small .price").click(function(e) {
    e.stopPropagation();
    var link = $(this)[0].getAttribute("h");
    window.location.href = link;
  });

  // $('#navlist li a').click(function(e) {
  // e.preventDefault(); //prevent the link from being followed
  // alert('1');
  // $('#navlist li a').removeClass('active');
  // $(this).addClass('active');

  // $( 'ol.navlist li' ).on( 'click', function() {
  //         $( this ).parent().find( 'li.active' ).removeClass( 'active' );
  //         $( this ).addClass( 'active' );
  //   });
  $("ul[id*=navlist] li a").click(function(e) {
    alert($(this).text());
    $(this).addClass("dark");
  });

  bindEvent();
  initializePageWithAPIToBlob();
});
//$('.bw-glmShw').hide();
function hide_BW_glmDis() {
  $("#baw_nh").hide();
  $(".bw-glmList").hide();
  $(".bw-glmShw").show();
}

function show_BW_glmShw() {
  $("#baw_nh").show();
  $(".bw-glmList").show();
  $(".bw-glmShw").hide();
}

function bindEvent() {
  $(".card.small").click(function(e) {
    e.stopPropagation();
    var card = $("#ent-car-exp .item .small");
    card.css({
      width: "290px",
    });
    card.find(".cico").css({
      height: "190px",
    });
    card.removeClass("expand");
    $(this).css({
      width: "574px",
    });
    $(this).addClass("expand");

    $(".greece").hide();
    $(".rest").show();
  });
}

function showFilters(str) {
  var queryStr = "\\ " + str;
  console.log(queryStr);
  $("#queryFtr").html(queryStr);
  $("#genderFtr").hide();
  $("#priceFtr").hide();
  $("#categoryFtr").hide();
}

function buybutton(el) {
  console.log(el);
}

// function to append blob proxy url to images
function initializePageWithAPIToBlob() {
  $("img").each(function() {
    let image_prefix = "/api/web/bingLocal/v1/";
    // Get the current src of the image
    const currentSrc = $(this)
      .attr("src")
      .replaceAll("../", "");

    if (currentSrc.includes("shared")) {
      image_prefix = "/api/web/";
    }

    // Update the src attribute with the new value
    const newSrc = image_prefix + currentSrc;
    $(this).attr("src", newSrc);
  });
}
