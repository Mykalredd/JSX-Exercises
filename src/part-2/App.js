function App() {
    return (
        <div>
            <Tweet
            username={"Big_Mike"}
            name={"Mike"}
            date={new Date().toDateString()}
            message={"Yay...Summer is here!"}
            />
            <Tweet
            username={"Lil_James"}
            name={"James"}
            date={new Date().toDateString()}
            message={"Dang...it's soooo HOT!!"}
            />
            <Tweet
            username={"Jack_Frost"}
            name={"Jack"}
            date={new Date().toDateString()}
            message={"I'm so glad Summer is Over!!!"}
            />
        </div>
    );
}