import React from 'react'
import {
  FlatList,
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  StatusBar,
  Image,
  ImageBackground
} from 'react-native'
import { Feather } from '@expo/vector-icons'
import ListItem from '../components/ListItem'

const DATA = [
  {
    dt: 1661875200,
    main: {
      temp: 296.34,
      feels_like: 296.02,
      temp_min: 296.34,
      temp_max: 298.24,
      pressure: 1015,
      sea_level: 1015,
      grnd_level: 933,
      humidity: 50,
      temp_kf: -1.9
    },
    weather: [
      {
        id: 500,
        main: 'Rain',
        description: 'light rain',
        icon: '10d'
      }
    ],
    clouds: {
      all: 97
    },
    wind: {
      speed: 1.06,
      deg: 66,
      gust: 2.16
    },
    visibility: 10000,
    pop: 0.32,
    rain: {
      '1h': 0.13
    },
    sys: {
      pod: 'd'
    },
    dt_txt: '2022-08-30 16:00:00'
  },
  {
    dt: 1665200,
    main: {
      temp: 296.34,
      feels_like: 296.02,
      temp_min: 296.34,
      temp_max: 298.24,
      pressure: 1015,
      sea_level: 1015,
      grnd_level: 933,
      humidity: 50,
      temp_kf: -1.9
    },
    weather: [
      {
        id: 500,
        main: 'Rain',
        description: 'light rain',
        icon: '10d'
      }
    ],
    clouds: {
      all: 97
    },
    wind: {
      speed: 1.06,
      deg: 66,
      gust: 2.16
    },
    visibility: 10000,
    pop: 0.32,
    rain: {
      '1h': 0.13
    },
    sys: {
      pod: 'd'
    },
    dt_txt: '2022-08-30 16:00:00'
  },
  {
    dt: 16618750,
    main: {
      temp: 296.34,
      feels_like: 296.02,
      temp_min: 296.34,
      temp_max: 298.24,
      pressure: 1015,
      sea_level: 1015,
      grnd_level: 933,
      humidity: 50,
      temp_kf: -1.9
    },
    weather: [
      {
        id: 500,
        main: 'Rain',
        description: 'light rain',
        icon: '10d'
      }
    ],
    clouds: {
      all: 97
    },
    wind: {
      speed: 1.06,
      deg: 66,
      gust: 2.16
    },
    visibility: 10000,
    pop: 0.32,
    rain: {
      '1h': 0.13
    },
    sys: {
      pod: 'd'
    },
    dt_txt: '2022-08-30 16:00:00'
  }
]

const UpcomingWeather = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../../assets/clouds.jpg')}
        style={styles.image}
      >
        <Text>SMRCNCNCNCNCN</Text>
        <FlatList
          data={DATA}
          keyExtractor={(item) => item.dt}
          renderItem={({ item }) => (
            <ListItem
              condition={item.weather[0].main}
              dt_txt={item.dt_txt}
              temp_min={item.main.temp_min}
              temp_max={item.main.temp_max}
            />
          )}
        />
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: 'royalblue'
  },
  image: {
    flex: 1
  }
})

export default UpcomingWeather
