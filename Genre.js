import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View  } from "react-native";

function Genre({ genre }) {
  const [name, setName] = useState("");
  const [customestyle, setCustomeStyle] = useState(customestyles.default);

  function mapTogenreString(genre) {
    if (genre === 28) {
      setName("Action");
    }
    if (genre === 12) {
      setName("Adventure");
      setCustomeStyle(customestyles.Adventure);
    }
    if (genre === 16) setName("Animation");
    if (genre === 35) setName("Comedy");
    if (genre === 80) setName("Crime");
    if (genre === 99) setName("Documentary");
    if (genre === 18) {
      setName("Drama");
      setCustomeStyle(customestyles.Drama);
    }
    if (genre === 10751) setName("Family");
    if (genre === 14) {
      setName("Fantasy");
      setCustomeStyle(customestyles.fantasy);
    }
    if (genre === 36) setName("History");
    if (genre === 27) {
      setName("Horror");
      setCustomeStyle(customestyles.horror);
    }
    if (genre === 10402) setName("Music");
    if (genre === 9648) setName("Mystery");
    if (genre === 10749) {
      setName("Romance");
      setCustomeStyle(customestyles.Romance);
    }
    if (genre === 878) setName("Science Fiction");
    if (genre === 10770) setName("TV Movie");
    if (genre === 53) setName("Thriller");
    if (genre === 10752) setName("War");
    if (genre === 37) setName("Western");
  }
  useEffect(() => {
    mapTogenreString(genre);
  });

  return (
    <View style={ [styles.view , customestyle] } >
      <Text style={ styles.genre }>{name && name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  view:{
    marginTop: 10,
    borderRadius: 10,
    marginRight: 10,
  },
   genre: {    
    color: "#fafafa",  
    padding:6,  
  },
});

const customestyles = StyleSheet.create({
  Drama: {
    backgroundColor: "#df2ec8",
    color: "#fafafa",
       
  },
  horror: {
    backgroundColor: "#bb1a15",
    color: "#fafafa",
  },
  Romance: {
    backgroundColor: "#bb1a15",
    color: "#fafafa",
  },
  default: {
    backgroundColor: "#5515bb",
    color: "#fafafa",
  },
  fantasy: {
    backgroundColor: "#45df2e",
    color: "#fafafa",
  },
  Adventure: {
    backgroundColor: "#45df2e",
    color: "#fafafa",
  },
});
export default Genre;
