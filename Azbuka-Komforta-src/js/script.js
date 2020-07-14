$('.open_form').magnificPopup({
  delegate: 'a',
  removalDelay: 500, 
  callbacks: {
      beforeOpen: function() {
      this.st.mainClass = this.st.el.attr('data-effect');
      }
  },
  midClick: true 
  });

  $(".hamburger").click(function() {
  $(this).toggleClass('close');
  });

  $(document).ready(function(){
    $(".dropdown-content").mouseover(function(){

      $(".dropbtn ").addClass("border_menu_item"); //naved

    });
    $(".dropdown-content").mouseout(function(){
      $(".dropbtn ").removeClass("border_menu_item"); //otpus
    });
  });

