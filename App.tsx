import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

export default function App(): JSX.Element {
  return (
    <View className="h-screen w-screen flex items-center justify-center bg-white">
      <StatusBar style="auto" />
      <View className="h-[50%] w-[70%] bg-slate-200 rounded-lg shadow-md shadow-black/20 p-6 flex flex-col justify-between">
        <View>
          <Text className="text-[20px] font-semibold">Lunes:</Text>
          <Text className="text-[20px]">Pecho, Hombro, Bicep</Text>
        </View>
        <View>
          <Text className="text-[20px] font-semibold">Martes:</Text>
          <Text className="text-[20px]">Espalda, Tricep</Text>
        </View>
        <View>
          <Text className="text-[20px] font-semibold">Miercoles:</Text>
          <Text className="text-[20px]">Pierna, Abdomen</Text>
        </View>
        <View>
          <Text className="text-[20px] font-semibold">Jueves:</Text>
          <Text className="text-[20px]">Pecho, Hombro, Bicep</Text>
        </View>
        <View>
          <Text className="text-[20px] font-semibold">Viernes:</Text>
          <Text className="text-[20px]">Espalda, Tricep</Text>
        </View>
        <View>
          <Text className="text-[20px] font-semibold">Sabado:</Text>
          <Text className="text-[20px]">Pierna, Abdomen</Text>
        </View>
        <View>
          <Text className="text-[20px] font-semibold">Domingo:</Text>
          <Text className="text-[20px]">Descanso</Text>
        </View>
      </View>
    </View>
  );
}
