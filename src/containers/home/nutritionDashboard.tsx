import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  FlatList,
  Image,
  Dimensions,
  Button,
} from 'react-native';
import {Component, useState} from 'react';
import React from 'react';
import ProgressBarAnimated from 'react-native-progress-bar-animated';
import {FONT_FAMILY} from '@/constants/fontFamily';
import theme from '@/assets/stylesheets/theme';
import {Calendar, DateRangePicker} from 'react-date-range';
import {addDays} from 'date-fns';
import moment from 'moment';
import * as Progress from 'react-native-progress';
import StepIndicator from 'react-native-step-indicator';
let screenWidth = Math.round(Dimensions.get('window').width);
let screenHeight = Math.round(Dimensions.get('window').height);
const stepIndicatorStyles = {
  stepIndicatorSize: 30,
  currentStepIndicatorSize: 25,
  separatorStrokeWidth:3,
  currentStepStrokeWidth: 0,
  stepStrokeCurrentColor: '#87B715',
  separatorFinishedColor: '#87B715',
  separatorUnFinishedColor: 'lightgray',
  stepIndicatorFinishedColor: '#87B715',
  stepIndicatorUnFinishedColor: 'lightgray',
  stepIndicatorCurrentColor: '#87B715',
  stepStorkeFinishedColor: '#87B715',
  stepIndicatorLabelFontSize: 14,
  currentStepIndicatorLabelFontSize: 14,
  stepIndicatorLabelCurrentColor: '#ffffff',
  stepIndicatorLabelFinishedColor: '#ffffff',
  stepIndicatorLabelUnFinishedColor: 'rgba(255,255,255,0.5)',
  labelColor: '#666666',
  labelSize: 5,
  currentStepLabelColor: '#000000',
};
const NutritionDashboard = () => {
  const [habbits, setHabbits] = useState([
    {name: 'Reduce sugar', img: require('@/assets/images/icons/habbit1.png')},
    {
      name: 'Reduce soft drinks',
      img: require('@/assets/images/icons/habbit2.png'),
    },
    {
      name: 'Reduce ultra processed foods',
      img: require('@/assets/images/icons/habbit3.png'),
    },
    // {name: 'Reduce sugar', img: require('@/assets/images/icons/habbit1.png')},
  ]);
  const [calories, setCalories] = useState([
    {
      name: 'Carbs',
      weight: 160,
      kal: 600,
      progress: 20,
      percent: '34%',
      bg: '#F2E4D7',
      bgP: 'rgba(0, 0, 0, 0.08)',
      barColor: '#D0A782',
    },
    {
      name: 'Fat',
      weight: 40,
      kal: 360,
      progress: 40,
      percent: '20%',
      bg: '#E1E4F9',
      bgP: 'rgba(0, 0, 0, 0.08)',
      barColor: '#3538CD',
    },
    {
      name: 'Protein',
      weight: 1200,
      kal: 800,
      progress: 20,
      percent: '46%',
      bg: '#FEE9DA',
      bgP: 'rgba(0, 0, 0, 0.08)',
      barColor: '#FF6B00',
    },
    {
      name: 'Fiber',
      weight: 160,
      kal: 600,
      progress: 50,
      percent: '34%',
      bg: '#DDF8F1',
      bgP: 'rgba(0, 0, 0, 0.08)',
      barColor: theme?.greenFont,
    },
  ]);
  const renderCaloriesList = ({item}) => {
    return (
      <TouchableOpacity
        style={{
          height: 140,
          width: 140,
          backgroundColor: item?.bg,
          borderRadius: 10,
          marginHorizontal: 5,
        }}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            top: 12,
          }}>
          <Text
            style={{
              fontSize: 18,
              fontFamily: FONT_FAMILY?.MontserratSemiBold,
              color: theme?.black,
              padding: 2,
            }}>
            {item?.name}
          </Text>
          <View
            style={{
              width: 50,
              height: 25,
              borderRadius: 15,
              left: 5,
              justifyContent: 'center',
              backgroundColor: item?.bgP,
            }}>
            <Text
              style={{
                fontSize: 13,
                fontWeight: '500',
                color: theme?.black,
                padding: 5,
                textAlign: 'center',
                //   backgroundColor: item?.bgP,
                // fontFamily: FONT_FAMILY?.MontserratMedium,
              fontFamily: FONT_FAMILY?.MontserratSemiBold,
                paddingVertical: 2,
                width: 50,
                //  alignSelf:"center"
              }}>
              {item?.percent}
            </Text>
          </View>
        </View>

        <Text
          style={{
            fontSize: 20,
            color: theme?.black,
            // padding: 2,
            textAlign: 'center',
            top: 22,
            // color: theme?.black,
            fontFamily: FONT_FAMILY?.MontserratMedium,
          }}>{`${item?.weight} g`}</Text>

        <Text
          style={{
            fontSize: 14,
            color: theme?.black,
            padding: 2,
            textAlign: 'center',
            top: 25,
            // color: theme?.black,
            fontFamily: FONT_FAMILY?.MontserratMedium,
          }}>{`${item?.kal} kcal`}</Text>

        <View
          style={{
            marginTop: 38,
            alignSelf: 'center',
          }}>
          {/* <ProgressBarAnimated
            width={125}
            value={item?.progress}
            // backgroundColorOnComplete="#FFF"
            backgroundColor={item?.barColor}
            // color={}
          /> */}
                <Progress.Bar
        progress={item?.progress/100}
        width={125}
        height={8}
        color={item?.barColor}
        unfilledColor={'#fff'}
        borderWidth={0}
      />
        </View>
      </TouchableOpacity>
    );
  };
  const renderHabbits = ({item}) => {
    return (
      <TouchableOpacity
        style={{
          width: screenWidth * 0.9,
          height: 120,
          borderRadius: 15,
          borderColor: theme?.border,
          borderStyle: 'solid',
          borderWidth: 1,
          display: 'flex',
          // justifyContent:"space-between",
          alignItems: 'center',
          flexDirection: 'row',
          alignSelf: 'center',
          marginTop: 15,
        }}>
        <Image
          style={{
            resizeMode: 'contain',
            height: 90,
            width: 90,
            marginLeft: 18,
          }}
          source={item?.img}
        />
        <Text
          style={{
            fontFamily: FONT_FAMILY?.MontserratSemiBold,
            fontSize: 18,
            marginLeft: 15,
          }}>
          {item?.name}
        </Text>
      </TouchableOpacity>
    );
  };
  const [isPickerVisible, setIsPickerVisible] = useState(false);
  const [selectedDates, setSelectedDates] = useState({});
  // const [state, setState] = useState([
  //   {
  //     startDate: new Date(),
  //     endDate: addDays(new Date(), 7),
  //     key: 'selection',
  //   },
  // ]);
  const handleConfirm = date => {
    setIsPickerVisible(false);
    setSelectedDates(date);
  };
  const [showDate, setShowDate] = useState(false);
  const [showDOBPicker, setShowDOBDatePicker] = useState(false);
  return (
    <View>
      {/* Calories */}
      <View
        style={{
          paddingHorizontal: 10,
        }}>
        <View
          style={{
            marginTop: 15,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text
            onPress={() => setShowDOBDatePicker(!showDOBPicker)}
            style={{
              fontFamily: FONT_FAMILY?.MontserratSemiBold,
              fontSize: 16,
              color: '#344054',
              marginHorizontal: 8,
            }}>
            Total calories
          </Text>

          {/* <DateRangePicker
            onChange={item => setState([item.selection])}
            open={showDate}
            showSelectionPreview={true}
            moveRangeOnFirstSelection={false}
            months={2}
            ranges={state}>
            <Text>Click me!</Text>
          </DateRangePicker> */}
          {/* <DatePicker
            modal
            open={showDOBPicker}
            mode={'date'}
            maximumDate={new Date(moment.now())}
            date={new Date()}
            onConfirm={date => {
              console.log('datedate', date);

              // let newdate = moment(date).format('DD/MM/YYYY');
              setShowDOBDatePicker(false);
              // console.log('that selected, ', newdate);
              // setDateOfBirth(newdate);
            }}
            onCancel={() => {
              setShowDOBDatePicker(false);
            }}
          /> */}
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: screenWidth * 0.52,
              marginHorizontal: 8,
            }}>
            <Text
              style={{
                left: 56,
                fontFamily: FONT_FAMILY?.MontserratBold,
                fontSize: 18,
                color: theme?.black,
              }}>
              1760 kcal
            </Text>
            <View
              style={{
                display: 'flex',
                // padding:3\
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-around',
                // flexDirection: 'row',
                backgroundColor: '#ECFDF3',
                borderRadius: 20,
                paddingHorizontal: 5,
                paddingVertical: 3,
                width: 62,
              }}>
              <Image
                style={{
                  height: 10,
                  width: 10,
                }}
                source={require('@/assets/images/icons/arrow_up.png')}
              />

              <Text
                style={{
                  fontFamily: FONT_FAMILY?.MontserratMedium,
                  // fontWeight: '100',
                  fontSize: 14,
                  color: theme?.greenFont,
                }}>
                20%
              </Text>
            </View>
          </View>
        </View>

        <FlatList
          data={calories}
          renderItem={renderCaloriesList}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            marginTop: 20,
            // backgroundColor:"pink"
          }}
        />
      </View>

      {/* text list */}

      <View
        style={{
          marginTop: 20,
        }}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: 50,
            borderBottomColor: theme?.border,
            borderBottomWidth: 1,
            borderStyle: 'solid',
            width: screenWidth * 0.9,
            alignSelf: 'center',
          }}>
          <Text style={styles.text}>Meals per day</Text>
          <Text style={styles.text}>3</Text>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: 50,
            borderBottomColor: theme?.border,
            borderBottomWidth: 1,
            borderStyle: 'solid',
            width: screenWidth * 0.9,
            alignSelf: 'center',
          }}>
          <Text style={styles.text}>Snacks per day</Text>
          <Text style={styles.text}>3</Text>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: 50,
            borderBottomColor: theme?.border,
            borderBottomWidth: 1,
            borderStyle: 'solid',
            width: screenWidth * 0.9,
            alignSelf: 'center',
          }}>
          <Text style={styles.text}>Time between meal</Text>
          <Text style={styles.text}>2h 30m</Text>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: 50,
            borderBottomColor: theme?.border,
            borderBottomWidth: 1,
            borderStyle: 'solid',
            width: screenWidth * 0.9,
            alignSelf: 'center',
          }}>
          <Text style={styles.text}>Overnight fasting time</Text>
          <Text style={styles.text}>8h 30m</Text>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: 50,
            borderBottomColor: theme?.border,
            borderBottomWidth: 1,
            borderStyle: 'solid',
            width: screenWidth * 0.9,
            alignSelf: 'center',
          }}>
          <Text style={styles.text}>Water</Text>
          <Text style={styles.text}>2L . 8Cups</Text>
        </View>
      </View>
      <View style={{paddingHorizontal: 20, marginTop: 30}}>
        <Text
          style={{
            fontSize: 18,
            fontFamily: FONT_FAMILY?.MontserratSemiBold,
            color: '#000',
          }}>
          Nutritional habits and practices
        </Text>

        {/* Nutritional Habbits and practices */}
        <View style={{
          flexDirection:"row",
          marginBottom: 100,
        }}>
          <View style={{ marginRight: 8 }}>
            <StepIndicator
            customStyles={stepIndicatorStyles}
            stepCount={3}
            currentPosition={1}
            direction="vertical"
            // labels={['20', '40', '80']}
            // currentPosition={currentPage}
            // labels={dummyData.data.map((item) => item.title)}
          />
          </View>
          <View>
          <View style={{
          flexDirection:"row",
          marginLeft:8,
          marginTop:15,
          marginBottom:0,
          borderColor:"lightgray",
          borderWidth:1,
          padding:10,borderRadius:10
        }}>
          <View>
            <Image source={require("@/assets/images/icons/rafi1.jpeg")} style={{
              height:80,
              width:80
            }} />
            {/* <FlatList
            data={habbits}
            contentContainerStyle={{
              paddingBottom: 100,
            }}
            renderItem={renderHabbits}
          /> */}
          </View>
          <View style={{
                paddingHorizontal:5
              }}>
            <View style={{
              flexDirection:"row",
              justifyContent:"space-between",
              marginLeft: 5,
              marginTop: 5,
              
            }}>
              <Text style={{ color: 'gray' }}><Text style={{ color: '#000' }}>6</Text>/6 Colors</Text>
              <Image source={require("@/assets/images/icons/check.png")} style={{
              height:20,
              width:20,
              marginRight: 2,
              marginTop: 3
            }} />
            </View>
            <View style={{ marginLeft: 5, marginTop: 2}}>
              <Text style={{
                fontSize:18,
                fontWeight:"400",
                marginBottom:10,
                color: '#000',
              }}>Eat Rainbow</Text>
              <Progress.Bar progress={0.8} width={180} color="purple" />
            </View>
          </View>
          
        </View>
        <View style={{
          flexDirection:"row",
          marginLeft:8,
          marginTop:15,
          marginBottom:0,
          borderColor:"lightgray",
          borderWidth:1,
          padding:10,borderRadius:10
        }}>
          <View>
            <Image source={require("@/assets/images/icons/rafi2.jpeg")} style={{
              height:80,
              width:80
            }} />
            {/* <FlatList
            data={habbits}
            contentContainerStyle={{
              paddingBottom: 100,
            }}
            renderItem={renderHabbits}
          /> */}
          </View>
          <View style={{
                paddingHorizontal:5
              }}>
            <View style={{
              flexDirection:"row",
              justifyContent:"space-between",
              marginLeft: 5,
              marginTop: 5,
              
            }}>
              <Text style={{ color: 'gray' }}><Text style={{ color: '#000' }}>3</Text>/3 Exercises</Text>
              <Image source={require("@/assets/images/icons/check.png")} style={{
              height:20,
              width:20,
              marginRight: 2,
              marginTop: 3
            }} />
            </View>
            <View style={{ marginLeft: 5, marginTop: 2}}>
              <Text style={{
                fontSize:18,
                fontWeight:"400",
                marginBottom:10,
                color: '#000',
              }}>Exercises</Text>
              <Progress.Bar progress={1} width={180} color="purple" />
            </View>
          </View>
          
        </View>
        <View style={{
          flexDirection:"row",
          marginLeft:8,
          marginTop:15,
          marginBottom:0,
          borderColor:"lightgray",
          borderWidth:1,
          padding:10,borderRadius:10
        }}>
          <View>
            <Image source={require("@/assets/images/icons/rafi3.jpeg")} style={{
              height:80,
              width:80
            }} />
            {/* <FlatList
            data={habbits}
            contentContainerStyle={{
              paddingBottom: 100,
            }}
            renderItem={renderHabbits}
          /> */}
          </View>
          <View style={{
                paddingHorizontal:5
              }}>
            <View style={{
              flexDirection:"row",
              justifyContent:"space-between",
              marginLeft: 5,
              marginTop: 5,
              
            }}>
              <Text style={{ color: 'gray' }}><Text style={{ color: '#000' }}>8</Text>/9 Glasses</Text>
              {/* <Image source={require("@/assets/images/icons/check.png")} style={{
              height:20,
              width:20,
              marginRight: 2,
              marginTop: 3
            }} /> */}
            </View>
            <View style={{ marginLeft: 5, marginTop: 2}}>
              <Text style={{
                fontSize:18,
                fontWeight:"400",
                marginBottom:10,
                color: '#000',
              }}>Drink Water</Text>
              <Progress.Bar progress={0.9} width={180} color="purple" />
            </View>
          </View>
          
        </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default NutritionDashboard;

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    // fontWeight: 'bold',
    fontFamily: FONT_FAMILY?.MontserratMedium,
    color: theme?.black,
  },
});
