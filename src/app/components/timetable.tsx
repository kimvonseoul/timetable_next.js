const Timetable = () => {
    const days = ['Mon', 'Tue', 'Wed', 'Thr', 'Fri'];
    return (
        <div id="timetable">
            <h2>Timetable</h2>
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