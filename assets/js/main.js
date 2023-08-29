const navLink = document.querySelectorAll('.sidebar-ul-li-a');

navLink.forEach(items => {
    items.addEventListener('click', () => {
        // remove class active if their contains on the items every clicked
        navLink.forEach(items => {
            if (items.classList.contains('active')) {
                items.classList.remove('active');
            };
        });
        // add class active on the items every clicked
        items.classList.add('active');
    });
});