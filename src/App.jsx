import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'
import { PiNotePencilBold } from "react-icons/pi";
import { FaPlus } from "react-icons/fa";
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { adduser, deleteuser } from './Action/action';
import { RiDeleteBin6Line } from "react-icons/ri";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const [title, setTitle] = useState("")
  const [note, setNote] = useState("")

  const record = useSelector(state => state.crud.user)

  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !note) {
      toast.error("Must write...")
      return false;
    }

    let obj = {
      id: Math.floor(Math.random() * 10000),
      title,
      note
    }

    dispatch(adduser(obj))
    setTitle("")
    setNote("")
    toast("Note added sucessfully...")
  }

  return (
    <>
      <div className="container-fluid">
        <div className="row">
        <h2 className='bg-warning py-4 ps-5 text-light'><span className='noteicon pe-2'><PiNotePencilBold /></span>Google Keep</h2>
      <div className='d-flex justify-content-center mt-5'>
        <form style={{ width: "300px" }} onSubmit={handleSubmit} className='shadow'>
          <input type="text" placeholder='Title' className='form-control' onChange={(e) => setTitle(e.target.value)} value={title || ""} />
          <textarea rows={4} placeholder='Write a note...' className='form-control' onChange={(e) => setNote(e.target.value)} value={note || ""} ></textarea>
          <button className="addbtn" type='submit'>
            <FaPlus />
          </button>
        </form>
      </div>
      <div className='mt-5 d-flex flex-wrap justify-content-center'>
        {
          record.map((val) => {
            return (
              <div className='notes m-4 py-5 px-4 shadow' style={{ width: "300px", height: "auto" }}>
                <h6 className='mb-3'>{val.title}</h6>
                <p>{val.note}</p>
                <div className='deletebtn'>
                  <span onClick={() => dispatch(deleteuser(val.id))}><RiDeleteBin6Line /></span>
                </div>
              </div>
            )
          })
        }
      </div>
      <ToastContainer
        position="top-center"
        autoClose={2000} />
        </div>
      </div>
    </>
  )
}

export default App
