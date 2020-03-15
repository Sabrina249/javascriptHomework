const nameList = [
  {
    name: "Helmut",
    age: "65",
  },
  {
    name: "Klaus",
    age: "60",
  },
  {
    name: "Anna",
    age: "62",
  },
  {
    name: "Rebecca",
    age: "59",
  },
  {
    name: "Anton",
    age: "58",
  },
  {
    name: "Lisbeth",
    age: "63",
  },
  {
    name: "Ruth",
    age: "64",
  },
  {
    name: "Max",
    age: "57",
  },
]
  const newContainerGreen = newDiv => newDiv.classList.add ("container", "mx-auto", "max-w-sm", "rounded", "overflow-hidden", "shadow-lg", "justify-center", "bg-green-500", "m-6")
  const newContainerRed = newDiv => newDiv.classList.add ("container", "mx-auto", "max-w-sm", "rounded", "overflow-hidden", "shadow-lg", "justify-center", "bg-red-600", "m-6")

  const newBlogPost = nameList =>
    `   <div class="px-6 py-4">
           <div class="font-bold text-xl mb-2">${nameList.name}</div>
         </div>
        `;

  // for (let i = 0; i < post.length; i++) {
  //   const newDiv = document.createElement("div");
  //   newDiv.innerHTML = newBlogPost (post[i]);
  //   const firstChildSabrina = newDiv.firstChild;
  //   content.append (firstChildSabrina)
  // }
  // for (let i = 0; i < nameList.length; i++) {
  //   const newDiv = document.createElement("div");
  //   // if (nameList.age >= 65){
  //   newContainerGreen (newDiv);
  //   newDiv.innerHTML = newBlogPost (nameList [i]);
  //   content.append (newDiv)
  // // } else {
  // //   newContainerRed (newDiv);
  // //   newDiv.innerHTML = newBlogPost (nameList [i]);
  // //   content.append (newDiv)
  // //   }
  // }


    for (let i = 0; i < nameList.length; i++) {
    const newDiv = document.createElement("div");
    if (nameList[i].age >= 65){
    newContainerGreen (newDiv);
  } else {
    newContainerRed (newDiv);
    }
    newDiv.innerHTML = newBlogPost (nameList [i]);
    content.append (newDiv)
  }
