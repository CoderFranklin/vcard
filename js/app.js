let data = {
  fullName: "Doug Franklin",
  position: "Software Developer",
  socials: [
    {
      id: "li",
      service: "LinkedIn",
      url: "https://www.linkedin.com/in/douglaslfranklin",
      icon: "fab fa-linkedin",
    },
    {
      id: "tr",
      service: "Twitter",
      url: "https://twitter.com/devourdreamcode",
      icon: "fab fa-twitter",
    },
    {
      id: "gh",
      service: "GitHub",
      url: "http://www.github.com/CoderFranklin",
      icon: "fab fa-github",
    },
    
  ],
};
let cardApp = (data) => {
  let body = document.getElementsByTagName("body")[0],
    root = document.createElement("div"),
    style = document.createElement("style"),
    card = document.createElement("section");
  let html = `
    <div class="card__wrapper">
                    <img src="img/ME.jpg" class="card__user-img">
                    <div class="card__info">
                        <span class="card__name">${data.fullName}</span>
                        <span class="card__title">${data.position}</span>
                    </div>
                    <div class="card__socials">
    `;
  let cssStyles = `
    .card{
        width: 100%;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        backdrop-filter: blur(40px);
        
    }
    .card__wrapper{
        padding: 20px 20px 3rem 20px;
        max-width: 300px;
        width: 300px;
        background: white;
        box-shadow: 0px 0px 62px 0px rgba(0,0,0, .22);
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        box-shadow: 0px 1px 7px 9px rgba(255,36,16,0.74), 0px 1px 7px 9px rgba(214,24,160,0.74); 
        box-shadow: 0px 1px 7px 9px rgba(255,36,16,0.74), 0px 1px 7px 9px rgba(214,24,160,0.74);

    }
    .card__user-img{
        border: 2px solid #2c5eff;
        height: 70px;
        width: 70px;
        margin: 2rem 0 1.5rem;
        border-radius: 50%;
        object-fit: cover;
        object-position: center;
    }
    .card__info{
        margin-bottom: 2rem;
    }
    .card__name{
        text-align: center;
        display: block;
        font-weight: 600;
        font-size: 1.2rem;
        margin-bottom: .5rem;
    }
    .card__title{
        display: block;
        font-size: .7rem;
        text-align: center;
    }
    .card__icon{
        width: 200px;
        padding: 10px;
        border-radius: 3px;
        border: 1px solid #000;
        margin-bottom: .4rem;
        overflow: hidden;
        display: flex;
        /*justify-content: center;*/
        align-items: center;
        transition: background .3s ease-in-out, color .3s ease-in-out;
        cursor: pointer;
    }
    .card__icon-box{
        width: 25px;
        display: inline-block;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .card__icon-title{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
    }
    .card__icon--li{
        color: #0e76a8;
        border: 1px solid #0e76a8;
    }
    .card__icon--li:hover{
        background: #0e76a8;
        color: white;
    }
    .card__icon--tr{
        color: #00acee;
        border: 1px solid #00acee;
    }
    .card__icon--tr:hover{
        background: #00acee;
        color: white;
    }
    .card__icon--gh{
        color: #171515;
        border: 1px solid #800080;
    }
    .card__icon--gh:hover{
        background: #171515;
        color:  #800080;
    `;
  body.prepend(root); //before the card
  root.classList.add("root");
  root.prepend(card);
  //Template lterals are literals delimited with backticks (`), allowing embedded expressions called substitutions.
  root.style.cssText = `
    background: url('img/skyred.jpeg');
    background-size: cover;
    background-position: center;
    `;
  root.prepend(style); // append after the card
  card.classList.add("card");
  style.innerHTML = cssStyles;
  card.innerHTML = html;
  let cardSocials = card.getElementsByClassName("card__socials")[0];
  data.socials.forEach((item, index) => {
    let tempNode = document.createElement("div");
    tempNode.classList.add("card__icon", `card__icon--${item.id}`);
    tempNode.innerHTML = `
        <span class="card__icon-box">
            <i class="${item.icon}"></i>
        </span>
    <span class="card__icon-title" style="cursor:pointer;" onclick="document.location='${item.url}'">${item.service}</span>`;
    cardSocials.append(tempNode);
    console.log(item.url)
  });
};
cardApp(data);
