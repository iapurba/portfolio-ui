import Box from "@mui/material/Box";
import { EmailIcon, LocationIcon, PhoneIcon } from "./styles";
import { Typography } from "@mui/material";
import React from "react";

interface ContactItemProps {
  icon: React.ComponentType;
  field: string;
  value: string;
}
const ContactItem: React.FC<ContactItemProps> = ({
  icon: Icon,
  field,
  value,
}) => {
  return (
    <Box display={"flex"} flexDirection={"row"} alignItems={"center"} margin={"6px 0"}>
      <Icon />
      <Box display={"flex"} flexDirection={"column"} pl={3}>
        <Typography variant="h4">{field}</Typography>
        <Typography variant="subtitle1">{value}</Typography>
      </Box>
    </Box>
  )
};

interface ContactDetailsProps {
  address: string;
  email: string;
  phone?: string;
}

const ContactDetails: React.FC<ContactDetailsProps> = ({
  address,
  email,
  phone,
}) => {
  return (
    <Box display={"flex"} flexDirection={"column"}>
      <ContactItem
        icon={LocationIcon}
        field="Address"
        value={address}
      />
      <ContactItem
        icon={EmailIcon}
        field="Email"
        value={email}
      />
      {phone &&
        <ContactItem
          icon={PhoneIcon}
          field="Phone"
          value={phone}
        />
      }
    </Box>
  );
};

export default ContactDetails;
