import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Icon } from "react-native-elements";

function Rating({ rating }) {
  const remaining = parseInt(5 - rating);

  return (
    <>
      {rating % parseInt(rating) === 0
        ? Array(rating)
            .fill()
            .map(() => <Icon name="star" color="#f7f406" />)
        : Array(rating - 0.5)
            .fill()
            .map(() =><Icon name="star" color="#f7f406" />)}
      {rating % parseInt(rating) !== 0 &&<Icon name='star-half' color="#f7f406" />}

      {remaining !== 0 &&
        Array(remaining)
          .fill()
          .map(() => <Icon name='star-outline' color="#f7f406" />)}
    </>
  );
}

export default Rating;
