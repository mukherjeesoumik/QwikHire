// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu functionality
    initMobileMenu();
    
    // Dropdown functionality
    initDropdowns();
    
    // Search form functionality
    initSearchForm();
});

/**
 * Initialize mobile menu functionality
 */
function initMobileMenu() {
    const menuButton = document.querySelector('.menu-button');
    const navMenu = document.querySelector('.nav-menu');
    const closeButton = document.querySelector('.close-menu-button');
    
    if (menuButton && navMenu && closeButton) {
        // Toggle menu on burger icon click
        menuButton.addEventListener('click', function() {
            navMenu.style.right = '0';
            document.body.style.overflow = 'hidden';
        });
        
        // Close menu on close button click
        closeButton.addEventListener('click', function() {
            navMenu.style.right = '-300px';
            document.body.style.overflow = '';
        });
        
        // Close menu on window resize (above mobile breakpoint)
        window.addEventListener('resize', function() {
            if (window.innerWidth > 991) {
                navMenu.style.right = '';
                document.body.style.overflow = '';
            }
        });
    }
}

/**
 * Initialize dropdown functionality
 */
function initDropdowns() {
    const dropdowns = document.querySelectorAll('.nav-dropdown');
    
    dropdowns.forEach(dropdown => {
        // For better mobile experience, handle click on dropdown toggle
        const toggle = dropdown.querySelector('.nav-dropdown-toggle');
        
        if (toggle) {
            // On mobile, handle toggle click differently
            toggle.addEventListener('click', function(e) {
                if (window.innerWidth <= 991) {
                    e.preventDefault();
                    const list = dropdown.querySelector('.nav-dropdown-list');
                    const isVisible = list.style.opacity === '1';
                    
                    // Close all other dropdowns
                    document.querySelectorAll('.nav-dropdown-list').forEach(item => {
                        if (item !== list) {
                            item.style.opacity = '0';
                            item.style.visibility = 'hidden';
                            item.style.transform = 'translateY(10px)';
                        }
                    });
                    
                    // Toggle current dropdown
                    if (isVisible) {
                        list.style.opacity = '0';
                        list.style.visibility = 'hidden';
                        list.style.transform = 'translateY(10px)';
                    } else {
                        list.style.opacity = '1';
                        list.style.visibility = 'visible';
                        list.style.transform = 'translateY(0)';
                    }
                }
            });
        }
    });
    
    // Close dropdowns when clicking outside
    document.addEventListener('click', function(e) {
        if (window.innerWidth <= 991) {
            if (!e.target.closest('.nav-dropdown')) {
                document.querySelectorAll('.nav-dropdown-list').forEach(list => {
                    list.style.opacity = '0';
                    list.style.visibility = 'hidden';
                    list.style.transform = 'translateY(10px)';
                });
            }
        }
    });
}

/**
 * Initialize search form functionality
 */
function initSearchForm() {
    const searchForm = document.querySelector('.home-2-banner-search');
    
    if (searchForm) {
        searchForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const searchInput = this.querySelector('input[type="search"]');
            
            if (searchInput && searchInput.value.trim() !== '') {
                // You would typically redirect to search results page
                // For demo, just log the search query
                console.log('Search query:', searchInput.value);
                
                // Optional: Show a message to the user
                alert('Searching for: ' + searchInput.value);
                
                // Reset form
                this.reset();
            }
        });
    }
}

/**
 * Apply animations based on scroll position
 */
window.addEventListener('scroll', function() {
    const animatedElements = document.querySelectorAll('[data-w-id]');
    
    animatedElements.forEach(element => {
        const position = element.getBoundingClientRect();
        
        // If element is in viewport
        if (position.top <= window.innerHeight * 0.75 && position.bottom >= 0) {
            element.style.opacity = '1';
            
            // Add any other animation effects based on element attributes
            if (element.classList.contains('banner-blured-block') || 
                element.classList.contains('home-2-logo')) {
                element.style.transform = 'translateY(0)';
            }
        }
    });
}); 