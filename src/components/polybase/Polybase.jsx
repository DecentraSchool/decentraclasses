import React from "react";
import { Polybase } from "@polybase/client";
// import { getWalletClient } from "@wagmi/core";
import { useAccount, usePublicClient, useSignMessage, useWalletClient } from "wagmi";
import { ethPersonalSignRecoverPublicKey } from "@polybase/eth";
import { ethPersonalSign } from "@polybase/eth";
import { ethers } from "ethers";
import { signMessage } from "@wagmi/core";

const db = new Polybase({
  defaultNamespace:
    "pk/0xd85260a9fbe3be03bbdb83c396ca4f7d4527dda763ddc8f419c18b5c5855d584d007cd80f833b20f1e834d0129426d74f5d11fc65ce862d3154382a728388e0f/decentra",
});

// addCourse();

const PolybaseHook = () => {
  const walletClient = useWalletClient();
  // const account = useAccount();
  // const provider = usePublicClient();
  // console.log(account.address);
  // console.log(walletClient);

  // const provider = new ethers.providers.Web3Provider(window.ethereum);
  // const signer = provider.getSigner();
  // console.log(provider);
  // console.log(signer);
  const {
    data: sig,
    isError,
    isLoading,
    isSuccess,
    signMessage,
  } = useSignMessage({
    message: "gm wagmi frens",
    onSuccess(data) {
      // console.log(data);
      // addCourse(data);
      // updateCourseId(data);
      // addInstructor(data);
      // deleteCourse(data);
      // addContentToCourse(data);
      addWhatyllearn(data);
      // addRequirements(data);
    },
  });

  const deleteCourse = async (sig) => {
    try {
      db.signer(async (data) => {
        return {
          h: "eth-personal-sign",
          sig: sig,
        };
      });
      const publicKey = await getPublicKey(sig);
      const res = await db.collection("Course").record("2222").call("del");

      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const addWhatyllearn = async (sig) => {
    try {
      db.signer(async (data) => {
        return {
          h: "eth-personal-sign",
          sig: sig,
        };
      });
      const publicKey = await getPublicKey(sig);
      const res = await db
        .collection("Course")
        .record("1111")
        .call("setWhatyllearn", [
          [
            "You learn basics of figma with professional tips",
            "Understanding how to create user interface and user experience",
            "Understanding how to create prototypes and wire frame",
            "Learn about ui ux principles",
          ],
        ]);

      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const addRequirements = async (sig) => {
    try {
      db.signer(async (data) => {
        return {
          h: "eth-personal-sign",
          sig: sig,
        };
      });
      const publicKey = await getPublicKey(sig);
      const res = await db
        .collection("Course")
        .record("1111")
        .call("setRequirements", [
          [
            "Basics knowledge about ui ux design.",
            "One laptop or PC with medium processor.",
            "Nice Internet connection or wifi connection",
          ],
        ]);

      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const addContentToCourse = async (sig) => {
    try {
      db.signer(async (data) => {
        return {
          h: "eth-personal-sign",
          sig: sig,
        };
      });
      const publicKey = await getPublicKey(sig);
      const res = await db
        .collection("Course")
        .record("1111")
        .call("addCourseContent", [
          JSON.stringify({
            section: [
              {
                title: "Section 1",
                lecturesCount: "1",
                totalDuration: "1 Hour",
                lecture: [
                  {
                    title: "What is figma",
                    desc: "Figma is a collaborative web-based design tool that enables users to create, prototype, and share user interfaces and designs in real-time. It offers features for designing, prototyping, and collaborating, making it a popular choice for designers and teams to work together on projects seamlessly.",
                    videoUrl: "https://gateway.lighthouse.storage/ipfs/QmXmn6S2ssCbJ5Lx8qVfPSZ27Ssas8zgkaDceVR8eNTa3d",
                    usersCompleted: [],
                  },
                ],
              },
              {
                title: "Section 2",
                lecturesCount: "1",
                totalDuration: "1 Hour",
                lecture: [
                  {
                    title: "Figma overview",
                    desc: "Figma is a collaborative design platform that enables teams to create, share, and iterate on designs in real-time. It offers a cloud-based interface, allowing designers to work together seamlessly on user interfaces, prototypes, and more. Figma's versatility and collaborative features make it a powerful tool for modern design workflows.",
                    videoUrl: "https://gateway.lighthouse.storage/ipfs/QmXW9a4VeBV1yTMg1kBXDo16Dusk6n35Xov4F8fztMgaMV",
                    usersCompleted: [],
                  },
                ],
              },
              {
                title: "Section 2",
                lecturesCount: "1",
                totalDuration: "1 Hour",
                lecture: [
                  {
                    title: "Figma overview",
                    desc: "Figma is a collaborative design platform that enables teams to create, share, and iterate on designs in real-time. It offers a cloud-based interface, allowing designers to work together seamlessly on user interfaces, prototypes, and more. Figma's versatility and collaborative features make it a powerful tool for modern design workflows.",
                    videoUrl: "https://gateway.lighthouse.storage/ipfs/QmXW9a4VeBV1yTMg1kBXDo16Dusk6n35Xov4F8fztMgaMV",
                    usersCompleted: [],
                  },
                ],
              },
              {
                title: "Section 3",
                lecturesCount: "1",
                totalDuration: "1 Hour",
                lecture: [
                  {
                    title: "Figma app download",
                    desc: "Figma, a versatile design tool, empowers creators to collaborate in real-time on projects. With its intuitive interface, users can design, prototype, and iterate designs effortlessly. Figma's cloud-based platform ensures seamless teamwork, enabling designers to access and edit projects from anywhere. Download Figma now to streamline your design process.",
                    videoUrl: "https://gateway.lighthouse.storage/ipfs/QmUhNRvgTXVjftCx8s6QZ3hakDnwX9qzYeSinCGkuG9pg9",
                    usersCompleted: [],
                  },
                ],
              },
              {
                title: "Section 4",
                lecturesCount: "1",
                totalDuration: "1 Hour",
                lecture: [
                  {
                    title: "Figma interface",
                    desc: "Figma's interface is a user-friendly design platform, enabling collaborative creation of digital designs. Its sleek layout offers intuitive tools for wireframing, prototyping, and UI/UX design. Real-time collaboration and cloud storage make it seamless for teams to work together on projects, fostering efficient and innovative design processes.",
                    videoUrl: "https://gateway.lighthouse.storage/ipfs/QmdrcMuXJUmprQ9hAhifq5wqR6v2Nvn1XqQBWULhohtsvd9",
                    usersCompleted: [],
                  },
                ],
              },
              {
                title: "Section 5",
                lecturesCount: "1",
                totalDuration: "1 Hour",
                lecture: [
                  {
                    title: "Figma tools",
                    desc: "Figma offers a robust set of design tools for creating user interfaces and interactive prototypes. These include vector-based drawing tools, typography options, color picker, layer styles, grids, and alignment tools. Collaborative features enable real-time editing and feedback, enhancing team efficiency in the design process.",
                    videoUrl: "https://gateway.lighthouse.storage/ipfs/QmdrcMuXJUmprQ9hAhifq5wqR6v2Nvn1XqQBWULhohtsvd9",
                    usersCompleted: [],
                  },
                ],
              },
              {
                title: "Section 6",
                lecturesCount: "1",
                totalDuration: "1 Hour",
                lecture: [
                  {
                    title: "Figma layers",
                    desc: "In Figma, layers are the building blocks of your design. To use them effectively, organize your elements logically into different layers. Use the layer panel to select, rename, and reorder layers. Utilize grouping to keep related elements together and maintain a tidy design structure.",
                    videoUrl: "https://gateway.lighthouse.storage/ipfs/QmQ8NDNkwNefJw6TVebNrKD6UAgsHTD3DhtWWEYaXMpq9T",
                    usersCompleted: [],
                  },
                ],
              },
              {
                title: "Section 7",
                lecturesCount: "1",
                totalDuration: "1 Hour",
                lecture: [
                  {
                    title: "Figma Import and export",
                    desc: "Importing and exporting in Figma is straightforward. To import, click 'File' > 'Import' and select the file. For exporting, select the element, click 'Export' in the right panel, choose the format, and set options. You can export selections, frames, or the entire project easily.",
                    videoUrl: "https://gateway.lighthouse.storage/ipfs/QmQEra2j1wxQrrq243EqaBu2mhqjoAncjiKy1BKe1vYFWu",
                    usersCompleted: [],
                  },
                ],
              },
              {
                title: "Section 8",
                lecturesCount: "1",
                totalDuration: "1 Hour",
                lecture: [
                  {
                    title: "Figma grids",
                    desc: "Creating layout grids in Figma is straightforward. Go to the 'Layout Grid' section in the right sidebar, click the '+' button to add a grid. Specify the number of columns, rows, gutter spacing, and alignment. Adjust settings for responsive design. Apply the grid to frames for precise and consistent layouts.",
                    videoUrl: "https://gateway.lighthouse.storage/ipfs/QmW5vXRkkLghWD11nbdroecZWJwCUtAtip5ZYwWhEy3ovU",
                    usersCompleted: [],
                  },
                ],
              },
              {
                title: "Section 9",
                lecturesCount: "1",
                totalDuration: "1 Hour",
                lecture: [
                  {
                    title: "Figma wireframe",
                    desc: "A wireframe is a visual blueprint used in design to outline the basic structure and layout of a webpage or app. It represents the skeletal framework of the interface, focusing on placement of elements and content without detailing visual aesthetics. Wireframes aid in conceptualizing and planning the user experience.",
                    videoUrl: "https://gateway.lighthouse.storage/ipfs/QmW5vXRkkLghWD11nbdroecZWJwCUtAtip5ZYwWhEy3ovU",
                    usersCompleted: [],
                  },
                ],
              },
              {
                title: "Section 10",
                lecturesCount: "1",
                totalDuration: "1 Hour",
                lecture: [
                  {
                    title: "Figma prototypes",
                    desc: "Prototypes are early, preliminary versions of products or concepts created to test and validate ideas. They offer a tangible representation of the design and functionality, aiding in refining and improving the final product. Prototyping helps uncover potential issues and gather feedback before full-scale production, saving time and resources.",
                    videoUrl: "https://gateway.lighthouse.storage/ipfs/QmfBSNXQH3uZVHDidPhU9gBVNNAzvjhDGMWwxjcLu5cikR",
                    usersCompleted: [],
                  },
                ],
              },
              {
                title: "Section 11",
                lecturesCount: "1",
                totalDuration: "1 Hour",
                lecture: [
                  {
                    title: "Project 1 wireframe",
                    desc: "A wireframe is a visual blueprint used in design to outline the basic structure and layout of a webpage or app. It represents the skeletal framework of the interface, focusing on placement of elements and content without detailing visual aesthetics. Wireframes aid in conceptualizing and planning the user experience.",
                    videoUrl: "https://gateway.lighthouse.storage/ipfs/Qmefpo3cYdkP7uzDYtFnUAtWRD4v5G7hihRQHfsRFURFHc",
                    usersCompleted: [],
                  },
                ],
              },
              {
                title: "Section 12",
                lecturesCount: "1",
                totalDuration: "1 Hour",
                lecture: [
                  {
                    title: "Project 1 create e commerce website design",
                    desc: "In this video we are creating beautiful e commerce website in figma using wire frame and prototypes. We are using all tools which we learn in previous lecture.",
                    videoUrl: "https://gateway.lighthouse.storage/ipfs/QmTGaRWdSPHSh3AmGdeXbtbUe3EErf3BEAGy2y1z9TYeMM",
                    usersCompleted: [],
                  },
                ],
              },
            ],
          }),
        ]);

      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const addInstructor = async (sig) => {
    try {
      db.signer(async (data) => {
        return {
          h: "eth-personal-sign",
          sig: sig,
        };
      });
      const publicKey = await getPublicKey(sig);
      const res = await db
        .collection("Instructor")
        .create([
          "1010",
          "Preet Patel",
          "Hey, I am Preet Patel. I am UI/UX designer. UI/UX designer is a budding creative force in the dynamic realm of user interface and user experience design. Armed with a fresh perspective and a natural affinity for technology, this young designer possesses a unique ability to bridge the gap between contemporary design trends and the preferences of their generation. With an innate understanding of digital interactions and a passion for crafting seamless user experiences, the teenage UI/UX designer fearlessly explores innovative design concepts, unafraid to challenge conventions and reimagine the ways users engage with technology. Their enthusiasm, combined with a willingness to learn and adapt, propels them to make meaningful contributions to the world of design, promising a future where user-centric digital interfaces thrive under their skillful guidance.",
          " UI/UX designer",
          "https://gateway.lighthouse.storage/ipfs/QmVms5GiVjJ14o3tYwEXrWnuvCzx5QqwkbJaU82WyojexT",
        ]);

      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const getPublicKey = async (sig) => {
    console.log(sig);
    const publicKey65Bytes = ethPersonalSignRecoverPublicKey(sig, "gm wagmi frens");
    // Now it can be used with Polybase
    const publicKey64Bytes = "0x" + publicKey65Bytes.slice(4);
    // const publicKey64Bytes = ethers.utils.recoverPublicKey("gm wagmi frens", sig);
    console.log(publicKey64Bytes);
    return publicKey64Bytes;
  };

  const addCourse = async (sig) => {
    db.signer(async (data) => {
      return {
        h: "eth-personal-sign",
        sig: sig,
      };
    });
    const publicKey = await getPublicKey(sig);
    const res = await db
      .collection("Course")
      .create([
        "1111",
        "Mastering UI/UX Design with Figma: For beginners ",
        "DESIGN",
        db.collection("Instructor").record("1010"),
        "August 5, 2023",
        "20.5",
        "12",
        "https://gateway.lighthouse.storage/ipfs/QmToDciCFsxxcsrr5qJnszYVH1VWLCF5NSeeJsxZ9Xw3N2",
        "Master UI/UX with this amazing course with hands on expirence on figma",
        "All of my courses are 'learn-by-doing': no boring endless lectures with Powerpoints, only live, interactive coding examples. In this course we'll build one massive web application that profiles the advanced features of React, Redux, Express, and Mongo. By putting each concept into a real app, you'll get a better idea of when to use each unique and powerful feature.",
        [
          "Create boilerplate starter projects with React, Redux, Express, and Mongo",
          "Understand common web technologies and design patterns to connect them together",
          "Master deployment techniques between the production and development environments.",
        ],
        ["Basic understanding of Javascript, React, and Redux", "A Mac, Windows, or Linux computer"],
      ]);

    console.log(res);
  };

  const updateCourseId = async (sig) => {
    db.signer(async (data) => {
      return {
        h: "eth-personal-sign",
        sig: sig,
      };
    });
    const publicKey = await getPublicKey(sig);
    const res = await db.collection("Course").record("1010").call("setCourseId", ["1111"]);

    console.log(res);
  };

  const data = [
    {
      title: "Introduction",
      videoUrl: "https://youtu.be/GWUwFDFOipo",
      completed: false,
    },
    {
      title: "Basics",
      videoUrl: "https://youtu.be/jj299iVoKwc",
      completed: false,
    },
    {
      title: "Gettings Started",
      videoUrl: "https://youtu.be/cFRj2-jzm8E",
      completed: false,
    },
  ];

  const addContent = async (sig) => {
    db.signer(async (data) => {
      return {
        h: "eth-personal-sign",
        sig: sig,
      };
    });
    const res = await db
      .collection("Course")
      .record("2222")
      .call("addContent", [JSON.stringify(data)]);
    console.log(res);
  };

  console.log(typeof JSON.stringify(data));

  return (
    <div>
      <button onClick={() => signMessage()}>Click here</button>
    </div>
  );
};

export default PolybaseHook;
