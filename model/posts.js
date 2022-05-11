module.exports = {
    posts: [
        {
            id: "abc123", 
            title: "Hello", 
            description: "To test this, just enter a title and a description and click and 'Save'"
        }   
    ],
    
    getAll() {
        return this.posts;
    },

    newPost(title, description){
        this.posts.push({id: generateID(), title, description});
    }

}

function generateID() {
    return Math.random().toString(36).substr(2,9);
}