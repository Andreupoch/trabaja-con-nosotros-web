// Enhanced mobile menu functionality - Unified selectors
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const dropdown = document.querySelector('.dropdown');
    const dropdownToggle = dropdown?.querySelector('.dropdown-toggle');
    const dropdownMenu = dropdown?.querySelector('.dropdown-menu');
    
    // Mobile menu toggle
    if (mobileMenuToggle && navLinks) {
        mobileMenuToggle.addEventListener('click', function() {
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            this.setAttribute('aria-expanded', !isExpanded);
            navLinks.classList.toggle('active');
            
            // Update button label
            this.setAttribute('aria-label', isExpanded ? 'Obrir menú' : 'Tancar menú');
        });
    }
    
    // Services dropdown functionality
    if (dropdownToggle) {
        dropdownToggle.addEventListener('click', function(e) {
            e.preventDefault();
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            this.setAttribute('aria-expanded', !isExpanded);
            dropdown.classList.toggle('active');
        });
        
        // Close dropdown when clicking outside
        document.addEventListener('click', function(e) {
            if (!dropdown.contains(e.target)) {
                dropdownToggle.setAttribute('aria-expanded', 'false');
                dropdown.classList.remove('active');
            }
        });
        
        // Close dropdown on escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && dropdown.classList.contains('active')) {
                dropdownToggle.setAttribute('aria-expanded', 'false');
                dropdown.classList.remove('active');
                dropdownToggle.focus();
            }
        });
    }
    
    // Keyboard navigation for dropdown
    if (dropdownMenu) {
        const menuItems = dropdownMenu.querySelectorAll('a[role="menuitem"]');
        let currentIndex = -1;
        
        dropdownMenu.addEventListener('keydown', function(e) {
            switch(e.key) {
                case 'ArrowDown':
                    e.preventDefault();
                    currentIndex = currentIndex < menuItems.length - 1 ? currentIndex + 1 : 0;
                    menuItems[currentIndex].focus();
                    break;
                case 'ArrowUp':
                    e.preventDefault();
                    currentIndex = currentIndex > 0 ? currentIndex - 1 : menuItems.length - 1;
                    menuItems[currentIndex].focus();
                    break;
                case 'Tab':
                    // Allow normal tab behavior but close menu
                    dropdownToggle.setAttribute('aria-expanded', 'false');
                    dropdown.classList.remove('active');
                    break;
            }
        });
    }
    
    // Close mobile menu when navigating to a page
    if (navLinks) {
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', function() {
                if (mobileMenuToggle) {
                    mobileMenuToggle.setAttribute('aria-expanded', 'false');
                    navLinks.classList.remove('active');
                    mobileMenuToggle.setAttribute('aria-label', 'Obrir menú');
                }
            });
        });
    }
    
    // Active menu item based on current page
    const currentLocation = location.pathname;
    const menuItems = document.querySelectorAll('.nav-links a');
    
    menuItems.forEach(item => {
        if(item.getAttribute('href') === currentLocation) {
            item.classList.add('active');
        }
    });
});