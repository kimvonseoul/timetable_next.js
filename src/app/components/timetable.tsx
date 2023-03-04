import TbHeader from './tbHeader'
import {useSelector} from 'react-redux'

const Timetable = () => {
    const userState = useSelector((state:any)=>state.user_reducer);
    const days = ['Mon', 'Tue', 'Wed', 'Thr', 'Fri'];
    let userNumber = 0;
    let table_data = userState.data[0].timetable;
    //console.log(table_data);
    return (
        <div id="timetable">
            <TbHeader />
            <table>
                <thead>
                    <tr>   
                        <th> </th>
                        {days.map((e:any, k:any)=> {
                            return <th key={k}>{e}</th>
                        })}
                    </tr>
                </thead>
                <tbody>
                    {table_data.map((e:any, k:any)=><tr key={k}><td className='table-column'>{k + 1}</td>{e.map((e:any, k:any)=>{
                            return <td key={k} className='table-box'><p>{e.class}</p><p>{e.classroom}</p></td>
                        })}</tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}
export default Timetable;