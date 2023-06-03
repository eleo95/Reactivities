import { Grid } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";
import ActivityList from "./ActivityList";
import ActivityDetails from "../details/ActivityDetails";
import ActivityForm from "../form/ActivityForm";

interface Props {
  activities: Activity[];
  selectedActivity?: Activity;
  onSelectActivity: (id: string) => void;
  onCancelSelectedActivity: () => void;
  editMode: boolean;
  onFormOpen: (id: string) => void;
  onFormClose: () => void;
  onCreateOrEdit: (activity: Activity)=> void
  onDeleteActivity: (id: string) => void;
}
export default function ActivityDashboard({
  activities,
  selectedActivity,
  onSelectActivity,
  onCancelSelectedActivity,
  editMode,
  onFormOpen,
  onFormClose,
  onCreateOrEdit,
  onDeleteActivity
}: Props) {
  return (
    <Grid>
      <Grid.Column width="10">
        <ActivityList activities={activities} onSelectActivity={onSelectActivity} onDeleteActivity={onDeleteActivity}/>
      </Grid.Column>
      <Grid.Column width="6">
        {selectedActivity && !editMode && <ActivityDetails activity={selectedActivity} onCancelSelectedActivity={onCancelSelectedActivity} onFormOpen={onFormOpen}/>}
        {editMode && <ActivityForm activity={selectedActivity} onFormClose={onFormClose} onCreateOrEdit={onCreateOrEdit}/>}
      </Grid.Column>
    </Grid>
  );
}
