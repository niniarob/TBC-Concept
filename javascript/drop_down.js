document.addEventListener('DOMContentLoaded', () => {
    const dropdowns = document.querySelectorAll('.header_menu_dropdown .flex_cont');
    const burgerMenu = document.querySelector('.burger_menu');

    const closeOtherDropdowns = (currentDropdown) => {
        document.querySelectorAll('.header_menu_dropdown').forEach(otherDropdown => {
            if (otherDropdown !== currentDropdown && otherDropdown.classList.contains('active')) {
                const otherContent = otherDropdown.querySelector('.true');
                otherContent.style.maxHeight = otherContent.scrollHeight + 'px';
                setTimeout(() => {
                    otherDropdown.classList.remove('active');
                    otherContent.style.maxHeight = '0';
                }, 10);
            }
        });
    };

    const toggleDropdown = (dropdown) => {
        const content = dropdown.querySelector('.true');
        if (dropdown.classList.contains('active')) {
            content.style.maxHeight = content.scrollHeight + 'px';
            setTimeout(() => {
                dropdown.classList.remove('active');
                content.style.maxHeight = '0';
            }, 10);
        } else {
            dropdown.classList.add('active');
            content.style.display = 'flex';
            content.style.maxHeight = '0';
            content.offsetHeight; // Trigger a reflow
            setTimeout(() => {
                content.style.maxHeight = content.scrollHeight + 'px';
            }, 10);
        }
    };

    dropdowns.forEach(item => {
        item.addEventListener('click', function() {
            const dropdown = this.closest('.header_menu_dropdown');
            closeOtherDropdowns(dropdown);
            toggleDropdown(dropdown);
        });
    });

    document.querySelectorAll('.header_menu_dropdown').forEach(dropdown => {
        const content = dropdown.querySelector('.true');
        content.addEventListener('transitionend', function(e) {
            if (e.propertyName === 'max-height' && !dropdown.classList.contains('active')) {
                content.style.display = 'none';
            }
        });
    });

    burgerMenu.addEventListener('click', function() {
        if (!this.classList.contains('open')) {
            document.querySelectorAll('.header_menu_dropdown.active').forEach(activeDropdown => {
                const content = activeDropdown.querySelector('.true');
                content.style.maxHeight = content.scrollHeight + 'px';
                setTimeout(() => {
                    activeDropdown.classList.remove('active');
                    content.style.maxHeight = '0';
                }, 10);
            });
        }
    });
});
