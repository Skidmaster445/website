document.addEventListener('DOMContentLoaded', () => {
    const main = document.querySelector('main');

    function createCard(title, content) {
        const card = document.createElement('div');
        card.className = 'card';
        
        const cardTitle = document.createElement('h2');
        cardTitle.textContent = title;
        
        const cardContent = document.createElement('p');
        cardContent.textContent = content;
        
        card.appendChild(cardTitle);
        card.appendChild(cardContent);
        
        return card;
    }

    main.appendChild(createCard('About Interna1', 'I am Interna1, and I love making unblocked games.'));
    main.appendChild(createCard('Future Services', 'Stay tuned for lots of fun and exciting services!'));

    const contactForm = document.querySelector('#contact form');
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Form submitted!');
    });

    const postForm = document.getElementById('postForm');
    const forum = document.querySelector('.forum');

    postForm.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const title = document.getElementById('postTitle').value;
        const content = document.getElementById('postContent').value;
        
        if (title && content) {
            const post = document.createElement('div');
            post.className = 'post';
            
            const postTitle = document.createElement('h3');
            postTitle.textContent = title;
            
            const postContent = document.createElement('p');
            postContent.textContent = content;
            
            post.appendChild(postTitle);
            post.appendChild(postContent);
            forum.appendChild(post);
        } else {
            alert('Please fill in both the title and content!');
        }
        
        postForm.reset();
    });
});
