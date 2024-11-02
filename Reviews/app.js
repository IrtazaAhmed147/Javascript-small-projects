const users = [
    {
      name: "John Smith",
      profession: "Software Engineer",
      review: "Great product, really helped me streamline my workflow!",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3i_qZtrjSgoPCyIOywhlX8MKOzRIaQbKU0A&s"
    },
    {
      name: "Liam Johnson",
      profession: "Graphic Designer",
      review: "Loved the user interface, very intuitive and easy to use.",
      image: "https://judicatewest.com/media/neutral/john-wagner.jpg"
    },
    {
      name: "Michael Brown",
      profession: "Content Writer",
      review: "Amazing experience! Really made my writing process smoother.",
      image: "https://www.jamsadr.com/images/neutrals/person-donald-900x1080.jpg"
    },
    {
      name: "Sarah Davis",
      profession: "Digital Marketer",
      review: "The analytics feature is fantastic, helped me boost my campaign performance.",
      image: "https://engineering.unl.edu/images/staff/Kayla-Person.jpg"
    },
    {
      name: "James Wilson",
      profession: "Product Manager",
      review: "Impressive features and excellent customer support.",
      image: "https://www.judicatewest.com/media/neutral/richard-huver.jpg"
    }
  ];

  let count = 0;

  let name = document.querySelector("#name")
  let desc = document.querySelector("#desc")
  let img = document.querySelector("#img")
  let profession = document.querySelector("#profession")


  updateContent()  
  
  function handleNext() {
    count++
    if (count >= users.length) {
        count = 0
        
    }  
    
    updateContent()
    
}
  function handlePrev() {
      count--
    if (count < 0) {
        count = users.length - 1 
        
    }  
    updateContent()
}

function updateContent() {
    name.innerHTML= users[count].name
    desc.innerHTML= users[count].review
    profession.innerHTML= users[count].profession
    img.src= users[count].image
}