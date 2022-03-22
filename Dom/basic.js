var mydata = [
    //index-0
    {
        "nexusVersion": "SNAPSHOT-1.0.0",
        "matrix": {
            "zcord": [
                12,  //mydate[0].matrix.zcord[0]
                70  //mydate[0].matrix.zcord[1]
            ],
            "ycord": [
                100, //mydata[0].matrix.ycord[0]
                45 //mydata[0].matrix.ycord[1]
            ]


        },
        "finalbuild": 07 //mydata[0].finalbuild
    },
    //        index-1
    {
        "nexusVersion": "SNAPSHOT-1.0.0",
        "matrix": {
            "zcord": [
                12,   //mydata[1].matrix.zcord[0]
                70    //mydata[1].matrix.zcord[1]
            ],
            "ycord": [
                100, //mydata[1].matrix.ycord[0]
                50  //mydata[1].matrix.ycord[1]
            ]

        },

        "artifacts": [
            {
                "file": "pom.xml"  //mydata[1].artifacts[0].file
            },
            {
                "type": [
                    {
                        "fname": 'diya', //mydata[1].artifacts[1].type[0].fname
                        "ext": ".png", //mydata[1].artifacts[1].type[0].ext
                        "size": 1025   //mydata[1].artifacts[1].type[0].size 
                    },
                    {
                        "fname": 'priya', //mydata[1].artifacts[1].type[1].fname
                        "ext": ".jpeg",  //mydata[1].artifacts[1].type[1].jpeg
                        "size": 70     //mydata[1].artifacts[1].type[1].70
                    }
                ]
            }
        ],
        "finalbuild": 12 //mydate[1].finalbuild
    }
]



console.log(mydata[0].matrix.zcord[0]);  //12

console.log(mydata[1].matrix.ycord[1]); //45

console.log(mydata[0].finalbuild);  //07

console.log(mydata[1].matrix.ycord[1]); //50

console.log(mydata[1].artifacts[0].file); //pom.xml


console.log(mydata[1].artifacts[1].type[0].fname); //diya

console.log(mydata[1].artifacts[1].type[0].ext); //png

console.log(mydata[1].artifacts[1].type[0].size); //1024


console.log(mydata[1].artifacts[1].type[1].fname); //priya

console.log(mydata[1].artifacts[1].type[1].ext); //jpeg

console.log(mydata[1].artifacts[1].type[1].size); //70

console.log(mydate[1].finalbuild);  //12






