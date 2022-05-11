let save = document.getElementById("btn");
save.addEventListener("click", newPost);

document.addEventListener('DOMContentLoaded', updatePosts);

function updatePosts() {
    
    fetch("http://localhost:3000/api/all").then(res => {
        return res.json();
    }).then(json => {
        
        let postElements = "", 
            posts = JSON.parse(json),
            update = document.getElementById("posts");

            posts.forEach((post) => {
                let postElement = `
                    <div id=${post.id} class="card mb-4">
                        <div class="card-header">
                            <h5 class="card-title">${post.title}</h5>
                        </div>
                        <div class="card-body">
                            <div class="card-text">${post.description}</div>
                        </div>
                    </div>`
                postElements += postElement;
            });
            
        update.innerHTML = postElements;
    });
}

function newPost() {

    let title = document.getElementById("title").value,
        description = document.getElementById("desc").value;
        post = {title, description};

    
    const options = {
        method: "POST",
        headers: new Headers({"content-type": "application/json"}),
        body: JSON.stringify(post)
    }

    fetch("http://localhost:3000/api/new", options).then((res) => {
        updatePosts();
        document.getElementById("title").value = "";
        document.getElementById("desc").value = "";
    });
}