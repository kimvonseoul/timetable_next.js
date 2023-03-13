const USER_CHECK = 'check';
const Update = 'update'
const IndexUpdate = 'indexUpdate';
const Follow = 'follow'
const Unfollow = 'unfollow'

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

export const follow = (data:any) => ({
    type: Follow,
    data
})

export const unfollow = (data:any) => ({
    type: Unfollow,
    data
})
const initialState = {
    id: 4,
    data: [
        {index:0, email:'kimvonseoul@gmail.com', name:'Jeonghu', username:'kimvonseoul', timetable: [
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
        ], following: [1, 2, 3]}, 
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
        ], following: [0, 1]},
        {index: 3, email:'dummy2@gmail.com', name:'dummy2', username:'dummydata2', timetable: [
            [
                {class:'math', classroom: '410'},
                {class:'dummy', classroom: 'data2'},
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
        ], following: [0, 1, 2]},
        {index: 4, email:'dummy3@gmail.com', name:'dummy3', username:'dummydata3', timetable: [
            [
                {class:'math', classroom: '410'},
                {class:'dummy', classroom: 'data2'},
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
        ], following: [0, 1, 2]},
    ],
    userIndex: undefined
}

export default function user_reducer(state=initialState, action:any) {
    let userIndex;
    switch(action.type){
        case IndexUpdate:
            console.log('index state');
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
        case Follow:
            let newFollow;
            for(var i of state.data){
                if(i.username == action.data.username){
                    userIndex = i.index;
                    newFollow = state.data[action.data.into].following.concat(userIndex);
                }
            }
            return {...state, data: [...state.data[action.data.into].following, userIndex]}
        case Unfollow:
            for(var i of state.data)
            console.log('unfollow reducer');
            return {...state}
        default:
            return state;
    }
}