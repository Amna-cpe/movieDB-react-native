import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  FlatList,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";
import axios from "axios";
import MovieCard from "./MovieCard";
import Multiselect from "./MultiSelect";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [selectedMovies, setSelectedMovies] = useState([]);
  const [selected, setSelected] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [refresh, setRefresh] = useState(false);

  const [selectedTeams, setSelectedTeams] = useState([]);

  const fetchData = () => {
    const API_KEY = "1cf4e2cd4793c0319a6de5378ced96b3";
    let url;
    let values = [];
    let selecteMoviesString;

    // function that re fetch whenever reaching to the bottom!

    if (selected.length > 0) {
      selected.map((Element) => (values = [...values, Element.id]));

      selecteMoviesString = values.join(",");

      const selectedMovies = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&page=${page}&with_genres=${selecteMoviesString}`;
      url = selectedMovies;
    } else {
      url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&page=${page}`;
    }

    axios
      .get(url)
      .then((res) => res.data)
      .then((data) => {
        setMovies((presMovies) => [...presMovies, ...data.results]);
        setLoading(false);
      });
  };

  useEffect(() => {
    if (selected.length >=0) {
      setPage(1);
      setMovies([]);
    }
    fetchData();
  }, [selected]);

  useEffect(() => {   
    fetchData();
  }, [refresh])

  const EndOfListFetch = () => {
    setPage((prevPage) => prevPage + 1);
    setRefresh((prev) => !prev);
  };

  const fotterComponent = () => {
    return (
      <View
        style={{
          paddingVertical: 20,
        }}
      >
        <ActivityIndicator animating size="large" />
      </View>
    );
  };
  console.log(selected);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>movie DB</Text>

      <Multiselect selected={selected} setSelected={setSelected} />

      {loading ? (
        <View
          style={{
            paddingVertical: 20,
          }}
        >
          <ActivityIndicator animating size="large" />
        </View>
      ) : (
        <SafeAreaView style={styles.scroll}>
          <FlatList
            data={movies}
            initialNumToRender={7}
            keyExtractor={(item) => item.id}
            ListFooterComponent={fotterComponent}
            onEndReached={EndOfListFetch}
            onEndReachedThreshold={0}
            renderItem={({ item }) => (
              <MovieCard
                title={item.title}
                overview={item.overview}
                img={item.poster_path}
                generes={item.genre_ids}
                release={item.release_date}
                key={item.id}
                vote={item.vote_average}
              />
            )}
          />
        </SafeAreaView>
      )}

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 0,
    flex: 1,
    backgroundColor: "#191b33",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    alignItems: "center",
    paddingTop: 70,
    paddingHorizontal: 20,
    justifyContent: "flex-start",
  },
  text: {
    color: "#fafafa",
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    fontSize: 20,
    fontWeight: "500",
    backgroundColor: "#fafafa",
    padding: 10,
    borderRadius: 10,
    marginBottom: 40,
  },
  scroll: {
    flex: 1,
    marginBottom: 10,
  },
});
