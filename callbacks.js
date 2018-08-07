// we will simulate create post on blog

const posts = [{
        title: 'Post One',
        body: 'This is post one'
    },
    {
        title: 'Post Two',
        body: 'This is post two'
    }
];

// get Posts
function getPosts() {
    // we are mimic get post from server, which could take several seconds
    // we are using setTimeout to simulate this
    setTimeout(() => {
        let output = '';

        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        });

        document.body.innerHTML = output;
    }, 1000);
}

// create Post
function createPost(post, callback) {
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000);
}

// test it out
createPost({
    title: 'Post Three',
    body: 'this is post three'
}, getPosts);