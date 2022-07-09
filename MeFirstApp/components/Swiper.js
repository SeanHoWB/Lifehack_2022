import React, { Component } from "react";
import Swiper from "react-native-deck-swiper";
import { StyleSheet, Image, View } from "react-native";

// demo purposes only
function* range(start, end) {
  for (let i = start; i <= end; i++) {
    yield i;
  }
}

class Swiperscreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: ['../assets/Images/Cardboard.jpg', '../assets/Images/Food container.jpg', '../assets/Images/Cardboard.jpg'],
      swipedAllCards: false,
      swipeDirection: "",
      cardIndex: 0,
    };
  }

  renderCard = (card, index) => {
    console.log(`../assets/Images/Image${index}.jpg`)
    return (
      <Image 
        style={styles.card}
        source={require(`../assets/Images/Image${index}.jpg`)}
      />
    );
  };

  onSwiped = (type) => {
    console.log(`User has swiped ${type}`);
  };

  onSwipedAllCards = () => {
    this.setState({
      swipedAllCards: true,
    });
  };

  swipeLeft = () => {
    this.swiper.swipeLeft();
  };

  render() {
    return (
      <View style={styles.container}>
        <Swiper
          ref={(swiper) => {
            this.swiper = swiper;
          }}
          // onSwiped={() => this.onSwiped("general")}
          onSwipedLeft={() => this.onSwiped("left")}
          onSwipedRight={() => this.onSwiped("right")}
          onTapCard={this.swipeLeft}
          cards={this.state.cards}
          cardIndex={this.state.cardIndex}
          cardVerticalMargin={80}
          renderCard={this.renderCard}
          onSwipedAll={this.onSwipedAllCards}
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

export default Swiperscreen;

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
