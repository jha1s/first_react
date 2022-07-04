function Friends({name, image}) {
  return (
    <div>
      <img src = {image} alt = {name}/>
      <h2>I like {name}</h2>
    </div>
  )
}

const char = [
  {
    name : "라이언",
    image : "https://t1.kakaocdn.net/friends/prod/character/character_20220531165241_96.png"
  },
  {
    name : "춘식이",
    image : "https://t1.kakaocdn.net/friends/prod/character/character_20220531165550_96.png"
  },
  {
    name : "죠르디",
    image : "https://t1.kakaocdn.net/friends/prod/character/character_20220531165611_96.png"
  },
  {
    name : "스카피",
    image : "https://t1.kakaocdn.net/friends/prod/character/character_20220531165636_96.png"
  }
];

/* function renderFriends(character) {
  return <Friends name = {character.name} image = {character.image} />
} */

function App() {
  return (
    <div style = {{display:"flex"}}>
        {char.map((character, index) =>
          <Friends key = {index} name = {character.name} image = {character.image} />
        )}
    </div>
  );
}

export default App;
