import React, { useEffect } from "react";
import "../Main/main.scss";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiOutlineClipboardCheck } from "react-icons/hi";

import Aos from "aos";
import "aos/dist/aos.css";

//Data

const Data = [
  {
    id: 1,
    img: "https://images2.alphacoders.com/546/546391.jpg",
    title: "Paris",
    location: "France",
    grade: "CUTURAL RELAX",
    price: "$800",
    description:
      "Venez découvrir la ville des lumières, la tour Eiffel, les Champs-Élysées et bien plus encore !"
  },
  {
    id: 2,
    img:
      "https://images.pexels.com/photos/1388030/pexels-photo-1388030.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    title: "Barcelone",
    location: "Espagne",
    grade: "CUTURAL RELAX",
    price: "$750",
    description:
      "Profitez du soleil, de la plage et de l'architecture unique de Gaudi lors de votre séjour à Barcelone."
  },
  {
    id: 3,
    img: "https://images6.alphacoders.com/521/521628.jpg",
    title: "Bali",
    location: "Indonésie",
    grade: "CUTURAL RELAX",
    price: "$1200",
    description:
      "Détendez-vous sur les plages de sable blanc, découvrez les temples et goûtez la cuisine locale de Bali."
  },
  {
    id: 4,
    img:
      "https://www.pixelstalk.net/wp-content/uploads/images6/New-York-HD-Wallpaper-Free-download.jpg",
    title: "New York",
    location: "États-Unis",
    grade: "CUTURAL RELAX",
    price: "$1500",
    description:
      "Découvrez la ville qui ne dort jamais, visitez la Statue de la Liberté, Times Square et Central Park."
  },

  {
    id: 5,
    img:
      "https://media.istockphoto.com/id/904453184/photo/mt-fuji-and-tokyo-skyline.jpg?b=1&s=170667a&w=0&k=20&c=FA2haF2dEpIAza_ffwBGqHUAp-3WOcqrFcAVH00IZt0=",
    title: "Tokyo",
    location: "Japon",
    grade: "CUTURAL RELAX",
    price: "$2000",
    description:
      "Explorez la ville futuriste de Tokyo, découvrez la culture japonaise et goûtez la nourriture incroyable."
  },

  {
    id: 6,
    img:
      "https://media.istockphoto.com/id/1333035210/photo/sunset-view-of-the-dubai-marina-and-jbr-area-and-the-famous-ferris-wheel-and-golden-sand.jpg?b=1&s=170667a&w=0&k=20&c=cYgbQF26FiE9SvkaFv6dmmZLh1WM7ZG7iuGpzEsZktE=",
    title: "Dubai",
    location: "Émirats arabes unis",
    grade: "CUTURAL RELAX",
    price: "$1800",
    description:
      "Découvrez la ville la plus riche du monde, faites du shopping, visitez le Burj Khalifa et le désert de Dubaï."
  },
  {
    id: 7,
    img:
      "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8UmlvJTIwZGUlMjBKYW5laXJvfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
    title: "Rio de Janeiro",
    location: "Brésil",
    grade: "CUTURAL RELAX",
    price: "$1000",
    description:
      "Découvrez la beauté naturelle de Rio de Janeiro, la plage de Copacabana et le célèbre Christ Rédempteur."
  },
  {
    id: 8,
    img: "https://wallpaperaccess.com/full/1564384.jpg",
    title: "Sydney",
    location: "Australie",
    grade: "CUTURAL RELAX",
    price: "$1800",
    description:
      "Découvrez l'opéra de Sydney, la plage de Bondi et l'harbour bridge lors de votre séjour à Sydney."
  },
  {
    id: 9,
    img:
      "https://media.istockphoto.com/id/1165435852/photo/cancun-beach-with-hotels-and-plam-tree-in-foreground.jpg?b=1&s=170667a&w=0&k=20&c=eefmGzD6A_TToYDdmJsPxXpEFFUqEinnDT1OxyPSnl0=",
    title: "Cancun",
    location: "Mexique",
    grade: "CUTURAL RELAX",
    price: "$1200",
    description:
      "Profitez des plages de sable blanc et des eaux cristallines de Cancun lors de votre séjour dans cette destination paradisiaque."
  }
];

const Main = () => {
  // Créer une animation au scroll
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  //render
  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 data-aos="fade-right" className="title">
          Les destinations les plus visitées
        </h3>
      </div>

      <div className="secContent grid">
        {Data.map(({ id, img, title, location, grade, price, description }) => {
          return (
            <div key={id} data-aos="fade-up" className="singleDestination">
              {/* Retourner un seul id du tableau */}

              <div className="imageDiv">
                <img src={img} alt={title} />
              </div>

              <div className="cardInfo">
                <h4 className="desTitle">{title}</h4>
                <span className="continent flex">
                  <HiOutlineLocationMarker className="icon" />
                  <span className="name">{location}</span>
                </span>

                <div className="fees flex">
                  <div className="grade">
                    <span>
                      {grade}
                      <small>+1</small>
                    </span>
                  </div>

                  <div className="price">
                    <h5>{price}</h5>
                  </div>
                </div>

                <div className="desc">
                  <p>{description}</p>
                </div>

                <button className="btn flex">
                  DETAILS <HiOutlineClipboardCheck className="icon" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Main;
