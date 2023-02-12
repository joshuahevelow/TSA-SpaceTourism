import React from 'react'
import NavBar from './NavBar';
import '../App.css';
import referencesPDF from './references.pdf';

export default function References() {
  return (
    <>
    <div>
      <img className='bg-image' src="https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c3BhY2UlMjBzdGFyc3xlbnwwfHwwfHw%3D&w=1000&q=80" alt="background stars" />
      <embed className='ref-pdf' src={referencesPDF}
        type="application/pdf" />
    </div>
    </>
  )
}
