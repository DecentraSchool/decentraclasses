// export const contractAddress = "0xf0d331e074545Fb5421DDfE72667abf8Bf5DEee2";
export const contractAddress = "0x255E1ECf087b2f722a8E92349c82c5036C0F9020"; //mumbai address
// export const contractAddress = "0xb346c69e07ed0fcdac7a394AFB31303af9B01E75"; //mantle address

export const contractABI = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "_courseId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_shares",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_totalPrice",
        type: "uint256",
      },
    ],
    name: "CourseBought",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_seller",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "_buyer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_courseId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_shares",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_totalPrice",
        type: "uint256",
      },
    ],
    name: "CourseBoughtFromPool",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address[]",
        name: "owners",
        type: "address[]",
      },
    ],
    name: "SetOwners",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_seller",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_courseId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_shares",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_pricePerShare",
        type: "uint256",
      },
    ],
    name: "ShareForSale",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_seller",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_courseId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_shares",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_pricePerShare",
        type: "uint256",
      },
    ],
    name: "ShareNotForSale",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_courseId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_shares",
        type: "uint256",
      },
    ],
    name: "buyCourse",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "courseIdList",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "courses",
    outputs: [
      {
        internalType: "uint256",
        name: "courseId",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "metadataurl",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "pricePerShare",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "totalShares",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_courseId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_pricePerShare",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_totalShares",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_metadata",
        type: "string",
      },
    ],
    name: "createCourse",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_courseId",
        type: "uint256",
      },
    ],
    name: "deleteCourse",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_courseId",
        type: "uint256",
      },
    ],
    name: "exists",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_courseId",
        type: "uint256",
      },
    ],
    name: "getCourseById",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "courseId",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "metadataurl",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "pricePerShare",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "totalShares",
            type: "uint256",
          },
        ],
        internalType: "struct Learn2Earn.Courses",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_studentAddress",
        type: "address",
      },
    ],
    name: "getCourseByStudent",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getCourses",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getOwners",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "isForSale",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "manager",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "ownerByAddress",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "owners",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "_owners",
        type: "address[]",
      },
    ],
    name: "setOwners",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "students",
    outputs: [
      {
        internalType: "address",
        name: "studentAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "pricePerShare",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalCourses",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

// export const contractABI = [
//   {
//     inputs: [],
//     stateMutability: "nonpayable",
//     type: "constructor",
//   },
//   {
//     anonymous: false,
//     inputs: [
//       {
//         indexed: false,
//         internalType: "uint256",
//         name: "_courseId",
//         type: "uint256",
//       },
//       {
//         indexed: false,
//         internalType: "uint256",
//         name: "_shares",
//         type: "uint256",
//       },
//       {
//         indexed: false,
//         internalType: "uint256",
//         name: "_totalPrice",
//         type: "uint256",
//       },
//     ],
//     name: "CourseBought",
//     type: "event",
//   },
//   {
//     anonymous: false,
//     inputs: [
//       {
//         indexed: false,
//         internalType: "address",
//         name: "_seller",
//         type: "address",
//       },
//       {
//         indexed: false,
//         internalType: "address",
//         name: "_buyer",
//         type: "address",
//       },
//       {
//         indexed: false,
//         internalType: "uint256",
//         name: "_courseId",
//         type: "uint256",
//       },
//       {
//         indexed: false,
//         internalType: "uint256",
//         name: "_shares",
//         type: "uint256",
//       },
//       {
//         indexed: false,
//         internalType: "uint256",
//         name: "_totalPrice",
//         type: "uint256",
//       },
//     ],
//     name: "CourseBoughtFromPool",
//     type: "event",
//   },
//   {
//     anonymous: false,
//     inputs: [
//       {
//         indexed: false,
//         internalType: "address",
//         name: "_seller",
//         type: "address",
//       },
//       {
//         indexed: false,
//         internalType: "uint256",
//         name: "_courseId",
//         type: "uint256",
//       },
//       {
//         indexed: false,
//         internalType: "uint256",
//         name: "_shares",
//         type: "uint256",
//       },
//       {
//         indexed: false,
//         internalType: "uint256",
//         name: "_pricePerShare",
//         type: "uint256",
//       },
//     ],
//     name: "ShareForSale",
//     type: "event",
//   },
//   {
//     anonymous: false,
//     inputs: [
//       {
//         indexed: false,
//         internalType: "address",
//         name: "_seller",
//         type: "address",
//       },
//       {
//         indexed: false,
//         internalType: "uint256",
//         name: "_courseId",
//         type: "uint256",
//       },
//       {
//         indexed: false,
//         internalType: "uint256",
//         name: "_shares",
//         type: "uint256",
//       },
//       {
//         indexed: false,
//         internalType: "uint256",
//         name: "_pricePerShare",
//         type: "uint256",
//       },
//     ],
//     name: "ShareNotForSale",
//     type: "event",
//   },
//   {
//     inputs: [
//       {
//         internalType: "uint256",
//         name: "_courseId",
//         type: "uint256",
//       },
//       {
//         internalType: "uint256",
//         name: "_shares",
//         type: "uint256",
//       },
//     ],
//     name: "buyCourse",
//     outputs: [],
//     stateMutability: "payable",
//     type: "function",
//   },
//   {
//     inputs: [
//       {
//         internalType: "address",
//         name: "_studentAddress",
//         type: "address",
//       },
//       {
//         internalType: "uint256",
//         name: "_courseId",
//         type: "uint256",
//       },
//       {
//         internalType: "uint256",
//         name: "_shares",
//         type: "uint256",
//       },
//     ],
//     name: "buyCourseFromStudent",
//     outputs: [],
//     stateMutability: "payable",
//     type: "function",
//   },
//   {
//     inputs: [
//       {
//         internalType: "uint256",
//         name: "_courseId",
//         type: "uint256",
//       },
//     ],
//     name: "cancelSellCourse",
//     outputs: [],
//     stateMutability: "nonpayable",
//     type: "function",
//   },
//   {
//     inputs: [
//       {
//         internalType: "uint256",
//         name: "",
//         type: "uint256",
//       },
//     ],
//     name: "courses",
//     outputs: [
//       {
//         internalType: "uint256",
//         name: "courseId",
//         type: "uint256",
//       },
//       {
//         internalType: "string",
//         name: "metadataurl",
//         type: "string",
//       },
//       {
//         internalType: "uint256",
//         name: "pricePerShare",
//         type: "uint256",
//       },
//       {
//         internalType: "uint256",
//         name: "totalShares",
//         type: "uint256",
//       },
//     ],
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     inputs: [
//       {
//         internalType: "uint256",
//         name: "_pricePerShare",
//         type: "uint256",
//       },
//       {
//         internalType: "uint256",
//         name: "_totalShares",
//         type: "uint256",
//       },
//       {
//         internalType: "string",
//         name: "_metadata",
//         type: "string",
//       },
//     ],
//     name: "createCourse",
//     outputs: [],
//     stateMutability: "nonpayable",
//     type: "function",
//   },
//   {
//     inputs: [],
//     name: "getBalance",
//     outputs: [
//       {
//         internalType: "uint256",
//         name: "",
//         type: "uint256",
//       },
//     ],
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     inputs: [],
//     name: "getCourses",
//     outputs: [
//       {
//         internalType: "uint256[]",
//         name: "",
//         type: "uint256[]",
//       },
//       {
//         internalType: "uint256[]",
//         name: "",
//         type: "uint256[]",
//       },
//     ],
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     inputs: [
//       {
//         internalType: "uint256",
//         name: "_courseId",
//         type: "uint256",
//       },
//       {
//         internalType: "uint256",
//         name: "_pricePerShare",
//         type: "uint256",
//       },
//     ],
//     name: "sellCourse",
//     outputs: [],
//     stateMutability: "nonpayable",
//     type: "function",
//   },
//   {
//     inputs: [
//       {
//         internalType: "address",
//         name: "",
//         type: "address",
//       },
//     ],
//     name: "students",
//     outputs: [
//       {
//         internalType: "address",
//         name: "studentAddress",
//         type: "address",
//       },
//       {
//         internalType: "uint256",
//         name: "courseId",
//         type: "uint256",
//       },
//       {
//         internalType: "uint256",
//         name: "shares",
//         type: "uint256",
//       },
//       {
//         internalType: "bool",
//         name: "isForSale",
//         type: "bool",
//       },
//       {
//         internalType: "uint256",
//         name: "pricePerShare",
//         type: "uint256",
//       },
//     ],
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     inputs: [],
//     name: "totalCourses",
//     outputs: [
//       {
//         internalType: "uint256",
//         name: "",
//         type: "uint256",
//       },
//     ],
//     stateMutability: "view",
//     type: "function",
//   },
// ];
