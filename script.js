document.addEventListener("DOMContentLoaded", function() {
    // Function to generate random images based on the date
    function generateRandomImages() {
        // Get the current date without hours
        var today = new Date();
        today.setUTCHours(0, 0, 0, 0);
        var seed = today.getUTCDate();

        // Set the seed for the random number generator
        Math.seedrandom(seed.toString());

        // Generate 5 unique index
        var imageIndices = [];
        while (imageIndices.length < 5) {
            var randomIndex = Math.floor(Math.random() * 40); 
            if (!imageIndices.includes(randomIndex)) {
                imageIndices.push(randomIndex);
            }
        }

        // Fetch images by an index previously created
        imageIndices.forEach(function(index) {
            var imageUrl = `images/image${index}.jpg`; 
            var imageElement = document.createElement("img");
            imageElement.src = imageUrl;
            imageElement.classList.add("image");
            document.getElementById("image-container").appendChild(imageElement);
        });
    }

    
    generateRandomImages();

});
