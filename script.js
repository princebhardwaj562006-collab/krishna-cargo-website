document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================
    // 1. Dynamic Scroll Tracker (Sticky Styling)
    // ==========================================
    const siteHeader = document.querySelector('header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            siteHeader.classList.add('scrolled');
        } else {
            siteHeader.classList.remove('scrolled');
        }
    });

    // ==========================================
    // 2. Mobile Responsive Drawer Toggle
    // ==========================================
    const menuBtn = document.querySelector('.hamburger');
    const mainNav = document.querySelector('.nav-menu');

    if (menuBtn && mainNav) {
        menuBtn.addEventListener('click', () => {
            mainNav.classList.toggle('open');
            // Basic icon rotation logic
            const lines = menuBtn.querySelectorAll('span');
            lines.forEach(line => line.classList.toggle('active'));
        });
    }

    // ==========================================
    // 3. Logic: Logistics Cost & Booking Estimator
    // ==========================================
    const quoteForm = document.getElementById('instantQuoteForm');
    
    if (quoteForm) {
        quoteForm.addEventListener('submit', (event) => {
            event.preventDefault();

            // Extract values selected by the user
            const rawOrigin = document.getElementById('originLoc').value.trim();
            const rawDest = document.getElementById('destLoc').value.trim();
            const serviceType = document.getElementById('cargoType').value;

            if (!rawOrigin || !rawDest) {
                alert('Please state both your pickup location and target destination.');
                return;
            }

            // Simple illustrative freight estimation engine logic
            let baseRatePerKm = 35; // Default transport standard rate per KM
            if (serviceType === 'car') baseRatePerKm = 65; // Labeled premium special vehicle routing
            if (serviceType === 'household') baseRatePerKm = 45; // Household packers & movers base

            // Mock distance calculator (Generates fixed randomized values for UI validation)
            const randomDistanceFactor = Math.floor(Math.random() * (900 - 300) + 300); 
            const finalEstimate = randomDistanceFactor * baseRatePerKm;

            // Alert customer immediately with a soft quotation display
            alert(`
            📍 Routing: ${rawOrigin} to ${rawDest}
            📦 Category Selected: ${serviceType.toUpperCase()}
            🚚 Approx Distance: ${randomDistanceFactor} KM
            💰 Estimated Cost Basis: ₹${finalEstimate.toLocaleString('en-IN')} onwards.
            
            Our logistics officer (Vijay Bhardwaj) will contact you shortly to lock down your booking!
            `);
            
            quoteForm.reset();
        });
    }
});
