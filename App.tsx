import { ScrollView, Text, TextInput } from 'react-native'
import { useQuery } from './gqty'
import { Suspense, useState } from 'react'

export default function App() {
  const [searchInput, setSearchInput] = useState(100)
  const { allPeople } = useQuery({ suspense: false })

  return (
    <Suspense fallback={<Text>Loading...</Text>}>
      <ScrollView style={{ padding: 80 }}>
        <TextInput
          value={searchInput.toString()}
          onChangeText={(e) => {
            try {
              const nmbr = parseInt(e)
              if (isNaN(nmbr)) return
              setSearchInput(nmbr)
            } catch (e) {}
          }}
          placeholder='Search for a person'
          style={{
            padding: 10,
            backgroundColor: '#eee',
            borderRadius: 5,
            marginBottom: 10,
            borderWidth: 1,
          }}
        />
        {allPeople({ first: searchInput })?.people?.map((person) => (
          <Text key={person?.name}>{person?.name}</Text>
        ))}
      </ScrollView>
    </Suspense>
  )
}
