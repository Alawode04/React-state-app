import  {useState} from 'react'
import './App.css'

function App() {
  const [profile, setProfile] = useState(
   {
    name: "Willian Borges",
    bio: "A brazillian Footballer",
    image: "willian.jpg",
    profession: "Footballer"
   },
  )
   
  const [view, setView] = useState(false)
    const ballerProfile = () => {
      setView(!view)
    }
  

  return (
    <>
      <div>
         {view ? (
          <div>
            <img src={profile.image} alt="" />
            <h2>{profile.name}</h2>
            <h3>{profile.profession}</h3>
            <p>{profile.bio}</p>
            <button onClick={ballerProfile}>Hide Profile</button>
          </div>
         ) : (
            <button onClick={ballerProfile}>View Profile</button>
         )}
      </div>
    </>
  )
  }

export default App
