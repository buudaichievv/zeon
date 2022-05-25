export default function CreateStore(rootReduser,initialState) {
    let state = rootReduser(initialState,{type:"____init____"})
    const subscribes = []
    return { 
        //action = {type="any",payload="any"}
        dispatch(action) {
            state = rootReduser(...state, action)
            subscribes.forEach((sub)=>sub())

        },
        subscribe(callback) {
            subscribes.push(callback)
        },
        GetState() {
            return state
        }
    }
}
