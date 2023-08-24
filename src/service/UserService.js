
import { API } from './base.js'
// /


export const getOrCreateUser = (cred) => {
	console.log("Cred Passed : ",cred)
	const { data } = API.post('/user/check-or-create',cred)
	return data
}