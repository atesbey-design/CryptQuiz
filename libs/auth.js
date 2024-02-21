import Backend from '@/data/Backend'

export async function verifyJwtToken(token) {
    try {
        const valid = await Backend.User.checkout(token)

        return valid
    } catch (error) {
        return null
    }
}
