document.addEventListener("DOMContentLoaded", () => {
  // Testimonials data
  const testimonialsData = {
    client1: {
      text: "Integrating AI into our daily workflows has significantly improved our team's productivity and decision-making. It's now a core component of how we deliver value to our clients.",
      name: "Johan Smite",
      role: "CEO of MTA"
    },
    client2: {
      text: "The AI solutions provided by this team have revolutionized our customer service operations. Response times decreased by 70% and customer satisfaction increased dramatically.",
      name: "Sarah Johnson",
      role: "Operations Director at TechCorp"
    },
    client3: {
      text: "Working with this AI consulting firm was a game-changer for our business. They helped us implement machine learning models that increased our sales by 45% in just 6 months.",
      name: "Michael Chen",
      role: "Founder of InnovateLab"
    },
    client4: {
      text: "The predictive analytics solution they developed for us has transformed our inventory management. We've reduced waste by 30% and improved efficiency across all departments.",
      name: "Emma Rodriguez",
      role: "Supply Chain Manager at GlobalTrade"
    },
    client5: {
      text: "Their expertise in natural language processing helped us create a chatbot that handles 80% of customer inquiries automatically. The ROI was evident within the first quarter.",
      name: "David Thompson",
      role: "CTO of ServicePlus"
    },
    client6: {
      text: "The computer vision system they implemented in our manufacturing process has reduced defects by 60% and improved quality control significantly. Exceptional work!",
      name: "Lisa Wang",
      role: "Quality Assurance Director at ManufacturePro"
    }
  };

  // Testimonials functionality
  function initTestimonials() {
    const clientLogos = document.querySelectorAll('.client-logo');
    const testimonialText = document.querySelector('.testimonial__text');
    const testimonialName = document.querySelector('.testimonial__name');
    const testimonialRole = document.querySelector('.testimonial__role');

    if (clientLogos.length === 0 || !testimonialText) return;

    // Set first client as active by default
    if (clientLogos[0]) {
      clientLogos[0].classList.add('client-logo--active');
    }

    clientLogos.forEach((logo, index) => {
      logo.addEventListener('click', () => {
        // Remove active class from all logos
        clientLogos.forEach(l => l.classList.remove('client-logo--active'));
        
        // Add active class to clicked logo
        logo.classList.add('client-logo--active');

        // Get testimonial data based on client number
        const clientKey = `client${index + 1}`;
        const testimonialData = testimonialsData[clientKey];

        if (testimonialData) {
          // Update testimonial content with fade effect
          const testimonialBlock = document.querySelector('.testimonial--featured');
          
          if (testimonialBlock) {
            testimonialBlock.style.opacity = '0.5';
            
            setTimeout(() => {
              testimonialText.textContent = `"${testimonialData.text}"`;
              testimonialName.textContent = testimonialData.name;
              testimonialRole.textContent = testimonialData.role;
              
              testimonialBlock.style.opacity = '1';
            }, 150);
          }
        }
      });

      // Add cursor pointer style
      logo.style.cursor = 'pointer';
    });
  }

  // Initialize testimonials
  initTestimonials();

  // Project cards interactive hover effect
  function initProjectCardsHover() {
    const projectGrid = document.querySelector('.projects__grid');
    const firstCard = document.querySelector('.projects__grid .project-card:first-child');
    const otherCards = document.querySelectorAll('.projects__grid .project-card:not(:first-child)');

    if (!projectGrid || !firstCard || otherCards.length === 0) return;

    // Add hover listeners to other cards
    otherCards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        projectGrid.classList.add('other-card-hovered');
      });

      card.addEventListener('mouseleave', () => {
        projectGrid.classList.remove('other-card-hovered');
      });
    });
  }

  // Initialize project cards hover effect
  initProjectCardsHover();

  // Accordion functionality
  const accordionItems = document.querySelectorAll("[data-accordion-item]");

  // Open first item by default
  if (accordionItems.length > 0) {
    accordionItems[0].classList.add("active");
  }

  accordionItems.forEach((item) => {
    // Support both original and renamed selectors
    const header =
      item.querySelector(".stat-card__header") ||
      item.querySelector(".company__stat-card-header");

    if (header) {
      header.addEventListener("click", () => {
        const isActive = item.classList.contains("active");

        // Close all items
        accordionItems.forEach((otherItem) => {
          otherItem.classList.remove("active");
        });

        // If clicked item wasn't active, open it
        if (!isActive) {
          item.classList.add("active");
        }
      });
    }
  });

  // Dropdown menu functionality
  const dropdownItems = document.querySelectorAll(
    ".header__nav-item--dropdown"
  );

  dropdownItems.forEach((item) => {
    const dropdown = item.querySelector(".header__dropdown");

    // Close dropdown when clicking outside
    document.addEventListener("click", (e) => {
      if (!item.contains(e.target)) {
        item.classList.remove("dropdown-open");
      }
    });

    // Prevent dropdown from closing when clicking inside it
    dropdown?.addEventListener("click", (e) => {
      e.stopPropagation();
    });
  });

  // Header scroll effect (not for services page)
  const header = document.querySelector(".header");
  const isServicesPage = document.querySelector(".breadcrumbs");

  if (header && !isServicesPage) {
    window.addEventListener("scroll", () => {
      // Change header when user scrolls 70% of viewport height
      const scrollThreshold = window.innerHeight * 0.7;

      if (window.scrollY > scrollThreshold) {
        header.classList.add("header--scrolled");
      } else {
        header.classList.remove("header--scrolled");
      }
    });
  }
});
