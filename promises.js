const posts = [{
        title: 'Post One',
        body: 'This is post one'
    },
    {
        title: 'Post Two',
        body: 'This is post two'
    }
];

function getPosts() {
    setTimeout(() => {
        let output = '';

        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const error = false;

            posts.push(post);

            if (!error) {
                resolve();
            } else {
                reject('Error: something went wrong. please check');
            }

        }, 2000);
    });
}

// single promise case. You can uncomment them out to study
// createPost(
//             {
//                 title: 'Post Three - demo by promise method', 
//                 body: 'this is post three'
//             }
//           ).then(getPosts)
//            .catch(err => console.log(err));

// ========================================================================
// Async / Await
// ========================================================================
// async function init() {
//     await createPost({
//         title: 'Post Three  - by async',
//         body: 'this is post three by async'
//     });

//     getPosts();
// }

// init();

// ========================================================================
// Async / Await / Fetch
// ========================================================================
async function fetchUsers() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');

    const data = await res.json();

    console.log(data);
}

fetchUsers();

// ========================================================================
// promises all: 
// ========================================================================
// you can uncomment them out to study
// const promise1 = Promise.resolve('Hello World');
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject) =>
//     setTimeout(resolve, 2000, 'Goodbye')
// );
// const promise4 = fetch('https://jsonplaceholder.typicode.com/users').
// then(res => res.json());

// Promise.all([promise1, promise2, promise3, promise4]).then(
//     values => console.log(values)
// );