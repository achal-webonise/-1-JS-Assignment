//i used a different approch initially that i checked with Aashiq and he said it is not used conventially so going with this approach, which took me sometime.

const fetchData = async (API) => {
  try {
    const resp = await fetch(API);
    const data = await resp.json();

    for (i = 0; i < data.length; i++) {
      if (data[i].id % 2 !== 0) {
        const comments = await fetchComments(i + 1);
        data[i].comments = comments;
      }
    }

    return data;
  } catch (error) {
    console.error(" Error fetching posts data", error);
  }
};

const displayPosts = async () => {
  const postsAPI = "https://jsonplaceholder.typicode.com/posts/";
  const posts = await fetchData(postsAPI);

  const element = document.getElementById("container");
  if (!posts && !posts.length) {
    element.innerText = "Posts Not Available";
    return;
  }
  const postViews = posts
    .filter(({ id }) => id % 2 !== 0)
    .map((post) => {
      const comments = getPostComments(post.comments);
      return `
        <div>
          <h3>${post.title}</h3>
          <p>${post.body}</p>
          ${comments}
        </div>
      `;
    });

  element.innerHTML = postViews;
};

const getCommentsUrl = (postId) => {
  return `https://jsonplaceholder.typicode.com/posts/${postId}/comments`;
};

const fetchComments = async (postId) => {
  const commentAPI = getCommentsUrl(postId);
  const data = await fetch(commentAPI);
  const postComments = await data.json();
  return postComments;
};

const getPostComments = (comments) => {
  const commentsView =
    comments &&
    comments.map((comment) => {
      return `
      <aside class='commentsSection'>
        <div class='comments'>
          <b>${comment.email}</b>
          <p>${comment.body}</p>
        </div>
      </aside>
    `;
    });
  return commentsView;
};

document.addEventListener("DOMContentLoaded", displayPosts());
