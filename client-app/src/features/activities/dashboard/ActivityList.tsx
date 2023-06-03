import { Button, Item, Label, Segment } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";

interface Props {
  activities: Activity[];
  onSelectActivity: (id: string) => void;
  onDeleteActivity: (id: string) => void;
}

export default function ActivityList({ activities,onSelectActivity,onDeleteActivity }: Props) {
  return (
    <Segment>
      <Item.Group>
        {activities.map((activitiy) => (
          <Item key={activitiy.id}>
            <Item.Content>
              <Item.Header as="a">{activitiy.title}</Item.Header>
              <Item.Meta>{activitiy.date}</Item.Meta>
              <Item.Description>
                <div>{activitiy.description}</div>
                <div>
                  {activitiy.city}, {activitiy.venue}
                </div>
              </Item.Description>
              <Item.Extra>
                <Button onClick={()=>onSelectActivity(activitiy.id)} floated="right" content="View" color="blue" />
                <Button onClick={()=>onDeleteActivity(activitiy.id)} floated="right" content="Delete" color="red" />
                <Label basic content={activitiy.category} />
              </Item.Extra>
            </Item.Content>
          </Item>
        ))}
      </Item.Group>
    </Segment>
  );
}
