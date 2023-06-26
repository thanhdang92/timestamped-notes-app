import { useState } from 'react';
import '../styles/container.css'
import { useDispatch, useSelector } from 'react-redux'
import { addItem } from '../Slicer/slicer';
import { createUniqueId } from '../createUniqueId';

const FormNotes = () => {
    const thoiGian = new Date();
    const ngayTrongTuan = thoiGian.toLocaleDateString('en-US', { weekday: 'short' });
    const thang = thoiGian.toLocaleDateString('en-US', { month: 'short' });
    const ngay = thoiGian.getDate();
    const nam = thoiGian.getFullYear();
    const gio = thoiGian.getHours();
    const phut = thoiGian.getMinutes();
    const giay = thoiGian.getSeconds();
    const chuoiThoiGian = `${ngayTrongTuan} ${thang} ${ngay} ${nam} ${gio}:${phut}:${giay}`;
    const [time, setTime] = useState(chuoiThoiGian)
    const dispatch = useDispatch()
    const [title, setTitle] = useState('')
    const [notes, setNotes] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault();
        setTime(chuoiThoiGian)
        const dataForm = {
            id: createUniqueId(),
            time: time,
            title,
            notes
        }
        dispatch(addItem(dataForm))
    }
    return (
        <div >
            <form className="form-container" action="" onSubmit={handleSubmit}>
                <input type="text" className="input__title" placeholder="Note Title"
                    onChange={e => setTitle(e.target.value)}
                />
                <input type="text" className="input__details" placeholder="Note Details"
                    onChange={e => setNotes(e.target.value)}
                />
                <button type="submit">Add Note</button>
            </form>
        </div>
    )
}
export default FormNotes