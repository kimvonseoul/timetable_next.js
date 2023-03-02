import TbHeader from './tbHeader'

const Timetable = () => {
    const days = ['Mon', 'Tue', 'Wed', 'Thr', 'Fri'];
    return (
        <div id="timetable">
            <TbHeader />
            <table>
                <thead>
                    <tr>
                        {days.map((e:any, k:any)=> {
                            return <th key={k}>{e}</th>
                        })}
                    </tr>
                </thead>
            </table>
        </div>
    )
}
export default Timetable;