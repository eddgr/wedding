import Section from "../../components/Section";

export default function VenuePage() {
  return (
    <section className="py-12">
      <div id="ceremony">
        <Section
          title="Wedding Ceremony"
          name="Gizella Kopsick Palm Arboretum"
          address={["605 11th Ave N", "St. Petersburg, FL 33701"]}
          descriptionList={[
            {
              time: "10:15 AM - 10:30 AM",
              text: "Arrive and get seated (free parking on premise).",
            },
            { time: "11:00 AM", text: "Ceremony begins." },
            {
              time: "11:30 AM - 12:15 PM",
              text: "Photos! A photographer will be on-site.",
            },
          ]}
          mapQuery="Gizella Kopsick Arboretum, St. Petersburg, FL"
        />
      </div>

      <hr className="my-8 border-gray-200" />

      <div id="reception">
        <Section
          title="Reception"
          name="Juno & The Peacock"
          address={["400 Beach Drive NE", "St. Petersburg, FL 33701"]}
          description="Join us at 1:30 PM for lunch and drinks following the ceremony."
          mapQuery="Juno & The Peacock, St. Petersburg, FL"
          reverse={true}
        />
      </div>
    </section>
  );
}
