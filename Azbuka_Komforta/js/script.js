$('#inline-popups, #inline-popups2').magnificPopup({
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