import React, { Component } from "react";
import Swiper from "react-native-deck-swiper";
import { StyleSheet, Image, View } from "react-native";
import { useNavigation } from '@react-navigation/native';

// demo purposes only
// function* range(start, end) {
//   for (let i = start; i <= end; i++) {
//     yield i;
//   }
// }

class Swiperscreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [
        {img: require('../assets/Images/Image0.jpg'), ans: "right"},
        {img: require('../assets/Images/Image1.jpg'), ans: "left"},
        {img: require('../assets/Images/Image2.jpg'), ans: "left"},
        {img: require('../assets/Images/Image3.jpg'), ans: "right"},
        {img: require('../assets/Images/Image4.jpg'), ans: "left"},
        {img: require('../assets/Images/Image5.jpg'), ans: "right"},
        {img: require('../assets/Images/Image6.jpg'), ans: "left"},
        {img: require('../assets/Images/Image7.jpg'), ans: "right"},
        {img: require('../assets/Images/Image8.jpg'), ans: "left"},
        {img: require('../assets/Images/Image9.jpg'), ans: "left"},
        {img: require('../assets/Images/Image10.jpg'), ans: "left"},
        {img: require('../assets/Images/Image11.jpg'), ans: "right"},
      ],
      cardIndex: 0,
      score: 0,
    };
  }

  renderCard = (card) => {
    return (
      <Image 
        style={styles.card}
        source={card.img}
      />
    );
  };

  onSwiped = (type, card) => {
    this.state.cardIndex++;
    if (type == card.ans) {
      this.state.score++
    }
  };

  // swipeLeft = () => {
  //   this.swiper.swipeLeft();
  // };

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Swiper
          ref={(swiper) => {
            this.swiper = swiper;
          }}
          // onSwiped={() => this.onSwiped("general")}
          // onTapCard={this.swipeLeft}
          cards={this.state.cards}
          cardIndex={this.state.cardIndex}
          onSwipedLeft={() => this.onSwiped("left", this.state.cards[this.state.cardIndex])}
          onSwipedRight={() => this.onSwiped("right", this.state.cards[this.state.cardIndex])}
          cardVerticalMargin={80}
          renderCard={this.renderCard}
          onSwipedAll={() => navigation.push("Congratulations", {score: this.state.score})}
          stackSize={3}
          stackSeparation={15}
          verticalSwipe={false}
          showSecondCard={false}
          overlayLabelStyle={{
            fontSize: 25,
            fontWeight: 'bold',
            borderRadius: 10,
            padding: 10,
            overflow: 'hidden',
          }}
          overlayLabels={{
            // bottom: {
            //   title: "BLEAH",
            //   style: {
            //     label: {
            //       backgroundColor: "black",
            //       borderColor: "black",
            //       color: "white",
            //       borderWidth: 1,
            //     },
            //     wrapper: {
            //       flexDirection: "column",
            //       alignItems: "center",
            //       justifyContent: "center",
            //     },
            //   },
            // },
            left: {
              title: "TRASH IT",
              style: {
                label: {
                  backgroundColor: "red",
                  borderColor: "black",
                  color: "white",
                  borderWidth: 1,
                },
                wrapper: {
                  flexDirection: "column",
                  alignItems: "flex-end",
                  justifyContent: "flex-start",
                  marginTop: 30,
                  marginLeft: -30,
                },
              },
            },
            right: {
              title: "RECYCLE",
              style: {
                label: {
                  backgroundColor: "green",
                  borderColor: "black",
                  color: "white",
                  borderWidth: 1,
                },
                wrapper: {
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  marginTop: 30,
                  marginLeft: 30,
                },
              },
            },
            // top: {
            //   title: "SUPER LIKE",
            //   style: {
            //     label: {
            //       backgroundColor: "black",
            //       borderColor: "black",
            //       color: "white",
            //       borderWidth: 1,
            //     },
            //     wrapper: {
            //       flexDirection: "column",
            //       alignItems: "center",
            //       justifyContent: "center",
            //     },
            //   },
            // },
          }}
          animateOverlayLabelsOpacity
          animateCardOpacity
          swipeBackCard
        >
          {/* <Button onPress={() => this.swiper.swipeBack()} title="Swipe Back" /> */}
        </Swiper>
      </View>
    );
  }
}

export default function(props) {
  const navigation = useNavigation();
  return <Swiperscreen {...props} navigation = {navigation} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF",
  },
  card: {
    height: 600,
    width: 350,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: "#E8E8E8",
    justifyContent: "center",
    backgroundColor: "white",
    resizeMode: "contain",
  },
  text: {
    textAlign: "center",
    fontSize: 50,
    backgroundColor: "transparent",
  },
  done: {
    textAlign: "center",
    fontSize: 30,
    color: "white",
    backgroundColor: "transparent",
  },
});
