import Divider from "@/components/Divider";
import Home from "./sections/Home";
import Venue from "./sections/Venue";
import Accommodations from "./sections/Accommodations";
import Rsvp from "./sections/Rsvp";

export default function Page() {
  return (
    <>
      <Home />
      <Divider />
      <Venue />
      <Divider />
      <Rsvp />
      <Divider />
      <Accommodations />
    </>
  );
}
