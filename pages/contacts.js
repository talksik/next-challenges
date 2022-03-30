const Contacts = ({ contacts }) => {
  console.log(contacts);

  // map for contact separation
  // add only if there are contacts for that letter
  const letterSectionMap = {};
  // {
  //   "L": [allen, alejandro],
  //     ""
  // }

  contacts.forEach((ct) => {
    // if its in the map already, then we add to the array
    const firstLetterOfLastName = ct.lastName[0];

    // todo: keep the array
    if (firstLetterOfLastName in letterSectionMap) {
      letterSectionMap[firstLetterOfLastName].push(ct);

      return;
    } else {
      letterSectionMap[firstLetterOfLastName] = [ct];
    }
  });

  // sort by last name first and then first name
  // const sortedContacts = contacts.sort((a, b) => {
  //   if (a.lastName > b.lastName) {
  //     return 1;
  //   } else if (b.lastName > a.lastName) {
  //     return -1;
  //   } else if (b.lastName == a.lastName) {
  //     if (a.firstName > b.firstName) {
  //       return 1;
  //     } else if (b.firstName > a.firstName) {
  //       return -1;
  //     }
  //   }
  //   return 0;
  // });

  // sort the map by the first letter of last name

  const sortedKeys = Object.keys(letterSectionMap);
  console.log(letterSectionMap);

  return (
    <div>
      <h1>Contacts List</h1>

      {sortedKeys.map((firstLetter) => {
        return (
          <>
            <h2>{firstLetter}</h2>

            {letterSectionMap[firstLetter].map((ct) => {
              return (
                <div key={ct.phone}>
                  <span>{ct.firstName}</span>
                  <span>{ct.lastName}</span>
                  <span>{ct.phone}</span>
                </div>
              );
            })}
          </>
        );
      })}
    </div>
  );
};

export async function getStaticProps() {
  const contacts = [
    { firstName: "Allen", lastName: "Lane", phone: "542-987-3456" },
    { firstName: "Alejandro", lastName: "Lane", phone: "542-345-8721" },

    { firstName: "Jane", lastName: "Smith", phone: "" },
    { firstName: "Richard", lastName: "Walker", phone: "542-737-3246" },
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
