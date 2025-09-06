// Cookie Management
function acceptCookies() {
    localStorage.setItem('cookiesAccepted', 'true');
    document.getElementById('cookie-banner').style.display = 'none';
    
    // Initialize analytics if cookies accepted
    if (typeof gtag !== 'undefined') {
        gtag('consent', 'update', {
            'analytics_storage': 'granted',
            'ad_storage': 'granted'
        });
    }
}

function declineCookies() {
    localStorage.setItem('cookiesAccepted', 'false');
    document.getElementById('cookie-banner').style.display = 'none';
    
    // Deny analytics if cookies declined
    if (typeof gtag !== 'undefined') {
        gtag('consent', 'update', {
            'analytics_storage': 'denied',
            'ad_storage': 'denied'
        });
    }
}

// Check cookie consent on page load
document.addEventListener('DOMContentLoaded', function() {
    const cookieConsent = localStorage.getItem('cookiesAccepted');
    const cookieBanner = document.getElementById('cookie-banner');
    
    if (cookieBanner) {
        if (cookieConsent === 'true' || cookieConsent === 'false') {
            cookieBanner.style.display = 'none';
        } else {
            cookieBanner.style.display = 'block';
        }
    }
    
    // Set initial consent state for Google Analytics
    if (typeof gtag !== 'undefined') {
        if (cookieConsent === 'true') {
            gtag('consent', 'default', {
                'analytics_storage': 'granted',
                'ad_storage': 'granted'
            });
        } else {
            gtag('consent', 'default', {
                'analytics_storage': 'denied',
                'ad_storage': 'denied'
            });
        }
    }
});