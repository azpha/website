'use server'

export async function submitContact(formData: FormData) {
    try {
        const name = formData.get('name')
        const email = formData.get('email')
        const subject = formData.get('subject')
        const message = formData.get('message')

        const state = await fetch("https://api.alexav.gg/v4/contact", {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                name,
                email,
                subject,
                message
            })
        })

        return { success: state.ok }
    } catch (e) {
        return { success: false, error: (e as Error).message }
    }
}