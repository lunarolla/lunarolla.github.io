var modal = document.getElementById("myModal");
        var btn = document.getElementById("myBtn");
        var btn1 = document.getElementById("myBtn1");
        var span = document.getElementsByClassName("close")[0];
        btn.onclick = function() {
          modal.style.display = "block";
        }
        btn1.onclick = function() {
          modal.style.display = "block";
        }
        span.onclick = function() {
          modal.style.display = "none";
        }
        window.onclick = function(event) {
          if (event.target == modal) {
            modal.style.display = "none";
          }
        }

        window.addEventListener('DOMContentLoaded', () => {
            const menu = document.querySelector('.header_menu'),
            menuItem = document.querySelectorAll('.header_menu_item'),
            hamburger = document.querySelector('.hamburger');

            hamburger.addEventListener('click', () => {
                hamburger.classList.toggle('hamburger_active');
                menu.classList.toggle('header_menu_active');
            });

            menuItem.forEach(item => {
                item.addEventListener('click', () => {
                    hamburger.classList.toggle('hamburger_active');
                    menu.classList.toggle('header_menu_active');
                })
            })
        })