import React from 'react'
import { elections as dummyElections } from '../data'
import ResultElection from '../components/ResultElection'


const Results = () => {
  const [election, setElections] = useState(dummyElections)
  return (
   <section className="results">
    <div className="conatiner results__container">
      {
        election.map(election => <ResultElection key={election.id} {...element} />)
      }

    </div>
   </section>
  )
}

export default Results