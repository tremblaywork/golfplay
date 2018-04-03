/**
 * @providesModule ESNext.Components.IntroSlides
 */

// import React from 'react';
// import { View, Text, Image } from 'react-native';
// import Swiper from 'react-native-swiper';
// import Button from 'react-native-button';
//
// // utils
// import GATracker from 'app/utils/GATracker';
//
// // Locals
// import styles from './styles';
// import withConnect from './withConnect';
//
// const imgCircles = require('app/assets/images/img-intro-bg-circles.png');
// const imgSlideIcons = require('app/assets/images/slide-icons/img-slide-icon-01.png');
// const SlideImage1 = require('app/assets/images/slide-icons/Pasted-Graphic_1.png');
// const SlideImage2 = require('app/assets/images/slide-icons/Pasted-Graphic-3_1.png');
// const SlideImage3 = require('app/assets/images/slide-icons/Pasted-Graphic-2_1.png');
// const SlideImage4 = require('app/assets/images/slide-icons/Pasted-Graphic-4_1.png');
// const SlideImage5 = require('app/assets/images/slide-icons/Pasted-Graphic-6_1.png');
//
// const ShortDesc1 = 'Messaging';
// const ShortDesc2 = 'Easy payments';
// const ShortDesc3 = 'Attendance';
// const ShortDesc4 = 'Event Calendar';
// const ShortDesc5 = 'Superior Support';
//
// const SlideText1 = 'Teachers can instantly share photos, videos and updates with parents. Parents can also send messages to school without exchanging phone numbers.';
// const SlideText2 = 'Simple overview of all upcoming fee and allows parents to make secure payments via mobile banking.';
// const SlideText3 = 'Realtime absent and presence updates from school.';
// const SlideText4 = 'Upcoming events and activities of School on the calendar.';
// const SlideText5 = '24/7 support to help with any problem you encounter or answer any questions you may have about us.';
//
// function SlideView({ SlideImage,Subtitle, Content, }) {
//   return (
//     <View style={styles.slideContainer}>
//       <Image style={styles.slideIcon} source={SlideImage} />
//       <Text style={styles.slideSubtitle}>{Subtitle}</Text>
//       <Text style={styles.slideContent}>{Content}</Text>
//     </View>
//   );
// }
//
// const dataArray = [
//     {
//         SlideImage:SlideImage1,
//         Subtitle:ShortDesc1,
//         Content: SlideText1,
//
//     },
//     {
//         SlideImage:SlideImage2,
//         Subtitle:ShortDesc2,
//         Content: SlideText2,
//
//     },
//     {
//         SlideImage:SlideImage3,
//         Subtitle:ShortDesc3,
//         Content: SlideText3,
//
//     },
//     {
//         SlideImage:SlideImage4,
//         Subtitle:ShortDesc4,
//         Content: SlideText4
//
//     },
//     {
//         SlideImage:SlideImage5,
//         Subtitle:ShortDesc5,
//         Content: SlideText5,
//
//     },];
//
//
// function Slider() {
//   const swipeDot = <View style={styles.swipeDot} />;
//   const swipeDotActive = <View style={[styles.swipeDot, styles.swipeDotActive]} />;
//
//   const slideTexts = Array(5).fill({
//     content: 'Evaluating the effectiveness of the campaign, \
// in the framework of today\'s openly cynical.',
//     subtitle: 'Short description',
//   });
//
//   return (
//     <Swiper
//       autoplay
//       activeDot={swipeDotActive}
//       dot={swipeDot}
//       loop={false}
//       paginationStyle={styles.swipePagination}
//       style={styles.swiper}
//     >
//       {dataArray.map(({SlideImage, Subtitle, Content }, index) => (
//         <SlideView key={`sign_in_slide_${index}`} Subtitle={Subtitle} Content={Content} SlideImage ={SlideImage} />
//       ))}
//     </Swiper>
//   );
// }
//
// function SkipButton({ onPress }) {
//   const onSkip = () => {
//     GATracker.trackButton('Skip slides');
//     onPress();
//   };
//
//   return (
//     <View style={styles.skipButtonWrapper}>
//       <Button
//         containerStyle={styles.skipButtonContainer}
//         style={styles.skipButtonText}
//         onPress={onSkip}
//       >Skip
//       </Button>
//     </View>
//   );
// }
//
// class IntroSlides extends React.PureComponent {
//   static propTypes = {
//     // Passed props
//     onSkipIntro: React.PropTypes.func.isRequired,
//   };
//
//   constructor(props) {
//     super(props);
//     this.onSkipIntro = this.props.onSkipIntro.bind(this);
//   }
//
//   componentDidMount() {
//     GATracker.trackScreen('IntroSlides');
//   }
//
//   render() {
//     return (
//       <View style={styles.rootView}>
//         <View style={styles.backgroundView}>
//           <Image style={styles.backgroundCircles} source={imgCircles} />
//         </View>
//         <Slider />
//         <SkipButton onPress={this.onSkipIntro} />
//       </View>
//     );
//   }
// }
//
// export default withConnect(IntroSlides);
