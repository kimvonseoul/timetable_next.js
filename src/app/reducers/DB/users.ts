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
    id: 3,
    data: [
        {index:0, email:'kimvonseoul@gmail.com', name:'Jeonghu', username:'', timetable: [
            [
                {class:'math', classroom: '410'},
                {class:'', classroom: ''},
                {class:'music', classroom: '520'},
                {class:'', classroom: ''},
                {class:'PE', classroom: 'Gym'}
            ],[
                {class:'', classroom: ''},
                {class:'English', classroom: '220'},
                {class:'', classroom: ''},
                {class:'', classroom: ''},
                {class:'Math', classroom: '310'}
            ],[
                {class:'', classroom: ''},
                {class:'', classroom: ''},
                {class:'Art', classroom: '350'},
                {class:'', classroom: ''},
                {class:'', classroom: ''}
            ],[
                {class:'', classroom: ''},
                {class:'', classroom: ''},
                {class:'', classroom: ''},
                {class:'', classroom: ''},
                {class:'', classroom: ''}
            ],[
                {class:'', classroom: ''},
                {class:'', classroom: ''},
                {class:'', classroom: ''},
                {class:'', classroom: ''},
                {class:'', classroom: ''}]
        ], following: [1, 2]}, 
        {index: 2, email:'sophia@gmail.com', name:'sophia', username:'sophia', timetable: [
            [
                {class:'math', classroom: '410'},
                {class:'sophia', classroom: ''},
                {class:'music', classroom: '520'},
                {class:'test', classroom: ''},
                {class:'PE', classroom: 'Gym'}
            ],[
                {class:'', classroom: ''},
                {class:'English', classroom: '220'},
                {class:'', classroom: ''},
                {class:'', classroom: ''},
                {class:'Math', classroom: '310'}
            ],[
                {class:'', classroom: ''},
                {class:'', classroom: ''},
                {class:'Art', classroom: '350'},
                {class:'', classroom: ''},
                {class:'', classroom: ''}
            ],[
                {class:'', classroom: ''},
                {class:'', classroom: ''},
                {class:'', classroom: ''},
                {class:'', classroom: ''},
                {class:'', classroom: ''}
            ],[
                {class:'', classroom: ''},
                {class:'', classroom: ''},
                {class:'', classroom: ''},
                {class:'', classroom: ''},
                {class:'', classroom: ''}]
        ], following: [0, 2]},
        {index: 3, email:'dummy1@gmail.com', name:'dummy1', username:'dummydata1', timetable: [
            [
                {class:'math', classroom: '410'},
                {class:'dummy', classroom: 'data'},
                {class:'music', classroom: '520'},
                {class:'test', classroom: '000'},
                {class:'PE', classroom: 'Gym'}
            ],[
                {class:'', classroom: ''},
                {class:'English', classroom: '220'},
                {class:'', classroom: ''},
                {class:'', classroom: ''},
                {class:'Math', classroom: '310'}
            ],[
                {class:'', classroom: ''},
                {class:'', classroom: ''},
                {class:'Art', classroom: '350'},
                {class:'', classroom: ''},
                {class:'', classroom: ''}
            ],[
                {class:'', classroom: ''},
                {class:'', classroom: ''},
                {class:'', classroom: ''},
                {class:'', classroom: ''},
                {class:'', classroom: ''}
            ],[
                {class:'', classroom: ''},
                {class:'', classroom: ''},
                {class:'', classroom: ''},
                {class:'', classroom: ''},
                {class:'', classroom: ''}]
        ], following: [0, 1]}
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
            state.data[action.data.id].username = action.data.updatedId;
            console.log(state.data[action.data.id].email + ', ' + state.data[action.data.id].username);
            return {...state}
        default:
            return state;
    }
}