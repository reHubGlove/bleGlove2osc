# ReHub bleGlove2osc

[![N|Solid](http://www.rehub.pro/wp-content/uploads/2016/10/glove_BLE_comunication.png)](http://www.rehub.pro/en/software.html)

ReHub bleGlove2osc receive the data from glove through BLE ( Bluetooth Low Energy ) and sends them to OSC server.
The ip of the osc server is 127.0.0.1 and ports are 12000 or 12001. 

The data format is an array:
data[0]  = "r" o "l" for right o left ( view on [gloveFirmware32u4-repos] )
##### 6DOF data
data[1]  = pitch
data[2]  = roll
data[3]  = yow
##### Finger flex sensors data
data[4]  = thumb
data[5]  = thumbrot
data[6]  = index
data[7]  = middle
data[8]  = ring
data[9]  = little
##### Pressure sensor data
data[10] = thumbpad
data[11] = indexpad
data[12] = middlepad
data[13] = ringpad
data[14] = littlepad

The data are sent in format:
**/leftGlove**
[pitch,roll,yow,thumb,thumbrot,index,middle,ring,little,thumbpad,indexpad,middlepad,ringpad,littlepad]

***OR***
**/rightGlove**
[pitch,roll,yow,thumb,thumbrot,index,middle,ring,little,thumbpad,indexpad,middlepad,ringpad,littlepad]

only if the data received from glove is in correct format.

### Installation

bleGlove2osc requires [Node.js](https://nodejs.org/) to run.

Install the dependencies:

```sh
$ cd bleGlove2osc
$ npm install
$ node ble2oscLeft.js ( or node ble2oscRight.js )
```

### Dependencies
Blendmicro nodeJs on gitHub [blendmicro-repos]

[gloveFirmware32u4-repos]: <https://github.com/reHubGlove/gloveFirmware32u4>
[blendmicro-repos]: <https://github.com/shokai/blendmicro-node>

### Todos


### License
work in progress
