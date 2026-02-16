// Current active section
let currentSection = 'pmo';

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    initializePieSegments();
    initializeNavigationDots();
    
    // Show initial section
    showSection(currentSection);
    
    // Set initial wheel state
    updateActiveStates(currentSection);
});

// Initialize pie segment click handlers
function initializePieSegments() {
    const allSegments = document.querySelectorAll('.pie-segment[data-target]');
    
    allSegments.forEach(segment => {
        segment.addEventListener('click', function() {
            const targetSection = this.getAttribute('data-target');
            if (targetSection && targetSection !== currentSection) {
                navigateToSection(targetSection);
            }
        });
    });
}

// Initialize navigation dots click handlers
function initializeNavigationDots() {
    const allDots = document.querySelectorAll('.dot');
    
    allDots.forEach(dot => {
        dot.addEventListener('click', function() {
            const targetSection = this.getAttribute('data-section');
            if (targetSection && targetSection !== currentSection) {
                navigateToSection(targetSection);
            }
        });
    });
}

// Navigate to a specific section
function navigateToSection(targetSection) {
    currentSection = targetSection;
    
    // Show the target section
    showSection(targetSection);
    
    // Update active states
    updateActiveStates(targetSection);
}

// Show specific section (no scrolling)
function showSection(sectionName) {
    const allSections = document.querySelectorAll('.content-section');
    
    allSections.forEach(section => {
        if (section.getAttribute('data-section') === sectionName) {
            section.classList.add('active');
        } else {
            section.classList.remove('active');
        }
    });
}

// Update active states for segments and dots
function updateActiveStates(targetSection) {
    console.log('Updating to section:', targetSection);
    
    // Define rotation angles for each section (adjusted so active is at right/east)
    const rotations = {
        'operations': 54,
        'asset': -18,
        'correspondence': -90,
        'pmo': -162,
        'archive': -234
    };
    
    const currentRotation = rotations[targetSection] || -162;
    
    // Update all pie segments in all sections
    const allSegments = document.querySelectorAll('.pie-segment');
    allSegments.forEach(segment => {
        const segmentTarget = segment.getAttribute('data-target');
        if (segmentTarget === targetSection) {
            segment.classList.add('active');
        } else if (segmentTarget) {
            // Only remove active if it has a data-target (clickable segments)
            segment.classList.remove('active');
        }
    });
    
    // Update wheel background based on active section
    const allWheels = document.querySelectorAll('.wheel');
    allWheels.forEach(wheel => {
        wheel.classList.remove('active-pmo', 'active-correspondence', 'active-asset', 'active-operations', 'active-archive');
        wheel.classList.add(`active-${targetSection}`);
        
        // Add rotation class
        wheel.classList.remove('rotate-pmo', 'rotate-correspondence', 'rotate-asset', 'rotate-operations', 'rotate-archive');
        wheel.classList.add(`rotate-${targetSection}`);
        
        console.log('Wheel classes:', wheel.className);
        
        // Counter-rotate text labels to keep them upright
        const segmentTexts = wheel.querySelectorAll('.segment-text');
        segmentTexts.forEach(text => {
            text.style.transform = `translate(-50%, -50%) rotate(${-currentRotation}deg)`;
        });
    });
    
    // Update all navigation dots
    const allDots = document.querySelectorAll('.dot');
    allDots.forEach(dot => {
        if (dot.getAttribute('data-section') === targetSection) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

// Initialize - store original rotations for each segment text
document.addEventListener('DOMContentLoaded', function() {
    // Store original rotations
    const segmentTexts = document.querySelectorAll('.segment-text');
    segmentTexts.forEach((text, index) => {
        // Extract rotation from transform style
        const transform = window.getComputedStyle(text).transform;
        if (transform && transform !== 'none') {
            const matrix = transform.match(/matrix\(([^)]+)\)/);
            if (matrix) {
                const values = matrix[1].split(',').map(parseFloat);
                const angle = Math.atan2(values[1], values[0]) * (180 / Math.PI);
                text.setAttribute('data-original-rotation', angle);
            }
        }
    });
});

// Add hover effects
document.querySelectorAll('.pie-segment[data-target]').forEach(segment => {
    segment.addEventListener('mouseenter', function() {
        if (!this.classList.contains('active')) {
            this.style.opacity = '0.8';
        }
    });
    
    segment.addEventListener('mouseleave', function() {
        this.style.opacity = '1';
    });
});

// Button click handlers
document.querySelectorAll('.btn-primary').forEach(btn => {
    btn.addEventListener('click', function() {
        alert('Watch Demo clicked! You can link this to your demo video.');
    });
});

document.querySelectorAll('.btn-secondary').forEach(btn => {
    btn.addEventListener('click', function() {
        alert('Download PDF clicked! You can link this to your PDF file.');
    });
});
