import { ScrollView, Text, TextInput } from 'react-native'
import { useQuery } from './gqty'
import { Suspense, useState } from 'react'

export default function App() {
  const [searchInput, setSearchInput] = useState('')
  const { search } = useQuery()

  return (
      <ScrollView style={{ padding: 80 }}>
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
        {search({ search: searchInput })?.map((product) => (
          <Text style={{color: "red"}} key={product.id}>{product.name}</Text>
        ))}
      </ScrollView>
  )
}
