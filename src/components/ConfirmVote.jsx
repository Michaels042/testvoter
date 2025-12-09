import React, { useEffect, useState } from 'react'
import { candidates } from '../data'
import { useDispatch } from 'react-redux'
import { UiActions } from '../store/ui-slice'

const ConfirmVote = () => {
    const [modalCandidate, setModalcandidate] = useState({})

    const dispatch = useDispatch()

    // close confirm vote modal
    const closeCandidateModal = () => {
        dispatch(UiActions.closeVoteCandidateModal())
    }
  
  // get the selected candidate
  const fetchCandidate = () => {
    candidates.find(candidate => {
        if(candidate.id === "c1") {
            setModalcandidate(candidate)
        }
    })
  }

  useEffect(() => {
    fetchCandidate()
  }, [])

  
    return (
    <section className="modal">
        <div className="modal__content confirm__vote-content">
            <h5>Please confirm your vote</h5>
            <div className="confirm__vote-image">
                <img src={modalCandidate.image} alt={modalCandidate.fullName}  />
            </div>
            <h2>{modalCandidate?.fullName?.length > 17 ? modalCandidate?.fullName?.substring(0, 17) + "..." : modalCandidate?.fullName}</h2>
            <p>{modalCandidate?.moto?.length > 45 ? modalCandidate?.moto?.substring(0, 45) + "..." : modalCandidate?.moto}</p>
            <div className="confirm__vote-cta">
                <button className="btn" onClick={closeCandidateModal}>Cancel</button>
                <button className="btn primary">Confirm</button>
            </div>
        </div>
    </section>
  )
}

export default ConfirmVote