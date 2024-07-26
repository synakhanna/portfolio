document.addEventListener('DOMContentLoaded', function () {
    if (window.innerWidth <= 768) { // Check if screen width is less than or equal to 768px
        if (!localStorage.getItem('popupShown')) { // Check if the popup has been shown before
            var popup = document.createElement('div');
            popup.id = 'popup';
            popup.style.position = 'fixed';
            popup.style.top = '0';
            popup.style.left = '0';
            popup.style.width = '100%';
            popup.style.height = '100%';
            popup.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
            popup.style.color = '#fff';
            popup.style.display = 'flex';
            popup.style.justifyContent = 'center';
            popup.style.alignItems = 'center';
            popup.style.zIndex = '1000';
            
            var messageBox = document.createElement('div');
            messageBox.style.backgroundColor = '#333';
            messageBox.style.padding = '20px';
            messageBox.style.borderRadius = '10px';
            messageBox.style.textAlign = 'center';
            
            var message = document.createElement('p');
            message.textContent = 'Welcome to my portfolio! Visit the website on a desktop for better experience.';
            message.style.marginBottom = '20px';
            
            var closeButton = document.createElement('button');
            closeButton.textContent = 'Close';
            closeButton.style.padding = '10px 20px';
            closeButton.style.border = 'none';
            closeButton.style.borderRadius = '5px';
            closeButton.style.backgroundColor = '#007BFF';
            closeButton.style.color = '#fff';
            closeButton.style.cursor = 'pointer';
            
            closeButton.addEventListener('click', function () {
                document.body.removeChild(popup);
                localStorage.setItem('popupShown', 'true'); // Set local storage to indicate the popup has been shown
            });
            
            messageBox.appendChild(message);
            messageBox.appendChild(closeButton);
            popup.appendChild(messageBox);
            document.body.appendChild(popup);
        }
    }
});
