function fetchPost(postId) {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch post');
        }
        return response.json();
      });
  }
  function fetchComments(postId) {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch comments');
        }
        return response.json();
      });
  }
  const postIdInput = document.getElementById('postIdInput');
  const searchButton = document.getElementById('searchButton');
  const postContainer = document.getElementById('postContainer');
  searchButton.addEventListener('click', () => {
    const postId = postIdInput.value;
    fetchPost(postId)
      .then(post => {
        const postHtml = `
          <h2>${post.title}</h2>
          <p>${post.body}</p>
          <button id="commentsButton">Load Comments</button>
          <div id="commentsContainer"></div>
        `;
        postContainer.innerHTML = postHtml;
        const commentsButton = document.getElementById('commentsButton');
        const commentsContainer = document.getElementById('commentsContainer');
  
        commentsButton.addEventListener('click', () => {
          fetchComments(postId)
            .then(comments => {
              const commentsHtml = comments.map(comment => `
                <div>
                  <h4>${comment.name}</h4>
                  <p>${comment.body}</p>
                </div>
              `).join('');
              commentsContainer.innerHTML = commentsHtml;
            })
            .catch(error => {
              console.error(error);
              commentsContainer.innerHTML = 'Failed to load comments';
            });
        });
      })
      .catch(error => {
        console.error(error);
        postContainer.innerHTML = 'Failed to load post';
      });
  });