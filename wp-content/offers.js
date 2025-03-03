jQuery(document).ready(function () {
  jQuery.ajax({
    url: "https://api.adkey-seo.com/api/website/get-website/722",
    type: "GET",
    dataType: "json",
    success: function (response) {
      const allMainLinks = $(".js-href-main");
      allMainLinks.each((index, el) => {
        const $el = $(el);
        $el.attr("href", response.offers[0].link);
      });
      const topList = jQuery(".table-s1 .clearfix");
      let j = 0;
      for (let i = 0; i < topList.length; i++) {
        if (j >= response.offers.length) {
          j = 0;
        }
        const links = topList[i].querySelectorAll(".js-href-second");
        links.forEach((link) => {
          link.setAttribute("href", response.offers[j].link);
        });
        j++;
      }
      const owlList = jQuery(".owl-carousel .btn--green");
      let c = 0;
      for (let i = 0; i < owlList.length; i++) {
        if (c >= response.offers.length) {
          c = 0;
        }
        owlList[i].setAttribute("href", response.offers[c].link);
        c++;
      }

      const sidebarList = jQuery("#sidebar .btn--green");
      let x = 0;
      for (let i = 0; i < sidebarList.length; i++) {
        if (x >= response.offers.length) {
          x = 0;
        }
        sidebarList[i].setAttribute("href", response.offers[x].link);
        x++;
      }

      const freeSpinsList = jQuery("#freeSpinsPage .btn--green");
      let z = 0;
      for (let i = 0; i < freeSpinsList.length; i++) {
        if (z >= response.offers.length) {
          z = 0;
        }
        freeSpinsList[i].setAttribute("href", response.offers[z].link);
        z++;
      }
    },
    error: function (xhr, status, error) {
      console.error("Fetch error:", error);
    },
  });
});
