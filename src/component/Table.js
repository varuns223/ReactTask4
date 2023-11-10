import React from 'react'

function Table(props) {
    const u =      {"id": 1,
    "firstName": "Terry",
    "lastName": "Medhurst",
    "maidenName": "Smitham",
    "age": 50,
    "gender": "male",
    "email": "atuny0@sohu.com",
    "phone": "+63 791 675 8914",
    "username": "atuny0",
    "password": "9uQFF1Lh",
    "birthDate": "2000-12-25",
    "image": "https://robohash.org/hicveldicta.png",
    "bloodGroup": "A−",
    "height": 189,
    "weight": 75.4,
    "eyeColor": "Green",
    "hair": {
        "color": "Black",
        "type": "Strands"
    },
    "domain": "slashdot.org",
    "ip": "117.29.86.254",
    "address": {
        "address": "1745 T Street Southeast",
        "city": "Washington",
        "coordinates": {
            "lat": 38.867033,
            "lng": -76.979235
        },
        "postalCode": "20020",
        "state": "DC"
    },
    "macAddress": "13:69:BA:56:A3:74",
    "university": "Capitol University",
    "bank": {
        "cardExpire": "06/22",
        "cardNumber": "50380955204220685",
        "cardType": "maestro",
        "currency": "Peso",
        "iban": "NO17 0695 2754 967"
    },
    "company": {
        "address": {
            "address": "629 Debbie Drive",
            "city": "Nashville",
            "coordinates": {
                "lat": 36.208114,
                "lng": -86.58621199999999
            },
            "postalCode": "37076",
            "state": "TN"
        },
        "department": "Marketing",
        "name": "Blanda-O'Keefe",
        "title": "Help Desk Operator"
    },
    "ein": "20-9487066",
    "ssn": "661-64-2976",
    "userAgent": "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/534.24 (KHTML, like Gecko) Chrome/12.0.702.0 Safari/534.24"
}
  return (
    <>
    <table class="table table-dark"> 
  <thead>
    <tr>
      <th scope="col">Sno</th>
      <th scope="col">Profile pic</th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Gender</th>
      <th scope="col">Email</th>
      <th scope="col">UserName</th>
      <th scope="col">Domain</th>
      <th scope="col">IP</th>
      <th scope="col">University</th>
    </tr>
  </thead>
  {/* <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
    
  </tbody> */}
    <tbody>
   {props.user.map((u) => (

        <tr key={u.id}>
        <th scope="row">{u.id}</th>
        <td> <img src={u.image} alt="" style={{width:"3vw"}} /></td>
        <td>{u.firstName}</td>
        <td>{u.lastName}</td>
        <td>{u.gender}</td>
        <td>{u.email}</td>
        <td>{u.username}</td>
        <td>{u.domain}</td>
        <td>{u.ip}</td>
        <td>{u.university}</td>
        </tr>
           
    ))}
        </tbody>
</table>
    </>
  )
}

export default Table
