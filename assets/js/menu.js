// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
        
        // Close menu when clicking on a link
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                menuToggle.classList.remove('active');
            });
        });
    }
    
    // Dropdown menus
    const dropdownItems = document.querySelectorAll('.nav-item.has-dropdown');
    
    dropdownItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.querySelector('.nav-dropdown').style.display = 'block';
        });
        
        item.addEventListener('mouseleave', function() {
            this.querySelector('.nav-dropdown').style.display = 'none';
        });
    });
    
    // Active menu item
    const currentLocation = location.pathname;
    const menuItems = document.querySelectorAll('.nav-link');
    
    menuItems.forEach(item => {
        if(item.getAttribute('href') === currentLocation) {
            item.classList.add('active');
        }
    });
    
    // Sticky navigation
    const nav = document.querySelector('.nav-container');
    if (nav) {
        const navTop = nav.offsetTop;
        
        function stickyNavigation() {
            if (window.scrollY >= navTop) {
                nav.classList.add('sticky');
            } else {
                nav.classList.remove('sticky');
            }
        }
        
        window.addEventListener('scroll', stickyNavigation);
    }
});