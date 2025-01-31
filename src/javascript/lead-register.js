const form = document.querySelector('.form')
const submitButton = document.querySelector('.form__button')

let URL = 'http://localhost:3000/leads'

const toggleLoading = () => {
	submitButton.classList.toggle('.form__button__loading')
}

async function sendLead(event) {
	event.preventDefault()
	// prevent default evita o recarregamento da página
	toggleLoading()

	let formData = new FormData(form)
	let data = {
		nome: formData.get('user'),
		email: formData.get('email'),
		telefone: formData.get('phone'),
	}
	try {
		let response = await fetch(URL, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		})

		if (response.ok) {
			alert('Dados enviados com sucesso! Entraremos em contato em breve.')
			form.reset()
		}
	} catch (error) {
		console.error('Erro:', error)
		alert(
			'Ocorreu um erro ao enviar seus dados. Por favor, tente novamente.'
		)
	} finally {
		toggleLoading()
	}
}

form.addEventListener('submit', sendLead)
