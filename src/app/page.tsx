import Button from "@/components/Button";
import Home from "./sections/Home";
import Venue from "./sections/Venue";
import Accommodations from "./sections/Accommodations";
import ThingsToDo from "./sections/ThingsToDo";

export default function Page() {
  return (
    <>
      <Home />
      <Venue />
      <div className="text-center">
        <hr className="my-8 border-gray-200" />
        <Button href="YOUR_GOOGLE_FORM_URL_HERE" className={"rsvp"}>
          RSVP
        </Button>
        <p className="rsvp-text mx-2">Please RSVP as soon as possible.</p>
        <hr className="my-8 border-gray-200" />
      </div>
      <Accommodations />
    </>
  );
}
