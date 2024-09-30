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
        const lightbox = document.createElement('div');
        lightbox.classList.add('lightbox');
        document.body.appendChild(lightbox);

        const closeButton = document.createElement('div');
        closeButton.classList.add('lightbox-close');
        closeButton.innerHTML = '&times;';
        lightbox.appendChild(closeButton);

        const lightboxImage = document.createElement('img');
        lightbox.appendChild(lightboxImage);

        closeButton.addEventListener('click', closeLightbox);

        lightbox.addEventListener('click', (e) =>
        {
            closeLightbox();
        });

        return lightbox;
    }

    function openLightbox(imageSrc)
    {
        const lightboxImage = lightbox.querySelector('img');
        lightboxImage.src = imageSrc;
        lightbox.style.display = 'flex';
    }

    function closeLightbox()
    {
        lightbox.style.display = 'none';
    }

})();