import axios from 'axios';


export async function getDistanceInfo(fromCode, toCode) {
        const response = await axios.get('https://beta3.api.climatiq.io/travel/flights', {
            params: {
                "legs": [
                    {
                        "from": fromCode,
                        "to": toCode,
                        "passengers": 2,
                        "class": "first"
                    }
                ]
            },
            headers: {
                'Authorization': 'Bearer TDSX3C7349455HH34NRG7V8QMZF0',
                'Content-Type': 'application/JSON'
            }
        });

        return(response);
};