// Current active section
let currentSection = 'pmo';
let currentLanguage = 'en'; // 'en' or 'ar'

// Content data for both languages
const contentData = {
    en: {
        pmo: {
            title: "Qarar Project Management (Qarar PMO)",
            description: "An advanced central system designed to enable leaders and project managers to plan, monitor, and make data-driven decisions. It aims to unify methodologies and ensure projects are completed within the set timeframe and budget.",
            features: [
                "1. Interactive Dashboards  -  2. Resource Management  -  3. Risk & Issue Tracking",
                "4. Gantt Charts  -  5. AI Smart Summarization  -  6. Automated Reporting"
            ]
        },
        correspondence: {
            title: "Correspondence Management System",
            description: "A digital platform to manage all incoming, outgoing, and paper-based transactions, converting them into a secure electronic workflow to ensure fast information flow between departments and external entities.",
            features: [
                "1. Digital Signature  -  2. Tracking & Audit Trail  -  3. Workflow Engine",
                "4. Smart Templates  -  5. AI Chatbot Decision Assistant  -  6. Email Integration"
            ]
        },
        asset: {
            title: "Asset Management System",
            description: "A comprehensive system for tracking and managing fixed and movable assets, from procurement and usage to depreciation or disposal.",
            features: [
                "1. Smart Tagging (QR/RFID)  -  2. Location Tracking  -  3. Maintenance History Log",
                "4. Personnel Custody  -  5. AI Predictive Maintenance  -  6. Automated Depreciation"
            ]
        },
        operations: {
            title: "Operations & Maintenance (O&M) System",
            description: "A technical solution aimed at automating preventive and corrective maintenance, ensuring the sustainability of assets and equipment with high efficiency and minimal cost.",
            features: [
                "1. Work Order Management  -  2. Preventive Maintenance  -  3. Field Mobile App",
                "4. SLA Management  -  5. AI Fault Diagnosis  -  6. Spare Parts Inventory"
            ]
        },
        archive: {
            title: "Document Archiving & DMS",
            description: "A central digital repository aimed at converting paper archives into an organized electronic database with advanced search tools and strict access permissions.",
            features: [
                "1. Hierarchical Filing  -  2. Smart Search (OCR)  -  3. Version Control",
                "4. Granular Access Permissions  -  5. AI Semantic Search  -  6. System Integration"
            ]
        }
    },
    ar: {
        pmo: {
            title: '"قرار" لإدارة المشاريع (Qarar Project Management)',
            description: "نظام مركزي متطور مصمم لتمكين القيادات ومديري المشاريع من التخطيط، المتابعة، واتخاذ القرارات المستندة إلى البيانات. يهدف النظام إلى توحيد منهجيات العمل وضمان إنجاز المشاريع ضمن الجدول الزمني والميزانية المحددة.",
            features: [
                "لوحات تحكم تفاعلية (Interactive Dashboards): عرض مؤشرات الأداء (KPIs) ونسب الإنجاز لحظياً.",
                "إدارة الموارد (Resource Management): توزيع المهام على الفرق بناءً على التوفر والكفاءة.",
                "إدارة المخاطر (Risk & Issue Tracking): نظام إنذار مبكر لتحديد العوائق المحتملة ووضع خطط التخفيف.",
                "التخطيط الزمني (Gantt Charts): رسم بياني متطور لتتبع المسار الحرج وتداخل المهام.",
                "Ai التلخيص الذكي (Smart Summarization) - التصنيف والتحويل الآلي (Auto-Routing)",
                "التقارير المؤتمتة: توليد تقارير دورية شاملة بضغطة زر لدعم صناع القرار."
            ]
        },
        correspondence: {
            title: "نظام إدارة المراسلات الإلكترونية (Correspondence Management)",
            description: "منصة رقمية لإدارة جميع الوارد والصادر والتعاملات الورقية وتحويلها إلى دورة عمل إلكترونية مؤمنة، مما يضمن سرعة تدفق المعلومات بين الأقسام المختلفة والجهات الخارجية.",
            features: [
                "التوقيع الرقمي (Digital Signature): اعتماد الخطابات والمذكرات رسمياً وبشكل آمن تماماً.",
                "تتبع المسار (Tracking & Audit Trail): معرفة مكان الخطاب حالياً ومن قام بالإطلاع عليه أو تعديله.",
                "محرك سير عمل مرن (Workflow Engine): تخصيص مسارات الاعتماد بناءً على نوع المراسلة أو الإدارة.",
                "قوالب جاهزة (Smart Templates): توحيد الهوية البصرية للخطابات الرسمية وسهولة إنشائها.",
                "مساعد قرار (AI Chatbot)",
                "الربط مع البريد الإلكتروني: إمكانية تحويل رسائل الإيميل إلى معاملات رسمية داخل النظام."
            ]
        },
        asset: {
            title: "نظام إدارة الأصول (Asset Management)",
            description: "نظام شامل لتتبع وإدارة الأصول الثابتة والمنقولة للمنظمة، بدءاً من المشتريات مروراً بالاستخدام والمواقع، وصولاً إلى الإهلاك أو التكهين.",
            features: [
                "الترميز الذكي (QR Code/RFID): جرد الأصول بسرعة ودقة باستخدام ماسح الأكواد.",
                "تتبع الموقع (Location Tracking): تحديد مكان كل أصل (مكتب، مستودع، فرع) والمسؤول عنه.",
                "سجل الصيانة التاريخي: ربط الأصول بنظام الصيانة لمعرفة تكلفة إصلاح كل أصل.",
                "إدارة العهد الشخصية: تسجيل الأصول المرتبطة بكل موظف وتسهيل إجراءات الإخلاء.",
                "إدارة الموردين والضمانات: تنبيهات قبل انتهاء فترات الضمان للأجهزة والمعدات."
            ]
        },
        operations: {
            title: "نظام التشغيل والصيانة (O&M System)",
            description: "حل تقني يهدف إلى أتمتة عمليات الصيانة الوقائية والتصحيحية، وضمان استدامة الاصول والمعدات بأعلى كفاءة تشغيلية وأقل تكلفة ممكنة.",
            features: [
                "إدارة أوامر العمل (Work Order Management): إنشاء وتكليف ومتابعة طلبات الإصلاح لحظياً.",
                "جدولة الصيانة الوقائية: نظام جدولة تلقائي للمهمات الدورية (تغيير فلاتر، فحص سنوي، إلخ).",
                "تطبيق الميدان للفنيين: تطبيق موبايل يتيح للفنيين تحديث حالة العمل ورفع الصور من الموقع.",
                "إدارة اتفاقيات مستوى الخدمة (SLA): قياس سرعة استجابة فرق الصيانة وجودة التنفيذ.",
                "تحليل الأعطال المتكررة: تقارير تحليلية لتحديد المعدات التي تستهلك مصاريف صيانة عالية لاستبدالها."
            ]
        },
        archive: {
            title: "نظام أرشفة المستندات (Document Archiving & DMS)",
            description: "مستودع رقمي مركزي يهدف إلى تحويل الأرشيف الورقي إلى قاعدة بيانات إلكترونية منظمة، مع توفير أدوات بحث متقدمة وصلاحيات وصول صارمة لحماية خصوصية المعلومات.",
            features: [
                "التصنيف الشجري (Hierarchical Filing): تنظيم الملفات في مجلدات ومجلدات فرعية مخصصة لكل إدارة.",
                "البحث الذكي (OCR & Full-Text Search): إمكانية البحث داخل محتوى المستندات الممسوحة ضوئياً.",
                "إدارة النسخ (Version Control): الاحتفاظ بكافة نسخ التعديل على المستند مع إمكانية الرجوع للنسخ السابقة.",
                "صلاحيات الوصول الدقيقة: تحديد من يمكنه (عرض، تحميل، حذف، أو طباعة) كل مستند.",
                "التكامل مع الأنظمة الأخرى: إمكانية استدعاء المستندات من داخل نظام المشاريع أو المراسلات."
            ]
        }
    }
};

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    initializePieSegments();
    initializeNavigationDots();
    initializeLanguageSwitcher();
    
    // Set initial wheel state first
    updateActiveStates(currentSection);
    
    // Don't call showSection on init - the first section is already active in HTML
    // Just update its content to match current language
    updateSectionContent(currentSection);
    
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
            
            // Update all sections content
            updateAllSectionsContent();
        });
    }
}

// Update content for all sections
function updateAllSectionsContent() {
    // Only update the currently active section immediately
    // Other sections will be updated when they become active
    updateSectionContent(currentSection);
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
                contentArea.style.textAlign = 'right';
                console.log('Set direction to RTL');
            } else {
                contentArea.setAttribute('dir', 'ltr');
                contentArea.style.textAlign = 'left';
                console.log('Set direction to LTR');
            }
        }
    } else {
        console.log('Section not found:', sectionName);
    }
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
