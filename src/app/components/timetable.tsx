import TbHeader from './tbHeader'
import {useSelector} from 'react-redux'


const Timetable = (props:any) => {
    const userState = useSelector((state:any)=>state.user_reducer);
    let table_data = props.data;
    const days = ['Mon', 'Tue', 'Wed', 'Thr', 'Fri'];
    return (
        <div id="timetable">
            <TbHeader username={props.username}/>
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
                    {(table_data != undefined)&&(table_data.map((e:any, k:any)=><tr key={k}><td className='table-column'>{k + 1}</td>{e.map((e:any, k:any)=>{
                            return <td key={k} className='table-box'><p>{e.class}</p><p>{e.classroom}</p></td>
                        })}</tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}


export default Timetable;

