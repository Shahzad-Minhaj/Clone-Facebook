document.getElementById('file-upload').addEventListener('change', function (event) {
  const file = event.target.files[0];
  const imagePreview = document.getElementById('image-preview');

  if (file) {
    const reader = new FileReader();

    reader.onload = function (event) {
      const imageUrl = event.target.result;
      imagePreview.innerHTML = `<img src="${imageUrl}" alt="Uploaded Image">`;
      imagePreview.style.display = 'block';

      const removeButton = document.createElement('button');
      removeButton.innerHTML = '&times;';
      removeButton.classList.add('remove-previews');
      removeButton.addEventListener('click', function () {
        imagePreview.innerHTML = '';
        imagePreview.style.display = 'none';
        document.getElementById('file-upload').value = ''; // Reset the file input
      });
      imagePreview.appendChild(removeButton);
    };

    reader.readAsDataURL(file);
  }
});

document.querySelector(".btn").onclick = () => {
  let textFromInput = document.querySelector(".abc").value;
  let content = document.querySelector(".content")
  let a = document.createElement("div")
  a.setAttribute("class", "feeds")
  let feed = document.querySelector(".feeds")
  content.prepend(a)
  let profile = document.createElement("div")
  profile.setAttribute("class", "profile1")
  a.append(profile)
  let profile1 = document.querySelector(".profile1")
  let profpic = document.createElement("img")
  profpic.src = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw0PDRANDQ8NDQ4NDQ0REBAODxANDw8PFhIWFhYRExMYHSggGBomGxMVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDQ0ODw0NDysZFRkyKzctKysuKzcrKzctKys3KystKzctNysrNysrLSsrKysrKysrKysrKysrKysrKysrK//AABEIAOEA4QMBIgACEQEDEQH/xAAbAAEAAwEBAQEAAAAAAAAAAAAAAQQFBgMCB//EADUQAQACAAMEBwYFBQEAAAAAAAABAgMFEQQhMVESQVJxgZKxFSIzobLBEzJhkdEjQnKC8HP/xAAXAQEBAQEAAAAAAAAAAAAAAAAAAQID/8QAFxEBAQEBAAAAAAAAAAAAAAAAAAERAv/aAAwDAQACEQMRAD8A/RJAdGQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAfXTAfIAAAAAAAAAAAAaINVIjVIgAAAAAAAAAAAAAAAAAAAAAAABXfuji0Nkyq1t956Mco46LGVbDER+JbfaY3RPVDUYtVVwsvwa8K6zHXOsrFcOvKP2fSUV5WwKTxrG9Ux8rw7R7sdGf010aCBHN7Tsd8P80axzjgruqxKRas1nfExpLntu2acK+nGs8JalFYBpAAAAAAAAAAAAAAAAAABcyvZ4vib41isaypN3JaaYfS67SzVaEQkGVQkQACQQrbds8YlJjTfG+J5LQI5KRZzHDiuNaI69/7qzegISqAAAAAAAAAAAAAAAAGjpdirEYVYjd7sOZdRsvw6f4V9Gar2EJZUAAAAQlAMXO49+s84nx4M1qZ7xp3W+zLWICEtoAAAAAAAAAAAAAAAAh0mXYnSwqzyjT9tznGtkmNG/Dnjxju/wClnpWvAhLKgAAAAPm9oiNZ4QDDzrF1xYr2Y9VB6bXidO9rc5nTueTSCQVABQAAAAAAAAAAAAAAfeBizS8XjjEvghKOo2fGi9YtExv5dUvVzmwbX+FbfrNZ4x93QYeJFoiY4Swr7AFAAGVm+17pwq8d3S9Vjb9tjDrpG+86xGnVPOWBa0zMzO+Z4rEQA2gAAAAAAAAAAAAAAAAAABAD22far4f5Z8J3w8RnFa2z5x1Xr4ws1zXB5z5bfw5+SJTBu3zfCjhrbwmPVSxc1xba6aVju3s81XB9XvMzrMzMygFQAUAAAAAAAAAAAAAAAIgB9YeHa06ViZ8F7Ycum/vX1iu7TnLZwsClY0rERozarHwMpvO+89H9FymUYUcZvPjp9mgM6YpeysHlPmk9l4HZnzSugql7KwOzPmlHsrA7M+aV4BR9lYHZnzSeysDsz5pXgFH2VgdmfNL5tlGFPCbx3TH3hoBoyb5LH9t58a6qmNlmNX+3pxzrOvy4uhF1MclaJidJiYmOqd0jqMfZ6XjS9Yn1julibdl9sPfHvU59cd7UopAKgAAAAAAAAAA1suy6JiL38IV8p2bp36U8K+reiGLVIhIIqEgAAAAAAAAAAAiY13SkBg5nsH4c9On5J6uzP8KDq70i0TWY1iY0mHM7XgTh3mk9XCecdTUqPIBpAAAAAABNKzMxEcZmIhC/k2D0sXpTwpGvjPD7pVbGybPGHSKx4zznm9gYUAAAAAAAAAAAAAAAAZ2dYHSp0440+mWi+ManSravarMfIHKiIS6MgAAAAADbyKv9O087+kR/LEb+TR/Rj9bW9dPsnSxeAYUAAAAAAAAAAAAAAAAAByuPXS9o5XtHzfD22z4uJ/6X9ZeLpGQAAAAAB0OUfAr/ALfVLnnQZR8Cvfb6pZ6WLoDKgAAAAAAAAAAAAAAAAiZSDmNu+Nif52eKzmUaY9++J+UKzpEABAAAAB0GT/Ar32+qQZ6WLoDKgAAAAAAAAAAAAAAAIlIA5zNfj3/1+mFUG4gAqAAP/9k="
  profile1.append(profpic)
  let name = document.createElement("span")
  name.textContent = "Shahzad Minhaj"
  profile.append(name)
  
  let feedText = document.createElement("p")
  feedText.setAttribute("class", "feedText")
  feedText.textContent = textFromInput
  a.append(feedText)
  let image = document.createElement("div")
  image.setAttribute("class", "iimage")
  a.append(image)

  let action = document.createElement("div")
  action.setAttribute("class", "actions")
  action.innerHTML = `<button class="like-btn" id="xyz"><i class="far fa-thumbs-up"></i> Like</button>
   <button class="comment-btn" id="xyz2"><i class="far fa-comment"></i> Comment</button>
   <button class="share-btn" id="xyz3"><i class="fas fa-share"></i> Share</button>`
a.append(action)
document.querySelector(".abc").value = ""
document.querySelector(".image-preview").innerHTML = ""
let imageUpload = document.getElementById("file-upload");
  let imageFile = imageUpload.files[0];

  // Display the image
  if (imageFile) {
    let reader = new FileReader();
    reader.readAsDataURL(imageFile);
    reader.onload = function () {
      let img = document.createElement("img");
      img.src = reader.result;
      img.alt = "Uploaded Image";
      let feedImage = document.querySelector(".iimage");
      feedImage.innerHTML = ""; // Clear previous image
      feedImage.appendChild(img);
    }
  }
}
