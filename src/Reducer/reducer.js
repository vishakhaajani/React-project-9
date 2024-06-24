import { toast } from "react-toastify"

const initialState = {
    user : localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : []
}

const reducer = (state=initialState,action) => {
    switch(action.type){
        case 'add':
            let old =[...state.user,action.payload]
            localStorage.setItem('user',JSON.stringify(old))
            return {
                ...state,
                user : old
            }

        case 'delete':
            let deleteId = action.payload
            let remove = state.user.filter((val) => val.id != deleteId)
            localStorage.setItem('user',JSON.stringify(remove))
            toast.warning("Note deleted sucessfully...")
            return {
                ...state,
                user : remove
            }

        default : 
            return state
    }
}

export default reducer