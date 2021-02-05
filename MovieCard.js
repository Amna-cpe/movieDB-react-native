import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  Image,
} from "react-native";

import Rating from "./Rating";
import Genre from "./Genre";

function MovieCard({ title, overview, img, generes, release, vote ,key }) {
  let fiveStarRating = vote - 5;
  if (fiveStarRating > parseInt(fiveStarRating) + 0.5) {
    fiveStarRating = Math.ceil(fiveStarRating);
  } else if (fiveStarRating < parseInt(fiveStarRating) + 0.5) {
    fiveStarRating = Math.floor(fiveStarRating);
  }

  return (
    <View style={styles.card}>
      <View style={styles.poster}>
        <Image
          source={{ uri: `https://image.tmdb.org/t/p/w500/${img}` }}
          style={{ width: 300, height: 300 }}
          alt="img"
          resizeMode="contain"
        />
      </View>
      <View style={styles.details}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.release}>{release}</Text>
        <View style={styles.rating}>
          <Rating rating={fiveStarRating}  key={key} />
          <Text style={styles.vote}>{vote}</Text>
        </View>
        <View style={styles.tags}>
          {generes?.map((g) => (
            <Genre key={key} genre={g} />
          ))}
        </View>
        <View style={styles.info}>
          <Text style={styles.overview}>{overview}</Text>
        </View>
      </View>
    </View>
  );
}

export default MovieCard;

const styles = StyleSheet.create({
  tags: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  card: {
    color: "#fafafa",
    width: "100%",
    height: "450",
    backgroundColor: "#000",
    marginBottom: 30,
  },
  poster: {
    backgroundColor: "#000",
  },
  details: {
    backgroundColor: "#000",
    textAlign: "left",
    width: 300,
    marginBottom: 40,
    padding: 20,
  },
  rating: {
    fontWeight: "100",
    padding: 5,
    flex: 1,
    flexDirection: "row",
  },
  card: {
    fontWeight: "100",
  },
  info: {
    fontWeight: "100",
  },
  text: {
    color: "#fafafa",
    fontSize: 20,
  },
  overview: {
    marginTop: 20,
    fontSize: 14,
    color: "#fafafa",
    width: "100%",
  },
  title: {
    color: "#fafafa",
    fontSize: 20,
    fontWeight: "bold",
  },
  release: {
    color: "#808080",
    fontSize: 15,
  },
  vote: {
    marginLeft: 6,
    color: "#fafafa",
    fontSize: 15,
    paddingTop: 5,
  },
});
