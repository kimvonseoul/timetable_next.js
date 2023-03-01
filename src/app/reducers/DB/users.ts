const USER_CHECK = 'check';
const Update = 'update'

export const userCheck = (data:any) => ({
    type: USER_CHECK,
    data
})

export const updateUsername = (data:any) => ({
    type: Update,
    data
})

const initialState = {
    id: 1,
    data: [
        {id:1, email:'kimvonseoul@gmail.com', username:''}
    ]
}

export default function user_reducer(state=initialState, action:any) {
    switch(action.type){
        case USER_CHECK:
            console.log('reducer working...');
            for (var i of state.data){
                if (action.data == i.email) {
                    if((i.username == '')||(i.username == ' ')){
                        console.log('no username');
                        return state;
                    }
                }
            }
            return state;
        case Update:
            console.log('reducer working...');
            //console.log(action.data.updateId);
            state.data[action.data.id - 1].username = action.data.updatedId;
            console.log(state.data[action.data.id - 1].email + ', ' + state.data[action.data.id - 1].username);
            return {...state}
        default:
            return state;
    }
}