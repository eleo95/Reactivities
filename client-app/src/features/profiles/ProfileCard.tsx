import { observer } from "mobx-react-lite";
import { Profile } from "../../app/models/profile";
import { Card, Icon, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";

interface Props {
  profile: Profile;
}

function truncate(str: string | undefined) {
  if (str) {
    return str.length > 40 ? str.substring(0, 37) + "..." : str;
  }
}

export default observer(function ProfileCard({ profile }: Props) {
  return (
    <Card as={Link} to={`/profiles/${profile.username}`}>
      <Image src={profile.image || "/user.png"} />
      <Card.Content>
        <Card.Header>{profile.displayName}</Card.Header>
        <Card.Description>{truncate(profile.bio)}</Card.Description>
      </Card.Content>
      <Card.Content>
        <Icon name="user" />
        20 Followers
      </Card.Content>
    </Card>
  );
});
