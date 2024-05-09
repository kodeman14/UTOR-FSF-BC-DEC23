import Card from "./Card";

const feline = {
  name: "Fluffykins",
  description: "A cat that acts like a dog",
  id: 1,
};

export default function Display() {
  return (
    <div>
      {/* TODO: Write logic that will render a Card component for the kitten */}
      {/* TODO: Pass `name`, `description`, and `id` to the Card component as props */}
      <Card
        propName={feline.name}
        propDescription={feline.description}
        propId={feline.id}
      />

      {/* <Card
        name={feline.name}
        id={feline.id}
        description={feline.description}
      /> */}

      {/* <Card propFeline={feline} /> */}
    </div>
  );
}
