import { useEffect, useState } from 'react'
import axios from 'axios'
import { Container } from 'semantic-ui-react'
import {v4 as uuid} from 'uuid'
import { Activity } from '../models/activity'
import NavBar from './Navbar'
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard'


function App() {
  const [activities,setActivities] = useState<Activity[]>([])
  const [selectedActivity,setSelectedActivity] = useState<Activity | undefined>(undefined)
  const [editMode,setEditMode] = useState(false)
  
  
  useEffect(()=>{
    axios.get<Activity[]>('http://localhost:5000/api/activities')
    .then(response => {
      // console.log("resp",response)
      setActivities(response.data)
    })
  },[])

  function handleSelectedActivity(id: string) {
    setSelectedActivity(activities.find(x => x.id === id))
  }

  function handleCancelSelectedActivity() {
    setSelectedActivity(undefined)
  }

  function handleFormOpen(id?: string) {
    id ? handleSelectedActivity(id) : handleCancelSelectedActivity();
    setEditMode(true);
  }

  function handleFormClose() {
    setEditMode(false);
  }

  function handleCreateOrEditActivity(activity: Activity){
    activity.id ? setActivities([...activities.filter(x => x.id !== activity.id), activity]) : 
    setActivities([...activities, {...activity,id:uuid()}]);

    setEditMode(false);
    setSelectedActivity(activity);
  }

  function handleDeleteActivity(id: string) {
    setActivities([...activities.filter(x => x.id !== id)])
  }


  return (
    <>
      {/* <Header as="h2" icon="users" content="Reactivities" /> */}
      <NavBar onFormOpen={handleFormOpen}/>
      <Container style={{marginTop: '7em'}}>
      <ActivityDashboard 
        activities={activities}
        selectedActivity={selectedActivity}
        onSelectActivity={handleSelectedActivity}
        onCancelSelectedActivity={handleCancelSelectedActivity}
        editMode={editMode}
        onFormOpen={handleFormOpen}
        onFormClose={handleFormClose}
        onCreateOrEdit={handleCreateOrEditActivity}
        onDeleteActivity={handleDeleteActivity}/>
      </Container>
    </>
  )
}

export default App
