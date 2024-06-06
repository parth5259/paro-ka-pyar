function checkAnswers() {
    const answers = {
        color: 'Blue',
        meet: 'College',
        movie: 'Inception',
        pet: 'Butterscotch'
    };

    const selectedColor = document.querySelector('input[name="color"]:checked');
    const selectedMeet = document.querySelector('input[name="meet"]:checked');
    const selectedMovie = document.querySelector('input[name="movie"]:checked');
    const selectedPet = document.querySelector('input[name="pet"]:checked');

    if (selectedColor && selectedMeet && selectedMovie && selectedPet) {
        if (selectedColor.value === answers.color && selectedMeet.value === answers.meet &&
            selectedMovie.value === answers.movie && selectedPet.value === answers.pet) {
            alert('Great job, Billu! You know Paro so well!,');
        } else {
            alert('Oops! Some answers are incorrect. Try again!');
        }
    } else {
        alert('Please answer all the questions.');
    }
}

function showPopup() {
    document.getElementById('popup').style.display = 'flex';
    setTimeout(() => {
        document.getElementById('popup').style.display = 'none';
    }, 5000); // Hide the popup after 5 seconds
}

function openModal(image) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const captionText = document.getElementById('caption');

    modal.style.display = 'block';
    modalImg.src = image.src;
    captionText.innerHTML = image.alt;
}

function closeModal() {
    document.getElementById('imageModal').style.display = 'none';
}

window.addEventListener('load', () => {
    const backgroundMusic = document.getElementById('backgroundMusic');
    backgroundMusic.play().catch(() => {
        // Handle autoplay policy violation
        backgroundMusic.muted = true;
        backgroundMusic.play();
    });
});
