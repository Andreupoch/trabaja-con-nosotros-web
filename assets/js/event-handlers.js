// Initialize event handlers from data attributes
document.addEventListener('DOMContentLoaded', function() {
    // Find all elements with data-*-handler attributes
    const handlers = {
        'focus': 'data-focus-handler',
        'blur': 'data-blur-handler',
        'click': 'data-click-handler',
        'change': 'data-change-handler'
    };
    
    Object.entries(handlers).forEach(([event, attr]) => {
        document.querySelectorAll(`[${attr}]`).forEach(element => {
            const handlerCode = element.getAttribute(attr);
            if (handlerCode) {
                // Create a function from the handler code
                const handler = new Function('event', handlerCode);
                element.addEventListener(event, handler);
            }
        });
    });
});