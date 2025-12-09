import React from 'react'
import { UiActions } from '../store/ui-slice'
import { useDispatch } from 'react-redux'

const Candidate = ({image, id, fullName, moto}) => {
  
   const dispatch = useDispatch()

    // open confirm vote modal
    const openCandidateModal = () => {
        dispatch(UiActions.openVoteCandidateModal())
    }
  
  return (
    <article className="candidate">
        <div className="candidate__image">
            <img src={image} alt={fullName} />
        </div>
        <h5>{fullName?.length > 20 ? fullName.substring(0, 20) + "..." : fullName}</h5>
        <small>{moto?.length > 20 ? moto.substring(0, 20) + "..." : moto}</small>
        <button className="btn primary" onClick={openCandidateModal}>Vote</button>
    </article>
  )
}

export default Candidate