// KAUSHAL NAI
// ITMD 541-01 Graduate Student

(function () {
    const mainHeadline = document.querySelector('#hero h1');
    if (mainHeadline) {
        mainHeadline.textContent = "Uplift Your Brand with Stellar Marketing";
        console.log("1. Changed main headline");
    }

    const subText = document.querySelector('#hero p');
    if (subText) {
        subText.innerHTML = "Utilize cutting-edge strategies from Stellar Marketing to help your business <em>thrive</em> and <em>excel</em>.";
        console.log("2. Changed hero subtext");
    }

    const heroSection = document.getElementById('hero');
    if (heroSection) {
        heroSection.style.backgroundImage = "url('https://picsum.photos/id/683/1280/720')";
        console.log("3. Changed hero background image");
    }

    const navbar = document.querySelector('header');
    const footer = document.querySelector('footer');
    if (navbar && footer) {
        const footerStyle = window.getComputedStyle(footer);
        const footerBgColor = footerStyle.backgroundColor;
        navbar.style.backgroundColor = footerBgColor;
        console.log("4. Changed navbar background color to match footer");
    }

    const getStartedButton = document.querySelector('#hero a[href="contact.html"]');
    if (getStartedButton) {
        getStartedButton.remove();
        console.log("5. Removed 'Get Started' CTA");
    } else {
        console.warn("5. 'Get Started' button not found");
    }

    const sectionHeadings = document.querySelectorAll('section h2');
    sectionHeadings.forEach(heading => {
        if (heading.textContent.includes('Services') ||
            heading.textContent.includes('Solutions') ||
            heading.textContent.includes('Contact')) {
            heading.style.textAlign = 'center';
            console.log(`6. Centered heading: ${heading.textContent}`);
        }
    });

    const serviceIcons = document.querySelectorAll('#services .material-symbols-outlined');
    if (serviceIcons.length > 0) {
        serviceIcons.forEach(icon => {
            icon.style.cssText = 'color: #47C714 !important';
            console.log("7. Changed service icon color");
        });
    } else {
        console.warn("7. Service icons not found");
    }

    const digitalMarketingIcon = document.querySelector('#services [data-icon="digital"]');
    if (digitalMarketingIcon) {
        digitalMarketingIcon.textContent = 'ads_click';
        console.log("8. Changed digital marketing icon to 'Ads Click'");
    } else {
        console.warn("8. Digital marketing icon not found");
    }

    const styleTag = document.createElement('style');
    styleTag.textContent = `
        @media (min-width: 1024px) {
            [data-section="product_cards"] {
                grid-template-columns: repeat(4, minmax(0, 1fr)) !important;
            }
        }
    `;
    document.head.appendChild(styleTag);
    console.log("9. Added style for 4-column layout at >=1024px");

    const musiciansCard = Array.from(document.querySelectorAll('#solutions h3')).find(h3 =>
        h3.textContent.includes('Musicians')
    );
    if (musiciansCard) {
        const img = musiciansCard.closest('.product_card').querySelector('img');
        if (img) {
            img.src = 'https://picsum.photos/id/453/400/300';
            console.log("10. Changed Musicians image");
        } else {
            console.warn("10. Musicians image not found");
        }
    } else {
        console.warn("10. Musicians card not found");
    }

    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function (event) {
            event.preventDefault(); 

            const nameInput = form.querySelector('#name');
            const emailInput = form.querySelector('#email');

            if (nameInput && emailInput && nameInput.value.trim() && emailInput.value.trim()) {
                alert(`Thank you, ${nameInput.value}! We will be in touch with you shortly at ${emailInput.value}.`);
                nameInput.value = ''; 
                emailInput.value = '';
                form.querySelector('#message').value = ''; 
            } else {
                alert("Please provide a name and email.");
            }

            console.log("Form submission handled");
        });
        console.log("Added form submission handler");
    } else {
        console.warn("Form not found");
    }
})();