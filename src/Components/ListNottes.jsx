import { useDispatch, useSelector } from 'react-redux'
import { Link, Route, Routes } from 'react-router-dom'
import { removeItem } from '../Slicer/slicer'
import '../styles/container.css'
const ListNotes = () => {
    const dispatch = useDispatch()
    const listNotes = useSelector(state => state.todos.items)
    const handleRemoveNote = (id) => {
        dispatch(removeItem(id))
    }
    return (
        <div className="list__notes">
            {listNotes.map((item) => {
                return (
                    <div className="item__notes" key={item.id}>
                        <div className="info__notes">
                            <div className="title">{item.title}</div>
                            <div className="detail">
                                <div className="time">Recorded : {item.time}</div>
                                <div className="btn">
                                    <Link to={item.id}>
                                        <button className="item-detail">Show Detail</button>
                                    </Link>
                                    <button className="item-detail" onClick={() => handleRemoveNote(item.id)}>Remove Note</button>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <Routes>
                            <Route path="/" />
                            <Route path={item.id} element={
                                <div className="details_note">
                                    Deltails : {item.notes}
                                </div>
                            } />
                        </Routes>
                    </div>
                )
            })}

        </div>
    )
}
export default ListNotes