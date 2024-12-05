import React from 'react'
import Card from '../../Card'

interface Props {}

export default function home({}: Props) {
  return (
    <div>home
       <Card title={'my first project'} date={'September 2019'} imgpath={"https://i.insider.com/5980b7ca87543302234a1a57?width=800&format=jpeg&auto=webp"}/>
        <Card title={'my first internship'} date={'September 2022'} imgpath={"https://brandingforthepeople.com/wp-content/uploads/2019/04/Stock-Photography-vs-Real-Imagery.jpg"} />
        <Card title={'my title'} date={'September'} />
        <Card title={'my title'} date={'September'} />
        <Card title={'my title'} date={'September'} />
        <Card title={'my title'} date={'September'} />
        <Card title={'my title'} date={'September'} />
    </div>
  )
}