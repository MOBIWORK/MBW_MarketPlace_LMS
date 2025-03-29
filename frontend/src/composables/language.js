import { ref } from 'vue'
import { createResource } from 'frappe-ui'

export const defaultLanguage = ref(localStorage.getItem('lang') || 'vi')

export const fetchLanguage = createResource({
	url: 'lms.api.language.get_language',
	cache: 'Language',
	onSuccess: (data) => {
		defaultLanguage.value = data
	},
})

export const changeLanguage = createResource({
	url: 'lms.api.language.change_language',
	onError(err) {
		console.log('Language not found')
	},
})

export const showLanguage = ref(false)
