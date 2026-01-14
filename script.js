 document.addEventListener('DOMContentLoaded', function () {
            // Update timestamp
            const now = new Date();
            const timestamp = document.getElementById('timestamp');
            if (timestamp) {
                timestamp.textContent = now.toUTCString().replace('GMT', 'UTC');
            }

            // Set active nav link based on current page
            const currentPage = window.location.pathname.split('/').pop() || 'index.html';
            document.querySelectorAll('.nav-link').forEach(link => {
                const linkPage = link.getAttribute('href');
                if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
                    link.classList.add('active');
                } else {
                    link.classList.remove('active');
                }
            });

            // Add some terminal-like effects
            const codeBlocks = document.querySelectorAll('.code-block');
            codeBlocks.forEach(block => {
                block.addEventListener('mouseenter', () => {
                    block.style.borderColor = 'var(--bright-blue)';
                });
                block.addEventListener('mouseleave', () => {
                    block.style.borderColor = 'var(--border)';
                });
            });
        });