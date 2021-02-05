import React, { useState } from "react";
import SelectBox from "react-native-multi-selectbox";
import { xorBy } from "lodash";
import { StyleSheet } from "react-native";

function Multiselect({ selected, setSelected }) {
  const options = [
    { id: 28, item: "Action" },
    { id: 12, item: "Adventure" },
    { id: 16, item: "Animation" },
    { id: 35, item: "Comedy" },
    { id: 80, item: "Crime" },
    { id: 99, item: "Documentary" },
    { id: 18, item: "Drama" },
    { id: 10751, item: "Family" },
    { id: 14, item: "Fantasy" },
    { id: 36, item: "History" },
    { id: 27, item: "Horror" },
    { id: 10402, item: "Music" },
    { id: 9648, item: "Mystery" },
    { id: 10749, item: "Romance" },
    { id: 878, item: "Science Fiction" },
    { id: 10770, item: "TV Movie" },
    { id: 53, item: "Thriller" },
    { id: 10752, item: "War" },
    { id: 37, item: "Western" },
  ];
  function onMultiChange() {
    return (item) => setSelected(xorBy(selected, [item], "id"));
  }

  return (
    <SelectBox
      label='Search Category'
      options={options}
      selectedValues={selected}
      onMultiSelect={onMultiChange()}
      onTapClose={onMultiChange()}
      isMulti
      arrowIconColor="#fafafa"
      searchIconColor="#fafafa"
      toggleIconColor="#fafafa"
      labelStyle={styles.label}
      multiOptionsLabelStyle={styles.label}
      containerStyle={styles.container}
      inputFilterStyle={styles.label}
      optionsLabelStyle={styles.label}
      optionContainerStyle={styles.option}
   
  
    />
  );
}

export default Multiselect;

const styles = StyleSheet.create({
  label: {
    color: "#b8c9b8",
    fontSize:15,
  
  },
  container: {
    marginBottom: 20,
  },
  option: {
    paddingVertical: 5
  },
 
});
