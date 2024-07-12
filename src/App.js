import React, {useState} from "react";
import './App.css';
const emojiData = [
  {  symbol: "✅ Tick", name: "tick check green tick"},
  {  symbol: "❤️ Heart", name: " red heart"},
  {  symbol: "😂 Joy", name: "face with tears of joy"},
  {  symbol: "😊 Smiling", name: "smiling face with smiling eyes"},
  {  symbol: "😭 Crying", name: " loudly crying face"},
  {  symbol: "🔥 Fire", name: "fire"},
  {  symbol: "🐈 Cat", name: "cat dog"},
  {  symbol: "😍 Heart Eye", name: "smiling face with heart-eyes"},
  {  symbol: "🥰", name: "smiling face with smiling eyes and three hearts"},
  {  symbol: "😡 Angry", name: " pouting face angry"},
  {  symbol: "😸 Grinning Cat", name: "grinning cat with smiling eyes"},
  {  symbol: "😹 Cat Joy", name: "cat with tears of joy"},
  {  symbol: "🥺 Pleading face", name: " pleading face"},
  {  symbol: "😢 Crying Face", name: " crying face"},
]
const App = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const filteredEmojis = emojiData.filter((emoji)=>{
    const emojiName = emoji.name.toLocaleLowerCase();
    return emojiName.includes(searchTerm.toLocaleLowerCase());
  });
  return (
    <div className="App">
    <h1>Emoji Search App</h1>
    <input type="text" placeholder="Search emoji" value={searchTerm} onChange={handleSearchChange}/>
       <ul className="result">
        {filteredEmojis.map((emoji,i) => (
          <li key={i}>{emoji.symbol}</li>
        ))}
      </ul>
    </div>
  );
}


export default App;
