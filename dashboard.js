// Cek apakah user sudah login
if (!sessionStorage.getItem("loggedIn")) {
    window.location.href = "index.html";
}

// Fungsi Logout
function logout() {
    sessionStorage.removeItem("loggedIn");
    window.location.href = "index.html";
}

// Fungsi untuk memposting gambar/video + caption
function postContent() {
    let fileInput = document.getElementById("fileInput");
    let captionInput = document.getElementById("captionInput");
    let postsContainer = document.getElementById("postsContainer");

    if (fileInput.files.length === 0) {
        alert("Please select an image or video!");
        return;
    }

    let file = fileInput.files[0];
    let fileURL = URL.createObjectURL(file);
    let caption = captionInput.value;

    // Buat elemen postingan
    let postDiv = document.createElement("div");
    postDiv.classList.add("post");

    let mediaElement;
    if (file.type.startsWith("image")) {
        mediaElement = document.createElement("img");
    } else if (file.type.startsWith("video")) {
        mediaElement = document.createElement("video");
        mediaElement.controls = true;
    }

    mediaElement.src = fileURL;
    postDiv.appendChild(mediaElement);

    let captionText = document.createElement("p");
    captionText.innerText = caption;
    postDiv.appendChild(captionText);

    postsContainer.appendChild(postDiv);

    // Reset input setelah posting
    fileInput.value = "";
    captionInput.value = "";
}
