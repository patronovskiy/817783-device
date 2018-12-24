// скрипт для работы со всплывающими окнами
// объявление переменных
// всплывающее окно с формой "напишите нам"
var writeUsButton = document.querySelector('.feedback-field-button');
var writeUsPopup = document.querySelector('.modal-feedback');
var writeUsCloseButton = document.querySelector('.modal-feedback-close');
var writeUsForm = document.querySelector('.feedback');
// поля форм
var userNameField = writeUsPopup.querySelector('.user-name-field');
var emailField = writeUsPopup.querySelector('.email-field');
var messageField = writeUsPopup.querySelector('.feedback-textarea');
var userNameStorage;
var isStorageSupport = true;
// всплывающее окно с картой
var staticMap = document.querySelector('.static-map');
var mapLink = document.querySelector('.modal-map-link');
var mapPopup = document.querySelector('.modal-map');
var mapCloseButton = document.querySelector('.modal-map-close');

// проверка работы localStorage
try {
	userNameStorage = localStorage.getItem('userName');
} catch (err) {
	isStorageSupport = false;
}

// появление окна "напишите нам"
writeUsButton.addEventListener('click', function (evt) {
	evt.preventDefault();
	writeUsPopup.classList.remove('modal-hidden');
	userNameField.focus();

	if (isStorageSupport) {
		userNameField.value = userNameStorage;
		emailField.focus();
	} else {
		userNameField.focus();
	}
});

writeUsCloseButton.addEventListener('click', function (evt) {
	evt.preventDefault();
	writeUsPopup.classList.add('modal-hidden');
	writeUsForm.classList.remove('modal-error');
});

// проверка формы
writeUsForm.addEventListener('submit', function (evt) {
	if (!userNameField.value || !emailField.value || !messageField.value) {
		evt.preventDefault();
		writeUsForm.classList.remove('modal-error');
		writeUsForm.offsetWidth = writeUsForm.offsetWidth;
		writeUsForm.classList.add('modal-error');
	} else {
		if (isStorageSupport) {
			localStorage.setItem('userName', userNameField.value);
		}
	}
});

writeUsForm.addEventListener('submit', function (evt) {
	if (!userNameField.value) {
		userNameField.classList.add('invalid-form');
	}
});

writeUsForm.addEventListener('submit', function (evt) {
	if (!emailField.value) {
		emailField.classList.add('invalid-form');
	}
});

writeUsForm.addEventListener('submit', function (evt) {
	if (!messageField.value) {
		messageField.classList.add('invalid-form');
	}
});

// удаление стилей для невалидной формы при фокусе
userNameField.addEventListener('focus', function (evt) {
	userNameField.classList.remove('invalid-form');
});

emailField.addEventListener('focus', function (evt) {
	emailField.classList.remove('invalid-form');
});

messageField.addEventListener('focus', function (evt) {
	messageField.classList.remove('invalid-form');
});

// появление окна с картой
mapLink.addEventListener('click', function (evt) {
	evt.preventDefault();
	mapPopup.classList.remove('modal-hidden');
});

mapCloseButton.addEventListener('click', function (evt) {
	evt.preventDefault();
	mapPopup.classList.add('modal-hidden');
})

// закрытие окон по клавише escape
window.addEventListener('keydown', function (evt) {
	if (evt.keyCode === 27) {
		if (!writeUsPopup.classList.contains('modal-hidden')) {
			evt.preventDefault();
			writeUsPopup.classList.add('modal-hidden');
			writeUsForm.classList.remove('modal-error');
		} else if (!mapPopup.classList.contains('modal-hidden')) {
			evt.preventDefault();
			mapPopup.classList.add('modal-hidden');
		}
	}
});