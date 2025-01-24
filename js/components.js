class Components {
  static async loadFooter() {
    try {
      // Determine if we're in the pages directory or root
      const isInPagesDir = window.location.pathname.includes('/pages/');
      const footerPath = isInPagesDir
        ? '../components/footer.html'
        : 'components/footer.html';

      // Fetch the footer content
      const response = await fetch(footerPath);
      const footerHtml = await response.text();

      // Create a temporary container
      const temp = document.createElement('div');
      temp.innerHTML = footerHtml;

      // Fix the links based on current location
      if (isInPagesDir) {
        // In pages directory
        temp.querySelector('.about-link').href = 'about.html';
        temp.querySelector('.servers-link').href = 'servers.html';
        temp.querySelector('.apply-link').href = 'apply.html';
        temp.querySelector('.contact-link').href = 'contact.html';
        temp.querySelector('.rules-link').href = '../index.html#rules';
        // temp.querySelector('.team-link').href = 'team.html';
        temp.querySelector('.faq-link').href = 'faq.html';
        temp.querySelector('.privacy-link').href = 'privacy.html';
        temp.querySelector('.terms-link').href = 'terms.html';
        temp.querySelector('.guidelines-link').href = 'guidelines.html';
      } else {
        // In root directory
        temp.querySelector('.about-link').href = 'pages/about.html';
        temp.querySelector('.servers-link').href = 'pages/servers.html';
        temp.querySelector('.apply-link').href = 'pages/apply.html';
        temp.querySelector('.contact-link').href = 'pages/contact.html';
        temp.querySelector('.rules-link').href = '#rules';
        // temp.querySelector('.team-link').href = 'pages/team.html';
        temp.querySelector('.faq-link').href = 'pages/faq.html';
        temp.querySelector('.privacy-link').href = 'pages/privacy.html';
        temp.querySelector('.terms-link').href = 'pages/terms.html';
        temp.querySelector('.guidelines-link').href = 'pages/guidelines.html';
      }

      // Add footer styles if they don't exist
      if (!document.querySelector('#footer-styles')) {
        const styles = `
                    * {
                        margin: 0;
                        padding: 0;
                        box-sizing: border-box;
                        font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, sans-serif;
                    }

                    footer {
                        background: #f8f9fa;
                        padding: 4rem 2rem 2rem;
                        margin-top: auto;
                        border-top: 1px solid #eee;
                        font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, sans-serif;
                    }

                    .footer-content {
                        max-width: 1200px;
                        margin: 0 auto;
                    }

                    .footer-grid {
                        display: grid;
                        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                        gap: 2rem;
                        margin-bottom: 3rem;
                    }

                    .footer-section h4 {
                        color: #1a1a1a;
                        margin-bottom: 1rem;
                        font-size: 1.1rem;
                    }

                    .footer-section ul {
                        list-style: none;
                    }

                    .footer-section ul li {
                        margin-bottom: 0.5rem;
                    }

                    .footer-section ul li a {
                        color: #666;
                        text-decoration: none;
                        transition: color 0.2s;
                    }

                    .footer-section ul li a:hover {
                        color: #1a73e8;
                    }

                    .social-links {
                        display: flex;
                        gap: 1rem;
                    }

                    .social-icon {
                        display: inline-flex;
                        align-items: center;
                        justify-content: center;
                        width: 40px;
                        height: 40px;
                        border-radius: 50%;
                        background: #fff;
                        transition: transform 0.2s;
                    }

                    .social-icon:hover {
                        transform: translateY(-2px);
                    }

                    .social-icon img {
                        width: 20px;
                        height: 20px;
                        filter: invert(20%);
                    }

                    .footer-bottom {
                        padding-top: 2rem;
                        border-top: 1px solid #eee;
                        text-align: center;
                        color: #666;
                        font-size: 0.9rem;
                    }

                    .footer-bottom p {
                        margin-bottom: 0.5rem;
                    }
                `;
        const styleSheet = document.createElement('style');
        styleSheet.id = 'footer-styles';
        styleSheet.textContent = styles;
        document.head.appendChild(styleSheet);
      }

      // Remove any existing footer
      const existingFooter = document.querySelector('footer');
      if (existingFooter) {
        existingFooter.remove();
      }

      // Append the new footer to the body
      document.body.appendChild(temp.querySelector('footer'));

    } catch (error) {
      console.error('Error loading footer:', error);
    }
  }
}
