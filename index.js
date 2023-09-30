const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today??",
        likes: 152
    }
]

const main = document.getElementById("main")

for (let i = 0; i < posts.length; i++) {
    main.innerHTML += `
            <section>
                <div class="user-container">
                    <img class="user-post" src=${posts[i].avatar}>
                    <div class="user-data">
                        <span class="user-name">${posts[i].name}</span>
                        <span class="user-location">${posts[i].location}</span>
                    </div>
                </div>
                <img class="post" src=${posts[i].post}>
            </section>
            
            <section>
                <div class="interactions-container">
                    <img class="like-icon icon" src="images/icon-heart.png">
                    <img class="icon" src="images/icon-comment.png">
                    <img class="icon" src="images/icon-dm.png">
                </div>
                <p class="bold" id="nr-likes">${posts[i].likes} likes</p>
                <p id="comment"><span class="bold">${posts[i].username}</span> ${posts[i].comment}</p>
            </section>
            `
}





