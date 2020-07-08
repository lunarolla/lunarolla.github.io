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


  var coll = document.getElementsByClassName("collapsible");
  var i;
  
  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    });
  }