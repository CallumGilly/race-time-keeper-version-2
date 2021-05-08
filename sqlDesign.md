# Design for SQL database

## Tables

All the tables that will be used with the heading, type and example data

### RacerTbl

All the unique racers
RacerID :key: | First Name | Second Name | isMale | Birthday |
-|-|-|-|-|-
autoNum | varChar(255) | varChar(255) | Boolean | Date
001 | John | Doe | True | 01/01/2000

### RaceTypeTbl

All the unique race types

RaceTypeID :key: | Race Name | Length(m) | isHome
-|-|-|-|-|-
autoNum | varChar(255) | Int | Boolean
001 | Henley 5k | 5000 | True

### EventTbl

All the unique events

EventID :key:| _RaceTypeID_ | Date
-|-|-|-|-|-
autoNum | Int | Date
001 | 001 | 01/01/2020

### RaceRecordsTbl

Records of races

RaceID :key: | _EventID_ | _RacerID_ | Time(s)
-|-|-|-|-|-
autoNum | Int | Int | Int
001 | 001 | 001 | 1800
