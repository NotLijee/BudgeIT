import React from 'react'

export default function BudgetView({name}) {
  return (
<View>
    <View.Body>
        <View.Title> 
            <div>{name}</div>
        </View.Title>
    </View.Body>
</View>
  )
}
