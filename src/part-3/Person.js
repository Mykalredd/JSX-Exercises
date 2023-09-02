const NameLength = 6;

function Person({name,age, hobbies}) {
 const PersMessage = age >= 18
   ? "Please Go Vote!"
   : "You Must Be 18!";

const HobbyData = hobbies.map(hobby => <li>{hobby}</li>);

return (
    <div>
        <p>Learn some information about this person:</p>
        <ul>
            <li>Name: {name.slice(0, NameLength)}</li>
            <li>Age: {age}</li>
            <ul>
                Hobbies:
                {HobbyData}
            </ul>
        </ul>
        <h3>{PersMessage}</h3>
    </div>
  );
}