import { Box,Typography,styled } from '@mui/material'
import React from 'react'
import {LocationOn,SettingsBrightness,Opacity,Brightness5,Brightness6,Dehaze,Cloud} from '@mui/icons-material';

const Row =styled(Typography)({
  padding:10,
 fontSize:18,
 letterSpacing:2,

 "& > svg":{
  marginRight:5

 }
})
const Error = styled(Typography)({
  color:"red",
  margin:50,
  padding:20
})

const Weather = ({result})=>{
  return (
    result && Object.keys(result).length >0
? <Box style={{margin:"30px 60px"}}><Row>
    <LocationOn/>Location: {result.name}({result.sys.country})
</Row>
<Row><SettingsBrightness/>Temperature: {result.main.temp}</Row>
<Row><Opacity/>Humidity: {result.main.humidity}</Row>
<Row><Brightness5/>Sunrise time: {new Date(result.sys.sunrise*1000).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit', hour12: true}) }</Row>
<Row><Brightness6/>Sunset time: {new Date(result.sys.sunset*1000).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit', hour12: true}) }</Row>
<Row><Dehaze/>Weather: {result.weather[0].main}</Row>
<Row><Cloud/>Clouds: {result.clouds.all}</Row>
</Box> :<Error>Please Enter the values to get weather</Error> )
}

export default Weather