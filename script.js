//* ====== Metodo POST  ====== *//

const url = 'https://jsonplaceholder.typicode.com/users';
const btnForm = document.querySelector('.btn');

// FormCamps

const nameCamp = document.querySelector('#name');
const lastNameCamp = document.querySelector('#lastname');
const dateCamp = document.querySelector('#date');

btnForm.addEventListener('click', () => {
	fetch(url, {
		headers: { 'Content-Type': 'application/json; charset=utf-8' },
		method: 'POST',
		body: JSON.stringify({
			name: nameCamp.value,
			lastname: lastNameCamp.value,
			date: dateCamp.value,
		}),
	})
		.then((response) => response.json())
		.then((data) => {
			console.log(data);
		});
});
