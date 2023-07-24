import React from 'react';

const HashMapPage = () => {
  const hashMap = {
    name: 'Sachin',
    age: 30,
    email: 'Sachin2020@gmail.com',
  };

  const name = hashMap.name;
  const age = hashMap['age'];

  hashMap.location = 'BLR';

  delete hashMap.email;

  return (
    <div>
      <h1>HashMap Example in Next.js</h1>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Location: {hashMap.location}</p>
    </div>
  );
};

export default HashMapPage;
