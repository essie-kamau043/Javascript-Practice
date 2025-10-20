fetch("https://jsonplaceholder.typicode.com/posts")
     .then(response => response.json()) // convert to js object
      .then(data => {
        console.log("Fetched Posts:", data.length);

        // print the first 5 posts

        for (let i = 0; i < 5; i++){
            console.log(`Post ${i + 1}: ${data[i].title}`);
        }
    })
    .catch(error => console.error("Error fetching posts:", error));