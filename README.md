# quietcool-server

[![Join the chat at https://gitter.im/quietcool-api/Lobby](https://badges.gitter.im/quietcool-api/Lobby.svg)](https://gitter.im/quietcool-api/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![Build Status](https://travis-ci.org/stabbylambda/quietcool-server.svg?branch=master)](https://travis-ci.org/stabbylambda/quietcool-server)

A node server that provides common functions for quietcool fans

# API

This server only provides the common functionality that I need from the web app.

### List Fans

```GET /fans/:ip/```

#### Response:
```json
{
   "fans":[
      {
         "id":{
            "uid":"2450CD02586F9E7A",
            "ip":"x.x.x.x"
         },
         "info":{
            "uid":"2450CD02586F9E7A",
            "type":"1",
            "name":"House Fan",
            "version":"1.03.44",
            "config":"1",
            "model":"WC1V120G-1",
            "pincode":"",
            "role":"1",
            "online":"0",
            "status":"0",
            "hubid":"1"
         },
         "status":{
            "uid":"2450CD02586F9E7A",
            "mode":"1",
            "sequence":"1",
            "speed":"3",
            "duration":"0",
            "started":"0",
            "remaining":"0",
            "source":"0",
            "input_1_value":"0"
         }
      },
      {
         "id":{
            "uid":"2450CD02586FA5CF",
            "ip":"x.x.x.x"
         },
         "info":{
            "uid":"2450CD02586FA5CF",
            "type":"1",
            "name":"West Fan",
            "version":"1.03.44",
            "config":"1",
            "model":"WC1V120G-1",
            "pincode":"",
            "role":"2",
            "online":"1",
            "status":"1",
            "hubid":"2"
         },
         "status":{
            "uid":"2450CD02586FA5CF",
            "mode":"1",
            "sequence":"4",
            "speed":"3",
            "duration":"65535",
            "started":"0",
            "remaining":"65535",
            "source":"0",
            "input_1_value":"0"
         }
      },
      {
         "id":{
            "uid":"24129804586F9EFC",
            "ip":"x.x.x.x"
         },
         "info":{
            "uid":"24129804586F9EFC",
            "type":"1",
            "name":"North Fan",
            "version":"1.03.44",
            "config":"1",
            "model":"WC1V120G-1",
            "pincode":"",
            "role":"2",
            "online":"1",
            "status":"1",
            "hubid":"3"
         },
         "status":{
            "uid":"24129804586F9EFC",
            "mode":"1",
            "sequence":"4",
            "speed":"3",
            "duration":"65535",
            "started":"0",
            "remaining":"65535",
            "source":"0",
            "input_1_value":"0"
         }
      },
      {
         "id":{
            "uid":"24FFCC0858C4CDAC",
            "ip":"x.x.x.x"
         },
         "info":{
            "uid":"24FFCC0858C4CDAC",
            "type":"1",
            "name":"East Fan",
            "version":"1.03.44",
            "config":"1",
            "model":"WC1V120G-1",
            "pincode":"",
            "role":"2",
            "online":"1",
            "status":"1",
            "hubid":"4"
         },
         "status":{
            "uid":"24FFCC0858C4CDAC",
            "mode":"1",
            "sequence":"4",
            "speed":"3",
            "duration":"65535",
            "started":"0",
            "remaining":"65535",
            "source":"0",
            "input_1_value":"0"
         }
      }
   ]
}
```


### Power
```POST /fans/:ip/:uid/power```

#### Request
| Parameter        | Type           | Description  |
| ----             | ----           | ----         |
| `on`             | boolean        | Whether or not the fan should be on |

#### Response
```json
{
  "uid": "24FFCC0858C4CDAC",
  "mode": "1",
  "sequence": "4",
  "speed": "3",
  "duration": "65535",
  "started": "0",
  "remaining": "0",
  "source": "0",
  "input_1_value": "0"
}
```

### Set Current Speed
```POST /fans/:ip/:uid/setCurrentSpeed```

#### Request
| Parameter        | Type           | Description  |
| ----             | ----           | ----         |
| `speed`          | int            | The desired fan speed. 1 = Low, 2 = Medium, 3 = High |

#### Response
```json
{
  "uid": "24FFCC0858C4CDAC",
  "mode": "1",
  "sequence": "4",
  "speed": "3",
  "duration": "65535",
  "started": "0",
  "remaining": "0",
  "source": "0",
  "input_1_value": "0"
}
```

### Update Available Speeds
```POST /fans/:ip/:uid/setCurrentSpeed```

#### Request
| Parameter        | Type           | Description  |
| ----             | ----           | ----         |
| `speeds`         | int            | The desired number of available fan speeds. (currently the wifi controller supports up to 3 speeds  |

#### Response
```json
{
  "uid": "24FFCC0858C4CDAC",
  "mode": "1",
  "sequence": "4",
  "speed": "3",
  "duration": "65535",
  "started": "0",
  "remaining": "0",
  "source": "0",
  "input_1_value": "0"
}
```

