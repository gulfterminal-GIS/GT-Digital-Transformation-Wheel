// Current active section
let currentSection = 'pmo';
let currentLanguage = 'en'; // 'en' or 'ar'

// About Us content data
const aboutUsContent = {
    en: {
        buttonText: "About us",
        title: "Who we are ?",
        description: "We are an AI-driven digital transformation company building intelligent software systems that automate processes, unlock insights, and accelerate smarter decision-making. By embedding AI at the core of every solution, we help organizations transform data into action and innovation into measurable impact.",
        stats: [
            { number: "20 +", label: "Active Projects" },
            { number: "50 +", label: "Valued Clients" },
            { number: "10 +", label: "Government Entities" },
            { number: "15 +", label: "Strategic Alliances" }
        ]
    },
    ar: {
        buttonText: "من نحن",
        title: "من نحن ؟",
        description: "نحن شركة تحول رقمي مدعومة بالذكاء الاصطناعي نبني أنظمة برمجية ذكية تعمل على أتمتة العمليات وفتح الرؤى وتسريع اتخاذ القرارات الأكثر ذكاءً. من خلال دمج الذكاء الاصطناعي في صميم كل حل، نساعد المؤسسات على تحويل البيانات إلى إجراءات والابتكار إلى تأثير قابل للقياس.",
        stats: [
            { number: "+ 20", label: "مشاريع نشطة" },
            { number: "+ 50", label: "عملاء موثوقون" },
            { number: "+ 10", label: "جهات حكومية" },
            { number: "+ 15", label: "تحالفات استراتيجية" }
        ]
    }
};

// Content data for both languages
const contentData = {
    en: {
        pmo: {
            title: "Qarar Project Management (Qarar PMO)",
            description: "An advanced central system designed to enable leaders and project managers to plan, monitor, and make data-driven decisions. It aims to unify methodologies and ensure projects are completed within the set timeframe and budget.",
            featuresTitle: "Key features",
            features: [
                "1. Interactive Dashboards  -  2. Resource Management  -  3. Risk & Issue Tracking",
                "4. Gantt Charts  -  5. AI Smart Summarization  -  6. Automated Reporting"
            ]
        },
        correspondence: {
            title: "Correspondence Management System",
            description: "A digital platform to manage all incoming, outgoing, and paper-based transactions, converting them into a secure electronic workflow to ensure fast information flow between departments and external entities.",
            featuresTitle: "Key features",
            features: [
                "1. Digital Signature  -  2. Tracking & Audit Trail  -  3. Workflow Engine",
                "4. Smart Templates  -  5. AI Chatbot Decision Assistant  -  6. Email Integration"
            ]
        },
        asset: {
            title: "Asset Management System",
            description: "A comprehensive system for tracking and managing fixed and movable assets, from procurement and usage to depreciation or disposal.",
            featuresTitle: "Key features",
            features: [
                "1. Smart Tagging (QR/RFID)  -  2. Location Tracking  -  3. Maintenance History Log",
                "4. Personnel Custody  -  5. AI Predictive Maintenance  -  6. Automated Depreciation"
            ]
        },
        operations: {
            title: "Operations & Maintenance (O&M) System",
            description: "A technical solution aimed at automating preventive and corrective maintenance, ensuring the sustainability of assets and equipment with high efficiency and minimal cost.",
            featuresTitle: "Key features",
            features: [
                "1. Work Order Management  -  2. Preventive Maintenance  -  3. Field Mobile App",
                "4. SLA Management  -  5. AI Fault Diagnosis  -  6. Spare Parts Inventory"
            ]
        },
        archive: {
            title: "Document Archiving & DMS",
            description: "A central digital repository aimed at converting paper archives into an organized electronic database with advanced search tools and strict access permissions.",
            featuresTitle: "Key features",
            features: [
                "1. Hierarchical Filing  -  2. Smart Search (OCR)  -  3. Version Control",
                "4. Granular Access Permissions  -  5. AI Semantic Search  -  6. System Integration"
            ]
        }
    },
    ar: {
        pmo: {
            title: 'نظام إدارة المشاريع "قرار"',
            description: "نظام مركزي متطور مصمم لتمكين القيادات ومديري المشاريع من التخطيط، المتابعة، واتخاذ القرارات المستندة إلى البيانات. يهدف النظام إلى توحيد منهجيات العمل وضمان إنجاز المشاريع ضمن الجدول الزمني والميزانية المحددة.",
            featuresTitle: "المميزات الرئيسية",
            features: [
                "1- لوحات تحكم تفاعلية (Interactive Dashboards)  -  2- إدارة الموارد (Resource Management)  -  3- إدارة المخاطر (Risk & Issue Tracking)",
                "4- التخطيط الزمني (Gantt Charts)  -  5- التلخيص الذكي (AI Smart Summarization)  -  6- التقارير المؤتمتة"
            ]
        },
        correspondence: {
            title: "نظام إدارة المراسلات الإلكترونية",
            description: "منصة رقمية لإدارة جميع الوارد والصادر والتعاملات الورقية وتحويلها إلى دورة عمل إلكترونية مؤمنة، مما يضمن سرعة تدفق المعلومات بين الأقسام المختلفة والجهات الخارجية.",
            featuresTitle: "المميزات الرئيسية",
            features: [
                "1- التوقيع الرقمي (Digital Signature)  -  2- تتبع المسار (Tracking & Audit Trail)  -  3- محرك سير عمل مرن (Workflow Engine)",
                "4- قوالب جاهزة (Smart Templates)  -  5- مساعد قرار (AI Chatbot)  -  6- الربط مع البريد الإلكتروني"
            ]
        },
        asset: {
            title: "نظام إدارة الأصول",
            description: "نظام شامل لتتبع وإدارة الأصول الثابتة والمنقولة للمنظمة، بدءاً من المشتريات مروراً بالاستخدام والمواقع، وصولاً إلى الإهلاك أو التكهين.",
            featuresTitle: "المميزات الرئيسية",
            features: [
                "1- الترميز الذكي (QR Code/RFID)  -  2- تتبع الموقع (Location Tracking)  -  3- سجل الصيانة التاريخي",
                "4- إدارة العهد الشخصية  -  5- إدارة الموردين والضمانات"
            ]
        },
        operations: {
            title: "نظام التشغيل والصيانة",
            description: "حل تقني يهدف إلى أتمتة عمليات الصيانة الوقائية والتصحيحية، وضمان استدامة الاصول والمعدات بأعلى كفاءة تشغيلية وأقل تكلفة ممكنة.",
            featuresTitle: "المميزات الرئيسية",
            features: [
                "1- إدارة أوامر العمل (Work Order Management)  -  2- جدولة الصيانة الوقائية  -  3- تطبيق الميدان للفنيين",
                "4- إدارة اتفاقيات مستوى الخدمة (SLA)  -  5- تحليل الأعطال المتكررة"
            ]
        },
        archive: {
            title: "نظام أرشفة المستندات",
            description: "مستودع رقمي مركزي يهدف إلى تحويل الأرشيف الورقي إلى قاعدة بيانات إلكترونية منظمة، مع توفير أدوات بحث متقدمة وصلاحيات وصول صارمة لحماية خصوصية المعلومات.",
            featuresTitle: "المميزات الرئيسية",
            features: [
                "1- التصنيف الشجري (Hierarchical Filing)  -  2- البحث الذكي (OCR & Full-Text Search)  -  3- إدارة النسخ (Version Control)",
                "4- صلاحيات الوصول الدقيقة  -  5- التكامل مع الأنظمة الأخرى"
            ]
        }
    }
};

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    initializePieSegments();
    initializeNavigationDots();
    initializeLanguageSwitcher();
    initializeWheelScroll();
    initializeAboutUs();
    
    // Set initial wheel state first
    updateActiveStates(currentSection);
    
    // Don't call showSection on init - the first section is already active in HTML
    // Just update its content to match current language
    updateSectionContent(currentSection);
    
    // Initialize About Us content
    updateAboutUsContent();
    
    // Hide loading screen after everything is loaded
    setTimeout(() => {
        const loadingScreen = document.getElementById('loadingScreen');
        if (loadingScreen) {
            loadingScreen.classList.add('hidden');
        }
    }, 1500); // Show loading for 1.5 seconds minimum
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

// Initialize language switcher
function initializeLanguageSwitcher() {
    const langSwitcher = document.querySelector('.lang-switcher');
    
    if (langSwitcher) {
        langSwitcher.addEventListener('click', function() {
            // Toggle language
            currentLanguage = currentLanguage === 'en' ? 'ar' : 'en';
            console.log('Language switched to:', currentLanguage);
            
            // Update button text
            this.querySelector('span').textContent = currentLanguage === 'en' ? 'ع' : 'EN';
            
            // Toggle RTL class on body for layout flip
            if (currentLanguage === 'ar') {
                document.body.classList.add('rtl');
            } else {
                document.body.classList.remove('rtl');
            }
            
            // Update all sections content
            updateAllSectionsContent();
            
            // Re-apply wheel rotation for current section with new direction
            updateActiveStates(currentSection);
        });
    }
}

// Initialize wheel scroll functionality
function initializeWheelScroll() {
    const wheelContainers = document.querySelectorAll('.wheel-container');
    
    // Define section order
    const sections = ['pmo', 'correspondence', 'asset', 'operations', 'archive'];
    
    let scrollTimeout;
    
    wheelContainers.forEach(container => {
        container.addEventListener('wheel', function(e) {
            e.preventDefault();
            
            // Clear existing timeout to debounce scroll events
            clearTimeout(scrollTimeout);
            
            scrollTimeout = setTimeout(() => {
                // Get current section index
                const currentIndex = sections.indexOf(currentSection);
                let nextIndex;
                
                // Determine scroll direction
                if (e.deltaY > 0) {
                    // Scroll down - next section
                    nextIndex = (currentIndex + 1) % sections.length;
                } else {
                    // Scroll up - previous section
                    nextIndex = (currentIndex - 1 + sections.length) % sections.length;
                }
                
                const nextSection = sections[nextIndex];
                
                if (nextSection !== currentSection) {
                    navigateToSection(nextSection);
                }
            }, 100); // Debounce delay
        }, { passive: false });
    });
}

// Initialize About Us overlay
function initializeAboutUs() {
    const aboutUsBtn = document.querySelector('.about-us-btn');
    const aboutUsOverlay = document.getElementById('aboutUsOverlay');
    const aboutCloseBtn = document.getElementById('aboutCloseBtn');
    
    if (aboutUsBtn && aboutUsOverlay) {
        // Open About Us overlay
        aboutUsBtn.addEventListener('click', function() {
            aboutUsOverlay.classList.add('active');
        });
        
        // Close About Us overlay
        if (aboutCloseBtn) {
            aboutCloseBtn.addEventListener('click', function() {
                aboutUsOverlay.classList.remove('active');
            });
        }
        
        // Close on overlay background click
        aboutUsOverlay.addEventListener('click', function(e) {
            if (e.target === aboutUsOverlay) {
                aboutUsOverlay.classList.remove('active');
            }
        });
        
        // Close on Escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && aboutUsOverlay.classList.contains('active')) {
                aboutUsOverlay.classList.remove('active');
            }
        });
    }
}

// Update content for all sections
function updateAllSectionsContent() {
    // Only update the currently active section immediately
    // Other sections will be updated when they become active
    updateSectionContent(currentSection);
    
    // Update About Us content
    updateAboutUsContent();
}

// Update About Us content based on language
function updateAboutUsContent() {
    const content = aboutUsContent[currentLanguage];
    
    // Update button text
    const aboutUsBtn = document.querySelector('.about-us-btn span');
    if (aboutUsBtn) {
        aboutUsBtn.textContent = content.buttonText;
    }
    
    // Update title
    const aboutTitle = document.querySelector('.about-title');
    if (aboutTitle) {
        aboutTitle.textContent = content.title;
    }
    
    // Update description
    const aboutDescription = document.querySelector('.about-description');
    if (aboutDescription) {
        aboutDescription.textContent = content.description;
    }
    
    // Update stats
    const statNumbers = document.querySelectorAll('.stat-number');
    const statLabels = document.querySelectorAll('.stat-label');
    
    content.stats.forEach((stat, index) => {
        if (statNumbers[index]) {
            statNumbers[index].textContent = stat.number;
        }
        if (statLabels[index]) {
            statLabels[index].textContent = stat.label;
        }
    });
    
    // Update text direction for About Us overlay
    const aboutContent = document.querySelector('.about-content');
    if (aboutContent) {
        if (currentLanguage === 'ar') {
            aboutContent.setAttribute('dir', 'rtl');
        } else {
            aboutContent.setAttribute('dir', 'ltr');
        }
    }
}

// Navigate to a specific section
function navigateToSection(targetSection) {
    console.log('Navigate to section:', targetSection, 'Current language:', currentLanguage);
    currentSection = targetSection;
    
    // Show the target section
    showSection(targetSection);
    
    // Update active states
    updateActiveStates(targetSection);
}

// Show specific section (no scrolling)
function showSection(sectionName) {
    console.log('showSection called for:', sectionName, 'Language:', currentLanguage);
    const allSections = document.querySelectorAll('.content-section');
    
    allSections.forEach(section => {
        if (section.getAttribute('data-section') === sectionName) {
            // Update content FIRST, before any transitions
            updateSectionContent(sectionName);
            
            // Then apply the active class to trigger transition
            section.classList.remove('exiting');
            section.classList.add('active');
        } else {
            // Add exiting class to current active section
            if (section.classList.contains('active')) {
                section.classList.add('exiting');
                // Remove active after animation
                setTimeout(() => {
                    section.classList.remove('active', 'exiting');
                }, 600);
            } else {
                section.classList.remove('active');
            }
        }
    });
}

// Update content for a specific section
function updateSectionContent(sectionName) {
    console.log('updateSectionContent called for:', sectionName, 'Language:', currentLanguage);
    // Use more specific selector to get the section, not the dot
    const section = document.querySelector(`section.content-section[data-section="${sectionName}"]`);
    console.log('Section element:', section);
    
    if (section) {
        const content = contentData[currentLanguage][sectionName];
        console.log('Content data:', content);
        
        // Check if section is visible
        const isVisible = section.classList.contains('active');
        console.log('Section is active/visible:', isVisible);
        
        // Update title
        const title = section.querySelector('.content-title');
        console.log('Title selector result:', title);
        if (title) {
            console.log('Updating title to:', content.title);
            title.textContent = content.title;
            console.log('Title after update:', title.textContent);
            console.log('Title element:', title);
        } else {
            console.log('Title element not found!');
            // Try to find all h1 elements in the section
            const allH1 = section.querySelectorAll('h1');
            console.log('All h1 elements in section:', allH1);
        }
        
        // Update description
        const description = section.querySelector('.content-description');
        if (description) {
            description.textContent = content.description;
            console.log('Description updated');
        } else {
            console.log('Description element not found!');
        }
        
        // Update features title
        const featuresTitle = section.querySelector('.features-title');
        if (featuresTitle) {
            featuresTitle.textContent = content.featuresTitle;
        }
        
        // Update features
        const featureItems = section.querySelectorAll('.feature-item');
        console.log('Found feature items:', featureItems.length);
        content.features.forEach((feature, index) => {
            if (featureItems[index]) {
                featureItems[index].textContent = feature;
            }
        });
        
        // Update text direction for Arabic
        const contentArea = section.querySelector('.content-area');
        if (contentArea) {
            if (currentLanguage === 'ar') {
                contentArea.setAttribute('dir', 'rtl');
            } else {
                contentArea.setAttribute('dir', 'ltr');
            }
        }
    } else {
        console.log('Section not found:', sectionName);
    }
}

// Update active states for segments and dots
function updateActiveStates(targetSection) {
    console.log('Updating to section:', targetSection);
    
    // Define rotation angles for each section
    // LTR: active segment at right/east (-162° for PMO at east)
    // RTL: active segment at left/west (18° for PMO at west)
    const rotationsLTR = {
        'operations': 54,
        'asset': -18,
        'correspondence': -90,
        'pmo': -162,
        'archive': -234
    };
    
    const rotationsRTL = {
        'operations': -126,  // 180° opposite of LTR
        'asset': 162,
        'correspondence': 90,
        'pmo': 18,
        'archive': -54
    };
    
    const rotations = currentLanguage === 'ar' ? rotationsRTL : rotationsLTR;
    const currentRotation = rotations[targetSection] || (currentLanguage === 'ar' ? 18 : -162);
    
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
        
        // Apply rotation directly for RTL/LTR
        wheel.style.transform = `rotate(${currentRotation}deg)`;
        
        console.log('Wheel rotation:', currentRotation, 'Language:', currentLanguage);
        
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
