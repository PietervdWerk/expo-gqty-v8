import { ScrollView, Text, TextInput } from 'react-native'
import { useQuery } from './gqty'
import { Suspense, useState } from 'react'
import { Stack } from 'expo-router'

export default function App() {
  const [searchInput, setSearchInput] = useState('')
  const { search } = useQuery({ suspense: true })

  return (
    <>
      <Stack.Screen
        options={{
          title: 'Home',
        }}
      />
      <Suspense fallback={<Text>Loading...</Text>}>
        <ScrollView style={{ padding: 80 }}>
          <Suspense fallback={<Text>Loading...</Text>}>
            <TextInput
              value={searchInput.toString()}
              onChangeText={setSearchInput}
              placeholder='Search for a person'
              style={{
                padding: 10,
                backgroundColor: '#eee',
                borderRadius: 5,
                marginBottom: 10,
                borderWidth: 1,
              }}
            />
            <Suspense fallback={<Text>Loading...</Text>}>
              {search({ search: searchInput })?.map((product) => (
                <Text key={product.id}>
                  <Suspense fallback={<Text>Loading...</Text>}>
                    {product.name}
                  </Suspense>
                </Text>
              ))}
            </Suspense>
          </Suspense>
        </ScrollView>
      </Suspense>
    </>
  )
}
