/* jshint esversion: 6 */

(function()
{
    const lightbox = createLightbox();
    document.querySelector('.content')
        .addEventListener('click', (event) =>
        {
            if (event.target.tagName === 'IMG' && event.target.closest('.image-item'))
            {
                openLightbox(event.target.src);
            }
        });

    function createLightbox()
    {
        const container = document.createElement('div');
        container.classList.add('lightbox');
        document.body.appendChild(container);

        const lightboxCloseButton = document.createElement('div');
        lightboxCloseButton.classList.add('lightbox-button');

        lightboxCloseButton.innerHTML = '&times;';
        container.appendChild(lightboxCloseButton);

        const lightboxImage = document.createElement('img');
        container.appendChild(lightboxImage);

        lightboxCloseButton.addEventListener('click', closeLightbox);

        container.addEventListener('click', (e) =>
        {
            closeLightbox();
        });

        return container;
    }

    function openLightbox(image)
    {
        const lightboxImage = lightbox.querySelector('img');
        lightboxImage.src = image;
        lightbox.style.display = 'flex';
    }

    function closeLightbox()
    {
        lightbox.style.display = 'none';
    }

})();