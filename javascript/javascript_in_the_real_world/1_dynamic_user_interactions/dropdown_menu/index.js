const dropdownInteraction = function () {

    const showBtn = document.querySelector('.dropdown_btn');
    const dropdownItemsContainer = document.querySelector('.dropdown_items_container');
    const dropdownItem = document.querySelectorAll('.dropdown_item');

    const toggleDisplay = function () {
        if (dropdownItemsContainer.style.display == 'block') {
            dropdownItemsContainer.style.display = 'none';
        } else {
            dropdownItemsContainer.style.display = 'block';
        }
    }

    showBtn.addEventListener('click', toggleDisplay);

    for (item of dropdownItem) {
        item.addEventListener('click', toggleDisplay);
    }

}

dropdownInteraction();