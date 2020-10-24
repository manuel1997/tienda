import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-outlet',
  templateUrl: './outlet.component.html',
  styleUrls: ['./outlet.component.css']
})
export class OutletComponent implements OnInit {

  constructor() {

    $(document).ready(function () {
      "use strict";

      $(".hamburger, .menu_close").click(function (e) {
        e.preventDefault();
        $(".menu").toggleClass("active");
      });

      var header = $('.header');

      setHeader();
      initSearch();
      initImage()

      $(window).on('resize', function () {
        setHeader();
      });

      $(document).on('scroll', function () {
        setHeader();
      });

      function setHeader() {
        if ($(window).scrollTop() > 100) {
          header.addClass('scrolled');
        }
        else {
          header.removeClass('scrolled');
        }
      }


      var homeSlider = $('.home_slider');
      homeSlider.owlCarousel(
        {
          items: 1,
          autoplay: true,
          autoplayTimeout: 3000,
          loop: true,
          smartSpeed: 1200,
          dotsSpeed: 1200,
          fluidSpeed: 1200
        });

      /* Custom dots events */
      if ($('.home_slider_custom_dot').length) {
        $('.home_slider_custom_dot').on('click', function () {
          $('.home_slider_custom_dot').removeClass('active');
          $(this).addClass('active');
          homeSlider.trigger('to.owl.carousel', [$(this).index(), 1200]);
        });
      }

      homeSlider.on('changed.owl.carousel', function(event)
			{
				$('.home_slider_custom_dot').removeClass('active');
				$('.home_slider_custom_dots li').eq(event.page.index).addClass('active');
			});

      function initSearch() {
        if ($('.search').length && $('.search_panel').length) {
          var search = $('.search');
          var panel = $('.search_panel');

          search.on('click', function () {
            panel.toggleClass('active');
          });
        }
      }

      function initImage()
      {
        var images = $('.details_image_thumbnail');
        var selected = $('.details_image_large img');
    
        images.each(function()
        {
          var image = $(this);
          image.on('click', function()
          {
            var imagePath = new String(image.data('image'));
            selected.attr('src', imagePath);
            images.removeClass('active');
            image.addClass('active');
          });
        });
      }


    });

  }

  ngOnInit() {
  }

}
