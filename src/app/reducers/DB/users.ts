const USER_CHECK = 'check';
const Update = 'update'
const IndexUpdate = 'indexUpdate';

export const userCheck = (data:any) => ({
    type: USER_CHECK,
    data
})

export const updateUsername = (data:any) => ({
    type: Update,
    data
})

export const indextUpdate = (data:any) => ({
    type: IndexUpdate,
    data
})
const initialState = {
    id: 1,
    data: [
        {id:1, email:'kimvonseoul@gmail.com', username:'', timetable: [
            [
                {id:1, class:'math', classroom: '410'},
                {id:2, class:'', classroom: ''},
                {id:3, class:'music', classroom: '520'},
                {id:4, class:'', classroom: ''},
                {id:5, class:'PE', classroom: 'Gym'}
            ],
            [
                {id:1, class:'', classroom: ''},
                {id:2, class:'English', classroom: '220'},
                {id:3, class:'', classroom: ''},
                {id:4, class:'', classroom: ''},
                {id:5, class:'Math', classroom: '310'}
            ],
            [
                {id:1, class:'', classroom: ''},
                {id:2, class:'', classroom: ''},
                {id:3, class:'Art', classroom: '350'},
                {id:4, class:'', classroom: ''},
                {id:5, class:'', classroom: ''}
            ],
            [
                {id:1, class:'', classroom: ''},
                {id:2, class:'', classroom: ''},
                {id:3, class:'', classroom: ''},
                {id:4, class:'', classroom: ''},
                {id:5, class:'', classroom: ''}
            ],
            [
                {id:1, class:'', classroom: ''},
                {id:2, class:'', classroom: ''},
                {id:3, class:'', classroom: ''},
                {id:4, class:'', classroom: ''},
                {id:5, class:'', classroom: ''}
            ]
        ]
        }
    ],
    userIndex: undefined
}

export default function user_reducer(state=initialState, action:any) {
    switch(action.type){
        case IndexUpdate:
            state.userIndex = action.data;
            return {...state}
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