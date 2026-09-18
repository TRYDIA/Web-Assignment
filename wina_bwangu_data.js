const boothLocation={
    wina1:"Lusaka CPD",
    wina2:"Libala",
    wina3:"Kabwata",
    wina4:"Mandevu",
    wina5:"Woodlands",
    wina6:"Matero East"
};

const allowedService={
    wina1: [
        "Airtel Money",
        "Mtn Money",
        "Zamtel Money",
        "Zanaco",
        "FNB"
    ],

    wina2:[
        "Airtel Money",
        "Mtn Money",
        "Zamtel Money",
        "Zanaco",
        "FNB"
    ],

    wina3:[
        "Airtel Money",
        "Mtn Money",
        "Zamtel Money",
        "Zanaco",
        "FNB"
    ],

    wina4:[
        "Airtel Money",
        "Mtn Money",
        "Zamtel Money",
        "Zanaco",
        "FNB"
    ],

    wina5:[
       "Airtel Money",
        "Mtn Money",
        "Zamtel Money",
        "Zanaco",
        "FNB" 
    ],

    wina6:[
       "Airtel Money",
        "Mtn Money",
        "Zamtel Money",
        "Zanaco",
        "FNB" 
    ]
};

const servicelimits={
    "Airtel Money": 350000,
        "Mtn Money":160000,
        "Zamtel Money": 70000,
        "Zanaco": 80000,
        "FNB":80000
};

const revenuePerKwacha ={
    "Airtel Money":0.5,
        "Mtn Money":0.06,
        "Zamtel Money":0.045,
        "Zanaco":0.035,
        "FNB":0.04
},
 const transactions=[
        {
      "TransactionID": "WB0000001",
      "MobileBooth": "Wina1",
      "Location": "Lusaka CPD",
      "Service": "Airtel Money",
      "RevenuePerKwacha": 0.05,
      "TransactionAmount": 964.0
    },
    {
      "TransactionID": "WB0000002",
      "MobileBooth": "Wina1",
      "Location": "Lusaka CPD",
      "Service": "MTN Money",
      "RevenuePerKwacha": 0.06,
      "TransactionAmount": 220.0
    },
    {
      "TransactionID": "WB0000003",
      "MobileBooth": "Wina2",
      "Location": "Libala",
      "Service": "MTN Money",
      "RevenuePerKwacha": 0.06,
      "TransactionAmount": 582.0
    },
    {
      "TransactionID": "WB0000004",
      "MobileBooth": "Wina3",
      "Location": "Kabwata",
      "Service": "Zamtel Money",
      "RevenuePerKwacha": 0.045,
      "TransactionAmount": 349.0
    },
    {
      "TransactionID": "WB0000005",
      "MobileBooth": "Wina4",
      "Location": "Mandevu",
      "Service": "Airtel Money",
      "RevenuePerKwacha": 0.05,
      "TransactionAmount": 328.0
    },
    {
      "TransactionID": "WB0000006",
      "MobileBooth": "Wina3",
      "Location": "Kabwata",
      "Service": "MTN Money",
      "RevenuePerKwacha": 0.06,
      "TransactionAmount": 192.0
    },
    {
      "TransactionID": "WB0000007",
      "MobileBooth": "Wina3",
      "Location": "Kabwata",
      "Service": "Zanaco",
      "RevenuePerKwacha": 0.035,
      "TransactionAmount": 1519.0
    },
    {
      "TransactionID": "WB0000008",
      "MobileBooth": "Wina4",
      "Location": "Mandevu",
      "Service": "Zamtel Money",
      "RevenuePerKwacha": 0.045,
      "TransactionAmount": 1113.0
    },
    {
      "TransactionID": "WB0000009",
      "MobileBooth": "Wina1",
      "Location": "Lusaka CPD",
      "Service": "FNB",
      "RevenuePerKwacha": 0.04,
      "TransactionAmount": 1999.0
    },
    {
      "TransactionID": "WB0000010",
      "MobileBooth": "Wina3",
      "Location": "Kabwata",
      "Service": "Airtel Money",
      "RevenuePerKwacha": 0.05,
      "TransactionAmount": 3810.0
    },
    {
      "TransactionID": "WB0000011",
      "MobileBooth": "Wina6",
      "Location": "Matero East",
      "Service": "Zamtel Money",
      "RevenuePerKwacha": 0.045,
      "TransactionAmount": 3270.0
    },
    {
      "TransactionID": "WB0000012",
      "MobileBooth": "Wina3",
      "Location": "Kabwata",
      "Service": "Zanaco",
      "RevenuePerKwacha": 0.035,
      "TransactionAmount": 1092.0
    },
    {
      "TransactionID": "WB0000013",
      "MobileBooth": "Wina2",
      "Location": "Libala",
      "Service": "Airtel Money",
      "RevenuePerKwacha": 0.05,
      "TransactionAmount": 1056.0
    },
    {
      "TransactionID": "WB0000014",
      "MobileBooth": "Wina3",
      "Location": "Kabwata",
      "Service": "Airtel Money",
      "RevenuePerKwacha": 0.05,
      "TransactionAmount": 509.0
    },
    {
      "TransactionID": "WB0000015",
      "MobileBooth": "Wina5",
      "Location": "Woodlands",
      "Service": "FNB",
      "RevenuePerKwacha": 0.04,
      "TransactionAmount": 34.0
    },
    {
      "TransactionID": "WB0000016",
      "MobileBooth": "Wina2",
      "Location": "Libala",
      "Service": "MTN Money",
      "RevenuePerKwacha": 0.06,
      "TransactionAmount": 1658.0
    },
    {
      "TransactionID": "WB0000017",
      "MobileBooth": "Wina5",
      "Location": "Woodlands",
      "Service": "Zamtel Money",
      "RevenuePerKwacha": 0.045,
      "TransactionAmount": 2167.0
    },
    {
      "TransactionID": "WB0000018",
      "MobileBooth": "Wina3",
      "Location": "Kabwata",
      "Service": "Airtel Money",
      "RevenuePerKwacha": 0.05,
      "TransactionAmount": 2594.0
    },
    {
      "TransactionID": "WB0000019",
      "MobileBooth": "Wina4",
      "Location": "Mandevu",
      "Service": "Airtel Money",
      "RevenuePerKwacha": 0.05,
      "TransactionAmount": 3656.0
    },
    {
      "TransactionID": "WB0000020",
      "MobileBooth": "Wina3",
      "Location": "Kabwata",
      "Service": "Airtel Money",
      "RevenuePerKwacha": 0.05,
      "TransactionAmount": 4030.0
    },
    {
      "TransactionID": "WB0000021",
      "MobileBooth": "Wina3",
      "Location": "Kabwata",
      "Service": "Zanaco",
      "RevenuePerKwacha": 0.035,
      "TransactionAmount": 989.0
    },
    {
      "TransactionID": "WB0000022",
      "MobileBooth": "Wina3",
      "Location": "Kabwata",
      "Service": "Airtel Money",
      "RevenuePerKwacha": 0.05,
      "TransactionAmount": 4081.0
    },
    {
      "TransactionID": "WB0000023",
      "MobileBooth": "Wina4",
      "Location": "Mandevu",
      "Service": "Airtel Money",
      "RevenuePerKwacha": 0.05,
      "TransactionAmount": 925.0
    },
    {
      "TransactionID": "WB0000024",
      "MobileBooth": "Wina2",
      "Location": "Libala",
      "Service": "MTN Money",
      "RevenuePerKwacha": 0.06,
      "TransactionAmount": 2312.0
    },
    {
      "TransactionID": "WB0000025",
      "MobileBooth": "Wina3",
      "Location": "Kabwata",
      "Service": "Zanaco",
      "RevenuePerKwacha": 0.035,
      "TransactionAmount": 3280.0
    },
    {
      "TransactionID": "WB0000026",
      "MobileBooth": "Wina4",
      "Location": "Mandevu",
      "Service": "Airtel Money",
      "RevenuePerKwacha": 0.05,
      "TransactionAmount": 90.0
    },
    {
      "TransactionID": "WB0000027",
      "MobileBooth": "Wina5",
      "Location": "Woodlands",
      "Service": "FNB",
      "RevenuePerKwacha": 0.04,
      "TransactionAmount": 2556.0
    },
    {
      "TransactionID": "WB0000028",
      "MobileBooth": "Wina3",
      "Location": "Kabwata",
      "Service": "Zanaco",
      "RevenuePerKwacha": 0.035,
      "TransactionAmount": 673.0
    },
    {
      "TransactionID": "WB0000029",
      "MobileBooth": "Wina4",
      "Location": "Mandevu",
      "Service": "MTN Money",
      "RevenuePerKwacha": 0.06,
      "TransactionAmount": 4185.0
    },
    {
      "TransactionID": "WB0000030",
      "MobileBooth": "Wina1",
      "Location": "Lusaka CPD",
      "Service": "Zanaco",
      "RevenuePerKwacha": 0.035,
      "TransactionAmount": 412.0
    },
    {
      "TransactionID": "WB0000031",
      "MobileBooth": "Wina1",
      "Location": "Lusaka CPD",
      "Service": "MTN Money",
      "RevenuePerKwacha": 0.06,
      "TransactionAmount": 310.0
    },
    {
      "TransactionID": "WB0000032",
      "MobileBooth": "Wina2",
      "Location": "Libala",
      "Service": "MTN Money",
      "RevenuePerKwacha": 0.06,
      "TransactionAmount": 4248.0
    },
    {
      "TransactionID": "WB0000033",
      "MobileBooth": "Wina3",
      "Location": "Kabwata",
      "Service": "Airtel Money",
      "RevenuePerKwacha": 0.05,
      "TransactionAmount": 4105.0
    },
    {
      "TransactionID": "WB0000034",
      "MobileBooth": "Wina4",
      "Location": "Mandevu",
      "Service": "Airtel Money",
      "RevenuePerKwacha": 0.05,
      "TransactionAmount": 1147.0
    },
    {
      "TransactionID": "WB0000035",
      "MobileBooth": "Wina3",
      "Location": "Kabwata",
      "Service": "Zamtel Money",
      "RevenuePerKwacha": 0.045,
      "TransactionAmount": 1815.0
    },
    {
      "TransactionID": "WB0000036",
      "MobileBooth": "Wina3",
      "Location": "Kabwata",
      "Service": "Zanaco",
      "RevenuePerKwacha": 0.035,
      "TransactionAmount": 1653.0
    },
    {
      "TransactionID": "WB0000037",
      "MobileBooth": "Wina4",
      "Location": "Mandevu",
      "Service": "Airtel Money",
      "RevenuePerKwacha": 0.05,
      "TransactionAmount": 1045.0
    },
    {
      "TransactionID": "WB0000038",
      "MobileBooth": "Wina1",
      "Location": "Lusaka CPD",
      "Service": "FNB",
      "RevenuePerKwacha": 0.04,
      "TransactionAmount": 4364.0
    },
    {
      "TransactionID": "WB0000039",
      "MobileBooth": "Wina3",
      "Location": "Kabwata",
      "Service": "MTN Money",
      "RevenuePerKwacha": 0.06,
      "TransactionAmount": 2822.0
    },
    {
      "TransactionID": "WB0000040",
      "MobileBooth": "Wina6",
      "Location": "Matero East",
      "Service": "Airtel Money",
      "RevenuePerKwacha": 0.05,
      "TransactionAmount": 2046.0
    },
    {
      "TransactionID": "WB0000041",
      "MobileBooth": "Wina3",
      "Location": "Kabwata",
      "Service": "Zamtel Money",
      "RevenuePerKwacha": 0.045,
      "TransactionAmount": 1985.0
    },
    {
      "TransactionID": "WB0000042",
      "MobileBooth": "Wina2",
      "Location": "Libala",
      "Service": "MTN Money",
      "RevenuePerKwacha": 0.06,
      "TransactionAmount": 3023.0
    },
    {
      "TransactionID": "WB0000043",
      "MobileBooth": "Wina3",
      "Location": "Kabwata",
      "Service": "Airtel Money",
      "RevenuePerKwacha": 0.05,
      "TransactionAmount": 3728.0
    },
    {
      "TransactionID": "WB0000044",
      "MobileBooth": "Wina5",
      "Location": "Woodlands",
      "Service": "MTN Money",
      "RevenuePerKwacha": 0.06,
      "TransactionAmount": 58.0
    },
    {
      "TransactionID": "WB0000045",
      "MobileBooth": "Wina2",
      "Location": "Libala",
      "Service": "Airtel Money",
      "RevenuePerKwacha": 0.05,
      "TransactionAmount": 2744.0
    },
    {
      "TransactionID": "WB0000046",
      "MobileBooth": "Wina5",
      "Location": "Woodlands",
      "Service": "FNB",
      "RevenuePerKwacha": 0.04,
      "TransactionAmount": 1654.0
    },
    {
      "TransactionID": "WB0000047",
      "MobileBooth": "Wina3",
      "Location": "Kabwata",
      "Service": "Airtel Money",
      "RevenuePerKwacha": 0.05,
      "TransactionAmount": 1331.0
    },
    {
      "TransactionID": "WB0000048",
      "MobileBooth": "Wina4",
      "Location": "Mandevu",
      "Service": "Airtel Money",
      "RevenuePerKwacha": 0.05,
      "TransactionAmount": 801.0
    },
    {
      "TransactionID": "WB0000049",
      "MobileBooth": "Wina3",
      "Location": "Kabwata",
      "Service": "MTN Money",
      "RevenuePerKwacha": 0.06,
      "TransactionAmount": 967.0
    },
    {
      "TransactionID": "WB0000050",
      "MobileBooth": "Wina3",
      "Location": "Kabwata",
      "Service": "MTN Money",
      "RevenuePerKwacha": 0.06,
      "TransactionAmount": 1988.0
    },
    {
      "TransactionID": "WB0000051",
      "MobileBooth": "Wina3",
      "Location": "Kabwata",
      "Service": "Airtel Money",
      "RevenuePerKwacha": 0.05,
      "TransactionAmount": 3646.0
    },
    {
      "TransactionID": "WB0000052",
      "MobileBooth": "Wina4",
      "Location": "Mandevu",
      "Service": "Airtel Money",
      "RevenuePerKwacha": 0.05,
      "TransactionAmount": 54.0
    },
    {
      "TransactionID": "WB0000053",
      "MobileBooth": "Wina2",
      "Location": "Libala",
      "Service": "Zamtel Money",
      "RevenuePerKwacha": 0.045,
      "TransactionAmount": 2121.0
    },
    {
      "TransactionID": "WB0000054",
      "MobileBooth": "Wina3",
      "Location": "Kabwata",
      "Service": "Zanaco",
      "RevenuePerKwacha": 0.035,
      "TransactionAmount": 564.0
    },
    {
      "TransactionID": "WB0000055",
      "MobileBooth": "Wina4",
      "Location": "Mandevu",
      "Service": "Airtel Money",
      "RevenuePerKwacha": 0.05,
      "TransactionAmount": 1011.0
    },
    {
      "TransactionID": "WB0000056",
      "MobileBooth": "Wina5",
      "Location": "Woodlands",
      "Service": "FNB",
      "RevenuePerKwacha": 0.04,
      "TransactionAmount": 2950.0
    },
    {
      "TransactionID": "WB0000057",
      "MobileBooth": "Wina3",
      "Location": "Kabwata",
      "Service": "Zanaco",
      "RevenuePerKwacha": 0.035,
      "TransactionAmount": 57.0
    },
    {
      "TransactionID": "WB0000058",
      "MobileBooth": "Wina4",
      "Location": "Mandevu",
      "Service": "Airtel Money",
      "RevenuePerKwacha": 0.05,
      "TransactionAmount": 2382.0
    },
    {
      "TransactionID": "WB0000059",
      "MobileBooth": "Wina1",
      "Location": "Lusaka CPD",
      "Service": "MTN Money",
      "RevenuePerKwacha": 0.06,
      "TransactionAmount": 349.0
    },
    {
      "TransactionID": "WB0000060",
      "MobileBooth": "Wina1",
      "Location": "Lusaka CPD",
      "Service": "Airtel Money",
      "RevenuePerKwacha": 0.05,
      "TransactionAmount": 2479.0
    },
    {
      "TransactionID": "WB0000061",
      "MobileBooth": "Wina2",
      "Location": "Libala",
      "Service": "Airtel Money",
      "RevenuePerKwacha": 0.05,
      "TransactionAmount": 1537.0
    },
    {
      "TransactionID": "WB0000062",
      "MobileBooth": "Wina3",
      "Location": "Kabwata",
      "Service": "Zamtel Money",
      "RevenuePerKwacha": 0.045,
      "TransactionAmount": 2802.0
    },
    {
      "TransactionID": "WB0000063",
      "MobileBooth": "Wina4",
      "Location": "Mandevu",
      "Service": "Airtel Money",
      "RevenuePerKwacha": 0.05,
      "TransactionAmount": 1290.0
    },
    {
      "TransactionID": "WB0000064",
      "MobileBooth": "Wina3",
      "Location": "Kabwata",
      "Service": "MTN Money",
      "RevenuePerKwacha": 0.06,
      "TransactionAmount": 4331.0
    },
    {
      "TransactionID": "WB0000065",
      "MobileBooth": "Wina3",
      "Location": "Kabwata",
      "Service": "Zanaco",
      "RevenuePerKwacha": 0.035,
      "TransactionAmount": 1338.0
    },
    {
      "TransactionID": "WB0000066",
      "MobileBooth": "Wina4",
      "Location": "Mandevu",
      "Service": "Airtel Money",
      "RevenuePerKwacha": 0.05,
      "TransactionAmount": 1477.0
    },
    {
      "TransactionID": "WB0000067",
      "MobileBooth": "Wina1",
      "Location": "Lusaka CPD",
      "Service": "Airtel Money",
      "RevenuePerKwacha": 0.05,
      "TransactionAmount": 3430.0
    },
    {
      "TransactionID": "WB0000068",
      "MobileBooth": "Wina3",
      "Location": "Kabwata",
      "Service": "MTN Money",
      "RevenuePerKwacha": 0.06,
      "TransactionAmount": 451.0
    },
    {
      "TransactionID": "WB0000069",
      "MobileBooth": "Wina6",
      "Location": "Matero East",
      "Service": "Airtel Money",
      "RevenuePerKwacha": 0.05,
      "TransactionAmount": 80.0
    },
    {
      "TransactionID": "WB0000070",
      "MobileBooth": "Wina3",
      "Location": "Kabwata",
      "Service": "Zanaco",
      "RevenuePerKwacha": 0.035,
      "TransactionAmount": 2002.0
    },
    {
      "TransactionID": "WB0000071",
      "MobileBooth": "Wina2",
      "Location": "Libala",
      "Service": "Airtel Money",
      "RevenuePerKwacha": 0.05,
      "TransactionAmount": 3235.0
    },
    {
      "TransactionID": "WB0000072",
      "MobileBooth": "Wina3",
      "Location": "Kabwata",
      "Service": "MTN Money",
      "RevenuePerKwacha": 0.06,
      "TransactionAmount": 4156.0
    },
    {
      "TransactionID": "WB0000073",
      "MobileBooth": "Wina5",
      "Location": "Woodlands",
      "Service": "Airtel Money",
      "RevenuePerKwacha": 0.05,
      "TransactionAmount": 22.0
    },
    {
      "TransactionID": "WB0000074",
      "MobileBooth": "Wina2",
      "Location": "Libala",
      "Service": "Airtel Money",
      "RevenuePerKwacha": 0.05,
      "TransactionAmount": 2156.0
    },
    {
      "TransactionID": "WB0000075",
      "MobileBooth": "Wina5",
      "Location": "Woodlands",
      "Service": "MTN Money",
      "RevenuePerKwacha": 0.06,
      "TransactionAmount": 2267.0
    },
    {
      "TransactionID": "WB0000076",
      "MobileBooth": "Wina3",
      "Location": "Kabwata",
      "Service": "Zamtel Money",
      "RevenuePerKwacha": 0.045,
      "TransactionAmount": 2419.0
    },
    {
      "TransactionID": "WB0000077",
      "MobileBooth": "Wina4",
      "Location": "Mandevu",
      "Service": "Airtel Money",
      "RevenuePerKwacha": 0.05,
      "TransactionAmount": 1691.0
    },
    {
      "TransactionID": "WB0000078",
      "MobileBooth": "Wina3",
      "Location": "Kabwata",
      "Service": "Airtel Money",
      "RevenuePerKwacha": 0.05,
      "TransactionAmount": 2736.0
    },
    {
      "TransactionID": "WB0000079",
      "MobileBooth": "Wina3",
      "Location": "Kabwata",
      "Service": "MTN Money",
      "RevenuePerKwacha": 0.06,
      "TransactionAmount": 4282.0
    },
    {
      "TransactionID": "WB0000080",
      "MobileBooth": "Wina3",
      "Location": "Kabwata",
      "Service": "Zamtel Money",
      "RevenuePerKwacha": 0.045,
      "TransactionAmount": 2331.0
    },
    {
      "TransactionID": "WB0000081",
      "MobileBooth": "Wina4",
      "Location": "Mandevu",
      "Service": "Airtel Money",
      "RevenuePerKwacha": 0.05,
      "TransactionAmount": 1405.0
    },
    {
      "TransactionID": "WB0000082",
      "MobileBooth": "Wina2",
      "Location": "Libala",
      "Service": "Airtel Money",
      "RevenuePerKwacha": 0.05,
      "TransactionAmount": 945.0
    },
    {
      "TransactionID": "WB0000083",
      "MobileBooth": "Wina3",
      "Location": "Kabwata",
      "Service": "Zanaco",
      "RevenuePerKwacha": 0.035,
      "TransactionAmount": 688.0
    },
    {
      "TransactionID": "WB0000084",
      "MobileBooth": "Wina4",
      "Location": "Mandevu",
      "Service": "Airtel Money",
      "RevenuePerKwacha": 0.05,
      "TransactionAmount": 189.0
    },
    {
      "TransactionID": "WB0000085",
      "MobileBooth": "Wina5",
      "Location": "Woodlands",
      "Service": "FNB",
      "RevenuePerKwacha": 0.04,
      "TransactionAmount": 3787.0
    },
    {
      "TransactionID": "WB0000086",
      "MobileBooth": "Wina3",
      "Location": "Kabwata",
      "Service": "Zanaco",
      "RevenuePerKwacha": 0.035,
      "TransactionAmount": 3407.0
    },
    {
      "TransactionID": "WB0000087",
      "MobileBooth": "Wina4",
      "Location": "Mandevu",
      "Service": "Airtel Money",
      "RevenuePerKwacha": 0.05,
      "TransactionAmount": 1105.0
    },
    {
      "TransactionID": "WB0000088",
      "MobileBooth": "Wina6",
      "Location": "Matero East",
      "Service": "Airtel Money",
      "RevenuePerKwacha": 0.05,
      "TransactionAmount": 174.0
    },
    {
      "TransactionID": "WB0000089",
      "MobileBooth": "Wina2",
      "Location": "Libala",
      "Service": "MTN Money",
      "RevenuePerKwacha": 0.06,
      "TransactionAmount": 1440.0
    },
    {
      "TransactionID": "WB0000090",
      "MobileBooth": "Wina6",
      "Location": "Matero East",
      "Service": "Airtel Money",
      "RevenuePerKwacha": 0.05,
      "TransactionAmount": 3344.0
    },
    {
      "TransactionID": "WB0000091",
      "MobileBooth": "Wina2",
      "Location": "Libala",
      "Service": "Airtel Money",
      "RevenuePerKwacha": 0.05,
      "TransactionAmount": 2676.0
    },
    {
      "TransactionID": "WB0000092",
      "MobileBooth": "Wina2",
      "Location": "Libala",
      "Service": "Airtel Money",
      "RevenuePerKwacha": 0.05,
      "TransactionAmount": 812.0
    },
    {
      "TransactionID": "WB0000093",
      "MobileBooth": "Wina3",
      "Location": "Kabwata",
      "Service": "Zanaco",
      "RevenuePerKwacha": 0.035,
      "TransactionAmount": 4224.0
    },
    {
      "TransactionID": "WB0000094",
      "MobileBooth": "Wina3",
      "Location": "Kabwata",
      "Service": "Airtel Money",
      "RevenuePerKwacha": 0.05,
      "TransactionAmount": 592.0
    },
    {
      "TransactionID": "WB0000095",
      "MobileBooth": "Wina3",
      "Location": "Kabwata",
      "Service": "Airtel Money",
      "RevenuePerKwacha": 0.05,
      "TransactionAmount": 1662.0
    },
    {
      "TransactionID": "WB0000096",
      "MobileBooth": "Wina2",
      "Location": "Libala",
      "Service": "Airtel Money",
      "RevenuePerKwacha": 0.05,
      "TransactionAmount": 1915.0
    },
    {
      "TransactionID": "WB0000097",
      "MobileBooth": "Wina3",
      "Location": "Kabwata",
      "Service": "Airtel Money",
      "RevenuePerKwacha": 0.05,
      "TransactionAmount": 1866.0
    },
    {
      "TransactionID": "WB0000098",
      "MobileBooth": "Wina6",
      "Location": "Matero East",
      "Service": "MTN Money",
      "RevenuePerKwacha": 0.06,
      "TransactionAmount": 4320.0
    },
    {
      "TransactionID": "WB0000099",
      "MobileBooth": "Wina2",
      "Location": "Libala",
      "Service": "Airtel Money",
      "RevenuePerKwacha": 0.05,
      "TransactionAmount": 228.0
    },
    {
      "TransactionID": "WB0000100",
      "MobileBooth": "Wina6",
      "Location": "Matero East",
      "Service": "Airtel Money",
      "RevenuePerKwacha": 0.05,
      "TransactionAmount": 3318.0
    },
    {
      "TransactionID": "WB0000101",
      "MobileBooth": "Wina2",
      "Location": "Libala",
      "Service": "Airtel Money",
      "RevenuePerKwacha": 0.05,
      "TransactionAmount": 3615.0
    },
    {
      "TransactionID": "WB0000102",
      "MobileBooth": "Wina2",
      "Location": "Libala",
      "Service": "Airtel Money",
      "RevenuePerKwacha": 0.05,
      "TransactionAmount": 4156.0
    },
    {
      "TransactionID": "WB0000103",
      "MobileBooth": "Wina3",
      "Location": "Kabwata",
      "Service": "Zamtel Money",
      "RevenuePerKwacha": 0.045,
      "TransactionAmount": 1401.0
    },
    {
      "TransactionID": "WB0000104",
      "MobileBooth": "Wina3",
      "Location": "Kabwata",
      "Service": "Airtel Money",
      "RevenuePerKwacha": 0.05,
      "TransactionAmount": 2014.0
    },
    {
      "TransactionID": "WB0000105",
      "MobileBooth": "Wina3",
      "Location": "Kabwata",
      "Service": "MTN Money",
      "RevenuePerKwacha": 0.06,
      "TransactionAmount": 3475.0
    },
    {
      "TransactionID": "WB0000106",
      "MobileBooth": "Wina2",
      "Location": "Libala",
      "Service": "MTN Money",
      "RevenuePerKwacha": 0.06,
      "TransactionAmount": 2452.0
    },
    {
      "TransactionID": "WB0000107",
      "MobileBooth": "Wina3",
      "Location": "Kabwata",
      "Service": "Zanaco",
      "RevenuePerKwacha": 0.035,
      "TransactionAmount": 1720.0
    },
    {
      "TransactionID": "WB0000108",
      "MobileBooth": "Wina2",
      "Location": "Libala",
      "Service": "Airtel Money",
      "RevenuePerKwacha": 0.05,
      "TransactionAmount": 118.0
    },
    {
      "TransactionID": "WB0000109",
      "MobileBooth": "Wina3",
      "Location": "Kabwata",
      "Service": "MTN Money",
      "RevenuePerKwacha": 0.06,
      "TransactionAmount": 779.0
    },
    {
      "TransactionID": "WB0000110",
      "MobileBooth": "Wina4",
      "Location": "Mandevu",
      "Service": "Airtel Money",
      "RevenuePerKwacha": 0.05,
      "TransactionAmount": 1623.0
    },
    {
      "TransactionID": "WB0000111",
      "MobileBooth": "Wina3",
      "Location": "Kabwata",
      "Service": "Airtel Money",
      "RevenuePerKwacha": 0.05,
      "TransactionAmount": 2679.0
    },
    {
      "TransactionID": "WB0000112",
      "MobileBooth": "Wina3",
      "Location": "Kabwata",
      "Service": "Zanaco",
      "RevenuePerKwacha": 0.035,
      "TransactionAmount": 1976.0
    },
    {
      "TransactionID": "WB0000113",
      "MobileBooth": "Wina4",
      "Location": "Mandevu",
      "Service": "Airtel Money",
      "RevenuePerKwacha": 0.05,
      "TransactionAmount": 974.0
    },
    {
      "TransactionID": "WB0000114",
      "MobileBooth": "Wina1",
      "Location": "Lusaka CPD",
      "Service": "Airtel Money",
      "RevenuePerKwacha": 0.05,
      "TransactionAmount": 2911.0
    },
    {
      "TransactionID": "WB0000115",
      "MobileBooth": "Wina3",
      "Location": "Kabwata",
      "Service": "Zanaco",
      "RevenuePerKwacha": 0.035,
      "TransactionAmount": 279.0
    },
    {
      "TransactionID": "WB0000116",
      "MobileBooth": "Wina6",
      "Location": "Matero East",
      "Service": "Airtel Money",
      "RevenuePerKwacha": 0.05,
      "TransactionAmount": 3646.0
    },
    {
      "TransactionID": "WB0000117",
      "MobileBooth": "Wina3",
      "Location": "Kabwata",
      "Service": "MTN Money",
      "RevenuePerKwacha": 0.06,
      "TransactionAmount": 855.0
    },
    {
      "TransactionID": "WB0000118",
      "MobileBooth": "Wina2",
      "Location": "Libala",
      "Service": "Airtel Money",
      "RevenuePerKwacha": 0.05,
      "TransactionAmount": 1412.0
    },
    {
      "TransactionID": "WB0000119",
      "MobileBooth": "Wina3",
      "Location": "Kabwata",
      "Service": "Airtel Money",
      "RevenuePerKwacha": 0.05,
      "TransactionAmount": 2137.0
    },
    {
      "TransactionID": "WB0000120",
      "MobileBooth": "Wina5",
      "Location": "Woodlands",
      "Service": "FNB",
      "RevenuePerKwacha": 0.04,
      "TransactionAmount": 1800.0
    },
    {
      "TransactionID": "WB0000121",
      "MobileBooth": "Wina2",
      "Location": "Libala",
      "Service": "Airtel Money",
      "RevenuePerKwacha": 0.05,
      "TransactionAmount": 1219.0
    },
    {
      "TransactionID": "WB0000122",
      "MobileBooth": "Wina5",
      "Location": "Woodlands",
      "Service": "FNB",
      "RevenuePerKwacha": 0.04,
      "TransactionAmount": 3582.0
    },
    {
      "TransactionID": "WB0000123",
      "MobileBooth": "Wina3",
      "Location": "Kabwata",
      "Service": "Airtel Money",
      "RevenuePerKwacha": 0.05,
      "TransactionAmount": 760.0
    },
    {
      "TransactionID": "WB0000124",
      "MobileBooth": "Wina4",
      "Location": "Mandevu",
      "Service": "MTN Money",
      "RevenuePerKwacha": 0.06,
      "TransactionAmount": 2308.0
    },
    {
      "TransactionID": "WB0000125",
      "MobileBooth": "Wina1",
      "Location": "Lusaka CPD",
      "Service": "Zamtel Money",
      "RevenuePerKwacha": 0.045,
      "TransactionAmount": 1941.0
    },
    {
      "TransactionID": "WB0000126",
      "MobileBooth": "Wina3",
      "Location": "Kabwata",
      "Service": "Airtel Money",
      "RevenuePerKwacha": 0.05,
      "TransactionAmount": 2068.0
    },
    {
      "TransactionID": "WB0000127",
      "MobileBooth": "Wina6",
      "Location": "Matero East",
      "Service": "MTN Money",
      "RevenuePerKwacha": 0.06,
      "TransactionAmount": 4242.0
    },
    {
      "TransactionID": "WB0000128",
      "MobileBooth": "Wina3",
      "Location": "Kabwata",
      "Service": "Airtel Money",
      "RevenuePerKwacha": 0.05,
      "TransactionAmount": 2587.0
    },
    {
      "TransactionID": "WB0000129",
      "MobileBooth": "Wina2",
      "Location": "Libala",
      "Service": "Zamtel Money",
      "RevenuePerKwacha": 0.045,
      "TransactionAmount": 4196.0
    },
    {
      "TransactionID": "WB0000130",
      "MobileBooth": "Wina3",
      "Location": "Kabwata",
      "Service": "Airtel Money",
      "RevenuePerKwacha": 0.05,
      "TransactionAmount": 1463.0
    },
    {
      "TransactionID": "WB0000131",
      "MobileBooth": "Wina5",
      "Location": "Woodlands",
      "Service": "FNB",
      "RevenuePerKwacha": 0.04,
      "TransactionAmount": 2199.0
    },
    {
      "TransactionID": "WB0000132",
      "MobileBooth": "Wina2",
      "Location": "Libala",
      "Service": "Airtel Money",
      "RevenuePerKwacha": 0.05,
      "TransactionAmount": 2956.0
    },
    {
      "TransactionID": "WB0000133",
      "MobileBooth": "Wina5",
      "Location": "Woodlands",
      "Service": "FNB",
      "RevenuePerKwacha": 0.04,
      "TransactionAmount": 1663.0
    },
    {
      "TransactionID": "WB0000134",
      "MobileBooth": "Wina3",
      "Location": "Kabwata",
      "Service": "Airtel Money",
      "RevenuePerKwacha": 0.05,
      "TransactionAmount": 2525.0
    },
    {
      "TransactionID": "WB0000135",
      "MobileBooth": "Wina4",
      "Location": "Mandevu",
      "Service": "Airtel Money",
      "RevenuePerKwacha": 0.05,
      "TransactionAmount": 4404.0
    },
    {
      "TransactionID": "WB0000136",
      "MobileBooth": "Wina3",
      "Location": "Kabwata",
      "Service": "MTN Money",
      "RevenuePerKwacha": 0.06,
      "TransactionAmount": 1012.0
    },
    {
      "TransactionID": "WB0000137",
      "MobileBooth": "Wina3",
      "Location": "Kabwata",
      "Service": "Airtel Money",
      "RevenuePerKwacha": 0.05,
      "TransactionAmount": 69.0
    },
    {
      "TransactionID": "WB0000138",
      "MobileBooth": "Wina3",
      "Location": "Kabwata",
      "Service": "Airtel Money",
      "RevenuePerKwacha": 0.05,
      "TransactionAmount": 4241.0
    },
    {
      "TransactionID": "WB0000139",
      "MobileBooth": "Wina4",
      "Location": "Mandevu",
      "Service": "MTN Money",
      "RevenuePerKwacha": 0.06,
      "TransactionAmount": 3379.0
    },
    {
      "TransactionID": "WB0000140",
      "MobileBooth": "Wina2",
      "Location": "Libala",
      "Service": "MTN Money",
      "RevenuePerKwacha": 0.06,
      "TransactionAmount": 3255.0
    },
    {
      "TransactionID": "WB0000141",
      "MobileBooth": "Wina3",
      "Location": "Kabwata",
      "Service": "Zanaco",
      "RevenuePerKwacha": 0.035,
      "TransactionAmount": 1705.0
    },
    {
      "TransactionID": "WB0000142",
      "MobileBooth": "Wina4",
      "Location": "Mandevu",
      "Service": "Airtel Money",
      "RevenuePerKwacha": 0.05,
      "TransactionAmount": 1039.0
    },
    {
      "TransactionID": "WB0000143",
      "MobileBooth": "Wina5",
      "Location": "Woodlands",
      "Service": "FNB",
      "RevenuePerKwacha": 0.04,
      "TransactionAmount": 254.0
    },
    {
      "TransactionID": "WB0000144",
      "MobileBooth": "Wina3",
      "Location": "Kabwata",
      "Service": "MTN Money",
      "RevenuePerKwacha": 0.06,
      "TransactionAmount": 870.0
    },
    {
      "TransactionID": "WB0000145",
      "MobileBooth": "Wina4",
      "Location": "Mandevu",
      "Service": "MTN Money",
      "RevenuePerKwacha": 0.06,
      "TransactionAmount": 772.0
    },
    {
      "TransactionID": "WB0000146",
      "MobileBooth": "Wina1",
      "Location": "Lusaka CPD",
      "Service": "Zamtel Money",
      "RevenuePerKwacha": 0.045,
      "TransactionAmount": 1791.0
    },
    {
      "TransactionID": "WB0000147",
      "MobileBooth": "Wina3",
      "Location": "Kabwata",
      "Service": "Airtel Money",
      "RevenuePerKwacha": 0.05,
      "TransactionAmount": 3320.0
    },
    {
      "TransactionID": "WB0000148",
      "MobileBooth": "Wina4",
      "Location": "Mandevu",
      "Service": "Airtel Money",
      "RevenuePerKwacha": 0.05,
      "TransactionAmount": 4185.0
    },
    {
      "TransactionID": "WB0000149",
      "MobileBooth": "Wina1",
      "Location": "Lusaka CPD",
      "Service": "MTN Money",
      "RevenuePerKwacha": 0.06,
      "TransactionAmount": 100.0
    },
    {
      "TransactionID": "WB0000150",
      "MobileBooth": "Wina3",
      "Location": "Kabwata",
      "Service": "MTN Money",
      "RevenuePerKwacha": 0.06,
      "TransactionAmount": 3794.0
    },
    {
      "TransactionID": "WB0000151",
      "MobileBooth": "Wina6",
      "Location": "Matero East",
      "Service": "Airtel Money",
      "RevenuePerKwacha": 0.05,
      "TransactionAmount": 498.0
    },
    {
      "TransactionID": "WB0000152",
      "MobileBooth": "Wina3",
      "Location": "Kabwata",
      "Service": "Airtel Money",
      "RevenuePerKwacha": 0.05,
      "TransactionAmount": 2566.0
    },
    {
      "TransactionID": "WB0000153",
      "MobileBooth": "Wina2",
      "Location": "Libala",
      "Service": "Airtel Money",
      "RevenuePerKwacha": 0.05,
      "TransactionAmount": 4459.0
    },
    {
      "TransactionID": "WB0000154",
      "MobileBooth": "Wina3",
      "Location": "Kabwata",
      "Service": "Airtel Money",
      "RevenuePerKwacha": 0.05,
      "TransactionAmount": 3916.0
    },
    {
      "TransactionID": "WB0000155",
      "MobileBooth": "Wina5",
      "Location": "Woodlands",
      "Service": "FNB",
      "RevenuePerKwacha": 0.04,
      "TransactionAmount": 528.0
    },
    {
      "TransactionID": "WB0000156",
      "MobileBooth": "Wina2",
      "Location": "Libala",
      "Service": "FNB",
      "RevenuePerKwacha": 0.04,
      "TransactionAmount": 2067.0
    },
    {
      "TransactionID": "WB0000157",
      "MobileBooth": "Wina5",
      "Location": "Woodlands",
      "Service": "FNB",
      "RevenuePerKwacha": 0.04,
      "TransactionAmount": 1119.0
    },
    {
      "TransactionID": "WB0000158",
      "MobileBooth": "Wina3",
      "Location": "Kabwata",
      "Service": "Airtel Money",
      "RevenuePerKwacha": 0.05,
      "TransactionAmount": 1209.0
    },
    {
      "TransactionID": "WB0000159",
      "MobileBooth": "Wina4",
      "Location": "Mandevu",
      "Service": "Airtel Money",
      "RevenuePerKwacha": 0.05,
      "TransactionAmount": 1950.0
    },
    {
      "TransactionID": "WB0000160",
      "MobileBooth": "Wina3",
      "Location": "Kabwata",
      "Service": "MTN Money",
      "RevenuePerKwacha": 0.06,
      "TransactionAmount": 1268.0
    },
    {
      "TransactionID": "WB0000161",
      "MobileBooth": "Wina3",
      "Location": "Kabwata",
      "Service": "Zanaco",
      "RevenuePerKwacha": 0.035,
      "TransactionAmount": 1066.0
    },
    {
      "TransactionID": "WB0000162",
      "MobileBooth": "Wina3",
      "Location": "Kabwata",
      "Service": "Airtel Money",
      "RevenuePerKwacha": 0.05,
      "TransactionAmount": 4419.0
    },
    {
      "TransactionID": "WB0000163",
      "MobileBooth": "Wina4",
      "Location": "Mandevu",
      "Service": "Airtel Money",
      "RevenuePerKwacha": 0.05,
      "TransactionAmount": 2065.0
    },
    {
      "TransactionID": "WB0000164",
      "MobileBooth": "Wina2",
      "Location": "Libala",
      "Service": "FNB",
      "RevenuePerKwacha": 0.04,
      "TransactionAmount": 2663.0
    },
    {
      "TransactionID": "WB0000165",
      "MobileBooth": "Wina3",
      "Location": "Kabwata",
      "Service": "Airtel Money",
      "RevenuePerKwacha": 0.05,
      "TransactionAmount": 2075.0
    },
    {
      "TransactionID": "WB0000166",
      "MobileBooth": "Wina4",
      "Location": "Mandevu",
      "Service": "Zamtel Money",
      "RevenuePerKwacha": 0.045,
      "TransactionAmount": 3284.0
    },
    {
      "TransactionID": "WB0000167",
      "MobileBooth": "Wina5",
      "Location": "Woodlands",
      "Service": "Airtel Money",
      "RevenuePerKwacha": 0.05,
      "TransactionAmount": 425.0
    },
    {
      "TransactionID": "WB0000168",
      "MobileBooth": "Wina3",
      "Location": "Kabwata",
      "Service": "Zanaco",
      "RevenuePerKwacha": 0.035,
      "TransactionAmount": 1856.0
    },
    {
      "TransactionID": "WB0000169",
      "MobileBooth": "Wina4",
      "Location": "Mandevu",
      "Service": "Airtel Money",
      "RevenuePerKwacha": 0.05,
      "TransactionAmount": 405.0
    },
    {
      "TransactionID": "WB0000170",
      "MobileBooth": "Wina1",
      "Location": "Lusaka CPD",
      "Service": "FNB",
      "RevenuePerKwacha": 0.04,
      "TransactionAmount": 608.0
    },
    {
      "TransactionID": "WB0000171",
      "MobileBooth": "Wina1",
      "Location": "Lusaka CPD",
      "Service": "Zamtel Money",
      "RevenuePerKwacha": 0.045,
      "TransactionAmount": 4143.0
    },
    {
      "TransactionID": "WB0000172",
      "MobileBooth": "Wina3",
      "Location": "Kabwata",
      "Service": "Airtel Money",
      "RevenuePerKwacha": 0.05,
      "TransactionAmount": 681.0
    },
    {
      "TransactionID": "WB0000173",
      "MobileBooth": "Wina6",
      "Location": "Matero East",
      "Service": "MTN Money",
      "RevenuePerKwacha": 0.06,
      "TransactionAmount": 4405.0
    },
    {
      "TransactionID": "WB0000174",
      "MobileBooth": "Wina3",
      "Location": "Kabwata",
      "Service": "Airtel Money",
      "RevenuePerKwacha": 0.05,
      "TransactionAmount": 3980.0
    },
    {
      "TransactionID": "WB0000175",
      "MobileBooth": "Wina2",
      "Location": "Libala",
      "Service": "Zamtel Money",
      "RevenuePerKwacha": 0.045,
      "TransactionAmount": 2510.0
    },
    {
      "TransactionID": "WB0000176",
      "MobileBooth": "Wina3",
      "Location": "Kabwata",
      "Service": "Airtel Money",
      "RevenuePerKwacha": 0.05,
      "TransactionAmount": 2807.0
    },
    {
      "TransactionID": "WB0000177",
      "MobileBooth": "Wina5",
      "Location": "Woodlands",
      "Service": "FNB",
      "RevenuePerKwacha": 0.04,
      "TransactionAmount": 474.0
    },
    {
      "TransactionID": "WB0000178",
      "MobileBooth": "Wina2",
      "Location": "Libala",
      "Service": "Airtel Money",
      "RevenuePerKwacha": 0.05,
      "TransactionAmount": 75.0
    },
    {
      "TransactionID": "WB0000179",
      "MobileBooth": "Wina5",
      "Location": "Woodlands",
      "Service": "FNB",
      "RevenuePerKwacha": 0.04,
      "TransactionAmount": 2581.0
    },
    {
      "TransactionID": "WB0000180",
      "MobileBooth": "Wina3",
      "Location": "Kabwata",
      "Service": "Airtel Money",
      "RevenuePerKwacha": 0.05,
      "TransactionAmount": 3938.0
    },
    {
      "TransactionID": "WB0000181",
      "MobileBooth": "Wina4",
      "Location": "Mandevu",
      "Service": "Airtel Money",
      "RevenuePerKwacha": 0.05,
      "TransactionAmount": 3419.0
    },
    {
      "TransactionID": "WB0000182",
      "MobileBooth": "Wina3",
      "Location": "Kabwata",
      "Service": "MTN Money",
      "RevenuePerKwacha": 0.06,
      "TransactionAmount": 1047.0
    },
    {
      "TransactionID": "WB0000183",
      "MobileBooth": "Wina3",
      "Location": "Kabwata",
      "Service": "Airtel Money",
      "RevenuePerKwacha": 0.05,
      "TransactionAmount": 205.0
    },
    {
      "TransactionID": "WB0000184",
      "MobileBooth": "Wina3",
      "Location": "Kabwata",
      "Service": "Airtel Money",
      "RevenuePerKwacha": 0.05,
      "TransactionAmount": 495.0
    },
    {
      "TransactionID": "WB0000185",
      "MobileBooth": "Wina4",
      "Location": "Mandevu",
      "Service": "MTN Money",
      "RevenuePerKwacha": 0.06,
      "TransactionAmount": 3107.0
    },
    {
      "TransactionID": "WB0000186",
      "MobileBooth": "Wina2",
      "Location": "Libala",
      "Service": "MTN Money",
      "RevenuePerKwacha": 0.06,
      "TransactionAmount": 2597.0
    },
    {
      "TransactionID": "WB0000187",
      "MobileBooth": "Wina3",
      "Location": "Kabwata",
      "Service": "Zanaco",
      "RevenuePerKwacha": 0.035,
      "TransactionAmount": 3049.0
    },
    {
      "TransactionID": "WB0000188",
      "MobileBooth": "Wina4",
      "Location": "Mandevu",
      "Service": "Airtel Money",
      "RevenuePerKwacha": 0.05,
      "TransactionAmount": 2713.0
    },
    {
      "TransactionID": "WB0000189",
      "MobileBooth": "Wina5",
      "Location": "Woodlands",
      "Service": "FNB",
      "RevenuePerKwacha": 0.04,
      "TransactionAmount": 1727.0
    },
    {
      "TransactionID": "WB0000190",
      "MobileBooth": "Wina3",
      "Location": "Kabwata",
      "Service": "MTN Money",
      "RevenuePerKwacha": 0.06,
      "TransactionAmount": 2060.0
    },
    {
      "TransactionID": "WB0000191",
      "MobileBooth": "Wina4",
      "Location": "Mandevu",
      "Service": "MTN Money",
      "RevenuePerKwacha": 0.06,
      "TransactionAmount": 268.0
    },
    {
      "TransactionID": "WB0000192",
      "MobileBooth": "Wina1",
      "Location": "Lusaka CPD",
      "Service": "Zamtel Money",
      "RevenuePerKwacha": 0.045,
      "TransactionAmount": 2327.0
    },
    {
      "TransactionID": "WB0000193",
      "MobileBooth": "Wina3",
      "Location": "Kabwata",
      "Service": "Airtel Money",
      "RevenuePerKwacha": 0.05,
      "TransactionAmount": 3027.0
    },
    {
      "TransactionID": "WB0000194",
      "MobileBooth": "Wina4",
      "Location": "Mandevu",
      "Service": "Airtel Money",
      "RevenuePerKwacha": 0.05,
      "TransactionAmount": 897.0
    },
    {
      "TransactionID": "WB0000195",
      "MobileBooth": "Wina1",
      "Location": "Lusaka CPD",
      "Service": "MTN Money",
      "RevenuePerKwacha": 0.06,
      "TransactionAmount": 2275.0
    },
    {
      "TransactionID": "WB0000196",
      "MobileBooth": "Wina3",
      "Location": "Kabwata",
      "Service": "MTN Money",
      "RevenuePerKwacha": 0.06,
      "TransactionAmount": 1246.0
    },
    {
      "TransactionID": "WB0000197",
      "MobileBooth": "Wina6",
      "Location": "Matero East",
      "Service": "Airtel Money",
      "RevenuePerKwacha": 0.05,
      "TransactionAmount": 2768.0
    },
    {
      "TransactionID": "WB0000198",
      "MobileBooth": "Wina3",
      "Location": "Kabwata",
      "Service": "Airtel Money",
      "RevenuePerKwacha": 0.05,
      "TransactionAmount": 3082.0
    },
    {
      "TransactionID": "WB0000199",
      "MobileBooth": "Wina2",
      "Location": "Libala",
      "Service": "Airtel Money",
      "RevenuePerKwacha": 0.05,
      "TransactionAmount": 4307.0
    },
    {
      "TransactionID": "WB0000200",
      "MobileBooth": "Wina3",
      "Location": "Kabwata",
      "Service": "Airtel Money",
      "RevenuePerKwacha": 0.05,
      "TransactionAmount": 3664.0
    },
    {
      "TransactionID": "WB0000201",
      "MobileBooth": "Wina5",
      "Location": "Woodlands",
      "Service": "FNB",
      "RevenuePerKwacha": 0.04,
      "TransactionAmount": 3274.0
    },
    {
      "TransactionID": "WB0000202",
      "MobileBooth": "Wina2",
      "Location": "Libala",
      "Service": "FNB",
      "RevenuePerKwacha": 0.04,
      "TransactionAmount": 2854.0
    },
    {
      "TransactionID": "WB0000203",
      "MobileBooth": "Wina5",
      "Location": "Woodlands",
      "Service": "FNB",
      "RevenuePerKwacha": 0.04,
      "TransactionAmount": 1253.0
    },
    {
      "TransactionID": "WB0000204",
      "MobileBooth": "Wina3",
      "Location": "Kabwata",
      "Service": "Airtel Money",
      "RevenuePerKwacha": 0.05,
      "TransactionAmount": 812.0
    },
    {
      "TransactionID": "WB0000205",
      "MobileBooth": "Wina4",
      "Location": "Mandevu",
      "Service": "Airtel Money",
      "RevenuePerKwacha": 0.05,
      "TransactionAmount": 962.0
    },
    {
      "TransactionID": "WB0000206",
      "MobileBooth": "Wina3",
      "Location": "Kabwata",
      "Service": "MTN Money",
      "RevenuePerKwacha": 0.06,
      "TransactionAmount": 2219.0
    },
    {
      "TransactionID": "WB0000207",
      "MobileBooth": "Wina3",
      "Location": "Kabwata",
      "Service": "Zanaco",
      "RevenuePerKwacha": 0.035,
      "TransactionAmount": 4407.0
    },
    {
      "TransactionID": "WB0000208",
      "MobileBooth": "Wina3",
      "Location": "Kabwata",
      "Service": "Airtel Money",
      "RevenuePerKwacha": 0.05,
      "TransactionAmount": 3825.0
    },
    {
      "TransactionID": "WB0000209",
      "MobileBooth": "Wina4",
      "Location": "Mandevu",
      "Service": "Airtel Money",
      "RevenuePerKwacha": 0.05,
      "TransactionAmount": 2162.0
    },
    {
      "TransactionID": "WB0000210",
      "MobileBooth": "Wina2",
      "Location": "Libala",
      "Service": "FNB",
      "RevenuePerKwacha": 0.04,
      "TransactionAmount": 883.0
    },
    {
      "TransactionID": "WB0000211",
      "MobileBooth": "Wina3",
      "Location": "Kabwata",
      "Service": "Airtel Money",
      "RevenuePerKwacha": 0.05,
      "TransactionAmount": 1506.0
    },
    {
      "TransactionID": "WB0000212",
      "MobileBooth": "Wina4",
      "Location": "Mandevu",
      "Service": "Zamtel Money",
      "RevenuePerKwacha": 0.045,
      "TransactionAmount": 394.0
    },
    {
      "TransactionID": "WB0000213",
      "MobileBooth": "Wina5",
      "Location": "Woodlands",
      "Service": "Airtel Money",
      "RevenuePerKwacha": 0.05,
      "TransactionAmount": 4272.0
    },
    {
      "TransactionID": "WB0000214",
      "MobileBooth": "Wina3",
      "Location": "Kabwata",
      "Service": "Zanaco",
      "RevenuePerKwacha": 0.035,
      "TransactionAmount": 4187.0
    },
    {
      "TransactionID": "WB0000215",
      "MobileBooth": "Wina4",
      "Location": "Mandevu",
      "Service": "Airtel Money",
      "RevenuePerKwacha": 0.05,
      "TransactionAmount": 913.0
    },
    {
      "TransactionID": "WB0000216",
      "MobileBooth": "Wina1",
      "Location": "Lusaka CPD",
      "Service": "FNB",
      "RevenuePerKwacha": 0.04,
      "TransactionAmount": 3651.0
    },
    {
      "TransactionID": "WB0000217",
      "MobileBooth": "Wina1",
      "Location": "Lusaka CPD",
      "Service": "Zamtel Money",
      "RevenuePerKwacha": 0.045,
      "TransactionAmount": 1000.0
    },
    {
      "TransactionID": "WB0000218",
      "MobileBooth": "Wina3",
      "Location": "Kabwata",
      "Service": "Airtel Money",
      "RevenuePerKwacha": 0.05,
      "TransactionAmount": 839.0
    },
    {
      "TransactionID": "WB0000219",
      "MobileBooth": "Wina6",
      "Location": "Matero East",
      "Service": "MTN Money",
      "RevenuePerKwacha": 0.06,
      "TransactionAmount": 1851.0
    },
    {
      "TransactionID": "WB0000220",
      "MobileBooth": "Wina3",
      "Location": "Kabwata",
      "Service": "Airtel Money",
      "RevenuePerKwacha": 0.05,
      "TransactionAmount": 1341.0
    },
    {
      "TransactionID": "WB0000221",
      "MobileBooth": "Wina2",
      "Location": "Libala",
      "Service": "Zamtel Money",
      "RevenuePerKwacha": 0.045,
      "TransactionAmount": 3150.0
    },
    {
      "TransactionID": "WB0000222",
      "MobileBooth": "Wina3",
      "Location": "Kabwata",
      "Service": "Airtel Money",
      "RevenuePerKwacha": 0.05,
      "TransactionAmount": 3050.0
    },
    {
      "TransactionID": "WB0000223",
      "MobileBooth": "Wina5",
      "Location": "Woodlands",
      "Service": "FNB",
      "RevenuePerKwacha": 0.04,
      "TransactionAmount": 4489.0
    },
    {
      "TransactionID": "WB0000224",
      "MobileBooth": "Wina2",
      "Location": "Libala",
      "Service": "Airtel Money",
      "RevenuePerKwacha": 0.05,
      "TransactionAmount": 3432.0
    },
    {
      "TransactionID": "WB0000225",
      "MobileBooth": "Wina5",
      "Location": "Woodlands",
      "Service": "FNB",
      "RevenuePerKwacha": 0.04,
      "TransactionAmount": 136.0
    },
    {
      "TransactionID": "WB0000226",
      "MobileBooth": "Wina3",
      "Location": "Kabwata",
      "Service": "Airtel Money",
      "RevenuePerKwacha": 0.05,
      "TransactionAmount": 2318.0
    },
    {
      "TransactionID": "WB0000227",
      "MobileBooth": "Wina4",
      "Location": "Mandevu",
      "Service": "Airtel Money",
      "RevenuePerKwacha": 0.05,
      "TransactionAmount": 4327.0
    },
    {
      "TransactionID": "WB0000228",
      "MobileBooth": "Wina3",
      "Location": "Kabwata",
      "Service": "MTN Money",
      "RevenuePerKwacha": 0.06,
      "TransactionAmount": 1653.0
    },
    {
      "TransactionID": "WB0000229",
      "MobileBooth": "Wina3",
      "Location": "Kabwata",
      "Service": "Airtel Money",
      "RevenuePerKwacha": 0.05,
      "TransactionAmount": 20.0
    },
    {
      "TransactionID": "WB0000230",
      "MobileBooth": "Wina3",
      "Location": "Kabwata",
      "Service": "Airtel Money",
      "RevenuePerKwacha": 0.05,
      "TransactionAmount": 1219.0
    },
    {
      "TransactionID": "WB0000231",
      "MobileBooth": "Wina4",
      "Location": "Mandevu",
      "Service": "MTN Money",
      "RevenuePerKwacha": 0.06,
      "TransactionAmount": 1508.0
    },
    {
      "TransactionID": "WB0000232",
      "MobileBooth": "Wina2",
      "Location": "Libala",
      "Service": "MTN Money",
      "RevenuePerKwacha": 0.06,
      "TransactionAmount": 1205.0
    },
    {
      "TransactionID": "WB0000233",
      "MobileBooth": "Wina3",
      "Location": "Kabwata",
      "Service": "Zanaco",
      "RevenuePerKwacha": 0.035,
      "TransactionAmount": 1589.0
    },
    {
      "TransactionID": "WB0000234",
      "MobileBooth": "Wina4",
      "Location": "Mandevu",
      "Service": "Airtel Money",
      "RevenuePerKwacha": 0.05,
      "TransactionAmount": 1280.0
    },
    {
      "TransactionID": "WB0000235",
      "MobileBooth": "Wina5",
      "Location": "Woodlands",
      "Service": "FNB",
      "RevenuePerKwacha": 0.04,
      "TransactionAmount": 335.0
    },
    {
      "TransactionID": "WB0000236",
      "MobileBooth": "Wina3",
      "Location": "Kabwata",
      "Service": "MTN Money",
      "RevenuePerKwacha": 0.06,
      "TransactionAmount": 2268.0
    },
    {
      "TransactionID": "WB0000237",
      "MobileBooth": "Wina4",
      "Location": "Mandevu",
      "Service": "MTN Money",
      "RevenuePerKwacha": 0.06,
      "TransactionAmount": 2815.0
    },
    {
      "TransactionID": "WB0000238",
      "MobileBooth": "Wina1",
      "Location": "Lusaka CPD",
      "Service": "Zamtel Money",
      "RevenuePerKwacha": 0.045,
      "TransactionAmount": 4414.0
    },
    {
      "TransactionID": "WB0000239",
      "MobileBooth": "Wina3",
      "Location": "Kabwata",
      "Service": "Airtel Money",
      "RevenuePerKwacha": 0.05,
      "TransactionAmount": 654.0
    },
    {
      "TransactionID": "WB0000240",
      "MobileBooth": "Wina4",
      "Location": "Mandevu",
      "Service": "Airtel Money",
      "RevenuePerKwacha": 0.05,
      "TransactionAmount": 2180.0
    },
    {
      "TransactionID": "WB0000241",
      "MobileBooth": "Wina1",
      "Location": "Lusaka CPD",
      "Service": "MTN Money",
      "RevenuePerKwacha": 0.06,
      "TransactionAmount": 2869.0
    },
    {
      "TransactionID": "WB0000242",
      "MobileBooth": "Wina3",
      "Location": "Kabwata",
      "Service": "MTN Money",
      "RevenuePerKwacha": 0.06,
      "TransactionAmount": 3757.0
    },
    {
      "TransactionID": "WB0000243",
      "MobileBooth": "Wina6",
      "Location": "Matero East",
      "Service": "Airtel Money",
      "RevenuePerKwacha": 0.05,
      "TransactionAmount": 2038.0
    },
    {
      "TransactionID": "WB0000244",
      "MobileBooth": "Wina3",
      "Location": "Kabwata",
      "Service": "Airtel Money",
      "RevenuePerKwacha": 0.05,
      "TransactionAmount": 1344.0
    },
    {
      "TransactionID": "WB0000245",
      "MobileBooth": "Wina2",
      "Location": "Libala",
      "Service": "Airtel Money",
      "RevenuePerKwacha": 0.05,
      "TransactionAmount": 526.0
    },
    {
      "TransactionID": "WB0000246",
      "MobileBooth": "Wina3",
      "Location": "Kabwata",
      "Service": "Airtel Money",
      "RevenuePerKwacha": 0.05,
      "TransactionAmount": 192.0
    },
    {
      "TransactionID": "WB0000247",
      "MobileBooth": "Wina5",
      "Location": "Woodlands",
      "Service": "FNB",
      "RevenuePerKwacha": 0.04,
      "TransactionAmount": 866.0
    },
    {
      "TransactionID": "WB0000248",
      "MobileBooth": "Wina2",
      "Location": "Libala",
      "Service": "FNB",
      "RevenuePerKwacha": 0.04,
      "TransactionAmount": 3568.0
    },
    {
      "TransactionID": "WB0000249",
      "MobileBooth": "Wina5",
      "Location": "Woodlands",
      "Service": "FNB",
      "RevenuePerKwacha": 0.04,
      "TransactionAmount": 729.0
    },
    {
      "TransactionID": "WB0000250",
      "MobileBooth": "Wina3",
      "Location": "Kabwata",
      "Service": "Airtel Money",
      "RevenuePerKwacha": 0.05,
      "TransactionAmount": 3331.0
    },
    {
      "TransactionID": "WB0000251",
      "MobileBooth": "Wina4",
      "Location": "Mandevu",
      "Service": "Airtel Money",
      "RevenuePerKwacha": 0.05,
      "TransactionAmount": 336.0
    },
    {
      "TransactionID": "WB0000252",
      "MobileBooth": "Wina3",
      "Location": "Kabwata",
      "Service": "MTN Money",
      "RevenuePerKwacha": 0.06,
      "TransactionAmount": 976.0
    },
    {
      "TransactionID": "WB0000253",
      "MobileBooth": "Wina3",
      "Location": "Kabwata",
      "Service": "Zanaco",
      "RevenuePerKwacha": 0.035,
      "TransactionAmount": 89.0
    },
    {
      "TransactionID": "WB0000254",
      "MobileBooth": "Wina3",
      "Location": "Kabwata",
      "Service": "Airtel Money",
      "RevenuePerKwacha": 0.05,
      "TransactionAmount": 630.0
    },
    {
      "TransactionID": "WB0000255",
      "MobileBooth": "Wina4",
      "Location": "Mandevu",
      "Service": "Airtel Money",
      "RevenuePerKwacha": 0.05,
      "TransactionAmount": 3161.0
    },
    {
      "TransactionID": "WB0000256",
      "MobileBooth": "Wina2",
      "Location": "Libala",
      "Service": "FNB",
      "RevenuePerKwacha": 0.04,
      "TransactionAmount": 4200.0
    },
    {
      "TransactionID": "WB0000257",
      "MobileBooth": "Wina3",
      "Location": "Kabwata",
      "Service": "Airtel Money",
      "RevenuePerKwacha": 0.05,
      "TransactionAmount": 3887.0
    },
    {
      "TransactionID": "WB0000258",
      "MobileBooth": "Wina4",
      "Location": "Mandevu",
      "Service": "Zamtel Money",
      "RevenuePerKwacha": 0.045,
      "TransactionAmount": 4421.0
    },
    {
      "TransactionID": "WB0000259",
      "MobileBooth": "Wina5",
      "Location": "Woodlands",
      "Service": "Airtel Money",
      "RevenuePerKwacha": 0.05,
      "TransactionAmount": 1863.0
    },
    {
      "TransactionID": "WB0000260",
      "MobileBooth": "Wina3",
      "Location": "Kabwata",
      "Service": "Zanaco",
      "RevenuePerKwacha": 0.035,
      "TransactionAmount": 2465.0
    },
    {
      "TransactionID": "WB0000261",
      "MobileBooth": "Wina4",
      "Location": "Mandevu",
      "Service": "Airtel Money",
      "RevenuePerKwacha": 0.05,
      "TransactionAmount": 3775.0
    },
    {
      "TransactionID": "WB0000262",
      "MobileBooth": "Wina1",
      "Location": "Lusaka CPD",
      "Service": "FNB",
      "RevenuePerKwacha": 0.04,
      "TransactionAmount": 2897.0
    },
    {
      "TransactionID": "WB0000263",
      "MobileBooth": "Wina1",
      "Location": "Lusaka CPD",
      "Service": "Zamtel Money",
      "RevenuePerKwacha": 0.045,
      "TransactionAmount": 3994.0
    },
    {
      "TransactionID": "WB0000264",
      "MobileBooth": "Wina3",
      "Location": "Kabwata",
      "Service": "Airtel Money",
      "RevenuePerKwacha": 0.05,
      "TransactionAmount": 586.0
    },
    {
      "TransactionID": "WB0000265",
      "MobileBooth": "Wina6",
      "Location": "Matero East",
      "Service": "MTN Money",
      "RevenuePerKwacha": 0.06,
      "TransactionAmount": 2562.0
    },
    {
      "TransactionID": "WB0000266",
      "MobileBooth": "Wina3",
      "Location": "Kabwata",
      "Service": "Airtel Money",
      "RevenuePerKwacha": 0.05,
      "TransactionAmount": 3867.0
    },
    {
      "TransactionID": "WB0000267",
      "MobileBooth": "Wina2",
      "Location": "Libala",
      "Service": "Zamtel Money",
      "RevenuePerKwacha": 0.045,
      "TransactionAmount": 4208.0
    },
    {
      "TransactionID": "WB0000268",
      "MobileBooth": "Wina3",
      "Location": "Kabwata",
      "Service": "Airtel Money",
      "RevenuePerKwacha": 0.05,
      "TransactionAmount": 4471.0
    },
    {
      "TransactionID": "WB0000269",
      "MobileBooth": "Wina5",
      "Location": "Woodlands",
      "Service": "FNB",
      "RevenuePerKwacha": 0.04,
      "TransactionAmount": 303.0
    },
    {
      "TransactionID": "WB0000270",
      "MobileBooth": "Wina2",
      "Location": "Libala",
      "Service": "Airtel Money",
      "RevenuePerKwacha": 0.05,
      "TransactionAmount": 4261.0
    },
    {
      "TransactionID": "WB0000271",
      "MobileBooth": "Wina5",
      "Location": "Woodlands",
      "Service": "FNB",
      "RevenuePerKwacha": 0.04,
      "TransactionAmount": 1122.0
    },
    {
      "TransactionID": "WB0000272",
      "MobileBooth": "Wina3",
      "Location": "Kabwata",
      "Service": "Airtel Money",
      "RevenuePerKwacha": 0.05,
      "TransactionAmount": 1396.0
    },
    {
      "TransactionID": "WB0000273",
      "MobileBooth": "Wina4",
      "Location": "Mandevu",
      "Service": "Airtel Money",
      "RevenuePerKwacha": 0.05,
      "TransactionAmount": 905.0
    },
    {
      "TransactionID": "WB0000274",
      "MobileBooth": "Wina3",
      "Location": "Kabwata",
      "Service": "MTN Money",
      "RevenuePerKwacha": 0.06,
      "TransactionAmount": 4002.0
    },
    {
      "TransactionID": "WB0000275",
      "MobileBooth": "Wina3",
      "Location": "Kabwata",
      "Service": "Airtel Money",
      "RevenuePerKwacha": 0.05,
      "TransactionAmount": 1591.0
    },
    {
      "TransactionID": "WB0000276",
      "MobileBooth": "Wina3",
      "Location": "Kabwata",
      "Service": "Airtel Money",
      "RevenuePerKwacha": 0.05,
      "TransactionAmount": 3353.0
    },
    {
      "TransactionID": "WB0000277",
      "MobileBooth": "Wina4",
      "Location": "Mandevu",
      "Service": "MTN Money",
      "RevenuePerKwacha": 0.06,
      "TransactionAmount": 3364.0
    },
    {
      "TransactionID": "WB0000278",
      "MobileBooth": "Wina2",
      "Location": "Libala",
      "Service": "MTN Money",
      "RevenuePerKwacha": 0.06,
      "TransactionAmount": 4129.0
    },
    {
      "TransactionID": "WB0000279",
      "MobileBooth": "Wina3",
      "Location": "Kabwata",
      "Service": "Zanaco",
      "RevenuePerKwacha": 0.035,
      "TransactionAmount": 1003.0
    },
    {
      "TransactionID": "WB0000280",
      "MobileBooth": "Wina4",
      "Location": "Mandevu",
      "Service": "Airtel Money",
      "RevenuePerKwacha": 0.05,
      "TransactionAmount": 2475.0
    },
    {
      "TransactionID": "WB0000281",
      "MobileBooth": "Wina5",
      "Location": "Woodlands",
      "Service": "FNB",
      "RevenuePerKwacha": 0.04,
      "TransactionAmount": 3597.0
    },
    {
      "TransactionID": "WB0000282",
      "MobileBooth": "Wina3",
      "Location": "Kabwata",
      "Service": "MTN Money",
      "RevenuePerKwacha": 0.06,
      "TransactionAmount": 1659.0
    },
    {
      "TransactionID": "WB0000283",
      "MobileBooth": "Wina4",
      "Location": "Mandevu",
      "Service": "MTN Money",
      "RevenuePerKwacha": 0.06,
      "TransactionAmount": 4163.0
    },
    {
      "TransactionID": "WB0000284",
      "MobileBooth": "Wina1",
      "Location": "Lusaka CPD",
      "Service": "Zamtel Money",
      "RevenuePerKwacha": 0.045,
      "TransactionAmount": 487.0
    },
    {
      "TransactionID": "WB0000285",
      "MobileBooth": "Wina3",
      "Location": "Kabwata",
      "Service": "Airtel Money",
      "RevenuePerKwacha": 0.05,
      "TransactionAmount": 3790.0
    },
    {
      "TransactionID": "WB0000286",
      "MobileBooth": "Wina4",
      "Location": "Mandevu",
      "Service": "Airtel Money",
      "RevenuePerKwacha": 0.05,
      "TransactionAmount": 2186.0
    },
    {
      "TransactionID": "WB0000287",
      "MobileBooth": "Wina1",
      "Location": "Lusaka CPD",
      "Service": "MTN Money",
      "RevenuePerKwacha": 0.06,
      "TransactionAmount": 1894.0
    },
    {
      "TransactionID": "WB0000288",
      "MobileBooth": "Wina3",
      "Location": "Kabwata",
      "Service": "MTN Money",
      "RevenuePerKwacha": 0.06,
      "TransactionAmount": 1458.0
    },
    {
      "TransactionID": "WB0000289",
      "MobileBooth": "Wina6",
      "Location": "Matero East",
      "Service": "Airtel Money",
      "RevenuePerKwacha": 0.05,
      "TransactionAmount": 875.0
    },
    {
      "TransactionID": "WB0000290",
      "MobileBooth": "Wina3",
      "Location": "Kabwata",
      "Service": "Airtel Money",
      "RevenuePerKwacha": 0.05,
      "TransactionAmount": 189.0
    },
    {
      "TransactionID": "WB0000291",
      "MobileBooth": "Wina2",
      "Location": "Libala",
      "Service": "Airtel Money",
      "RevenuePerKwacha": 0.05,
      "TransactionAmount": 4479.0
    },
    {
      "TransactionID": "WB0000292",
      "MobileBooth": "Wina3",
      "Location": "Kabwata",
      "Service": "Airtel Money",
      "RevenuePerKwacha": 0.05,
      "TransactionAmount": 3733.0
    },
    {
      "TransactionID": "WB0000293",
      "MobileBooth": "Wina5",
      "Location": "Woodlands",
      "Service": "FNB",
      "RevenuePerKwacha": 0.04,
      "TransactionAmount": 640.0
    },
    {
      "TransactionID": "WB0000294",
      "MobileBooth": "Wina2",
      "Location": "Libala",
      "Service": "FNB",
      "RevenuePerKwacha": 0.04,
      "TransactionAmount": 413.0
    },
    {
      "TransactionID": "WB0000295",
      "MobileBooth": "Wina5",
      "Location": "Woodlands",
      "Service": "FNB",
      "RevenuePerKwacha": 0.04,
      "TransactionAmount": 880.0
    },
    {
      "TransactionID": "WB0000296",
      "MobileBooth": "Wina3",
      "Location": "Kabwata",
      "Service": "Airtel Money",
      "RevenuePerKwacha": 0.05,
      "TransactionAmount": 2921.0
    },
    {
      "TransactionID": "WB0000297",
      "MobileBooth": "Wina4",
      "Location": "Mandevu",
      "Service": "Airtel Money",
      "RevenuePerKwacha": 0.05,
      "TransactionAmount": 3428.0
    },
    {
      "TransactionID": "WB0000298",
      "MobileBooth": "Wina3",
      "Location": "Kabwata",
      "Service": "MTN Money",
      "RevenuePerKwacha": 0.06,
      "TransactionAmount": 4103.0
    },
    {
      "TransactionID": "WB0000299",
      "MobileBooth": "Wina3",
      "Location": "Kabwata",
      "Service": "Zanaco",
      "RevenuePerKwacha": 0.035,
      "TransactionAmount": 2610.0
    },
    {
      "TransactionID": "WB0000300",
      "MobileBooth": "Wina3",
      "Location": "Kabwata",
      "Service": "Airtel Money",
      "RevenuePerKwacha": 0.05,
      "TransactionAmount": 3813.0
    },
    {
      "TransactionID": "WB0000301",
      "MobileBooth": "Wina4",
      "Location": "Mandevu",
      "Service": "Airtel Money",
      "RevenuePerKwacha": 0.05,
      "TransactionAmount": 1899.0
    },
    {
      "TransactionID": "WB0000302",
      "MobileBooth": "Wina2",
      "Location": "Libala",
      "Service": "FNB",
      "RevenuePerKwacha": 0.04,
      "TransactionAmount": 1284.0
    },
    {
      "TransactionID": "WB0000303",
      "MobileBooth": "Wina3",
      "Location": "Kabwata",
      "Service": "Airtel Money",
      "RevenuePerKwacha": 0.05,
      "TransactionAmount": 2928.0
    },
    {
      "TransactionID": "WB0000304",
      "MobileBooth": "Wina4",
      "Location": "Mandevu",
      "Service": "Zamtel Money",
      "RevenuePerKwacha": 0.045,
      "TransactionAmount": 301.0
    },
    {
      "TransactionID": "WB0000305",
      "MobileBooth": "Wina5",
      "Location": "Woodlands",
      "Service": "Airtel Money",
      "RevenuePerKwacha": 0.05,
      "TransactionAmount": 3672.0
    },
    {
      "TransactionID": "WB0000306",
      "MobileBooth": "Wina3",
      "Location": "Kabwata",
      "Service": "Zanaco",
      "RevenuePerKwacha": 0.035,
      "TransactionAmount": 1542.0
    },
    {
      "TransactionID": "WB0000307",
      "MobileBooth": "Wina4",
      "Location": "Mandevu",
      "Service": "Airtel Money",
      "RevenuePerKwacha": 0.05,
      "TransactionAmount": 2001.0
    },
    {
      "TransactionID": "WB0000308",
      "MobileBooth": "Wina1",
      "Location": "Lusaka CPD",
      "Service": "FNB",
      "RevenuePerKwacha": 0.04,
      "TransactionAmount": 3166.0
    }
  ];

  const WINA_BWANGU_DATA={
    boothLocation,
    allowedServices,
    servicelimits,
    revenuePerKwacha,
    transactions
  };

  export {
    boothLocation,
    allowedService,
    servicelimits,
    revenuePerKwacha,
    transactions,
    WINA_BWANGU_DATA
  };