import "./mainContainer.scss";

import * as React from "react";

export const TeamMember = (props: { member: any }) => {
  const { member } = props;
  return (
    <div className="team-member">
      <a href={member.profileUrl} target="_blank" rel="noreferrer">
        <img src={member.photoUrl} alt={member.name} />
        <p className="member-name">{member.name}</p>
        <p className="role">{member.role}</p>
      </a>
    </div>
  );
};

export default TeamMember;
