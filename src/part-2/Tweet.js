function Tweet({username, name, date, message}) {
    return (
    <div classname= "tweet">
     <span classname= "username">{username} </span>
     <span>{name}</span>
     <span classname= "date">{date}</span>
    <h3>{message}</h3>
    </div>
 );
}