const Contacts = ({ contacts }) => {
  console.log(contacts);
  return <div>Contacts List</div>;
};

export async function getStaticProps() {
  const contacts = [
    { firstName: "Allen", lastName: "Lane", phone: "542-987-3456" },
    { firstName: "Jane", lastName: "Smith", phone: "" },
    { firstName: "Richard", lastName: "Walker", phone: "542-737-3246" },
    { firstName: "Alejandro", lastName: "Lane", phone: "542-345-8721" },
    { firstName: "Erin", lastName: "Larson", phone: "(542) 321-3456" },
    { firstName: "Richard", lastName: "Julian", phone: "542-211-5678" },
    { firstName: "Bill", lastName: "Allen", phone: "542-654-2154" },
  ];

  // By returning { props: { contacts } }, the Contacts component
  // will receive `contacts` as a prop at build time
  return {
    props: {
      contacts,
    },
  };
}

export default Contacts;
