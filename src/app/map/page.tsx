import React from 'react';

export default function Page() {
  const List = [
    {
      name: "bushra khan",
      email: "bushea@example",
      Number: 46454,
      address: [
        { houseno: 14, city: "karachi", country: "pakistan" },
        { houseno: 154, city: "lahore", country: "pakistan" },
        { houseno: 148, city: "Islamabad", country: "pakistan" },
      ],
    },
    { name: "sara khan", email: "sara@example", Number: 45454 },
    { name: "ani khan", email: "ani@example", Number: 84844 },
  ];

  return (
    <div>
      <h1>About</h1>
      <p>This is the Mapping page</p>

      {List.map((item) => (
        <div>
          <h1>{item.name}</h1>
          <h2>{item.email}</h2>
          {item.address && item.address.map((addressItem, index) => (
            <div key={index}>
              <h3>{addressItem.houseno}</h3>
              <h4>{addressItem.city}</h4>
              <h4>{addressItem.country}</h4>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}