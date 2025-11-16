import Section from "../../components/Section";

export default function VenuePage() {
  return (
    <section className="py-12">
      <div id="ceremony">
        <Section
          title="Wedding Ceremony"
          name="Gizella Kopsick Palm Arboretum"
          address={["605 11th Ave N", "St. Petersburg, FL 33701"]}
          description="We are doing an outdoor ceremony and it will begin at 11:00 AM. We recommend arriving 30 minutes before starting. There will be free parking on premises."
          mapQuery="Gizella Kopsick Arboretum, St. Petersburg, FL"
        />
      </div>

      <hr className="my-8 border-gray-200" />

      {/* TODO: Replace with your actual reception venue details */}
      <div id="reception">
        <Section
          title="Reception"
          name="TBD"
          // address={["TBD", "TBD"]}
          description="Join us for lunch and drinks following the ceremony."
          mapQuery="St. Petersburg, FL"
          reverse={true}
        />
      </div>
    </section>
  );
}
