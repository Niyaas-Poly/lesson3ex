import React ,{useState} from 'react';
import {StatusBar, Button, Image, Text, View, ScrollView, TextInput, Alert} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome6";
import RNPickerSelect from 'react-native-picker-select';

const Animalimg = ({icon_name, name ,poster}) => {
  return (
      <View>
        <Icon name = {icon_name} size={20}> <Text>{name}</Text></Icon>
        <Image source={poster} style = {{width:300, height:300}}></Image>
        <Text>What is it's name?</Text>
      </View>
  );
}

const App = () => {
  const [animal1, setAnimal1] = useState('');
  const [animal2, setAnimal2] = useState('');
  const [animal3, setAnimal3] = useState('');
  const [qns4, setQns4] = useState('');
  const [qns5, setQns5] = useState('');

  return(
      <ScrollView>
        <StatusBar hidden={true}/>
        <Text style={{ fontSize:50}}>AFIQ HERE</Text>
        <Animalimg poster={require("./img/bee.jpg")}/>
        <RNPickerSelect
            onValueChange={(value) => setAnimal1(value)}
            items={[
              { label: 'By', value: 'By' },
              { label: 'Bi', value: 'Bi' },
              { label: 'Bee', value: 'Bee' },
            ]}
        />
        <Animalimg poster={require("./img/deer.jpg")}/>
        <RNPickerSelect
            onValueChange={(value) => setAnimal2(value)}
            items={[
              { label: 'Dear', value: 'Dear' },
              { label: 'Deer', value: 'Deer' },
              { label: 'Diar', value: 'Diar' },
            ]}
        />
        <Animalimg poster={require("./img/kingfisher.jpg")}/>
        <RNPickerSelect
            onValueChange={(value) => setAnimal3(value)}
            items={[
              { label: 'Ostrich', value: 'Ostrich' },
              { label: 'Donkey', value: 'Donkey' },
              { label: 'Kingfisher', value: 'Kingfisher' },
            ]}
        />
        <Animalimg poster={require("./img/messi.jpg")}/>
        <RNPickerSelect
            onValueChange={(value) => setQns4(value)}
            items={[
              { label: 'Messi', value: 'Messi' },
              { label: 'Pogba', value: 'Pogba' },
              { label: 'GOAT', value: 'GOAT' },
            ]}
        />
        <Text>Is tomato is a fruit or a vegetable ? : (First letter is capital)</Text>
        <TextInput style={{borderWidth: 1}} onChangeText={(text) => setQns5(text)} />

        <Button title="Submit Answers" onPress={() => {
          const correctans = ["Bee", "Deer", "Kingfisher", "GOAT", "Fruit"];
          const userans = [animal1, animal2, animal3, qns4, qns5];
          let correctCount = 0;
          userans.forEach(Answer => {
            if (correctans.includes(Answer)) {
              correctCount++;
            }
          });
          let mymsg = `You got ${correctCount} out of 5 correct!`;
          Alert.alert(mymsg);
        }}/>
      </ScrollView>
  );
}

export default App;
