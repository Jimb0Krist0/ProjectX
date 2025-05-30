document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('feedbackForm');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        let isValid = true;

        // Валидация имени
        const name = document.getElementById('name');
        const nameError = name.nextElementSibling;
        if (name.value.trim() === '') {
            nameError.textContent = 'Пожалуйста, введите имя';
            nameError.style.display = 'block';
            isValid = false;
        } else {
            nameError.style.display = 'none';
        }

        // Валидация email
        const email = document.getElementById('email');
        const emailError = email.nextElementSibling;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.value)) {
            emailError.textContent = 'Пожалуйста, введите корректный email';
            emailError.style.display = 'block';
            isValid = false;
        } else {
            emailError.style.display = 'none';
        }

        // Валидация сообщения
        const message = document.getElementById('message');
        const messageError = message.nextElementSibling;
        if (message.value.trim() === '') {
            messageError.textContent = 'Пожалуйста, введите сообщение';
            messageError.style.display = 'block';
            isValid = false;
        } else {
            messageError.style.display = 'none';
        }

        // Если форма валидна, отправляем (здесь можно добавить AJAX)
        if (isValid) {
            alert('Форма отправлена!');
            form.reset();
        }
    });
});