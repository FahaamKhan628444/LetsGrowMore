document.addEventListener("DOMContentLoaded", function () {
    const userImage = document.getElementById("user-image");
    const userName = document.getElementById("user-name");
    const userDescription = document.getElementById("user-description");
    const userEmail = document.getElementById("user-email");
    const editUserButton = document.getElementById("edit-user-button");
    const userModal = document.getElementById("user-modal");
    const closeUserModal = document.getElementById("close-modal");
    const saveUserButton = document.getElementById("save-user-button");
    const newNameInput = document.getElementById("new-name");
    const newDescriptionInput = document.getElementById("new-description");
    const newEmailInput = document.getElementById("new-email");

    editUserButton.addEventListener("click", function () {
        newNameInput.value = userName.textContent;
        newDescriptionInput.value = userDescription.textContent;
        newEmailInput.value = userEmail.textContent.replace("Email: ", "");
        userModal.style.display = "block";
    });

    closeUserModal.addEventListener("click", function () {
        userModal.style.display = "none";
    });

    saveUserButton.addEventListener("click", function () {
        userName.textContent = newNameInput.value;
        userDescription.textContent = newDescriptionInput.value;
        userEmail.textContent = "Email: " + newEmailInput.value;
        userModal.style.display = "none";
    });

    // Function to fetch user data from an API (for demonstration purposes)
    function fetchUserData() {
        // You can use Fetch or other methods to get data from an API here.
        // For this example, we'll just use static data.
        const userData = {
            name: "John Doe",
            description: "Web Developer",
            email: "johndoe@example.com",
            image: "user.jpg",
        };

        // Update the user card with fetched data
        userImage.src = userData.image;
        userName.textContent = userData.name;
        userDescription.textContent = userData.description;
        userEmail.textContent = "Email: " + userData.email;
    }

    // Fetch user data when the page loads
    fetchUserData();
});
